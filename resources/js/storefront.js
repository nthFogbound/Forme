const products = [
  ["iPhone 13 Pro", "Smartphones", "iphone-13-pro"],
  ["MacBook Pro 14″", "Laptops", "macbook-pro-14"],
  ["Galaxy Tab S8", "Tablets", "galaxy-tab-s8"],
  ["Galaxy S23 Ultra", "Smartphones", "galaxy-s23-ultra"],
  ["AirPods Pro", "Audio", "airpods-pro"],
  ["BoostCharge Pro 3-in-1", "Accessories", "boostcharge-pro"],
  ["MX Keys Mini", "Accessories", "mx-keys-mini"],
  ["WH-1000XM5", "Audio", "sony-wh-1000xm5"],
  ["Pixel 8 Pro", "Smartphones", "pixel-8-pro"],
  ["Phone (2)", "Smartphones", "nothing-phone-2"],
  ["XPS 13", "Laptops", "dell-xps-13"],
  ["Surface Laptop 5", "Laptops", "surface-laptop-5"],
  ["Laptop 13", "Laptops", "framework-laptop-13"],
  ["iPad Air", "Tablets", "ipad-air"],
  ["Surface Pro 9", "Tablets", "surface-pro-9"],
  ["Tab P12", "Tablets", "lenovo-tab-p12"],
  ["MagSafe Battery Pack", "Accessories", "magsafe-battery-pack"],
  ["735 GaN Charger", "Accessories", "anker-735-charger"],
  ["QuietComfort Ultra", "Audio", "bose-qc-ultra"],
  ["Studio Pro", "Audio", "beats-studio-pro"],
]

const search = document.querySelector("[data-product-search]")
const results = document.querySelector("[data-search-results]")
const panel = document.querySelector("[data-header-panel]")
const panelTitle = document.querySelector("[data-panel-title]")
const panelContent = document.querySelector("[data-panel-content]")
const productNames = new Set([
  ...products.map(([name]) => name),
  ...[
    ...document.querySelectorAll("[data-save-product], [data-add-product]"),
  ].flatMap((control) =>
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
    return Array.isArray(value) &&
      value.every((item) => typeof item === "string" && productNames.has(item))
      ? value
      : []
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
const MAX_BAG_QUANTITY = 99
const readBag = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "{}")
    if (Array.isArray(value)) {
      return Object.fromEntries(
        value
          .filter((name) => typeof name === "string" && productNames.has(name))
          .map((name) => [name, 1]),
      )
    }
    if (!value || typeof value !== "object") return {}
    return Object.fromEntries(
      Object.entries(value).filter(
        ([name, quantity]) =>
          typeof name === "string" &&
          productNames.has(name) &&
          Number.isInteger(quantity) &&
          quantity >= 1 &&
          quantity <= MAX_BAG_QUANTITY,
      ),
    )
  } catch {
    return {}
  }
}
let bagItems = readBag("forme-bag")
let selectedColors = (() => {
  try {
    const value = JSON.parse(localStorage.getItem("forme-colors") || "{}")
    if (!value || typeof value !== "object" || Array.isArray(value)) return {}
    return Object.fromEntries(
      Object.entries(value).filter(
        ([slug, color]) =>
          typeof color === "string" && productColors.get(slug)?.has(color),
      ),
    )
  } catch {
    return {}
  }
})()
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  )

