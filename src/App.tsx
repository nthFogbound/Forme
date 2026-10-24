import { useEffect, useMemo, useState, type KeyboardEvent } from "react";

const assetPathPrefix = "/assets";
const imgEverydayTechnologyStillLife = `${assetPathPrefix}/7c3c6.png`;
const imgCategoryProduct = `${assetPathPrefix}/1a9ca.png`;
const imgCategoryProduct1 = `${assetPathPrefix}/ce84b.png`;
const imgCategoryProduct2 = `${assetPathPrefix}/0aacd.png`;
const imgCategoryProduct3 = `${assetPathPrefix}/745a4.png`;
const imgProduct = `${assetPathPrefix}/2d2a2.png`;
const imgProduct1 = `${assetPathPrefix}/b0999.png`;
const imgProduct2 = `${assetPathPrefix}/a1a1c.png`;
const imgProduct3 = `${assetPathPrefix}/46886.png`;
const imgQuietWorkspace = `${assetPathPrefix}/8a59d.png`;
const imgProduct4 = `${assetPathPrefix}/8f66f.png`;
const imgProduct5 = `${assetPathPrefix}/25fc8.png`;
const imgProduct6 = `${assetPathPrefix}/a3684.png`;
const imgProduct7 = `${assetPathPrefix}/6d140.png`;
const imgSearch = `${assetPathPrefix}/e30e9.svg`;
const imgUserRound = `${assetPathPrefix}/b4eb0.svg`;
const imgHeart = `${assetPathPrefix}/4ff0c.svg`;
const imgShoppingBag = `${assetPathPrefix}/991a5.svg`;
const imgArrowRight = `${assetPathPrefix}/c4615.svg`;
const imgCamera = `${assetPathPrefix}/a8096.svg`;
const imgPackageCheck = `${assetPathPrefix}/8135e.svg`;
const imgBadgeCheck = `${assetPathPrefix}/a7052.svg`;
const imgMessagesSquare = `${assetPathPrefix}/aea8c.svg`;
const imgArrowUpRight = `${assetPathPrefix}/8d0f0.svg`;
const imgHeart1 = `${assetPathPrefix}/036e3.svg`;
const imgStar = `${assetPathPrefix}/976b9.svg`;
const imgColorOptions = `${assetPathPrefix}/f48d4.svg`;
const imgPlus = `${assetPathPrefix}/1010f.svg`;
const imgColorOptions1 = `${assetPathPrefix}/8cea2.svg`;
const imgColorOptions2 = `${assetPathPrefix}/4c43d.svg`;
const imgColorOptions3 = `${assetPathPrefix}/6a280.svg`;
const imgArrowRight1 = `${assetPathPrefix}/0775e.svg`;
const imgColorOptions4 = `${assetPathPrefix}/ca37d.svg`;
const imgColorOptions5 = `${assetPathPrefix}/6bf7d.svg`;
const imgColorOptions6 = `${assetPathPrefix}/c4251.svg`;
const imgColorOptions7 = `${assetPathPrefix}/eac21.svg`;
const imgCamera1 = `${assetPathPrefix}/0eaee.svg`;

const searchableProducts = [
  { name: "iPhone 13 Pro", brand: "Apple", category: "Smartphones" },
  { name: "MacBook Pro 14″", brand: "Apple", category: "Laptops" },
  { name: "Galaxy Tab S8", brand: "Samsung", category: "Tablets" },
  { name: "Galaxy S23 Ultra", brand: "Samsung", category: "Smartphones" },
  { name: "AirPods Pro", brand: "Apple", category: "Audio" },
  { name: "BoostCharge Pro 3-in-1", brand: "Belkin", category: "Accessories" },
  { name: "MX Keys Mini", brand: "Logitech", category: "Accessories" },
  { name: "WH-1000XM5", brand: "Sony", category: "Audio" },
];

type HeaderPanel = "account" | "wishlist" | "bag" | null;
type ProductCategory = "all" | "smartphones" | "laptops" | "tablets" | "mobile-accessories" | "audio" | "new-arrivals";

const productCardClass = "content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative";

