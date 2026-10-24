import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";

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
const searchResultsId = "product-search-results";

const searchableProducts = [
  { slug: "iphone-13-pro", name: "iPhone 13 Pro", brand: "Apple", category: "Smartphones", collection: "Everyday elevated", keywords: "phone mobile ios camera unlocked" },
  { slug: "macbook-pro-14", name: "MacBook Pro 14″", brand: "Apple", category: "Laptops", collection: "Workspace edit", keywords: "notebook computer mac m1 pro" },
  { slug: "galaxy-tab-s8", name: "Galaxy Tab S8", brand: "Samsung", category: "Tablets", collection: "Everyday elevated", keywords: "tablet android wifi display" },
  { slug: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", brand: "Samsung", category: "Smartphones", collection: "Everyday elevated", keywords: "phone mobile android camera unlocked" },
  { slug: "airpods-pro", name: "AirPods Pro", brand: "Apple", category: "Audio", collection: "Everyday essentials", keywords: "earbuds headphones wireless noise cancellation" },
  { slug: "boostcharge-pro", name: "BoostCharge Pro 3-in-1", brand: "Belkin", category: "Accessories", collection: "Everyday essentials", keywords: "charger charging wireless magsafe mobile accessory" },
  { slug: "mx-keys-mini", name: "MX Keys Mini", brand: "Logitech", category: "Accessories", collection: "Workspace edit", keywords: "keyboard wireless computer laptop accessory" },
  { slug: "sony-wh-1000xm5", name: "Sony WH-1000XM5", brand: "Sony", category: "Audio", collection: "Workspace edit", keywords: "headphones wireless noise cancelling battery" },
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
      { slug: "iphone-13-pro", brand: "APPLE", name: "iPhone 13 Pro", detail: "128GB · Unlocked · Graphite", price: "$999.00", image: imgProduct },
      { slug: "galaxy-s23-ultra", brand: "SAMSUNG", name: "Galaxy S23 Ultra", detail: "256GB · Unlocked · Phantom black", price: "$1,199.00", image: imgProduct3 },
    ],
  },
  laptops: {
    eyebrow: "FOR YOUR NEXT BIG IDEA",
    title: "Laptops",
    description: "Portable performance and beautifully considered hardware for deep work, creative projects and everything between.",
    hero: imgCategoryProduct1,
    products: [
      { slug: "macbook-pro-14", brand: "APPLE", name: "MacBook Pro 14″", detail: "M1 Pro · 16GB RAM · 512GB SSD", price: "$1,999.00", image: imgProduct1 },
    ],
  },
  tablets: {
    eyebrow: "POSSIBILITY, IN YOUR HANDS",
    title: "Tablets",
    description: "Flexible screens for sketching, streaming, focused work and lighter days away from your desk.",
    hero: imgCategoryProduct2,
    products: [
      { slug: "galaxy-tab-s8", brand: "SAMSUNG", name: "Galaxy Tab S8", detail: "11″ display · 128GB · Wi-Fi", price: "$699.00", image: imgProduct2 },
    ],
  },
  "mobile-accessories": {
    eyebrow: "THE DETAILS MAKE THE DIFFERENCE",
    title: "Mobile accessories",
    description: "Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.",
    hero: imgCategoryProduct3,
    products: [
      { slug: "boostcharge-pro", brand: "BELKIN", name: "BoostCharge Pro 3-in-1", detail: "15W wireless charging · MagSafe", price: "$149.00", image: imgProduct5 },
      { slug: "airpods-pro", brand: "APPLE", name: "AirPods Pro", detail: "Active noise cancellation · USB-C", price: "$249.00", image: imgProduct4 },
    ],
  },
  audio: {
    eyebrow: "LISTEN WITH INTENTION",
    title: "Audio",
    description: "Immersive sound, considered comfort and dependable listening for work, travel and slower moments.",
    hero: imgProduct7,
    products: [
      { slug: "airpods-pro", brand: "APPLE", name: "AirPods Pro", detail: "Active noise cancellation · USB-C", price: "$249.00", image: imgProduct4 },
      { slug: "sony-wh-1000xm5", brand: "SONY", name: "Sony WH-1000XM5", detail: "Noise cancelling · 30-hour battery", price: "$399.00", image: imgProduct7 },
    ],
  },
} as const;

type CategorySlug = keyof typeof categoryPages;

const productPages = {
  "iphone-13-pro": { brand: "APPLE", name: "iPhone 13 Pro", category: "Smartphones", detail: "128GB · Unlocked", price: "$999.00", image: imgProduct, colors: ["Graphite", "Silver", "Sierra Blue"] },
  "macbook-pro-14": { brand: "APPLE", name: "MacBook Pro 14″", category: "Laptops", detail: "M1 Pro · 16GB RAM · 512GB SSD", price: "$1,999.00", image: imgProduct1, colors: ["Space Gray", "Silver"] },
  "galaxy-tab-s8": { brand: "SAMSUNG", name: "Galaxy Tab S8", category: "Tablets", detail: "11″ display · 128GB · Wi-Fi", price: "$699.00", image: imgProduct2, colors: ["Graphite", "Silver", "Pink Gold"] },
  "galaxy-s23-ultra": { brand: "SAMSUNG", name: "Galaxy S23 Ultra", category: "Smartphones", detail: "256GB · Unlocked", price: "$1,199.00", image: imgProduct3, colors: ["Phantom Black", "Cream", "Green"] },
  "airpods-pro": { brand: "APPLE", name: "AirPods Pro", category: "Audio", detail: "Active noise cancellation · USB-C", price: "$249.00", image: imgProduct4, colors: ["White"] },
  "boostcharge-pro": { brand: "BELKIN", name: "BoostCharge Pro 3-in-1", category: "Accessories", detail: "15W wireless charging · MagSafe", price: "$149.00", image: imgProduct5, colors: ["White", "Black"] },
  "mx-keys-mini": { brand: "LOGITECH", name: "MX Keys Mini", category: "Accessories", detail: "Wireless keyboard", price: "$99.00", image: imgProduct6, colors: ["Graphite", "Pale Gray", "Rose"] },
  "sony-wh-1000xm5": { brand: "SONY", name: "Sony WH-1000XM5", category: "Audio", detail: "Noise cancelling · 30-hour battery", price: "$399.00", image: imgProduct7, colors: ["Black", "Silver", "Midnight Blue"] },
} as const;

type ProductSlug = keyof typeof productPages;
type Quantities = Record<string, number>;
type Confirmation = { reference: string; items: { name: string; quantity: number }[]; total: number };

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const productEntries = Object.entries(productPages) as [ProductSlug, (typeof productPages)[ProductSlug]][];
const productByName = (name: string) => productEntries.find(([, product]) => product.name === name);
const priceNumber = (price: string) => Number(price.replace(/[^0-9.]/g, ""));
const productNames = new Set(productEntries.map(([, product]) => product.name));

type StorageKind = "local" | "session";

const getStorage = (kind: StorageKind) => kind === "local" ? window.localStorage : window.sessionStorage;