function updateProductControls() {
  writeLocal("forme-wishlist", wishlistItems)
  writeLocal("forme-bag", bagItems)
  document.querySelectorAll("[data-save-product]").forEach((control) => {
    const active = wishlistItems.includes(control.dataset.saveProduct)
    control.setAttribute("aria-pressed", String(active))
    control.setAttribute(
      "aria-label",
      `${active ? "Remove" : "Add"} ${control.dataset.saveProduct} ${
        active ? "from" : "to"
      } wishlist`,
    )
    if (control.matches("button"))
      control.textContent = active ? "Saved" : "Save"
  })
  document.querySelectorAll("[data-add-product]").forEach((control) => {
    const quantity = bagItems[control.dataset.addProduct] || 0
    const active = quantity > 0
    const quantityControl = control
      .closest("[data-bag-quantity-controls]")
      ?.querySelector("[data-bag-quantity-input]")
    const requestedQuantity = Number(quantityControl?.value) || 1
    control.setAttribute("aria-pressed", String(active))
    control.setAttribute(
      "aria-label",
      quantityControl
        ? `Add ${requestedQuantity} ${control.dataset.addProduct} to bag`
        : `${active ? "Remove" : "Add"} ${control.dataset.addProduct} ${
            active ? "from" : "to"
          } bag`,
    )
    const label = control.matches("button")
      ? control
      : control.querySelector("p:last-of-type")
    if (label)
      label.textContent = quantityControl
        ? `Add ${requestedQuantity} to bag`
        : active
          ? "Remove from bag"
          : "Add to bag"
  })
  document.querySelectorAll("[data-bag-count]").forEach((count) => {
    const bagQuantity = Object.values(bagItems).reduce(
      (total, quantity) => total + quantity,
      0,
    )
    count.textContent = `Bag (${bagQuantity})`
  })
}

function wireProductControl(control, key, type) {
  control.setAttribute("role", "button")
  control.tabIndex = 0
  const toggle = () => {
    const name = control.dataset[key]
    if (type === "wishlist") {
      const next = wishlistItems.includes(name)
        ? wishlistItems.filter((item) => item !== name)
        : [...wishlistItems, name]
      wishlistItems = next
    } else {
      const quantityControl = control
        .closest("[data-bag-quantity-controls]")
        ?.querySelector("[data-bag-quantity-input]")
      if (quantityControl) {
        const requestedQuantity =
          Math.min(
            MAX_BAG_QUANTITY,
            Math.max(1, Number.parseInt(quantityControl.value, 10) || 1),
          )
        quantityControl.value = String(requestedQuantity)
        bagItems[name] = Math.min(
          MAX_BAG_QUANTITY,
          (bagItems[name] || 0) + requestedQuantity,
        )
      } else if (bagItems[name]) {
        delete bagItems[name]
      } else {
        bagItems[name] = 1
      }
    }
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

document
  .querySelectorAll("[data-save-product]")
  .forEach((control) => wireProductControl(control, "saveProduct", "wishlist"))
document
  .querySelectorAll("[data-add-product]")
  .forEach((control) => wireProductControl(control, "addProduct", "bag"))
updateProductControls()

document
  .querySelectorAll("[data-bag-quantity-controls]")
  .forEach((controls) => {
    const input = controls.querySelector("[data-bag-quantity-input]")
    if (!input) return
    const clamp = () =>
      Math.min(
        MAX_BAG_QUANTITY,
        Math.max(1, Number.parseInt(input.value, 10) || 1),
      )
    controls.querySelectorAll("[data-bag-quantity-change]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = clamp() + Number(button.dataset.bagQuantityChange)
        input.value = String(
          Math.min(MAX_BAG_QUANTITY, Math.max(1, next)),
        )
        updateProductControls()
      })
    })
    input.addEventListener("change", () => {
      input.value = String(clamp())
      updateProductControls()
    })
  })

document.querySelectorAll("[data-product-color]").forEach((control) => {
  const colors = control.dataset.colors.split("|")
  const buttons = control.querySelectorAll("[data-select-color]")
  const updateColor = () => {
    const selected = selectedColors[control.dataset.productColor] || colors[0]
    control.setAttribute(
      "aria-label",
      `Selected color ${selected}. Choose next color`,
    )
    control.title = `Color: ${selected}`
    buttons.forEach((button) => {
      const active = button.dataset.selectColor === selected
      button.classList.toggle("bg-[#275d78]", active)
      button.classList.toggle("text-white", active)
      button.setAttribute("aria-pressed", String(active))
    })
  }
  const cycle = () => {
    const selected = selectedColors[control.dataset.productColor] || colors[0]
    selectedColors[control.dataset.productColor] =
      colors[(colors.indexOf(selected) + 1) % colors.length]
    writeLocal("forme-colors", selectedColors)
    updateColor()
  }
  if (buttons.length) {
    buttons.forEach((button) =>
      button.addEventListener("click", (event) => {
        event.stopPropagation()
        selectedColors[control.dataset.productColor] =
          button.dataset.selectColor
        writeLocal("forme-colors", selectedColors)
        updateColor()
      }),
    )
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
    if (
      event.key === "Enter" &&
      !event.target.closest("button,[role='button']")
    )
      window.location.assign(card.dataset.productUrl)
  })
})

