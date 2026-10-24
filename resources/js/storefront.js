const products = [
  ["iPhone 13 Pro", "Smartphones", "iphone-13-pro"],
  ["MacBook Pro 14″", "Laptops", "macbook-pro-14"],
  ["Galaxy Tab S8", "Tablets", "galaxy-tab-s8"],
  ["Galaxy S23 Ultra", "Smartphones", "galaxy-s23-ultra"],
  ["AirPods Pro", "Audio", "airpods-pro"],
  ["BoostCharge Pro 3-in-1", "Accessories", "boostcharge-pro"],
  ["MX Keys Mini", "Accessories", "mx-keys-mini"],
  ["WH-1000XM5", "Audio", "sony-wh-1000xm5"],
]

const search = document.querySelector("[data-product-search]")
const results = document.querySelector("[data-search-results]")
const panel = document.querySelector("[data-header-panel]")
const panelTitle = document.querySelector("[data-panel-title]")
const panelContent = document.querySelector("[data-panel-content]")
const productNames = new Set([
  ...products.map(([name]) => name),
  ...[...document.querySelectorAll("[data-save-product], [data-add-product]")].flatMap((control) =>
    [control.dataset.saveProduct, control.dataset.addProduct].filter(Boolean),
  ),
])
const productColors = new Map(
  [...document.querySelectorAll("[data-product-color]")].map((control) => [
    control.dataset.productColor,
    new Set((control.dataset.colors || "").split("|").filter(Boolean)),
  ]),
)
const readList = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]")
    return Array.isArray(value) && value.every((item) => typeof item === "string" && productNames.has(item)) ? value : []
  } catch {
    return []
  }
}
const writeLocal = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Keep the current in-memory state when storage is unavailable.
  }
}
let wishlistItems = readList("forme-wishlist")
let bagItems = readList("forme-bag")
let selectedColors = (() => {
  try {
    const value = JSON.parse(localStorage.getItem("forme-colors") || "{}")
    if (!value || typeof value !== "object" || Array.isArray(value)) return {}
    return Object.fromEntries(
      Object.entries(value).filter(([slug, color]) =>
        typeof color === "string" && productColors.get(slug)?.has(color),
      ),
    )
  } catch {
    return {}
  }
})()
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character])

function updateProductControls() {
  writeLocal("forme-wishlist", wishlistItems)
  writeLocal("forme-bag", bagItems)
  document.querySelectorAll("[data-save-product]").forEach((control) => {
    const active = wishlistItems.includes(control.dataset.saveProduct)
    control.setAttribute("aria-pressed", String(active))
    control.setAttribute("aria-label", `${active ? "Remove" : "Add"} ${control.dataset.saveProduct} ${active ? "from" : "to"} wishlist`)
    control.classList.toggle("bg-[#edefe8]", active)
    if (control.matches("button")) control.textContent = active ? "Saved" : "Save"
  })
  document.querySelectorAll("[data-add-product]").forEach((control) => {
    const active = bagItems.includes(control.dataset.addProduct)
    control.setAttribute("aria-pressed", String(active))
    control.setAttribute("aria-label", `${active ? "Remove" : "Add"} ${control.dataset.addProduct} ${active ? "from" : "to"} bag`)
    const label = control.matches("button") ? control : control.querySelector("p:last-of-type")
    if (label) label.textContent = active ? "Remove from bag" : "Add to bag"
  })
  document.querySelectorAll("[data-bag-count]").forEach((count) => { count.textContent = `Bag (${bagItems.length})` })
}

function wireProductControl(control, key, type) {
  control.setAttribute("role", "button")
  control.tabIndex = 0
  const toggle = () => {
    const list = type === "wishlist" ? wishlistItems : bagItems
    const name = control.dataset[key]
    const next = list.includes(name) ? list.filter((item) => item !== name) : [...list, name]
    if (type === "wishlist") wishlistItems = next
    else bagItems = next
    updateProductControls()
  }
  control.addEventListener("click", toggle)
  control.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggle()
    }
  })
}

document.querySelectorAll("[data-save-product]").forEach((control) => wireProductControl(control, "saveProduct", "wishlist"))
document.querySelectorAll("[data-add-product]").forEach((control) => wireProductControl(control, "addProduct", "bag"))
updateProductControls()

document.querySelectorAll("[data-product-color]").forEach((control) => {
  const colors = control.dataset.colors.split("|")
  const buttons = control.querySelectorAll("[data-select-color]")
  const updateColor = () => {
    const selected = selectedColors[control.dataset.productColor] || colors[0]
    control.setAttribute("aria-label", `Selected color ${selected}. Choose next color`)
    control.title = `Color: ${selected}`
    buttons.forEach((button) => {
      const active = button.dataset.selectColor === selected
      button.classList.toggle("bg-[#245c4d]", active)
      button.classList.toggle("text-white", active)
      button.setAttribute("aria-pressed", String(active))
    })
  }
  const cycle = () => {
    const selected = selectedColors[control.dataset.productColor] || colors[0]
    selectedColors[control.dataset.productColor] = colors[(colors.indexOf(selected) + 1) % colors.length]
    writeLocal("forme-colors", selectedColors)
    updateColor()
  }
  if (buttons.length) {
    buttons.forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation()
      selectedColors[control.dataset.productColor] = button.dataset.selectColor
      writeLocal("forme-colors", selectedColors)
      updateColor()
    }))
  } else {
    control.setAttribute("role", "button")
    control.tabIndex = 0
    control.addEventListener("click", (event) => {
      event.stopPropagation()
      cycle()
    })
    control.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        event.stopPropagation()
        cycle()
      }
    })
  }
  updateColor()
})