const readStorage = <T,>(kind: StorageKind, key: string, fallback: T, validate: (value: unknown) => value is T): T => {
  try {
    const storage = getStorage(kind);
    const raw = storage.getItem(key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return validate(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (kind: StorageKind, key: string, value: unknown) => {
  try {
    getStorage(kind).setItem(key, JSON.stringify(value));
  } catch {
    // Browsing still works when storage is disabled, full, or unavailable.
  }
};

const isProductList = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string" && productNames.has(item));
const isQuantities = (value: unknown): value is Quantities =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value)
  && Object.entries(value).every(([name, quantity]) => productNames.has(name) && Number.isInteger(quantity) && Number(quantity) > 0);
const isSelectedColors = (value: unknown): value is Record<string, string> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value)
  && Object.entries(value).every(([slug, color]) =>
    slug in productPages && typeof color === "string" && (productPages[slug as ProductSlug].colors as readonly string[]).includes(color),
  );
const isConfirmation = (value: unknown): value is Confirmation => {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<Confirmation>;
  return typeof candidate.reference === "string"
    && typeof candidate.total === "number"
    && Number.isFinite(candidate.total)
    && Array.isArray(candidate.items)
    && candidate.items.every((item) =>
      Boolean(item) && typeof item.name === "string" && productNames.has(item.name)
      && Number.isInteger(item.quantity) && item.quantity > 0,
    );
};

function StoreHeader({ title, backLabel, backTo }: { title: string; backLabel: string; backTo: string }) {
  return (
    <header className="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
      <button className="font-['Inter:Semi_Bold'] text-[30px]" onClick={() => window.location.assign("/")} type="button">FORME</button>
      <button className="font-['Inter:Medium'] text-[#245c4d] text-[12px]" onClick={() => window.location.assign(backTo)} type="button">← {backLabel}</button>
    </header>
  );
}

function OrderItems({ bag, quantities, selectedColors, editable, onQuantity, onRemove }: {
  bag: string[]; quantities: Quantities; selectedColors: Record<string, string>; editable?: boolean;
  onQuantity?: (name: string, quantity: number) => void; onRemove?: (name: string) => void;
}) {
  return (
    <div className="divide-y divide-[#dfe3dc]">
      {bag.map((name) => {
        const entry = productByName(name);
        if (!entry) return null;
        const [slug, product] = entry;
        const quantity = quantities[name] || 1;
        return (
          <div className="flex gap-[18px] py-[22px]" key={name}>
            <div className="bg-[#f4f5f1] flex h-[110px] items-center justify-center p-[12px] rounded-[4px] w-[110px] max-sm:h-[88px] max-sm:w-[88px]">
              <img alt={name} className="object-contain size-full" src={product.image} />
            </div>
            <div className="flex flex-1 flex-col min-w-0">
              <div className="flex gap-[12px] justify-between">
                <div>
                  <p className="font-['Inter:Medium'] text-[15px]">{name}</p>
                  <p className="font-['Inter:Regular'] mt-[5px] text-[#717772] text-[11px]">Color · {selectedColors[slug] || product.colors[0]}</p>
                  <p className="font-['Inter:Regular'] mt-[3px] text-[#717772] text-[11px]">{money.format(priceNumber(product.price))} each</p>
                </div>
                <p className="font-['Inter:Semi_Bold'] text-[14px]">{money.format(priceNumber(product.price) * quantity)}</p>
              </div>
              {editable ? (
                <div className="flex items-center justify-between mt-auto pt-[14px]">
                  <div className="border border-[#dfe3dc] flex h-[34px] items-center rounded-[4px]">
                    <button aria-label={`Decrease ${name} quantity`} className="h-full w-[34px] disabled:cursor-not-allowed disabled:opacity-30" disabled={quantity === 1} onClick={() => onQuantity?.(name, quantity - 1)} type="button">−</button>
                    <span aria-live="polite" className="border-[#dfe3dc] border-x flex h-full items-center justify-center text-[12px] w-[38px]">{quantity}</span>
                    <button aria-label={`Increase ${name} quantity`} className="h-full w-[34px]" onClick={() => onQuantity?.(name, quantity + 1)} type="button">+</button>
                  </div>
                  <button className="font-['Inter:Medium'] text-[#245c4d] text-[11px] underline underline-offset-4" onClick={() => onRemove?.(name)} type="button">Remove</button>
                </div>
              ) : <p className="font-['Inter:Regular'] mt-auto pt-[10px] text-[#717772] text-[11px]">Quantity {quantity}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BagPage({ bag, quantities, selectedColors, subtotal, setQuantity, remove }: {
  bag: string[]; quantities: Quantities; selectedColors: Record<string, string>; subtotal: number;
  setQuantity: (name: string, quantity: number) => void; remove: (name: string) => void;
}) {
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      <StoreHeader backLabel="Continue shopping" backTo="/" title="Shopping bag" />
      <section className="mx-auto max-w-[1120px] px-[64px] py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">YOUR SELECTION</p>
        <h1 className="font-['Inter:Medium'] mt-[10px] text-[42px] max-md:text-[34px]">Shopping bag</h1>
        {!bag.length ? (
          <div className="bg-[#f4f5f1] flex flex-col items-center mt-[36px] px-[24px] py-[72px] text-center">
            <img alt="" className="size-[28px]" src={imgShoppingBag} />
            <p className="font-['Inter:Medium'] mt-[18px] text-[20px]">Your bag is empty</p>
            <p className="mt-[8px] text-[#717772] text-[13px]">Explore the collection and add something considered.</p>
            <button className="bg-[#245c4d] h-[46px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" onClick={() => window.location.assign("/#featured")} type="button">Continue shopping</button>
          </div>
        ) : (
          <div className="grid gap-[64px] grid-cols-[1fr_340px] mt-[28px] max-md:grid-cols-1 max-md:gap-[32px]">
            <OrderItems bag={bag} editable onQuantity={setQuantity} onRemove={remove} quantities={quantities} selectedColors={selectedColors} />
            <aside className="bg-[#f4f5f1] h-fit p-[28px] rounded-[4px]">
              <h2 className="font-['Inter:Medium'] text-[20px]">Order summary</h2>
              <div className="border-[#dfe3dc] border-b flex justify-between py-[22px] text-[13px]"><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div>
              <p className="leading-[1.5] mt-[16px] text-[#717772] text-[11px]">Shipping and taxes are not configured for this prototype. Order total equals subtotal.</p>
              <div className="flex justify-between mt-[20px] text-[16px]"><span>Order total</span><strong>{money.format(subtotal)}</strong></div>
              <button className="bg-[#245c4d] font-['Inter:Medium'] h-[48px] mt-[24px] rounded-[4px] text-[13px] text-white w-full" onClick={() => window.location.assign("/checkout")} type="button">Checkout</button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

type CheckoutData = { email: string; firstName: string; lastName: string; address: string; city: string; postalCode: string; country: string };
const emptyCheckout: CheckoutData = { email: "", firstName: "", lastName: "", address: "", city: "", postalCode: "", country: "" };

function CheckoutPage({ bag, quantities, selectedColors, subtotal, completeOrder }: {
  bag: string[]; quantities: Quantities; selectedColors: Record<string, string>; subtotal: number;
  completeOrder: (reference: string) => void;
}) {
  const [data, setData] = useState<CheckoutData>(emptyCheckout);
  const [errors, setErrors] = useState<Partial<CheckoutData>>({});
  const [reviewing, setReviewing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  if (!bag.length) return <BagPage bag={bag} quantities={quantities} selectedColors={selectedColors} subtotal={0} setQuantity={() => {}} remove={() => {}} />;
  const validate = () => {
    const next: Partial<CheckoutData> = {};
    Object.entries(data).forEach(([key, value]) => { if (!value.trim()) next[key as keyof CheckoutData] = "This field is required."; });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    return !Object.keys(next).length;
  };
  const submit = () => {
    if (submitting) return;
    setSubmitting(true);
    completeOrder(`FORME-${Date.now().toString().slice(-8)}`);
  };
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      <StoreHeader backLabel="Return to bag" backTo="/bag" title="Checkout" />
      <section className="mx-auto max-w-[1120px] px-[64px] py-[56px] max-md:px-[24px] max-md:py-[36px]">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">DEMO CHECKOUT</p>
        <h1 className="font-['Inter:Medium'] mt-[10px] text-[40px]">{reviewing ? "Review your order" : "Customer & shipping"}</h1>
        <p className="leading-[1.6] mt-[10px] text-[#717772] text-[12px]">Prototype only. No payment will be processed and no shipment will be created.</p>
        <div className="grid gap-[64px] grid-cols-[1fr_380px] mt-[32px] max-md:grid-cols-1 max-md:gap-[32px]">
          {!reviewing ? (
            <form className="grid gap-[18px] grid-cols-2 max-sm:grid-cols-1" onSubmit={(event) => { event.preventDefault(); if (validate()) setReviewing(true); }}>
              {Object.entries({ email: "Email address", firstName: "First name", lastName: "Last name", address: "Street address", city: "City", postalCode: "Postal code", country: "Country" }).map(([key, label]) => (
                <label className={`font-['Inter:Medium'] text-[11px] ${key === "email" || key === "address" ? "col-span-2 max-sm:col-span-1" : ""}`} key={key}>
                  {label}
                  <input aria-invalid={Boolean(errors[key as keyof CheckoutData])} className="border border-[#dfe3dc] h-[46px] mt-[8px] outline-none px-[14px] rounded-[4px] text-[13px] w-full focus:border-[#245c4d]" onChange={(event) => setData({ ...data, [key]: event.target.value })} type={key === "email" ? "email" : "text"} value={data[key as keyof CheckoutData]} />
                  {errors[key as keyof CheckoutData] && <span className="block font-['Inter:Regular'] mt-[6px] text-[#9a3f35] text-[11px]">{errors[key as keyof CheckoutData]}</span>}
                </label>
              ))}
              <button className="bg-[#245c4d] col-span-2 h-[48px] mt-[8px] rounded-[4px] text-[13px] text-white max-sm:col-span-1" type="submit">Review order</button>
            </form>
          ) : (
            <div>
              <div className="bg-[#f4f5f1] p-[24px] rounded-[4px]">
                <h2 className="font-['Inter:Medium'] text-[18px]">Shipping to</h2>
                <p className="leading-[1.7] mt-[12px] text-[#717772] text-[13px]">{data.firstName} {data.lastName}<br />{data.address}<br />{data.city}, {data.postalCode}<br />{data.country}<br />{data.email}</p>
              </div>
              <div className="flex gap-[12px] mt-[20px]">
                <button className="border border-[#245c4d] h-[48px] px-[20px] rounded-[4px] text-[#245c4d] text-[12px]" onClick={() => setReviewing(false)} type="button">Edit details</button>
                <button className="bg-[#245c4d] flex-1 h-[48px] rounded-[4px] text-[12px] text-white disabled:opacity-60" disabled={submitting} onClick={submit} type="button">{submitting ? "Submitting…" : "Place demo order"}</button>
              </div>
            </div>
          )}
          <aside>
            <h2 className="font-['Inter:Medium'] text-[20px]">Order summary</h2>
            <OrderItems bag={bag} quantities={quantities} selectedColors={selectedColors} />
            <div className="border-[#dfe3dc] border-t flex justify-between pt-[18px] text-[16px]"><span>Order total</span><strong>{money.format(subtotal)}</strong></div>
            <p className="mt-[8px] text-[#717772] text-[10px]">Shipping and taxes not configured.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function ConfirmationPage({ reference, completedItems, total }: { reference: string; completedItems: { name: string; quantity: number }[]; total: number }) {
  if (!reference) return <main><StoreHeader backLabel="Continue shopping" backTo="/" title="Order confirmation" /><div className="p-[64px] max-md:p-[24px]">No completed demo order found.</div></main>;
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      <StoreHeader backLabel="Continue shopping" backTo="/" title="Order confirmation" />
      <section className="mx-auto max-w-[720px] px-[24px] py-[72px]">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">DEMO ORDER COMPLETE</p>
        <h1 className="font-['Inter:Medium'] mt-[12px] text-[42px]">Thank you.</h1>
        <p className="leading-[1.7] mt-[16px] text-[#717772] text-[13px]">This prototype order was recorded for demonstration only. No payment was processed and nothing will be shipped.</p>
        <div className="bg-[#f4f5f1] mt-[32px] p-[28px] rounded-[4px]">
          <div className="flex justify-between text-[13px]"><span>Order reference</span><strong>{reference}</strong></div>
          <div className="border-[#dfe3dc] border-y my-[20px] py-[12px]">{completedItems.map((item) => <div className="flex justify-between py-[7px] text-[12px]" key={item.name}><span>{item.name}</span><span>Qty {item.quantity}</span></div>)}</div>
          <div className="flex justify-between text-[16px]"><span>Total</span><strong>{money.format(total)}</strong></div>
        </div>
        <button className="bg-[#245c4d] h-[48px] mt-[28px] px-[24px] rounded-[4px] text-[12px] text-white" onClick={() => window.location.assign("/")} type="button">Continue shopping</button>
      </section>
    </main>
  );
}

function NotFoundPage({ header }: { header: ReactNode }) {
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      {header}
      <section className="bg-[#f4f5f1] flex min-h-[520px] items-center px-[64px] py-[72px] max-md:px-[24px]">
        <div className="max-w-[620px]">
          <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">404 · PAGE NOT FOUND</p>
          <h1 className="font-['Inter:Medium'] leading-[1.08] mt-[16px] text-[52px] max-md:text-[40px]">This page isn’t in our collection.</h1>
          <p className="leading-[1.7] mt-[20px] max-w-[500px] text-[#717772] text-[14px]">The product, category, or collection may have moved or may no longer be available.</p>
          <div className="flex flex-wrap gap-[12px] mt-[30px]">
            <a className="bg-[#245c4d] flex h-[46px] items-center justify-center px-[24px] rounded-[4px] text-[12px] text-white" href="/">Return home</a>
            <a className="border border-[#245c4d] flex h-[46px] items-center justify-center px-[24px] rounded-[4px] text-[#245c4d] text-[12px]" href="/#featured">Browse products</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ShoppingHeader({
  activeCategory,
  bag,
  bagCount,
  headerPanel,
  quantities,
  searchOpen,
  searchQuery,
  searchResults,
  selectedColors,
  subtotal,
  wishlist,
  onCategory,
  onClosePanel,
  onOpenPanel,
  onQuantity,
  onSearchOpen,
  onSearchQuery,
  onSelectSearchResult,
  onToggleBag,
  onToggleWishlist,
}: {
  activeCategory?: ProductCategory;
  bag: string[];
  bagCount: number;
  headerPanel: HeaderPanel;
  quantities: Quantities;
  searchOpen: boolean;
  searchQuery: string;
  searchResults: typeof searchableProducts;
  selectedColors: Record<string, string>;
  subtotal: number;
  wishlist: string[];
  onCategory?: (category: ProductCategory) => void;
  onClosePanel: () => void;
  onOpenPanel: (panel: Exclude<HeaderPanel, null>) => void;
  onQuantity: (name: string, quantity: number) => void;
  onSearchOpen: (open: boolean) => void;
  onSearchQuery: (query: string) => void;
  onSelectSearchResult: (slug: ProductSlug) => void;
  onToggleBag: (name: string) => void;
  onToggleWishlist: (name: string) => void;
}) {
  const [activeSearchIndex, setActiveSearchIndex] = useState(-1);
  const dialogRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const panelItems = headerPanel === "wishlist" ? wishlist : bag;
  const openPanel = (panel: Exclude<HeaderPanel, null>) => {
    returnFocusRef.current = document.activeElement as HTMLElement;
    onOpenPanel(panel);
  };
  useEffect(() => {
    if (!searchOpen) setActiveSearchIndex(-1);
    else if (activeSearchIndex >= searchResults.length) setActiveSearchIndex(searchResults.length ? 0 : -1);
  }, [activeSearchIndex, searchOpen, searchResults.length]);
  useEffect(() => {
    if (!headerPanel) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.querySelector<HTMLElement>("button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])")?.focus();
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClosePanel();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = [...dialog.querySelectorAll<HTMLElement>("button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex='-1'])")];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [headerPanel, onClosePanel]);
  const navigate = (category: ProductCategory) => {
    if (onCategory) return onCategory(category);
    if (category === "all") return window.location.assign("/");
    if (category === "new-arrivals") return window.location.assign("/collections/new-arrivals");
    window.location.assign(`/categories/${category}`);
  };

  return (
    <>
      <div className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full z-40" data-name="Retail navigation">
        <div className="bg-[#202d27] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Store announcement">
          <p className="font-['Inter:Regular'] text-[11px] text-white whitespace-nowrap">Curated devices, thoughtful essentials and everyday accessories.</p>
        </div>
        <div className="bg-white content-stretch flex h-[80px] items-center justify-between overflow-visible px-[64px] relative shrink-0 w-full" data-name="Main navigation">
          <button aria-label="Forme home" className="font-['Inter:Semi_Bold'] font-semibold shrink-0 text-[#202522] text-[30px]" onClick={() => window.location.assign("/")} type="button">FORME</button>
          <form
            className="bg-[#f4f5f1] content-stretch flex gap-[12px] h-[40px] items-center px-[16px] relative shrink-0 w-[360px]"
            data-name="Product search"
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) onSearchOpen(false); }}
            onSubmit={(event) => { event.preventDefault(); if (searchResults[0]) onSelectSearchResult(searchResults[0].slug as ProductSlug); }}
            role="search"
          >
            <img alt="" className="size-[17px]" src={imgSearch} />
            <input
              aria-activedescendant={activeSearchIndex >= 0 ? `search-option-${activeSearchIndex}` : undefined}
              aria-autocomplete="list"
              aria-controls={searchResultsId}
              aria-expanded={searchOpen}
              aria-label="Search products"
              className="bg-transparent flex-1 font-['Inter:Regular'] min-w-0 outline-none text-[#202522] text-[12px] placeholder:text-[#717772]"
              onChange={(event) => { onSearchQuery(event.target.value); onSearchOpen(true); }}
              onFocus={() => onSearchOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  onSearchOpen(true);
                  setActiveSearchIndex((index) => Math.min(index + 1, searchResults.length - 1));
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveSearchIndex((index) => Math.max(index - 1, 0));
                } else if (event.key === "Enter" && activeSearchIndex >= 0) {
                  event.preventDefault();
                  const result = searchResults[activeSearchIndex];
                  if (result) onSelectSearchResult(result.slug as ProductSlug);
                } else if (event.key === "Escape") {
                  event.preventDefault();
                  onSearchOpen(false);
                }
              }}
              placeholder="Search devices, brands and essentials"
              role="combobox"
              type="search"
              value={searchQuery}
            />
            {searchQuery && <button aria-label="Clear search" className="text-[#245c4d] text-[11px]" onClick={() => { onSearchQuery(""); onSearchOpen(true); }} type="button">Clear</button>}
            {searchOpen && (
              <div className="absolute bg-white border border-[#dfe3dc] left-0 max-h-[min(420px,60vh)] overflow-y-auto p-[8px] rounded-[4px] shadow-[0_16px_40px_rgba(32,37,34,0.14)] top-[48px] w-full z-50" id={searchResultsId} role="listbox">
                <p className="font-['Inter:Semi_Bold'] px-[10px] py-[8px] text-[#717772] text-[10px]">PRODUCTS</p>
                {searchResults.length ? searchResults.map((product, index) => (
                  <button aria-selected={activeSearchIndex === index} className="flex min-h-[44px] items-center justify-between px-[10px] py-[10px] text-left hover:bg-[#f4f5f1] aria-selected:bg-[#edefe8] w-full" id={`search-option-${index}`} key={product.slug} onClick={() => onSelectSearchResult(product.slug as ProductSlug)} onMouseEnter={() => setActiveSearchIndex(index)} role="option" type="button">
                    <span className="font-['Inter:Medium'] text-[#202522] text-[12px]">{product.name}</span>
                    <span className="font-['Inter:Regular'] text-[#717772] text-[10px]">{product.category}</span>
                  </button>
                )) : <p className="px-[10px] py-[16px] text-[#717772] text-[12px]">No products found</p>}
              </div>
            )}
          </form>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Account actions">
            <button aria-haspopup="dialog" aria-label="Open account menu" className="flex items-center justify-center relative shrink-0 size-[44px]" onClick={() => openPanel("account")} type="button"><img alt="" className="size-[20px]" src={imgUserRound} /></button>
            <button aria-haspopup="dialog" aria-label={`Open wishlist, ${wishlist.length} saved items`} className="flex items-center justify-center relative shrink-0 size-[44px]" onClick={() => openPanel("wishlist")} type="button">
              <img alt="" className="size-[20px]" src={imgHeart} />
              {wishlist.length > 0 && <span className="absolute bg-[#245c4d] flex items-center justify-center -right-[8px] rounded-full text-[8px] text-white -top-[8px] size-[15px]">{wishlist.length}</span>}
            </button>
            <button aria-haspopup="dialog" aria-label={`Open shopping bag, ${bagCount} items`} className="content-stretch flex gap-[8px] items-center min-h-[44px] shrink-0" onClick={() => openPanel("bag")} type="button">
              <img alt="" className="size-[20px]" src={imgShoppingBag} />
              <span className="font-['Inter:Regular'] text-[#202522] text-[12px] whitespace-nowrap">Bag ({bagCount})</span>
            </button>
          </div>
        </div>
        <div className="border-[#dfe3dc] border-b border-t content-stretch flex h-[44px] items-center justify-between overflow-x-auto px-[64px] relative shrink-0 w-full" data-name="Category navigation">
          <div className="content-stretch flex gap-[32px] items-center shrink-0 text-[12px] whitespace-nowrap" data-name="Shop destinations">
            {([
              ["all", "Shop all"],
              ["smartphones", "Smartphones"],
              ["laptops", "Laptops"],
              ["tablets", "Tablets"],
              ["mobile-accessories", "Mobile accessories"],
              ["audio", "Audio"],
              ["new-arrivals", "New arrivals"],
            ] as [ProductCategory, string][]).map(([category, label]) => (
              <button className={`${category === "all" ? "font-['Inter:Semi_Bold']" : "font-['Inter:Regular']"} ${activeCategory === category ? "text-[#245c4d]" : "text-[#202522]"}`} key={category} onClick={() => navigate(category)} type="button">{label}</button>
            ))}
          </div>
        </div>
      </div>
      {headerPanel && (
        <div className="fixed inset-0 z-[100]" role="presentation">
          <button aria-label="Close panel" className="absolute bg-[rgba(32,37,34,0.38)] inset-0 w-full" onClick={onClosePanel} type="button" />
          <section aria-labelledby="header-panel-title" aria-modal="true" className="absolute bg-white flex flex-col h-full p-[32px] right-0 shadow-[-16px_0_48px_rgba(32,37,34,0.16)] top-0 w-[min(420px,100vw)]" ref={dialogRef} role="dialog">
            <div className="border-[#dfe3dc] border-b flex items-center justify-between pb-[22px]">
              <div><p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[10px]">FORME</p><p className="font-['Inter:Medium'] mt-[6px] text-[#202522] text-[26px]" id="header-panel-title">{headerPanel === "account" ? "Your account" : headerPanel === "wishlist" ? "Your wishlist" : "Your bag"}</p></div>
              <button aria-label="Close panel" className="border border-[#dfe3dc] flex items-center justify-center rounded-full size-[44px] text-[22px]" onClick={onClosePanel} type="button">×</button>
            </div>
            {headerPanel === "account" ? (
              <div className="flex flex-col gap-[18px] pt-[28px]"><p className="font-['Inter:Medium'] text-[18px]">Accounts are not available yet</p><p className="leading-[1.6] text-[#717772] text-[13px]">You can still browse, save items on this device, and complete checkout as a guest.</p><button className="bg-[#245c4d] h-[46px] rounded-[4px] text-[13px] text-white" onClick={onClosePanel} type="button">Continue as guest</button></div>
            ) : panelItems.length ? (
              <div className="flex flex-col overflow-y-auto pt-[20px]">
                {headerPanel === "bag" ? <OrderItems bag={bag} editable onQuantity={onQuantity} onRemove={onToggleBag} quantities={quantities} selectedColors={selectedColors} /> : panelItems.map((name) => <div className="border-[#dfe3dc] border-b flex items-center justify-between py-[16px]" key={name}><p className="font-['Inter:Medium'] text-[14px]">{name}</p><button className="text-[#245c4d] text-[11px]" onClick={() => onToggleWishlist(name)} type="button">Remove</button></div>)}
                {headerPanel === "wishlist" && <button className="bg-[#245c4d] h-[44px] mt-[20px] rounded-[4px] text-[12px] text-white" onClick={() => panelItems.forEach((name) => { if (!bag.includes(name)) onToggleBag(name); })} type="button">Add saved items to bag</button>}
                {headerPanel === "bag" && <><div className="flex justify-between mt-[18px] text-[15px]"><span>Subtotal</span><strong>{money.format(subtotal)}</strong></div><button className="border border-[#245c4d] h-[44px] mt-[16px] rounded-[4px] text-[#245c4d] text-[12px]" onClick={() => window.location.assign("/bag")} type="button">View bag</button><button className="bg-[#245c4d] h-[46px] mt-[10px] rounded-[4px] text-[12px] text-white" onClick={() => window.location.assign("/checkout")} type="button">Checkout</button></>}
              </div>
            ) : <div className="flex flex-1 flex-col items-center justify-center text-center"><img alt="" className="size-[24px]" src={headerPanel === "wishlist" ? imgHeart : imgShoppingBag} /><p className="font-['Inter:Medium'] mt-[20px] text-[18px]">{headerPanel === "wishlist" ? "Your wishlist is empty" : "Your bag is empty"}</p><button className="bg-[#245c4d] h-[44px] mt-[24px] px-[24px] rounded-[4px] text-[12px] text-white" onClick={() => window.location.assign("/")} type="button">Browse products</button></div>}
          </section>
        </div>
      )}
    </>
  );
}

function ColorSelector({ colors, selected, onSelect }: { colors: readonly string[]; selected: string; onSelect: (color: string) => void }) {
  const swatches: Record<string, string> = {
    Black: "#292d2b", Graphite: "#555956", Silver: "#d8dad7", White: "#f7f7f4", Cream: "#eee4d1", Green: "#768277",
    "Sierra Blue": "#9aafbf", "Space Gray": "#777b78", "Pink Gold": "#d6aaa4", "Pale Gray": "#c9ccca", Rose: "#c99090", "Midnight Blue": "#344758",
  };
  return (
    <div className="flex flex-wrap gap-[8px]" aria-label="Choose color">
      {colors.map((color) => (
        <button aria-label={color} aria-pressed={selected === color} className={`border rounded-full size-[22px] ${selected === color ? "border-[#245c4d]" : "border-[#dfe3dc]"}`} key={color} onClick={(event) => { event.stopPropagation(); onSelect(color); }} title={color} type="button">
          <span className="block border-2 border-white rounded-full size-full" style={{ backgroundColor: swatches[color] || "#d8dad7" }} />
        </button>
      ))}
    </div>
  );
}

function NoReviewsLabel() {
  return <p className="font-['Inter:Regular'] text-[#717772] text-[11px]">No reviews yet</p>;
}

function ProductPage({ header, slug, wishlist, bag, toggleWishlist, toggleBag, selectedColor, selectColor }: {
  header: ReactNode; slug: ProductSlug; wishlist: string[]; bag: string[]; toggleWishlist: (name: string) => void; toggleBag: (name: string) => void; selectedColor: string; selectColor: (color: string) => void;
}) {
  const product = productPages[slug];
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      {header}
      <section className="grid grid-cols-2 min-h-[560px] max-md:grid-cols-1">
        <div className="bg-[#f4f5f1] flex items-center justify-center p-[64px] min-h-[420px]"><img alt={product.name} className="max-h-[430px] object-contain size-full" src={product.image} /></div>
        <div className="flex flex-col justify-center px-[64px] py-[64px] max-md:px-[24px]">
          <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{product.brand} · {product.category}</p>
          <h1 className="font-['Inter:Medium'] leading-[1.1] mt-[14px] text-[44px]">{product.name}</h1>
          <p className="font-['Inter:Regular'] mt-[14px] text-[#717772] text-[14px]">{product.detail}</p>
          <div className="mt-[16px]"><NoReviewsLabel /></div>
          <p className="font-['Inter:Semi_Bold'] mt-[28px] text-[24px]">{product.price}</p>
          <p className="font-['Inter:Medium'] mt-[28px] text-[11px]">COLOR · {selectedColor}</p>
          <div className="mt-[12px]"><ColorSelector colors={product.colors} onSelect={selectColor} selected={selectedColor} /></div>
          <div className="flex gap-[12px] mt-[30px]">
            <button className="bg-[#245c4d] flex-1 h-[48px] rounded-[4px] text-white text-[13px]" onClick={() => toggleBag(product.name)} type="button">{bag.includes(product.name) ? "Remove from bag" : "Add to bag"}</button>
            <button aria-pressed={wishlist.includes(product.name)} className="border border-[#245c4d] h-[48px] px-[20px] rounded-[4px] text-[#245c4d] text-[13px]" onClick={() => toggleWishlist(product.name)} type="button">{wishlist.includes(product.name) ? "Saved" : "Save"}</button>
          </div>
        </div>
      </section>
      <section className="border-[#dfe3dc] border-t px-[64px] py-[56px] max-md:px-[24px] max-md:py-[40px]">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">CUSTOMER REVIEWS</p>
        <p className="font-['Inter:Regular'] mt-[12px] text-[#717772] text-[13px]">No reviews yet. Be the first to share your feedback.</p>
      </section>
    </main>
  );
}

function CategoryPage({
  header,
  slug,
  wishlist,
  bag,
  toggleWishlist,
  toggleBag,
}: {
  header: ReactNode;
  slug: CategorySlug;
  wishlist: string[];
  bag: string[];
  toggleWishlist: (name: string) => void;
  toggleBag: (name: string) => void;
}) {
  const category = categoryPages[slug];

  return (
    <main className="bg-white min-h-screen text-[#202522]">
      {header}
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
            <article className="flex flex-col gap-[16px]" key={product.name} onClick={(event) => { if (!(event.target as Element).closest("button")) window.location.assign(`/products/${product.slug}`); }} onKeyDown={(event) => { if (event.key === "Enter") window.location.assign(`/products/${product.slug}`); }} role="link" tabIndex={0}>
              <div className="bg-[#f4f5f1] h-[300px] p-[32px] relative rounded-[4px]">
                <img alt={product.name} className="object-cover size-full" src={product.image} />
              </div>
              <p className="font-['Inter:Medium'] text-[#717772] text-[10px]">{product.brand}</p>
              <h2 className="font-['Inter:Medium'] text-[20px]">{product.name}</h2>
              <p className="font-['Inter:Regular'] text-[#717772] text-[12px]">{product.detail}</p>
              <NoReviewsLabel />
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

const collectionPages = {
  "everyday-edit": {
    eyebrow: "CURATED FOR EVERYDAY",
    title: "The everyday edit",
    description: "A balanced selection of capable, beautifully designed technology for communication, focus and downtime.",
    hero: imgEverydayTechnologyStillLife,
    products: ["iphone-13-pro", "galaxy-tab-s8", "airpods-pro"],
  },
  "workspace-edit": {
    eyebrow: "WORK, CONSIDERED",
    title: "The workspace edit",
    description: "Focused tools that bring clarity, comfort and dependable performance to the place where ideas become real.",
    hero: imgQuietWorkspace,
    products: ["macbook-pro-14", "mx-keys-mini", "boostcharge-pro"],
  },
  "audio-essentials": {
    eyebrow: "SOUND, REFINED",
    title: "Audio essentials",
    description: "Immersive listening selected for thoughtful details, lasting comfort and less distraction.",
    hero: imgProduct7,
    products: ["airpods-pro", "sony-wh-1000xm5"],
  },
  "new-arrivals": {
    eyebrow: "JUST IN",
    title: "New arrivals",
    description: "The latest additions to the Forme selection, chosen for usefulness, quality and enduring design.",
    hero: imgProduct4,
    products: ["airpods-pro", "boostcharge-pro"],
  },
} as const satisfies Record<string, { eyebrow: string; title: string; description: string; hero: string; products: readonly ProductSlug[] }>;

type CollectionSlug = keyof typeof collectionPages;

function CollectionPage({ header, slug }: { header: ReactNode; slug: CollectionSlug }) {
  const collection = collectionPages[slug];
  return (
    <main className="bg-white min-h-screen text-[#202522]">
      {header}
      <section className="bg-[#edefe8] grid grid-cols-2 min-h-[480px] max-md:grid-cols-1">
        <div className="flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{collection.eyebrow}</p>
          <h1 className="font-['Inter:Medium'] leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{collection.title}</h1>
          <p className="font-['Inter:Regular'] leading-[1.7] mt-[22px] max-w-[480px] text-[#717772] text-[15px]">{collection.description}</p>
        </div>
        <div className="min-h-[360px] relative"><img alt={collection.title} className="absolute inset-0 object-cover size-full" src={collection.hero} /></div>
      </section>
      <section className="px-[64px] py-[72px] max-md:px-[24px]">
        <p className="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">THE SELECTION</p>
        <h2 className="font-['Inter:Medium'] mt-[10px] text-[36px]">Products in this collection.</h2>
        <div className="grid gap-[24px] grid-cols-3 mt-[32px] max-md:grid-cols-1">
          {collection.products.map((productSlug) => {
            const product = productPages[productSlug];
            return (
              <button className="flex flex-col gap-[12px] text-left" key={productSlug} onClick={() => window.location.assign(`/products/${productSlug}`)} type="button">
                <span className="bg-[#f4f5f1] block h-[260px] p-[28px] rounded-[4px]"><img alt={product.name} className="object-cover size-full" src={product.image} /></span>
                <span className="font-['Inter:Medium'] text-[#717772] text-[10px]">{product.brand}</span>
                <span className="font-['Inter:Medium'] text-[18px]">{product.name}</span>
                <NoReviewsLabel />
                <span className="font-['Inter:Semi_Bold'] text-[16px]">{product.price}</span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default function FormePremiumTechnologyStorefront() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [headerPanel, setHeaderPanel] = useState<HeaderPanel>(null);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [wishlist, setWishlist] = useState<string[]>(() => readStorage("local", "forme-wishlist", [], isProductList));
  const [bag, setBag] = useState<string[]>(() => readStorage("local", "forme-bag", [], isProductList));
  const [quantities, setQuantities] = useState<Quantities>(() => readStorage("local", "forme-bag-quantities", {}, isQuantities));
  const [confirmation, setConfirmation] = useState<Confirmation>(() => readStorage("session", "forme-confirmation", { reference: "", items: [], total: 0 }, isConfirmation));
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>(() => readStorage("local", "forme-colors", {}, isSelectedColors));
  useEffect(() => writeStorage("local", "forme-wishlist", wishlist), [wishlist]);
  useEffect(() => writeStorage("local", "forme-bag", bag), [bag]);
  useEffect(() => writeStorage("local", "forme-bag-quantities", quantities), [quantities]);
  useEffect(() => writeStorage("local", "forme-colors", selectedColors), [selectedColors]);
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const category = activeCategory === "all" || activeCategory === "new-arrivals"
      ? null
      : activeCategory === "mobile-accessories" ? "accessories" : activeCategory;
    const categoryProducts = category
      ? searchableProducts.filter((product) => product.category.toLowerCase() === category)
      : searchableProducts;
    if (!query) return categoryProducts.slice(0, 4);
    return categoryProducts.filter((product) =>
      `${product.name} ${product.brand} ${product.category} ${product.collection} ${product.keywords}`.toLowerCase().includes(query),
    );
  }, [activeCategory, searchQuery]);

  const openPanel = (panel: Exclude<HeaderPanel, null>) => {
    setSearchOpen(false);
    setHeaderPanel(panel);
  };

  const selectSearchResult = (slug: ProductSlug) => {
    window.location.assign(`/products/${slug}`);
  };

  const navigateToCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    const accessories = ["mobile-accessories", "audio", "new-arrivals"].includes(category);
    requestAnimationFrame(() => document.querySelector(accessories ? "#accessories" : "#featured")?.scrollIntoView({ behavior: "smooth" }));
  };

  const productMatchesQuery = (slug: ProductSlug) => {
    const query = searchQuery.trim().toLowerCase();
    const product = searchableProducts.find((item) => item.slug === slug);
    return !query || Boolean(product && `${product.name} ${product.brand} ${product.category} ${product.collection} ${product.keywords}`.toLowerCase().includes(query));
  };
  const productIsVisible = (category: ProductCategory, isNew = false, slug?: ProductSlug) =>
    (activeCategory === "all" || activeCategory === category || (activeCategory === "new-arrivals" && isNew))
    && (!slug || productMatchesQuery(slug));
  const featuredProducts = searchableProducts.slice(0, 4);
  const visibleFeaturedCount = featuredProducts.filter((product) => {
    const category = product.category.toLowerCase() as ProductCategory;
    return productIsVisible(category, false, product.slug as ProductSlug);
  }).length;
  const toggleWishlist = (name: string) => setWishlist((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);
  const toggleBag = (name: string) => setBag((items) => {
    if (items.includes(name)) {
      setQuantities((values) => { const next = { ...values }; delete next[name]; return next; });
      return items.filter((item) => item !== name);
    }
    setQuantities((values) => ({ ...values, [name]: values[name] || 1 }));
    return [...items, name];
  });
  const setQuantity = (name: string, quantity: number) => setQuantities((values) => ({ ...values, [name]: Math.max(1, quantity) }));
  const subtotal = bag.reduce((sum, name) => {
    const entry = productByName(name);
    return sum + (entry ? priceNumber(entry[1].price) * (quantities[name] || 1) : 0);
  }, 0);
  const bagCount = bag.reduce((sum, name) => sum + (quantities[name] || 1), 0);
  const selectColor = (slug: ProductSlug, color: string) => setSelectedColors((colors) => ({ ...colors, [slug]: color }));
  const productCardInteraction = (slug: ProductSlug) => ({
    onClick: (event: MouseEvent) => {
      if (!(event.target as Element).closest("button,[role='button'],a")) window.location.assign(`/products/${slug}`);
    },
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === "Enter") window.location.assign(`/products/${slug}`);
    },
    role: "link",
    tabIndex: 0,
  });
  const colorControl = (slug: ProductSlug) => {
    const colors = productPages[slug].colors;
    const selected = selectedColors[slug] || colors[0];
    const cycle = () => selectColor(slug, colors[(colors.indexOf(selected) + 1) % colors.length]);
    return {
      "aria-label": `Selected color ${selected}. Choose next color`,
      onClick: (event: MouseEvent) => { event.stopPropagation(); cycle(); },
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          cycle();
        }
      },
      role: "button",
      tabIndex: 0,
      title: `Color: ${selected}`,
    };
  };
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
  const pathname = window.location.pathname;
  const routeCategory = pathname.match(/^\/categories\/([^/]+)\/?$/)?.[1] as ProductCategory | undefined;
  const shoppingHeader = (
    <ShoppingHeader
      activeCategory={routeCategory || (pathname === "/" ? activeCategory : undefined)}
      bag={bag}
      bagCount={bagCount}
      headerPanel={headerPanel}
      onCategory={pathname === "/" ? navigateToCategory : undefined}
      onClosePanel={() => setHeaderPanel(null)}
      onOpenPanel={openPanel}
      onQuantity={setQuantity}
      onSearchOpen={setSearchOpen}
      onSearchQuery={setSearchQuery}
      onSelectSearchResult={selectSearchResult}
      onToggleBag={toggleBag}
      onToggleWishlist={toggleWishlist}
      quantities={quantities}
      searchOpen={searchOpen}
      searchQuery={searchQuery}
      searchResults={searchResults}
      selectedColors={selectedColors}
      subtotal={subtotal}
      wishlist={wishlist}
    />
  );

  if (window.location.pathname === "/bag") return <BagPage bag={bag} quantities={quantities} remove={toggleBag} selectedColors={selectedColors} setQuantity={setQuantity} subtotal={subtotal} />;
  if (window.location.pathname === "/checkout") return <CheckoutPage bag={bag} completeOrder={(reference) => {
    const completed = { reference, items: bag.map((name) => ({ name, quantity: quantities[name] || 1 })), total: subtotal };
    writeStorage("session", "forme-confirmation", completed);
    setConfirmation(completed);
    setBag([]);
    setQuantities({});
    window.location.assign("/order-confirmation");
  }} quantities={quantities} selectedColors={selectedColors} subtotal={subtotal} />;
  if (window.location.pathname === "/order-confirmation") return <ConfirmationPage completedItems={confirmation.items} reference={confirmation.reference} total={confirmation.total} />;

  const collectionSlug = window.location.pathname.match(/^\/collections\/([^/]+)\/?$/)?.[1] as CollectionSlug | undefined;
  if (collectionSlug && collectionPages[collectionSlug]) return <CollectionPage header={shoppingHeader} slug={collectionSlug} />;
  const productSlug = window.location.pathname.match(/^\/products\/([^/]+)\/?$/)?.[1] as ProductSlug | undefined;
  if (productSlug && productPages[productSlug]) {
    const product = productPages[productSlug];
    return <ProductPage bag={bag} header={shoppingHeader} selectColor={(color) => selectColor(productSlug, color)} selectedColor={selectedColors[productSlug] || product.colors[0]} slug={productSlug} toggleBag={toggleBag} toggleWishlist={toggleWishlist} wishlist={wishlist} />;
  }
  const categorySlug = window.location.pathname.match(/^\/categories\/([^/]+)\/?$/)?.[1] as CategorySlug | undefined;
  if (categorySlug && categoryPages[categorySlug]) return <CategoryPage bag={bag} header={shoppingHeader} slug={categorySlug} toggleBag={toggleBag} toggleWishlist={toggleWishlist} wishlist={wishlist} />;
  if (pathname !== "/") return <NotFoundPage header={shoppingHeader} />;

  return (
    <main className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2:3" data-name="FORME — Premium technology storefront">
      {shoppingHeader}
      <div className="bg-[#edefe8] content-stretch flex h-[600px] items-start relative shrink-0 w-full" data-node-id="2:32" data-name="Hero collection">
        <div className="content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip pb-[32px] pl-[64px] pr-[48px] pt-[72px] relative shrink-0 w-[608px]" data-node-id="2:33" data-name="Collection introduction">
          <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="2:34" data-name="Season label">
            <div className="bg-[#245c4d] h-px relative shrink-0 w-[24px]" data-node-id="2:35" data-name="Accent rule" />
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[11px] whitespace-nowrap" data-node-id="2:36">
              THE EVERYDAY, ELEVATED
            </p>
          </div>
          <h1 className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#202522] text-[54px] w-[min-content]" data-node-id="2:37">
            <p className="leading-[1.1] mb-0">Good design.</p>
            <p className="leading-[1.1] mb-0">Great technology.</p>
            <p className="leading-[1.1]">Better everyday.</p>
          </h1>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.65] not-italic relative shrink-0 text-[#717772] text-[15px] w-[408px]" data-node-id="2:38">
            Discover thoughtfully selected devices and essentials. Less noise. More of what matters.
          </p>
          <div className="content-stretch flex items-start overflow-clip pt-[6px] relative shrink-0" data-node-id="2:39" data-name="Hero actions">
            <a className="bg-[#245c4d] border border-[#245c4d] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-node-id="2:40" data-name="Shopping action" href="#featured">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2:41">
                Explore the collection
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="2:42" data-name="arrow-right">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
              </div>
            </a>
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
          <a className="content-stretch flex items-center overflow-clip pb-[5px] relative shrink-0" data-node-id="2:83" data-name="Browse link" href="#featured">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[14px] whitespace-nowrap" data-node-id="2:84">
              Browse all categories
            </p>
          </a>
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
        <div className="content-stretch flex items-center justify-between overflow-visible relative shrink-0 w-full" data-node-id="2:123" data-name="Product filters">
          <div aria-label="Filter products by category" className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0" data-node-id="2:124" data-name="Category tabs">
            {([["all", "All devices"], ["smartphones", "Smartphones"], ["laptops", "Laptops"], ["tablets", "Tablets"]] as const).map(([category, label]) => {
              const active = activeCategory === category;
              return (
                <button
                  aria-pressed={active}
                  className={`border border-solid min-h-[38px] px-[18px] py-[10px] relative rounded-[100px] shrink-0 text-[12px] whitespace-nowrap ${active ? "bg-[#245c4d] border-[#245c4d] text-white" : "bg-white border-[#dfe3dc] text-[#717772]"}`}
                  data-name="Category filter"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="font-['Inter:Regular'] text-[#717772] text-[12px] whitespace-nowrap">{visibleFeaturedCount} {visibleFeaturedCount === 1 ? "product" : "products"}</p>
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:133" data-name="Product grid">
          {visibleFeaturedCount === 0 && (
            <div className="bg-[#f4f5f1] flex flex-col items-center justify-center min-h-[240px] px-[24px] text-center w-full">
              <p className="font-['Inter:Medium'] text-[18px]">No products match your selection</p>
              <p className="mt-[8px] text-[#717772] text-[12px]">Clear the search or return to all devices.</p>
              <button className="font-['Inter:Medium'] mt-[18px] min-h-[44px] px-[18px] text-[#245c4d] text-[12px] underline underline-offset-4" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} type="button">Clear filters</button>
            </div>
          )}
          <div {...productCardInteraction("iphone-13-pro")} className={`${productIsVisible("smartphones", false, "iphone-13-pro") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:134" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:151" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:152">
                  $999.00
                </p>
                <div {...colorControl("iphone-13-pro")} className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:153" data-name="Color options">
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
          <div {...productCardInteraction("macbook-pro-14")} className={`${productIsVisible("laptops", false, "macbook-pro-14") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:161" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:178" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:179">
                  $1,999.00
                </p>
                <div {...colorControl("macbook-pro-14")} className="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:180" data-name="Color options">
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
          <div {...productCardInteraction("galaxy-tab-s8")} className={`${productIsVisible("tablets", false, "galaxy-tab-s8") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:187" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:202" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:203">
                  $699.00
                </p>
                <div {...colorControl("galaxy-tab-s8")} className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:204" data-name="Color options">
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
          <div {...productCardInteraction("galaxy-s23-ultra")} className={`${productIsVisible("smartphones", false, "galaxy-s23-ultra") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:212" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:227" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:228">
                  $1,199.00
                </p>
                <div {...colorControl("galaxy-s23-ultra")} className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:229" data-name="Color options">
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
          <div {...productCardInteraction("airpods-pro")} className={`${productIsVisible("audio", true, "airpods-pro") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:254" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:271" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:272">
                  $249.00
                </p>
                <div {...colorControl("airpods-pro")} className="relative shrink-0 size-[12px]" data-node-id="2:273" data-name="Color options">
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
          <div {...productCardInteraction("boostcharge-pro")} className={`${productIsVisible("mobile-accessories", true, "boostcharge-pro") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:279" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:296" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:297">
                  $149.00
                </p>
                <div {...colorControl("boostcharge-pro")} className="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:298" data-name="Color options">
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
          <div {...productCardInteraction("mx-keys-mini")} className={`${productIsVisible("mobile-accessories", false, "mx-keys-mini") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:305" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:320" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:321">
                  $99.00
                </p>
                <div {...colorControl("mx-keys-mini")} className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:322" data-name="Color options">
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
          <div {...productCardInteraction("sony-wh-1000xm5")} className={`${productIsVisible("audio", false, "sony-wh-1000xm5") ? "" : "hidden "} ${productCardClass}`} data-node-id="2:330" data-name="Product card">
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
              <NoReviewsLabel />
              <div className="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:345" data-name="Price and finishes">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:346">
                  $399.00
                </p>
                <div {...colorControl("sony-wh-1000xm5")} className="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:347" data-name="Color options">
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
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:415" onClick={() => window.location.assign("/categories/smartphones")} type="button">
              Smartphones
            </button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:416" onClick={() => window.location.assign("/categories/laptops")} type="button">
              Laptops
            </button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:417" onClick={() => window.location.assign("/categories/tablets")} type="button">
              Tablets
            </button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:418" onClick={() => window.location.assign("/categories/mobile-accessories")} type="button">
              Mobile accessories
            </button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:419" onClick={() => window.location.assign("/categories/audio")} type="button">
              Audio
            </button>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:420" data-name="Navigation group">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:421">
              Collections
            </p>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:422" onClick={() => window.location.assign("/collections/everyday-edit")} type="button">The everyday edit</button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:423" onClick={() => window.location.assign("/collections/workspace-edit")} type="button">The workspace edit</button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:424" onClick={() => window.location.assign("/collections/audio-essentials")} type="button">Audio essentials</button>
            <button className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:425" onClick={() => window.location.assign("/collections/new-arrivals")} type="button">New arrivals</button>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:427" data-name="Navigation group">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:428">
              Product focus
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:429">
              Camera-first devices
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:430">
              All-day battery life
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:431">
              Premium materials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:432">
              Everyday essentials
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]">Workspace accessories</p>
          </div>
        </div>
        <div className="bg-[#dfe3dc] h-px relative shrink-0 w-full" data-node-id="2:446" data-name="Footer divider" />
        <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="2:447" data-name="Copyright">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:448">
            © 2026 Forme. All rights reserved.
          </p>
        </div>
      </div>

    </main>
  );
}