function browseProducts() {
  panel?.classList.add("hidden")
  document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })
}

function renderResults() {
  if (!search || !results) return
  const query = search.value.trim().toLowerCase()
  const matches = products
    .filter(([name, category]) =>
      `${name} ${category}`.toLowerCase().includes(query),
    )
    .slice(0, 5)
  results.replaceChildren()
  const label = document.createElement("p")
  label.className =
    "font-['DM_Sans'] font-medium px-[10px] py-[8px] text-[#66777f] text-[10px]"
  label.textContent = "PRODUCTS"
  results.append(label)
  if (!matches.length) {
    const empty = document.createElement("p")
    empty.className =
      "font-['DM_Sans'] font-normal px-[10px] py-[16px] text-[#66777f] text-[12px]"
    empty.textContent = "No products found."
    results.append(empty)
  }
  matches.forEach(([name, category, slug]) => {
    const option = document.createElement("button")
    option.className =
      "flex items-center justify-between px-[10px] py-[10px] text-left hover:bg-[#eff5f7] w-full"
    option.type = "button"
    option.innerHTML = `<span class="font-['DM_Sans'] font-medium text-[#1d292f] text-[12px]">${name}</span><span class="font-['DM_Sans'] font-normal text-[#66777f] text-[10px]">${category}</span>`
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
    panelTitle.textContent =
      type === "account"
        ? "Your account"
        : type === "wishlist"
          ? "Your wishlist"
          : "Your bag"
    if (type === "account") {
      panelContent.className =
        "flex flex-1 flex-col items-center justify-center text-center"
      panelContent.innerHTML = `<div class="flex flex-col gap-[16px] text-left w-full"><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[18px]">Accounts are not available yet</p><p class="font-['DM_Sans'] font-normal leading-[1.6] text-[#66777f] text-[13px]">You can still browse and save items on this device.</p><button class="bg-[#275d78] font-['DM_Sans'] font-medium h-[46px] rounded-[4px] text-[13px] text-white" data-close-account type="button">Continue as guest</button></div>`
      panelContent
        .querySelector("[data-close-account]")
        ?.addEventListener("click", () => panel.classList.add("hidden"))
    } else {
      const isWishlist = type === "wishlist"
      if (isWishlist) {
        if (wishlistItems.length) {
          panelContent.className =
            "flex flex-1 flex-col justify-start min-h-0 text-left w-full"
          panelContent.innerHTML = `<div class="flex flex-1 flex-col min-h-0 w-full"><div class="flex-1 overflow-y-auto text-left w-full">${wishlistItems.map((name) => `<div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[12px] py-[16px]"><div class="min-w-0"><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[14px]">${escapeHtml(name)}</p><p class="font-['DM_Sans'] font-normal mt-[4px] text-[#66777f] text-[11px]">Saved item</p></div><div class="flex shrink-0 items-center gap-[12px]"><button class="font-['DM_Sans'] font-medium text-[#275d78] text-[11px]" data-move-wishlist-item="${escapeHtml(name)}" type="button">Move to bag</button><button class="font-['DM_Sans'] font-medium text-[#66777f] text-[11px]" data-remove-item="${escapeHtml(name)}" type="button">Remove</button></div></div>`).join("")}</div></div>`
          panelContent.querySelectorAll("[data-remove-item]").forEach((button) =>
            button.addEventListener("click", () => {
              wishlistItems = wishlistItems.filter(
                (item) => item !== button.dataset.removeItem,
              )
              updateProductControls()
              trigger.click()
            }),
          )
          panelContent
            .querySelectorAll("[data-move-wishlist-item]")
            .forEach((button) =>
              button.addEventListener("click", () => {
                const name = button.dataset.moveWishlistItem
                bagItems[name] = Math.min(
                  MAX_BAG_QUANTITY,
                  (bagItems[name] || 0) + 1,
                )
                wishlistItems = wishlistItems.filter((item) => item !== name)
                updateProductControls()
                trigger.click()
              }),
            )
        } else {
            panelContent.className =
              "flex flex-1 flex-col items-center justify-center text-center"
          panelContent.innerHTML = `<img alt="" class="bg-[#eff5f7] p-[20px] rounded-full size-[64px]" src="/assets/4ff0c.svg"><p class="font-['DM_Sans'] font-medium mt-[20px] text-[#1d292f] text-[18px]">Your wishlist is empty</p><p class="font-['DM_Sans'] font-normal leading-[1.6] mt-[8px] max-w-[280px] text-[#66777f] text-[12px]">Explore the collection and add something considered.</p><button class="bg-[#275d78] font-['DM_Sans'] font-medium h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" data-browse-products type="button">Browse products</button>`
          panelContent
            .querySelector("[data-browse-products]")
            ?.addEventListener("click", browseProducts)
        }
      } else {
        panelContent.className =
          "flex flex-1 flex-col min-h-0 text-left w-full"
        const entries = Object.entries(bagItems)
        if (entries.length) {
          const prices = new Map(
            [...document.querySelectorAll("[data-catalog-item][data-price]")].map(
              (item) => [
                item.dataset.productName,
                Number(item.dataset.price),
              ],
            ),
          )
          const bagQuantity = entries.reduce(
            (total, [, quantity]) => total + quantity,
            0,
          )
          const subtotal = entries.reduce(
            (total, [name, quantity]) =>
              total + (prices.get(name) || 0) * quantity,
            0,
          )
          const currency = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          })
          panelContent.innerHTML = `<div class="flex flex-1 flex-col min-h-0 w-full"><div class="overflow-y-auto pr-[2px]">${entries.map(([name, quantity]) => `<div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[12px] py-[16px]"><div class="min-w-0"><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[14px]">${escapeHtml(name)}</p><p class="font-['DM_Sans'] font-normal mt-[4px] text-[#66777f] text-[11px]">${prices.has(name) ? currency.format(prices.get(name) * quantity) : "Quantity"}</p></div><div class="flex shrink-0 items-center gap-[8px]"><div class="border border-[#d5e1e5] flex h-[38px] items-center rounded-[4px]" aria-label="Quantity for ${escapeHtml(name)}"><button class="flex size-[36px] items-center justify-center text-[#275d78]" data-panel-bag-decrease="${escapeHtml(name)}" type="button" aria-label="Decrease ${escapeHtml(name)} quantity">−</button><input class="w-[38px] border-x border-[#d5e1e5] bg-white text-center font-['DM_Sans'] font-medium text-[12px] outline-none" data-panel-bag-quantity="${escapeHtml(name)}" type="number" min="1" max="99" value="${quantity}" aria-label="${escapeHtml(name)} quantity"><button class="flex size-[36px] items-center justify-center text-[#275d78]" data-panel-bag-increase="${escapeHtml(name)}" type="button" aria-label="Increase ${escapeHtml(name)} quantity">+</button></div><button class="font-['DM_Sans'] font-medium text-[#66777f] text-[10px]" data-remove-item="${escapeHtml(name)}" type="button">Remove</button></div></div>`).join("")}</div><div class="border-[#d5e1e5] border-t mt-auto pt-[20px]"><div class="flex items-center justify-between"><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[14px]">${bagQuantity} ${bagQuantity === 1 ? "item" : "items"}</p><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[18px]">${subtotal ? currency.format(subtotal) : "Bag total"}</p></div><a class="bg-[#275d78] flex h-[46px] items-center justify-center mt-[16px] rounded-[4px] text-[13px] text-white w-full" href="/checkout">Continue to checkout</a></div></div>`

          panelContent
            .querySelectorAll("[data-panel-bag-decrease]")
            .forEach((button) =>
              button.addEventListener("click", () => {
                const name = button.dataset.panelBagDecrease
                const next = (bagItems[name] || 1) - 1
                if (next < 1) delete bagItems[name]
                else bagItems[name] = next
                updateProductControls()
                trigger.click()
              }),
            )
          panelContent
            .querySelectorAll("[data-panel-bag-increase]")
            .forEach((button) =>
              button.addEventListener("click", () => {
                const name = button.dataset.panelBagIncrease
                bagItems[name] = Math.min(
                  MAX_BAG_QUANTITY,
                  (bagItems[name] || 1) + 1,
                )
                updateProductControls()
                trigger.click()
              }),
            )
          panelContent
            .querySelectorAll("[data-panel-bag-quantity]")
            .forEach((input) =>
              input.addEventListener("change", () => {
                const name = input.dataset.panelBagQuantity
                const next = Math.min(
                  MAX_BAG_QUANTITY,
                  Math.max(1, Number.parseInt(input.value, 10) || 1),
                )
                bagItems[name] = next
                updateProductControls()
                trigger.click()
              }),
            )
          panelContent.querySelectorAll("[data-remove-item]").forEach((button) =>
            button.addEventListener("click", () => {
              delete bagItems[button.dataset.removeItem]
              updateProductControls()
              trigger.click()
            }),
          )
        } else {
          panelContent.className =
            "flex flex-1 flex-col items-center justify-center text-center"
          panelContent.innerHTML = `<img alt="" class="bg-[#eff5f7] p-[20px] rounded-full size-[64px]" src="/assets/991a5.svg"><p class="font-['DM_Sans'] font-medium mt-[20px] text-[#1d292f] text-[18px]">Your bag is empty</p><p class="font-['DM_Sans'] font-normal leading-[1.6] mt-[8px] max-w-[280px] text-[#66777f] text-[12px]">Explore the collection and add something considered.</p><button class="bg-[#275d78] font-['DM_Sans'] font-medium h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" data-browse-products type="button">Browse products</button>`
          panelContent
            .querySelector("[data-browse-products]")
            ?.addEventListener("click", browseProducts)
        }
      }
    }
    results?.classList.add("hidden")
    panel.classList.remove("hidden")
  })
})