const categoryPages = {
  smartphones: {
    eyebrow: "CONNECTED, BEAUTIFULLY",
    title: "Smartphones",
    description: "Powerful cameras, thoughtful design and all-day performance—selected for the way you communicate, create and move.",
    hero: imgCategoryProduct,
    products: [
      { brand: "APPLE", name: "iPhone 13 Pro", detail: "128GB · Unlocked · Graphite", price: "$999.00", image: imgProduct },
      { brand: "SAMSUNG", name: "Galaxy S23 Ultra", detail: "256GB · Unlocked · Phantom black", price: "$1,199.00", image: imgProduct3 },
    ],
  },
  laptops: {
    eyebrow: "FOR YOUR NEXT BIG IDEA",
    title: "Laptops",
    description: "Portable performance and beautifully considered hardware for deep work, creative projects and everything between.",
    hero: imgCategoryProduct1,
    products: [
      { brand: "APPLE", name: "MacBook Pro 14″", detail: "M1 Pro · 16GB RAM · 512GB SSD", price: "$1,999.00", image: imgProduct1 },
    ],
  },
  tablets: {
    eyebrow: "POSSIBILITY, IN YOUR HANDS",
    title: "Tablets",
    description: "Flexible screens for sketching, streaming, focused work and lighter days away from your desk.",
    hero: imgCategoryProduct2,
    products: [
      { brand: "SAMSUNG", name: "Galaxy Tab S8", detail: "11″ display · 128GB · Wi-Fi", price: "$699.00", image: imgProduct2 },
    ],
  },
  "mobile-accessories": {
    eyebrow: "THE DETAILS MAKE THE DIFFERENCE",
    title: "Mobile accessories",
    description: "Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.",
    hero: imgCategoryProduct3,
    products: [
      { brand: "BELKIN", name: "BoostCharge Pro 3-in-1", detail: "15W wireless charging · MagSafe", price: "$149.00", image: imgProduct5 },
      { brand: "APPLE", name: "AirPods Pro", detail: "Active noise cancellation · USB-C", price: "$249.00", image: imgProduct4 },
    ],
  },
} as const;

type CategorySlug = keyof typeof categoryPages;

