const products = [
  ["iPhone 13 Pro", "Smartphones"],
  ["MacBook Pro 14″", "Laptops"],
  ["Galaxy Tab S8", "Tablets"],
  ["Galaxy S23 Ultra", "Smartphones"],
  ["AirPods Pro", "Audio"],
  ["BoostCharge Pro 3-in-1", "Accessories"],
  ["MX Keys Mini", "Accessories"],
  ["WH-1000XM5", "Audio"],
]

const search = document.querySelector("[data-product-search]")
const results = document.querySelector("[data-search-results]")
const panel = document.querySelector("[data-header-panel]")
const panelTitle = document.querySelector("[data-panel-title]")
const panelContent = document.querySelector("[data-panel-content]")

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
  matches.forEach(([name, category]) => {
    const option = document.createElement("button")
    option.className = "flex items-center justify-between px-[10px] py-[10px] text-left hover:bg-[#f4f5f1] w-full"
    option.type = "button"
    option.innerHTML = `<span class="font-['Inter:Medium'] text-[#202522] text-[12px]">${name}</span><span class="font-['Inter:Regular'] text-[#717772] text-[10px]">${category}</span>`
    option.addEventListener("click", () => {
      results.classList.add("hidden")
      document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })
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
      panelContent.innerHTML = `<form class="flex flex-col gap-[16px] text-left w-full" data-account-form><p class="font-['Inter:Regular'] leading-[1.6] text-[#717772] text-[13px]">Sign in or create an account to manage orders and saved items.</p><label class="font-['Inter:Medium'] text-[#202522] text-[11px]" for="blade-account-email">Email address</label><input class="border border-[#dfe3dc] h-[46px] outline-none px-[14px] rounded-[4px] text-[13px]" id="blade-account-email" required type="email"><button class="bg-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[13px] text-white" type="submit">Continue</button></form>`
      panelContent.querySelector("[data-account-form]")?.addEventListener("submit", (event) => {
        event.preventDefault()
        panelContent.innerHTML = `<p class="font-['Inter:Medium'] text-[#202522] text-[18px]">Check your inbox</p><p class="font-['Inter:Regular'] leading-[1.6] mt-[8px] text-[#717772] text-[13px]">Your account request is ready for the Laravel authentication endpoint.</p>`
      })
    } else {
      const wishlist = type === "wishlist"
      panelContent.innerHTML = `<img alt="" class="bg-[#f4f5f1] p-[20px] rounded-full size-[64px]" src="/assets/${wishlist ? "4ff0c" : "991a5"}.svg"><p class="font-['Inter:Medium'] mt-[20px] text-[#202522] text-[18px]">${wishlist ? "Your wishlist is ready" : "Your bag is empty"}</p><p class="font-['Inter:Regular'] leading-[1.6] mt-[8px] max-w-[280px] text-[#717772] text-[12px]">${wishlist ? "Save products you love and they’ll appear here." : "Explore the collection and add something considered."}</p><button class="bg-[#245c4d] font-['Inter:Medium'] h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" data-browse-products type="button">Browse products</button>`
      panelContent.querySelector("[data-browse-products]")?.addEventListener("click", browseProducts)
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