document
  .querySelectorAll("[data-close-panel]")
  .forEach((button) =>
    button.addEventListener("click", () => panel?.classList.add("hidden")),
  )
document
  .querySelectorAll("[data-scroll-target]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      document
        .querySelector(button.dataset.scrollTarget)
        ?.scrollIntoView({ behavior: "smooth" }),
    ),
  )
document.querySelectorAll("[data-nav-category]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.navCategory
    document.querySelectorAll("[data-nav-category]").forEach((item) => {
      item.classList.toggle("text-[#275d78]", item === button)
      item.classList.toggle("font-semibold", item === button)
      item.classList.toggle("text-[#1d292f]", item !== button)
    })
    document.querySelector(`[data-selection-category="${category}"]`)?.click()
    const accessories = [
      "mobile-accessories",
      "audio",
      "new-arrivals",
    ].includes(category)
    document
      .querySelector(accessories ? "#accessories" : "#featured")
      ?.scrollIntoView({ behavior: "smooth" })
  })
})
function setupCatalog(section) {
  const brandControl = section.querySelector("[data-catalog-brand]")
  const priceControl = section.querySelector("[data-catalog-price]")
  const sortControl = section.querySelector("[data-catalog-sort]")
  const count = section.querySelector("[data-catalog-count]")
  const empty = section.querySelector("[data-catalog-empty]")
  const clear = section.querySelector("[data-catalog-clear]")
  const categoryControls = [
    ...section.querySelectorAll("[data-selection-category]"),
  ]
  const grids = [...section.querySelectorAll("[data-catalog-grid]")]
  if (!brandControl || !priceControl || !sortControl || !grids.length) return

  const activeGrid = () =>
    grids.find((grid) => !grid.classList.contains("hidden")) || grids[0]
  const itemsFor = (grid) => [
    ...grid.querySelectorAll(":scope > [data-catalog-item]"),
  ]
  const syncBrands = () => {
    const brands = [
      ...new Set(itemsFor(activeGrid()).map((item) => item.dataset.brand)),
    ].sort()
    const selected = brandControl.value
    brandControl.replaceChildren(
      new Option("All brands", "all"),
      ...brands.map((brand) => new Option(brand, brand)),
    )
    brandControl.value = brands.includes(selected) ? selected : "all"
  }
  const matchesPrice = (amount, filter) =>
    filter === "all" ||
    (filter === "under-250" && amount < 250) ||
    (filter === "250-999" && amount >= 250 && amount < 1000) ||
    (filter === "1000-plus" && amount >= 1000)
  const apply = () => {
    const grid = activeGrid()
    const items = itemsFor(grid)
    const sort = sortControl.value
    items.sort((a, b) => {
      if (sort === "price-asc")
        return Number(a.dataset.price) - Number(b.dataset.price)
      if (sort === "price-desc")
        return Number(b.dataset.price) - Number(a.dataset.price)
      if (sort === "name-asc")
        return a.dataset.productName.localeCompare(b.dataset.productName)
      return Number(a.dataset.catalogOrder) - Number(b.dataset.catalogOrder)
    })
    items.forEach((item) => grid.append(item))
    let visible = 0
    items.forEach((item) => {
      const show =
        (brandControl.value === "all" ||
          item.dataset.brand === brandControl.value) &&
        matchesPrice(Number(item.dataset.price), priceControl.value)
      item.classList.toggle("hidden", !show)
      if (show) visible += 1
    })
    if (count)
      count.textContent = `${visible} ${visible === 1 ? "product" : "products"}`
    empty?.classList.toggle("hidden", visible !== 0)
  }

  categoryControls.forEach((button) => {
    button.addEventListener("click", () => {
      categoryControls.forEach((item) => {
        const active = item === button
        item.setAttribute("aria-pressed", String(active))
        item.classList.toggle("bg-[#275d78]", active)
        item.classList.toggle("border-[#275d78]", active)
        item.classList.toggle("text-white", active)
        item.classList.toggle("bg-white", !active)
        item.classList.toggle("border-[#d5e1e5]", !active)
        item.classList.toggle("text-[#66777f]", !active)
      })
      grids.forEach((grid) => {
        const visible =
          grid.dataset.selectionGrid === button.dataset.selectionCategory
        grid.classList.toggle("hidden", !visible)
        grid.classList.toggle("grid", visible)
      })
      brandControl.value = "all"
      syncBrands()
      apply()
    })
  })
  brandControl.addEventListener("change", apply)
  priceControl.addEventListener("change", apply)
  sortControl.addEventListener("change", apply)
  clear?.addEventListener("click", () => {
    brandControl.value = "all"
    priceControl.value = "all"
    sortControl.value = "featured"
    apply()
  })
  syncBrands()
  apply()
}