function CategoryPage({
  slug,
  wishlist,
  bag,
  toggleWishlist,
  toggleBag,
}: {
  slug: CategorySlug;
  wishlist: string[];
  bag: string[];
  toggleWishlist: (name: string) => void;
  toggleBag: (name: string) => void;
}) {
  const category = categoryPages[slug];

  return (
    <main className="bg-white min-h-screen text-[#202522]">
      <header className="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <button className="font-['Inter:Semi_Bold'] text-[30px]" onClick={() => window.location.assign("/")} type="button">FORME</button>
        <button className="font-['Inter:Medium'] text-[#245c4d] text-[12px]" onClick={() => window.location.assign("/#categories")} type="button">← All categories</button>
      </header>
      <section className="bg-[#edefe8] grid grid-cols-2 min-h-[480px] max-md:grid-cols-1">
        <div className="flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{category.eyebrow}</p>
          <h1 className="font-['Inter:Medium'] leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{category.title}</h1>
          <p className="font-['Inter:Regular'] leading-[1.7] mt-[22px] max-w-[480px] text-[#717772] text-[15px]">{category.description}</p>
          <button className="bg-[#245c4d] font-['Inter:Medium'] h-[46px] mt-[30px] rounded-[4px] text-[13px] text-white w-[170px]" onClick={() => document.querySelector("#category-products")?.scrollIntoView({ behavior: "smooth" })} type="button">View the selection</button>
        </div>
        <div className="min-h-[360px] relative">
          <img alt={`${category.title} collection`} className="absolute inset-0 object-cover size-full" src={category.hero} />
        </div>
      </section>
      <section className="px-[64px] py-[72px] max-md:px-[24px] max-md:py-[52px]" id="category-products">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">CURATED BY FORME</p>
        <div className="flex items-end justify-between mt-[10px]">
          <h2 className="font-['Inter:Medium'] text-[36px]">Explore {category.title.toLowerCase()}.</h2>
          <p className="font-['Inter:Regular'] text-[#717772] text-[12px]">{category.products.length} {category.products.length === 1 ? "product" : "products"}</p>
        </div>
        <div className="grid gap-[24px] grid-cols-2 mt-[32px] max-w-[900px] max-md:grid-cols-1">
          {category.products.map((product) => (
            <article className="flex flex-col gap-[16px]" key={product.name}>
              <div className="bg-[#f4f5f1] h-[300px] p-[32px] relative rounded-[4px]">
                <img alt={product.name} className="object-cover size-full" src={product.image} />
              </div>
              <p className="font-['Inter:Medium'] text-[#717772] text-[10px]">{product.brand}</p>
              <h2 className="font-['Inter:Medium'] text-[20px]">{product.name}</h2>
              <p className="font-['Inter:Regular'] text-[#717772] text-[12px]">{product.detail}</p>
              <div className="flex items-center justify-between">
                <p className="font-['Inter:Semi_Bold'] text-[18px]">{product.price}</p>
                <button aria-pressed={wishlist.includes(product.name)} className="font-['Inter:Medium'] text-[#245c4d] text-[12px]" onClick={() => toggleWishlist(product.name)} type="button">{wishlist.includes(product.name) ? "Saved" : "Save"}</button>
              </div>
              <button className={`border h-[42px] rounded-[4px] text-[12px] ${bag.includes(product.name) ? "bg-[#245c4d] border-[#245c4d] text-white" : "border-[#245c4d] text-[#245c4d]"}`} onClick={() => toggleBag(product.name)} type="button">{bag.includes(product.name) ? "Remove from bag" : "Add to bag"}</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function FormePremiumTechnologyStorefront() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerPanel, setHeaderPanel] = useState<HeaderPanel>(null);
  const [accountMode, setAccountMode] = useState<"signin" | "create" | null>(null);
  const [accountSubmitted, setAccountSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [wishlist, setWishlist] = useState<string[]>(() => JSON.parse(localStorage.getItem("forme-wishlist") || "[]"));
  const [bag, setBag] = useState<string[]>(() => JSON.parse(localStorage.getItem("forme-bag") || "[]"));
  useEffect(() => localStorage.setItem("forme-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("forme-bag", JSON.stringify(bag)), [bag]);
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return searchableProducts.slice(0, 4);
    return searchableProducts.filter((product) =>
      `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const openPanel = (panel: Exclude<HeaderPanel, null>) => {
    setSearchOpen(false);
    setAccountMode(null);
    setAccountSubmitted(false);
    setHeaderPanel(panel);
  };

  const selectSearchResult = () => {
    setSearchOpen(false);
    document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    const accessories = ["mobile-accessories", "audio", "new-arrivals"].includes(category);
    requestAnimationFrame(() => document.querySelector(accessories ? "#accessories" : "#featured")?.scrollIntoView({ behavior: "smooth" }));
  };

  const productIsVisible = (category: ProductCategory, isNew = false) =>
    activeCategory === "all" || activeCategory === category || (activeCategory === "new-arrivals" && isNew);
  const toggleWishlist = (name: string) => setWishlist((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  const toggleBag = (name: string) => setBag((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  const productControl = (kind: "wishlist" | "bag", name: string) => {
    const active = (kind === "wishlist" ? wishlist : bag).includes(name);
    const activate = () => kind === "wishlist" ? toggleWishlist(name) : toggleBag(name);
    const destination = kind === "wishlist" ? "wishlist" : "bag";
    return {
      "aria-label": `${active ? "Remove" : "Add"} ${name} ${active ? `from ${destination}` : `to ${destination}`}`,
      "aria-pressed": active,
      onClick: activate,
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      },
      role: "button",
      tabIndex: 0,
    };
  };
  const activePanelItems = headerPanel === "wishlist" ? wishlist : bag;

  const categorySlug = window.location.pathname.match(/^\/categories\/([^/]+)\/?$/)?.[1] as CategorySlug | undefined;
  if (categorySlug && categoryPages[categorySlug]) return <CategoryPage bag={bag} slug={categorySlug} toggleBag={toggleBag} toggleWishlist={toggleWishlist} wishlist={wishlist} />;

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2:3" data-name="FORME — Premium technology storefront">
      <div className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full z-40" data-node-id="2:4" data-name="Retail navigation">
        <div className="bg-[#202d27] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2:5" data-name="Store announcement">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="2:6">
            Curated devices, thoughtful essentials and everyday accessories.
          </p>
        </div>
        <div className="bg-white content-stretch flex h-[80px] items-center justify-between overflow-visible px-[64px] relative shrink-0 w-full" data-node-id="2:7" data-name="Main navigation">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[30px] whitespace-nowrap" data-node-id="2:8">
            FORME
          </p>
          <div className="bg-[#f4f5f1] content-stretch flex gap-[12px] h-[40px] items-center px-[16px] relative shrink-0 w-[360px]" data-node-id="2:9" data-name="Product search">
            <div className="relative shrink-0 size-[17px]" data-node-id="2:10" data-name="search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
            </div>
            <input
              aria-label="Search products"
              className="bg-transparent flex-1 font-['Inter:Regular'] outline-none text-[#202522] text-[12px] placeholder:text-[#717772]"
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search devices, brands and essentials"
              type="search"
              value={searchQuery}
            />
            {searchOpen && (
              <div className="absolute bg-white border border-[#dfe3dc] left-0 p-[8px] rounded-[4px] shadow-[0_16px_40px_rgba(32,37,34,0.14)] top-[48px] w-full z-50" role="listbox">
                <p className="font-['Inter:Semi_Bold'] px-[10px] py-[8px] text-[#717772] text-[10px]">PRODUCTS</p>
                {searchResults.length ? searchResults.map((product) => (
                  <button
                    className="flex items-center justify-between px-[10px] py-[10px] text-left transition-colors hover:bg-[#f4f5f1] w-full"
                    key={product.name}
                    onClick={selectSearchResult}
                    role="option"
                    type="button"
                  >
                    <span className="font-['Inter:Medium'] text-[#202522] text-[12px]">{product.name}</span>
                    <span className="font-['Inter:Regular'] text-[#717772] text-[10px]">{product.category}</span>
                  </button>
                )) : (
                  <p className="font-['Inter:Regular'] px-[10px] py-[16px] text-[#717772] text-[12px]">No products found.</p>
                )}
              </div>
            )}
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2:13" data-name="Account actions">
            <button aria-label="Open account menu" className="relative shrink-0 size-[20px]" data-node-id="2:14" data-name="user-round" onClick={() => openPanel("account")} type="button">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUserRound} />
            </button>
            <button aria-label="Open wishlist" className="relative shrink-0 size-[20px]" data-node-id="2:16" data-name="heart" onClick={() => openPanel("wishlist")} type="button">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart} />
            </button>
            <button aria-label="Open shopping bag" className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="2:18" data-name="Shopping bag" onClick={() => openPanel("bag")} type="button">
              <div className="relative shrink-0 size-[20px]" data-node-id="2:19" data-name="shopping-bag">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShoppingBag} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[12px] whitespace-nowrap" data-node-id="2:21">
                Bag ({bag.length})
              </p>
            </button>
          </div>
        </div>
        <div className="border-[#dfe3dc] border-b border-solid border-t content-stretch flex h-[44px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="2:22" data-name="Category navigation">
          <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="2:23" data-name="Shop destinations">
            <button className={`font-['Inter:Semi_Bold'] font-semibold relative shrink-0 ${activeCategory === "all" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:24" onClick={() => navigateToCategory("all")} type="button">
              Shop all
            </button>
            <button className={`font-['Inter:Regular'] font-normal relative shrink-0 ${activeCategory === "smartphones" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:25" onClick={() => navigateToCategory("smartphones")} type="button">
              Smartphones
            </button>
            <button className={`font-['Inter:Regular'] font-normal relative shrink-0 ${activeCategory === "laptops" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:26" onClick={() => navigateToCategory("laptops")} type="button">
              Laptops
            </button>
            <button className={`font-['Inter:Regular'] font-normal relative shrink-0 ${activeCategory === "tablets" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:27" onClick={() => navigateToCategory("tablets")} type="button">
              Tablets
            </button>
            <button className={`font-['Inter:Regular'] font-normal relative shrink-0 ${activeCategory === "mobile-accessories" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:28" onClick={() => navigateToCategory("mobile-accessories")} type="button">
              Mobile accessories
            </button>
            <button className={`font-['Inter:Regular'] font-normal relative shrink-0 ${activeCategory === "audio" ? "text-[#245c4d]" : "text-[#202522]"}`} data-node-id="2:29" onClick={() => navigateToCategory("audio")} type="button">
              Audio
            </button>
          </div>
          <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="2:30" data-name="Editorial destinations">
            <button className={`[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${activeCategory === "new-arrivals" ? "font-semibold text-[#245c4d]" : "text-[#245c4d]"}`} data-node-id="2:31" onClick={() => navigateToCategory("new-arrivals")} type="button">
              New arrivals
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#edefe8] content-stretch flex h-[600px] items-start relative shrink-0 w-full" data-node-id="2:32" data-name="Hero collection">
        <div className="content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip pb-[32px] pl-[64px] pr-[48px] pt-[72px] relative shrink-0 w-[608px]" data-node-id="2:33" data-name="Collection introduction">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="2:34" data-name="Season label">
            <div className="bg-[#245c4d] h-px relative shrink-0 w-[24px]" data-node-id="2:35" data-name="Accent rule" />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[11px] whitespace-nowrap" data-node-id="2:36">
              THE EVERYDAY, ELEVATED
            </p>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#202522] text-[54px] w-[min-content]" data-node-id="2:37">
            <p className="leading-[1.1] mb-0">Good design.</p>
            <p className="leading-[1.1] mb-0">Great technology.</p>
            <p className="leading-[1.1]">Better everyday.</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.65] not-italic relative shrink-0 text-[#717772] text-[15px] w-[408px]" data-node-id="2:38">
            Discover thoughtfully selected devices and essentials. Less noise. More of what matters.
          </p>
          <div className="content-stretch flex items-start overflow-clip pt-[6px] relative shrink-0" data-node-id="2:39" data-name="Hero actions">
            <div className="bg-[#245c4d] border border-[#245c4d] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-node-id="2:40" data-name="Shopping action" role="link" tabIndex={0} onClick={() => document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" }); }}>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2:41">
                Explore the collection
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="2:42" data-name="arrow-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[normal] not-italic overflow-clip pt-[10px] relative shrink-0 text-[#717772] text-[10px] w-full whitespace-nowrap" data-node-id="2:44" data-name="Collection edition">
            <p className="relative shrink-0" data-node-id="2:45">
              CURATED FOR HOW YOU LIVE
            </p>
            <p className="relative shrink-0" data-node-id="2:46">
              01 / 03
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="2:47" data-name="Hero photography">
          <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:48" data-name="Everyday technology still life">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEverydayTechnologyStillLife} />
          </div>
          <div className="absolute bg-white bottom-[28px] content-stretch flex items-center left-[32px] overflow-clip p-[18px] w-[332px]" data-node-id="2:49" data-name="Featured collection note">
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="2:50" data-name="Collection information">
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[10px]" data-node-id="2:51">
                THE ESSENTIAL EDIT
              </p>
              <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[14px]" data-node-id="2:52">
                Built for your everyday rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#dfe3dc] border-b border-solid content-stretch flex gap-[40px] items-start overflow-clip px-[64px] py-[28px] relative shrink-0 w-full" data-node-id="2:53" data-name="Product focus">
        <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:54" data-name="Product focus">
          <div className="relative shrink-0 size-[25px]" data-node-id="2:55" data-name="camera">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCamera} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:57" data-name="Details">
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:58">
              Camera-first devices
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:59">
              Capture life with better detail and clarity.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:60" data-name="Product focus">
          <div className="relative shrink-0 size-[25px]" data-node-id="2:61" data-name="package-check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPackageCheck} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:63" data-name="Details">
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:64">
              All-day battery life
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:65">
              Power through your day without interruption.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:66" data-name="Product focus">
          <div className="relative shrink-0 size-[25px]" data-node-id="2:67" data-name="badge-check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBadgeCheck} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:69" data-name="Details">
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:70">
              Premium materials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:71">
              Thoughtful finishes that feel better in hand.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:72" data-name="Product focus">
          <div className="relative shrink-0 size-[25px]" data-node-id="2:73" data-name="messages-square">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessagesSquare} />
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:75" data-name="Details">
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:76">
              Everyday essentials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:77">
              Accessories that complement your daily routine.
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[56px] pt-[64px] px-[64px] relative shrink-0 w-full" id="categories" data-node-id="2:78" data-name="Category discovery">
        <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:79" data-name="Section heading">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:80" data-name="Heading">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:81">
              FIND YOUR NEXT ESSENTIAL
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:82">
              Technology, in its element.
            </p>
          </div>
          <div className="content-stretch flex items-center overflow-clip pb-[5px] relative shrink-0" data-node-id="2:83" data-name="Browse link" role="link" tabIndex={0} onClick={() => document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" }); }}>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[14px] whitespace-nowrap" data-node-id="2:84">
              Browse all categories
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:85" data-name="Category grid">
          <button className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative text-left" data-node-id="2:86" data-name="Category card" onClick={() => window.location.assign("/categories/smartphones")} type="button">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:87" data-name="Category photography">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:88" data-name="Category product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryProduct} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:89" data-name="Category link">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:90">
                Smartphones
              </p>
              <div className="relative shrink-0 size-[18px]" data-node-id="2:91" data-name="arrow-up-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:93">
              Stay connected, beautifully.
            </p>
          </button>
          <button className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative text-left" data-node-id="2:94" data-name="Category card" onClick={() => window.location.assign("/categories/laptops")} type="button">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:95" data-name="Category photography">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:96" data-name="Category product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryProduct1} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:97" data-name="Category link">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:98">
                Laptops
              </p>
              <div className="relative shrink-0 size-[18px]" data-node-id="2:99" data-name="arrow-up-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:101">
              For your next big idea.
            </p>
          </button>
          <button className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative text-left" data-node-id="2:102" data-name="Category card" onClick={() => window.location.assign("/categories/tablets")} type="button">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:103" data-name="Category photography">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:104" data-name="Category product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryProduct2} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:105" data-name="Category link">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:106">
                Tablets
              </p>
              <div className="relative shrink-0 size-[18px]" data-node-id="2:107" data-name="arrow-up-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:109">
              Possibility, in your hands.
            </p>
          </button>
          <button className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative text-left" data-node-id="2:110" data-name="Category card" onClick={() => window.location.assign("/categories/mobile-accessories")} type="button">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:111" data-name="Category photography">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:112" data-name="Category product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoryProduct3} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:113" data-name="Category link">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:114">
                Mobile accessories
              </p>
              <div className="relative shrink-0 size-[18px]" data-node-id="2:115" data-name="arrow-up-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:117">
              The details make the difference.
            </p>
          </button>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[72px] pt-[16px] px-[64px] relative shrink-0 w-full" id="featured" data-node-id="2:118" data-name="Featured products">
        <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:119" data-name="Section heading">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:120" data-name="Heading">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:121">
              THE FORME SELECTION
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:122">
              Exceptional by design.
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:123" data-name="Product filters">
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="2:124" data-name="Category tabs">
            <div className="bg-[#245c4d] border border-[#245c4d] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:125" data-name="Category filter">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="2:126">
                All devices
              </p>
            </div>
            <div className="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:127" data-name="Category filter">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:128">
                Smartphones
              </p>
            </div>
            <div className="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:129" data-name="Category filter">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:130">
                Laptops
              </p>
            </div>
            <div className="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:131" data-name="Category filter">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:132">
                Tablets
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:133" data-name="Product grid">
          <div className={`${productIsVisible("smartphones") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:134" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:135" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:136" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct} />
              </div>
              <div className="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:137" data-name="Product badge">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:138">
                  OUR PICK
                </p>
              </div>
              <div {...productControl("wishlist", "iPhone 13 Pro")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:139" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:140" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:142" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:143">
                APPLE
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:144">
                iPhone 13 Pro
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:145">
                128GB · Unlocked · Graphite
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:146" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:147" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:149">
                  4.8
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:150">
                  (124 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:151" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:152">
                  $999.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:153" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "iPhone 13 Pro")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:157" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:158" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:160">
                {bag.includes("iPhone 13 Pro") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("laptops") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:161" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:162" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:163" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct1} />
              </div>
              <div className="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:164" data-name="Product badge">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:165">
                  BESTSELLER
                </p>
              </div>
              <div {...productControl("wishlist", "MacBook Pro 14″")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:166" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:167" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:169" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:170">
                APPLE
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:171">
                MacBook Pro 14″
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:172">
                M1 Pro · 16GB RAM · 512GB SSD
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:173" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:174" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:176">
                  4.9
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:177">
                  (86 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:178" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:179">
                  $1,999.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:180" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions1} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "MacBook Pro 14″")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:183" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:184" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:186">
                {bag.includes("MacBook Pro 14″") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("tablets") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:187" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:188" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:189" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct2} />
              </div>
              <div {...productControl("wishlist", "Galaxy Tab S8")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[13.67px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:190" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:191" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:193" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:194">
                SAMSUNG
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:195">
                Galaxy Tab S8
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:196">
                11″ display · 128GB · Wi-Fi
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:197" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:198" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:200">
                  4.7
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:201">
                  (58 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:202" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:203">
                  $699.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:204" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions2} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "Galaxy Tab S8")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:208" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:209" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:211">
                {bag.includes("Galaxy Tab S8") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("smartphones") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:212" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:213" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:214" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct3} />
              </div>
              <div {...productControl("wishlist", "Galaxy S23 Ultra")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:215" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:216" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:218" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:219">
                SAMSUNG
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:220">
                Galaxy S23 Ultra
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:221">
                256GB · Unlocked · Phantom black
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:222" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:223" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:225">
                  4.8
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:226">
                  (92 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:227" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:228">
                  $1,199.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:229" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions3} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "Galaxy S23 Ultra")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:233" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:234" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:236">
                {bag.includes("Galaxy S23 Ultra") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[496px] items-start overflow-clip relative shrink-0 w-full" id="workspace" data-node-id="2:237" data-name="Curated workspace collection">
        <div className="h-full relative shrink-0 w-[816px]" data-node-id="2:238" data-name="Quiet workspace">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuietWorkspace} />
        </div>
        <div className="bg-[#202d27] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px overflow-clip p-[56px] relative" data-node-id="2:239" data-name="Collection story">
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bcc8bf] text-[11px] whitespace-nowrap" data-node-id="2:240">
            THE WORKSPACE EDIT
          </p>
          <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[44px] text-white w-[min-content]" data-node-id="2:241">
            <p className="leading-[1.12] mb-0">Less distraction.</p>
            <p className="leading-[1.12]">More possibility.</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#bcc8bf] text-[14px] w-[min-content]" data-node-id="2:242">
            Create a space that works as beautifully as it looks. Explore devices and small essentials for a more focused day.
          </p>
          <div className="bg-white border border-[#dfe3dc] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-node-id="2:243" data-name="Shopping action" role="link" tabIndex={0} onClick={() => document.querySelector("#accessories")?.scrollIntoView({ behavior: "smooth" })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") document.querySelector("#accessories")?.scrollIntoView({ behavior: "smooth" }); }}>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[14px] whitespace-nowrap" data-node-id="2:244">
              Build your workspace
            </p>
            <div className="relative shrink-0 size-[16px]" data-node-id="2:245" data-name="arrow-right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight1} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bcc8bf] text-[11px] whitespace-nowrap" data-node-id="2:247">
            Laptops · Keyboards · Everyday accessories
          </p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[72px] relative shrink-0 w-full" id="accessories" data-node-id="2:248" data-name="Everyday essentials">
        <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:249" data-name="Section heading">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:250" data-name="Heading">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:251">
              SMALL DETAILS. BIG DIFFERENCE.
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:252">
              Complete your everyday.
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:253" data-name="Accessories grid">
          <div className={`${productIsVisible("audio", true) ? "" : "hidden "} ${productCardClass}`} data-node-id="2:254" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:255" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:256" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct4} />
              </div>
              <div className="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:257" data-name="Product badge">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:258">
                  NEW ARRIVAL
                </p>
              </div>
              <div {...productControl("wishlist", "AirPods Pro")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:259" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:260" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:262" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:263">
                APPLE
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:264">
                AirPods Pro
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:265">
                Active noise cancellation · USB-C
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:266" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:267" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:269">
                  4.8
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:270">
                  (108 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:271" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:272">
                  $249.00
                </p>
                <div className="relative shrink-0 size-[12px]" data-node-id="2:273" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions4} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "AirPods Pro")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:275" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:276" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:278">
                {bag.includes("AirPods Pro") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("mobile-accessories", true) ? "" : "hidden "} ${productCardClass}`} data-node-id="2:279" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:280" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:281" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct5} />
              </div>
              <div className="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:282" data-name="Product badge">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:283">
                  NEW ARRIVAL
                </p>
              </div>
              <div {...productControl("wishlist", "BoostCharge Pro 3-in-1")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:284" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:285" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:287" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:288">
                BELKIN
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:289">
                BoostCharge Pro 3-in-1
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:290">
                15W wireless charging · MagSafe
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:291" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:292" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:294">
                  4.7
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:295">
                  (42 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:296" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:297">
                  $149.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:298" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions5} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "BoostCharge Pro 3-in-1")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:301" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:302" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:304">
                {bag.includes("BoostCharge Pro 3-in-1") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("mobile-accessories") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:305" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:306" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:307" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct6} />
              </div>
              <div {...productControl("wishlist", "MX Keys Mini")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[13.67px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:308" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:309" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:311" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:312">
                LOGITECH
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:313">
                MX Keys Mini
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:314">
                Wireless keyboard · Graphite
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:315" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:316" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:318">
                  4.9
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:319">
                  (67 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:320" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:321">
                  $99.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:322" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions6} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "MX Keys Mini")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:326" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:327" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:329">
                {bag.includes("MX Keys Mini") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
          <div className={`${productIsVisible("audio") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:330" data-name="Product card">
            <div className="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:331" data-name="Product photography">
              <div className="h-[202px] relative shrink-0 w-full" data-node-id="2:332" data-name="Product">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProduct7} />
              </div>
              <div {...productControl("wishlist", "Sony WH-1000XM5")} className="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:333" data-name="Save product">
                <div className="relative shrink-0 size-[17px]" data-node-id="2:334" data-name="heart">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHeart1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:336" data-name="Product details">
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:337">
                SONY
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:338">
                WH-1000XM5
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:339">
                Noise cancelling · 30-hour battery
              </p>
              <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:340" data-name="Reviews">
                <div className="relative shrink-0 size-[12px]" data-node-id="2:341" data-name="star">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:343">
                  4.8
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:344">
                  (96 reviews)
                </p>
              </div>
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:345" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:346">
                  $399.00
                </p>
                <div className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:347" data-name="Color options">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgColorOptions7} />
                </div>
              </div>
            </div>
            <div {...productControl("bag", "Sony WH-1000XM5")} className="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:351" data-name="Add to bag">
              <div className="relative shrink-0 size-[15px]" data-node-id="2:352" data-name="plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:354">
                {bag.includes("Sony WH-1000XM5") ? "Remove from bag" : "Add to bag"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[#f4f5f1] content-stretch flex flex-col gap-[28px] items-center leading-[normal] not-italic overflow-clip px-[64px] py-[36px] relative shrink-0 w-full whitespace-nowrap" data-node-id="2:355" data-name="Selected brands">
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#717772] text-[10px]" data-node-id="2:356">
          THE BRANDS YOU TRUST. THE SELECTION YOU DESERVE.
        </p>
        <div className="content-stretch flex items-center justify-between overflow-clip px-[72px] relative shrink-0 text-[#202522] w-full" data-node-id="2:357" data-name="Brand names">
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:358">
            Apple
          </p>
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[22px]" data-node-id="2:359">
            SAMSUNG
          </p>
          <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[28px]" data-node-id="2:360">
            SONY
          </p>
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:361">
            logitech
          </p>
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:362">
            belkin
          </p>
          <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:363">
            Microsoft
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[24px] pt-[56px] px-[64px] relative shrink-0 w-full" id="footer" data-node-id="2:403" data-name="Store footer">
        <div className="content-stretch flex gap-[72px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:404" data-name="Footer navigation">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[348px]" data-node-id="2:405" data-name="Brand and product focus">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[32px] whitespace-nowrap" data-node-id="2:406">
              FORME
            </p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#717772] text-[13px] w-[280px]" data-node-id="2:407">
              Curated technology for a better everyday.
            </p>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="2:408" data-name="Product focus">
              <div className="relative shrink-0 size-[18px]" data-node-id="2:409" data-name="camera">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCamera1} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:411">
                Explore devices, accessories and everyday essentials.
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:412">
              Smartphones · Laptops · Tablets · Audio · Accessories
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:413" data-name="Navigation group">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:414">
              Explore
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:415">
              Smartphones
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:416">
              Laptops
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:417">
              Tablets
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:418">
              Mobile accessories
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:419">
              Audio
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:420" data-name="Navigation group">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:421">
              Product focus
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:422">
              Camera-first devices
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:423">
              All-day battery life
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:424">
              Premium materials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:425">
              Everyday essentials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:426">
              Workspace accessories
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:427" data-name="Navigation group">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:428">
              Collections
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:429">
              The everyday edit
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:430">
              The workspace edit
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:431">
              Audio essentials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:432">
              New arrivals
            </p>
          </div>
        </div>
        <div className="bg-[#dfe3dc] h-px relative shrink-0 w-full" data-node-id="2:446" data-name="Footer divider" />
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="2:447" data-name="Copyright">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:448">
            © 2026 Forme. All rights reserved.
          </p>
        </div>
      </div>
      {headerPanel && (
        <div className="fixed inset-0 z-[100]" role="presentation">
          <button aria-label="Close panel" className="absolute bg-[rgba(32,37,34,0.38)] inset-0 w-full" onClick={() => setHeaderPanel(null)} type="button" />
          <section aria-labelledby="header-panel-title" aria-modal="true" className="absolute bg-white flex flex-col h-full p-[32px] right-0 shadow-[-16px_0_48px_rgba(32,37,34,0.16)] top-0 w-[min(420px,100vw)]" role="dialog">
            <div className="border-[#dfe3dc] border-b flex items-center justify-between pb-[22px]">
              <div>
                <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[10px]">FORME</p>
                <p className="font-['Inter:Medium'] mt-[6px] text-[#202522] text-[26px]" id="header-panel-title">
                  {headerPanel === "account" ? "Your account" : headerPanel === "wishlist" ? "Your wishlist" : "Your bag"}
                </p>
              </div>
              <button aria-label="Close panel" className="border border-[#dfe3dc] flex items-center justify-center rounded-full size-[36px] text-[#202522] text-[22px]" onClick={() => setHeaderPanel(null)} type="button">×</button>
            </div>
            {headerPanel === "account" ? (
              <div className="flex flex-col gap-[18px] pt-[28px]">
                {accountSubmitted ? (
                  <>
                    <p className="font-['Inter:Medium'] text-[#202522] text-[18px]">Check your inbox</p>
                    <p className="font-['Inter:Regular'] leading-[1.6] text-[#717772] text-[13px]">We’ve prepared the next step for your account. Authentication can now be connected to your Laravel endpoint.</p>
                    <button className="bg-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[13px] text-white" onClick={() => setHeaderPanel(null)} type="button">Done</button>
                  </>
                ) : accountMode ? (
                  <form className="flex flex-col gap-[16px]" onSubmit={(event) => { event.preventDefault(); setAccountSubmitted(true); }}>
                    <button className="font-['Inter:Medium'] self-start text-[#245c4d] text-[12px]" onClick={() => setAccountMode(null)} type="button">← Back</button>
                    <p className="font-['Inter:Regular'] leading-[1.6] text-[#717772] text-[13px]">{accountMode === "signin" ? "Enter your email to continue to your account." : "Start with your email and we’ll create your Forme account."}</p>
                    <label className="font-['Inter:Medium'] text-[#202522] text-[11px]" htmlFor="account-email">Email address</label>
                    <input className="border border-[#dfe3dc] h-[46px] outline-none px-[14px] rounded-[4px] text-[13px] focus:border-[#245c4d]" id="account-email" required type="email" />
                    <button className="bg-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[13px] text-white" type="submit">Continue</button>
                  </form>
                ) : (
                  <>
                    <p className="font-['Inter:Regular'] leading-[1.6] text-[#717772] text-[13px]">Sign in to view orders, manage saved items and make checkout faster.</p>
                    <button className="bg-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[13px] text-white" onClick={() => setAccountMode("signin")} type="button">Sign in</button>
                    <button className="border border-[#245c4d] font-['Inter:Medium'] h-[46px] rounded-[4px] text-[#245c4d] text-[13px]" onClick={() => setAccountMode("create")} type="button">Create an account</button>
                    <button className="font-['Inter:Regular'] text-[#717772] text-[12px]" onClick={() => setHeaderPanel(null)} type="button">Continue as guest</button>
                  </>
                )}
              </div>
            ) : (
              activePanelItems.length ? (
                <div className="flex flex-col gap-[4px] overflow-y-auto pt-[20px]">
                  {activePanelItems.map((name) => (
                    <div className="border-[#dfe3dc] border-b flex items-center justify-between py-[16px]" key={name}>
                      <div>
                        <p className="font-['Inter:Medium'] text-[#202522] text-[14px]">{name}</p>
                        <p className="font-['Inter:Regular'] mt-[4px] text-[#717772] text-[11px]">{headerPanel === "wishlist" ? "Saved item" : "Quantity 1"}</p>
                      </div>
                      <button className="font-['Inter:Medium'] text-[#245c4d] text-[11px]" onClick={() => headerPanel === "wishlist" ? toggleWishlist(name) : toggleBag(name)} type="button">Remove</button>
                    </div>
                  ))}
                  {headerPanel === "wishlist" && <button className="bg-[#245c4d] font-['Inter:Medium'] h-[44px] mt-[20px] rounded-[4px] text-[12px] text-white" onClick={() => activePanelItems.forEach((name) => { if (!bag.includes(name)) toggleBag(name); })} type="button">Add saved items to bag</button>}
                </div>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <div className="bg-[#f4f5f1] flex items-center justify-center rounded-full size-[64px]">
                    <img alt="" className="size-[24px]" src={headerPanel === "wishlist" ? imgHeart : imgShoppingBag} />
                  </div>
                  <p className="font-['Inter:Medium'] mt-[20px] text-[#202522] text-[18px]">{headerPanel === "wishlist" ? "Your wishlist is empty" : "Your bag is empty"}</p>
                  <p className="font-['Inter:Regular'] leading-[1.6] mt-[8px] max-w-[280px] text-[#717772] text-[12px]">Explore the collection and add something considered.</p>
                  <button className="bg-[#245c4d] font-['Inter:Medium'] h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" onClick={() => { setHeaderPanel(null); document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" }); }} type="button">Browse products</button>
                </div>
              )
            )}
          </section>
        </div>
      )}
    </div>
  );
}