document.querySelectorAll("[data-product-url]").forEach((card) => {
  card.setAttribute("role", "link")
  card.tabIndex = 0
  card.addEventListener("click", (event) => {
    if (event.target.closest("button,[role='button']")) return
    window.location.assign(card.dataset.productUrl)
  })
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.target.closest("button,[role='button']")) window.location.assign(card.dataset.productUrl)
  })
})

function browseProducts() {
  panel?.classList.add("hidden")
  document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })
}

function renderResults() {
  if (!search || !results) return
  const query = search.value.trim().toLowerCase()
  const matches = products.filter(([name, category]) => `${name} ${category}`.toLowerCase().includes(query)).slice(0, 5)
  results.replaceChildren()
  const label = document.createElement("p")
  label.className = "font-['Inter:Semi_Bold'] px-[10px] py-[8px] text-[#717772] text-[10px]"
  label.textContent = "PRODUCTS"
  results.append(label)
  if (!matches.length) {
    const empty = document.createElement("p")
    empty.className = "font-['Inter:Regular'] px-[10px] py-[16px] text-[#717772] text-[12px]"
    empty.textContent = "No products found."
    results.append(empty)
  }
  matches.forEach(([name, category, slug]) => {
    const option = document.createElement("button")
    option.className = "flex items-center justify-between px-[10px] py-[10px] text-left hover:bg-[#f4f5f1] w-full"
    option.type = "button"
    option.innerHTML = `<span class="font-['Inter:Medium'] text-[#202522] text-[12px]">${name}</span><span class="font-['Inter:Regular'] text-[#717772] text-[10px]">${category}</span>`
    option.addEventListener("click", () => {
      window.location.assign(`/products/${slug}`)
    })
    results.append(option)
  })
  results.classList.remove("hidden")
}

search?.addEventListener("focus", renderResults)
search?.addEventListener("input", renderResults)

document.querySelectorAll("[data-open-panel]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const type = trigger.dataset.openPanel
    if (!panel || !panelTitle || !panelContent) return
    panelTitle.textContent = type === "account" ? "Your account" : type === "wishlist" ? "Your wishlist" : "Your bag"
    if (type === "account") {
      panelContent.innerHTML = `<div class="flex flex-col gap-[16px] text-left w-full"><p class="font-['Inter:Medium'] text-[#202522] text-[18px]">Accounts are not available yet</p><p class="font-['Inter:Regular'] leading-[1.6] text-[#717772] text-[13px]">You can still browse and save items on this device.</p><button class="bg-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[13px] text-white" data-close-account type="button">Continue as guest</button></div>`
      panelContent.querySelector("[data-close-account]")?.addEventListener("click", () => panel.classList.add("hidden"))
    } else {
      const isWishlist = type === "wishlist"
      const items = isWishlist ? wishlistItems : bagItems
      if (items.length) {
        panelContent.innerHTML = `<div class="flex flex-col overflow-y-auto text-left w-full">${items.map((name) => `<div class="border-[#dfe3dc] border-b flex items-center justify-between py-[16px]"><div><p class="font-['Inter:Medium'] text-[#202522] text-[14px]">${escapeHtml(name)}</p><p class="font-['Inter:Regular'] mt-[4px] text-[#717772] text-[11px]">${isWishlist ? "Saved item" : "Quantity 1"}</p></div><button class="font-['Inter:Medium'] text-[#245c4d] text-[11px]" data-remove-item="${escapeHtml(name)}" type="button">Remove</button></div>`).join("")}</div>`
        panelContent.querySelectorAll("[data-remove-item]").forEach((button) => button.addEventListener("click", () => {
          if (isWishlist) wishlistItems = wishlistItems.filter((item) => item !== button.dataset.removeItem)
          else bagItems = bagItems.filter((item) => item !== button.dataset.removeItem)
          updateProductControls()
          trigger.click()
        }))
      } else {
        panelContent.innerHTML = `<img alt="" class="bg-[#f4f5f1] p-[20px] rounded-full size-[64px]" src="/assets/${isWishlist ? "4ff0c" : "991a5"}.svg"><p class="font-['Inter:Medium'] mt-[20px] text-[#202522] text-[18px]">${isWishlist ? "Your wishlist is empty" : "Your bag is empty"}</p><p class="font-['Inter:Regular'] leading-[1.6] mt-[8px] max-w-[280px] text-[#717772] text-[12px]">Explore the collection and add something considered.</p><button class="bg-[#245c4d] font-['Inter:Medium'] h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" data-browse-products type="button">Browse products</button>`
        panelContent.querySelector("[data-browse-products]")?.addEventListener("click", browseProducts)
      }
    }
    results?.classList.add("hidden")
    panel.classList.remove("hidden")
  })
})

document.querySelectorAll("[data-close-panel]").forEach((button) => button.addEventListener("click", () => panel?.classList.add("hidden")))
document.querySelectorAll("[data-scroll-target]").forEach((button) => button.addEventListener("click", () => document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" })))
document.querySelectorAll("[data-nav-category]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.navCategory
    document.querySelectorAll("[data-nav-category]").forEach((item) => {
      item.classList.toggle("text-[#245c4d]", item === button)
      item.classList.toggle("font-semibold", item === button)
      item.classList.toggle("text-[#202522]", item !== button)
    })
    document.querySelectorAll("[data-product-category]").forEach((card) => {
      const visible = category === "all" || card.dataset.productCategory === category || (category === "new-arrivals" && card.hasAttribute("data-new-arrival"))
      card.classList.toggle("hidden", !visible)
    })
    const accessories = ["mobile-accessories", "audio", "new-arrivals"].includes(category)
    document.querySelector(accessories ? "#accessories" : "#featured")?.scrollIntoView({ behavior: "smooth" })
  })
})
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    results?.classList.add("hidden")
    panel?.classList.add("hidden")
  }
})