document.querySelectorAll("[data-catalog]").forEach(setupCatalog)

const checkout = document.querySelector("[data-checkout]")
if (checkout) {
  const catalogPrices = window.formeCatalogPrices || {}
  const entries = Object.entries(bagItems)
  const cartInput = checkout.querySelector("[data-checkout-cart]")
  const itemsContainer = checkout.querySelector("[data-checkout-items]")
  const totalElement = checkout.querySelector("[data-checkout-total]")
  const submitButton = checkout.querySelector("[data-checkout-submit]")
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  if (cartInput) {
    cartInput.value = JSON.stringify(bagItems)
  }

  if (itemsContainer) {
    if (!entries.length) {
      itemsContainer.innerHTML =
        '<p class="py-[18px] font-[\'DM_Sans\'] text-[#66777f] text-[12px]">Your bag is empty.</p>'
      submitButton?.setAttribute("disabled", "")
    } else {
      let total = 0
      itemsContainer.innerHTML = entries
        .map(([name, quantity]) => {
          const price = Number(catalogPrices[name] || 0)
          const lineTotal = price * quantity
          total += lineTotal
          return `<div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[16px] py-[14px]"><div class="min-w-0"><p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[13px]">${escapeHtml(name)}</p><p class="mt-[4px] font-['DM_Sans'] text-[#66777f] text-[10px]">Qty ${quantity}</p></div><p class="shrink-0 font-['DM_Sans'] font-medium text-[12px]">${currency.format(lineTotal)}</p></div>`
        })
        .join("")
      if (totalElement) totalElement.textContent = currency.format(total)
    }
  }
}

if (document.querySelector("[data-checkout-success]")) {
  localStorage.removeItem("forme-bag")
  bagItems = {}
  updateProductControls()
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    results?.classList.add("hidden")
    panel?.classList.add("hidden")
  }
})
