<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Curated technology for a better everyday.">
    <title>Forme — Premium Technology Storefront</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <div class="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2:3" data-name="FORME — Premium technology storefront">
      <div class="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full z-40" data-node-id="2:4" data-name="Retail navigation">
        <div class="bg-[#142a36] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2:5" data-name="Store announcement">
          <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="2:6">
            Curated devices, thoughtful essentials and everyday accessories.
          </p>
        </div>
        <div class="bg-white content-stretch flex h-[80px] items-center justify-between overflow-visible px-[64px] relative shrink-0 w-full" data-node-id="2:7" data-name="Main navigation">
          <a aria-label="Forme home" class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[30px] whitespace-nowrap" data-node-id="2:8" href="{{ route('storefront') }}">
            FORME
          </a>
          <div class="bg-[#eff5f7] content-stretch flex gap-[12px] h-[40px] items-center px-[16px] relative shrink-0 w-[360px]" data-node-id="2:9" data-name="Product search">
            <div class="relative shrink-0 size-[17px]" data-node-id="2:10" data-name="search">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/e30e9.svg') }}" />
            </div>
            <input aria-label="Search products" class="bg-transparent flex-1 font-['DM_Sans'] font-normal outline-none text-[#1d292f] text-[12px] placeholder:text-[#66777f]" data-product-search placeholder="Search devices, brands and essentials" type="search">
            <div class="absolute bg-white border border-[#d5e1e5] hidden left-0 p-[8px] rounded-[4px] shadow-[0_16px_40px_rgba(29,41,47,0.14)] top-[48px] w-full z-50" data-search-results role="listbox"></div>
          </div>
          <div class="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="2:13" data-name="Account actions">
            <button aria-label="Open account menu" class="flex items-center justify-center relative shrink-0 size-[40px]" data-open-panel="account" data-node-id="2:14" data-name="user-round" type="button">
              <img alt="" class="block size-[20px]" src="{{ asset('assets/b4eb0.svg') }}" />
            </button>
            <button aria-label="Open wishlist" class="flex items-center justify-center relative shrink-0 size-[40px]" data-open-panel="wishlist" data-node-id="2:16" data-name="heart" type="button">
              <img alt="" class="block size-[20px]" src="{{ asset('assets/4ff0c.svg') }}" />
            </button>
            <button aria-label="Open shopping bag" class="content-stretch flex gap-[6px] items-center min-h-[40px] px-[6px] relative shrink-0" data-open-panel="bag" data-node-id="2:18" data-name="Shopping bag" type="button">
              <div class="relative shrink-0 size-[20px]" data-node-id="2:19" data-name="shopping-bag">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/991a5.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[12px] whitespace-nowrap" data-bag-count data-node-id="2:21">
                Bag (0)
              </p>
            </button>
          </div>
        </div>
        <div class="border-[#d5e1e5] border-b border-solid border-t content-stretch flex h-[44px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="2:22" data-name="Category navigation">
          <div class="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="2:23" data-name="Shop destinations">
            <button class="font-['DM_Sans'] font-medium relative shrink-0 text-[#275d78]" data-nav-category="all" data-node-id="2:24" type="button">
              Shop all
            </button>
            <button class="font-['DM_Sans'] font-normal relative shrink-0 text-[#1d292f]" data-nav-category="smartphones" data-node-id="2:25" type="button">
              Smartphones
            </button>
            <button class="font-['DM_Sans'] font-normal relative shrink-0 text-[#1d292f]" data-nav-category="laptops" data-node-id="2:26" type="button">
              Laptops
            </button>
            <button class="font-['DM_Sans'] font-normal relative shrink-0 text-[#1d292f]" data-nav-category="tablets" data-node-id="2:27" type="button">
              Tablets
            </button>
            <button class="font-['DM_Sans'] font-normal relative shrink-0 text-[#1d292f]" data-nav-category="mobile-accessories" data-node-id="2:28" type="button">
              Mobile accessories
            </button>
            <button class="font-['DM_Sans'] font-normal relative shrink-0 text-[#1d292f]" data-nav-category="audio" data-node-id="2:29" type="button">
              Audio
            </button>
          </div>
          <div class="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="2:30" data-name="Editorial destinations">
            <button class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#275d78] text-[12px] whitespace-nowrap" data-nav-category="new-arrivals" data-node-id="2:31" type="button">
              New arrivals
            </button>
          </div>
        </div>
      </div>
      <div class="bg-[#e6f0f3] content-stretch flex h-[600px] items-start relative shrink-0 w-full" data-node-id="2:32" data-name="Hero collection">
        <div class="content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip pb-[32px] pl-[64px] pr-[48px] pt-[72px] relative shrink-0 w-[608px]" data-node-id="2:33" data-name="Collection introduction">
          <div class="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="2:34" data-name="Season label">
            <div class="bg-[#275d78] h-px relative shrink-0 w-[24px]" data-node-id="2:35" data-name="Accent rule"></div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#275d78] text-[11px] whitespace-nowrap" data-node-id="2:36">
              THE EVERYDAY, ELEVATED
            </p>
          </div>
          <div class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#1d292f] text-[54px] w-[min-content]" data-node-id="2:37">
            <p class="leading-[1.1] mb-0">Good design.</p>
            <p class="leading-[1.1] mb-0">Great technology.</p>
            <p class="leading-[1.1]">Better everyday.</p>
          </div>
          <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[1.65] not-italic relative shrink-0 text-[#66777f] text-[15px] w-[408px]" data-node-id="2:38">
            Discover thoughtfully selected devices and essentials. Less noise. More of what matters.
          </p>
          <div class="content-stretch flex items-start overflow-clip pt-[6px] relative shrink-0" data-node-id="2:39" data-name="Hero actions">
            <button class="bg-[#275d78] border border-[#275d78] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-scroll-target="#featured" data-node-id="2:40" data-name="Shopping action" type="button">
              <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2:41">
                Explore the collection
              </p>
              <div class="relative shrink-0 size-[16px]" data-node-id="2:42" data-name="arrow-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/c4615.svg') }}" />
              </div>
            </button>
          </div>
          <div class="[word-break:break-word] content-stretch flex font-['DM_Sans'] font-normal items-center leading-[normal] not-italic overflow-clip pt-[10px] relative shrink-0 text-[#66777f] text-[10px] w-full whitespace-nowrap" data-node-id="2:44" data-name="Collection edition">
            <p class="relative shrink-0" data-node-id="2:45">
              CURATED FOR HOW YOU LIVE
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="2:47" data-name="Hero photography">
          <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:48" data-name="Everyday technology still life">
            <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/7c3c6.png') }}" />
          </div>
          <div class="absolute bg-white bottom-[28px] content-stretch flex items-center left-[32px] overflow-clip p-[18px] w-[332px]" data-node-id="2:49" data-name="Featured collection note">
            <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="2:50" data-name="Collection information">
              <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f] text-[10px]" data-node-id="2:51">
                THE ESSENTIAL EDIT
              </p>
              <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[14px]" data-node-id="2:52">
                Built for your everyday rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-[#d5e1e5] border-b border-solid content-stretch flex gap-[40px] items-start overflow-clip px-[64px] py-[28px] relative shrink-0 w-full" data-node-id="2:53" data-name="Product focus">
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:54" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:55" data-name="camera">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/a8096.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:57" data-name="Details">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[12px]" data-node-id="2:58">
              Camera-first devices
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f] text-[11px]" data-node-id="2:59">
              Capture life with better detail and clarity.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:60" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:61" data-name="package-check">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8135e.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:63" data-name="Details">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[12px]" data-node-id="2:64">
              All-day battery life
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f] text-[11px]" data-node-id="2:65">
              Power through your day without interruption.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:66" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:67" data-name="badge-check">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/a7052.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:69" data-name="Details">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[12px]" data-node-id="2:70">
              Premium materials
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f] text-[11px]" data-node-id="2:71">
              Thoughtful finishes that feel better in hand.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:72" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:73" data-name="messages-square">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/aea8c.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:75" data-name="Details">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[12px]" data-node-id="2:76">
              Everyday essentials
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f] text-[11px]" data-node-id="2:77">
              Accessories that complement your daily routine.
            </p>
          </div>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[56px] pt-[64px] px-[64px] relative shrink-0 w-full" id="categories" data-node-id="2:78" data-name="Category discovery">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:79" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:80" data-name="Heading">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#275d78] text-[11px]" data-node-id="2:81">
              FIND YOUR NEXT ESSENTIAL
            </p>
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[36px]" data-node-id="2:82">
              Technology, in its element.
            </p>
          </div>
          <button class="content-stretch flex items-center overflow-clip pb-[5px] relative shrink-0" data-scroll-target="#featured" data-node-id="2:83" data-name="Browse link" type="button">
            <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#275d78] text-[14px] whitespace-nowrap" data-node-id="2:84">
              Browse all categories
            </p>
          </button>
        </div>
        <div class="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:85" data-name="Category grid">
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:86" data-name="Category card" href="{{ route('categories.show', 'smartphones') }}">
            <div class="bg-[#eff5f7] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:87" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:88" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/1a9ca.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:89" data-name="Category link">
              <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[17px] whitespace-nowrap" data-node-id="2:90">
                Smartphones
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:91" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[12px] whitespace-nowrap" data-node-id="2:93">
              Stay connected, beautifully.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:94" data-name="Category card" href="{{ route('categories.show', 'laptops') }}">
            <div class="bg-[#eff5f7] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:95" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:96" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/ce84b.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:97" data-name="Category link">
              <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[17px] whitespace-nowrap" data-node-id="2:98">
                Laptops
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:99" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[12px] whitespace-nowrap" data-node-id="2:101">
              For your next big idea.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:102" data-name="Category card" href="{{ route('categories.show', 'tablets') }}">
            <div class="bg-[#eff5f7] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:103" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:104" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/0aacd.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:105" data-name="Category link">
              <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[17px] whitespace-nowrap" data-node-id="2:106">
                Tablets
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:107" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[12px] whitespace-nowrap" data-node-id="2:109">
              Possibility, in your hands.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:110" data-name="Category card" href="{{ route('categories.show', 'mobile-accessories') }}">
            <div class="bg-[#eff5f7] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:111" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:112" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/745a4.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:113" data-name="Category link">
              <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[17px] whitespace-nowrap" data-node-id="2:114">
                Mobile accessories
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:115" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[12px] whitespace-nowrap" data-node-id="2:117">
              The details make the difference.
            </p>
          </a>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[72px] pt-[16px] px-[64px] relative shrink-0 w-full" data-catalog id="featured" data-node-id="2:118" data-name="Featured products">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:119" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:120" data-name="Heading">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#275d78] text-[11px]" data-node-id="2:121">
              THE FORME SELECTION
            </p>
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[36px]" data-node-id="2:122">
              Exceptional by design.
            </p>
          </div>
        </div>
        <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:123" data-name="Product filters">
          <div class="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0" data-node-id="2:124" data-name="Category tabs">
            @foreach (['all' => 'All devices', 'smartphones' => 'Smartphones', 'laptops' => 'Laptops', 'tablets' => 'Tablets', 'mobile-accessories' => 'Accessories', 'audio' => 'Audio'] as $slug => $label)
              <button aria-pressed="{{ $slug === 'all' ? 'true' : 'false' }}" class="border border-solid min-h-[38px] px-[18px] py-[10px] relative rounded-full shrink-0 text-[12px] whitespace-nowrap {{ $slug === 'all' ? 'bg-[#275d78] border-[#275d78] text-white' : 'bg-white border-[#d5e1e5] text-[#66777f]' }}" data-selection-category="{{ $slug }}" data-name="Category filter" type="button">{{ $label }}</button>
            @endforeach
          </div>
        </div>
        @include('partials.catalog-toolbar', ['products' => $featuredProducts])
        <div class="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:133" data-name="Product grid">
          <div class="gap-[24px] grid grid-cols-4 w-full max-xl:grid-cols-2 max-sm:grid-cols-1" data-catalog-grid data-selection-grid="all">
            @foreach ($featuredProducts as $product)
              @include('partials.product-card', ['product' => $product, 'catalogOrder' => $loop->index])
            @endforeach
          </div>
          @foreach ($categories as $category)
            <div class="hidden gap-[24px] grid-cols-4 w-full max-xl:grid-cols-2 max-sm:grid-cols-1" data-catalog-grid data-selection-grid="{{ $category->slug }}">
              @foreach ($category->products as $product)
                @include('partials.product-card', ['product' => $product, 'catalogOrder' => $loop->index])
              @endforeach
            </div>
          @endforeach
        </div>
        @include('partials.catalog-empty')
      </div>
      <div class="content-stretch flex h-[496px] items-start overflow-clip relative shrink-0 w-full" id="workspace" data-node-id="2:237" data-name="Curated workspace collection">
        <div class="h-full relative shrink-0 w-[816px]" data-node-id="2:238" data-name="Quiet workspace">
          <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/8a59d.png') }}" />
        </div>
        <div class="theme-editorial content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px overflow-clip p-[56px] relative" data-node-id="2:239" data-name="Collection story">
          <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bdd0d8] text-[11px] whitespace-nowrap" data-node-id="2:240">
            THE WORKSPACE EDIT
          </p>
          <div class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[44px] text-white w-[min-content]" data-node-id="2:241">
            <p class="leading-[1.12] mb-0">Less distraction.</p>
            <p class="leading-[1.12]">More possibility.</p>
          </div>
          <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#bdd0d8] text-[14px] w-[min-content]" data-node-id="2:242">
            Create a space that works as beautifully as it looks. Explore devices and small essentials for a more focused day.
          </p>
          <button class="bg-white border border-[#d5e1e5] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-scroll-target="#accessories" data-node-id="2:243" data-name="Shopping action" type="button">
            <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[14px] whitespace-nowrap" data-node-id="2:244">
              Build your workspace
            </p>
            <div class="relative shrink-0 size-[16px]" data-node-id="2:245" data-name="arrow-right">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/0775e.svg') }}" />
            </div>
          </button>
          <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bdd0d8] text-[11px] whitespace-nowrap" data-node-id="2:247">
            Laptops · Keyboards · Everyday accessories
          </p>
        </div>
      </div>
      <div class="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[72px] relative shrink-0 w-full" id="accessories" data-node-id="2:248" data-name="Everyday essentials">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:249" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:250" data-name="Heading">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#275d78] text-[11px]" data-node-id="2:251">
              SMALL DETAILS. BIG DIFFERENCE.
            </p>
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f] text-[36px]" data-node-id="2:252">
              Complete your everyday.
            </p>
          </div>
        </div>
        <div class="grid gap-[24px] grid-cols-4 relative w-full max-xl:grid-cols-2 max-sm:grid-cols-1" data-name="Accessories grid">
          @foreach ($essentialProducts as $product)
            @include('partials.product-card', ['product' => $product, 'catalogOrder' => $loop->index])
          @endforeach
        </div>
      </div>
      <div class="[word-break:break-word] bg-[#eff5f7] content-stretch flex flex-col gap-[28px] items-center leading-[normal] not-italic overflow-clip px-[64px] py-[36px] relative shrink-0 w-full whitespace-nowrap" data-node-id="2:355" data-name="Selected brands">
        <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#66777f] text-[10px]" data-node-id="2:356">
          THE BRANDS YOU TRUST. THE SELECTION YOU DESERVE.
        </p>
        <div class="content-stretch flex items-center justify-between overflow-clip px-[72px] relative shrink-0 text-[#1d292f] w-full" data-node-id="2:357" data-name="Brand names">
          <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[28px]" data-node-id="2:358">
            Apple
          </p>
          <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[22px]" data-node-id="2:359">
            SAMSUNG
          </p>
          <p class="font-['DM_Sans'] font-semibold font-bold relative shrink-0 text-[28px]" data-node-id="2:360">
            SONY
          </p>
          <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[28px]" data-node-id="2:361">
            logitech
          </p>
          <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[28px]" data-node-id="2:362">
            belkin
          </p>
          <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[28px]" data-node-id="2:363">
            Microsoft
          </p>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[24px] pt-[56px] px-[64px] relative shrink-0 w-full" id="footer" data-node-id="2:403" data-name="Store footer">
        <div class="content-stretch flex gap-[72px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:404" data-name="Footer navigation">
          <div class="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[348px]" data-node-id="2:405" data-name="Brand and product focus">
            <p class="[word-break:break-word] font-['DM_Sans'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d292f] text-[32px] whitespace-nowrap" data-node-id="2:406">
              FORME
            </p>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#66777f] text-[13px] w-[280px]" data-node-id="2:407">
              Curated technology for a better everyday.
            </p>
            <div class="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="2:408" data-name="Product focus">
              <div class="relative shrink-0 size-[18px]" data-node-id="2:409" data-name="camera">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/0eaee.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#275d78] text-[12px] whitespace-nowrap" data-node-id="2:411">
                Explore devices, accessories and everyday essentials.
              </p>
            </div>
            <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[10px] whitespace-nowrap" data-node-id="2:412">
              Smartphones · Laptops · Tablets · Audio · Accessories
            </p>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:413" data-name="Navigation group">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f]" data-node-id="2:414">
              Explore
            </p>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:415" href="{{ route('categories.show', 'smartphones') }}">
              Smartphones
            </a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:416" href="{{ route('categories.show', 'laptops') }}">
              Laptops
            </a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:417" href="{{ route('categories.show', 'tablets') }}">
              Tablets
            </a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:418" href="{{ route('categories.show', 'mobile-accessories') }}">
              Mobile accessories
            </a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:419" href="{{ route('categories.show', 'audio') }}">
              Audio
            </a>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:420" data-name="Navigation group">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f]" data-node-id="2:421">
              Collections
            </p>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" href="{{ route('collections.show', 'everyday-edit') }}">The everyday edit</a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" href="{{ route('collections.show', 'workspace-edit') }}">The workspace edit</a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" href="{{ route('collections.show', 'audio-essentials') }}">Audio essentials</a>
            <a class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" href="{{ route('collections.show', 'new-arrivals') }}">New arrivals</a>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:427" data-name="Navigation group">
            <p class="font-['DM_Sans'] font-medium relative shrink-0 text-[#1d292f]" data-node-id="2:428">
              Product focus
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:429">
              Camera-first devices
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:430">
              All-day battery life
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:431">
              Premium materials
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]" data-node-id="2:432">
              Everyday essentials
            </p>
            <p class="font-['DM_Sans'] font-normal relative shrink-0 text-[#66777f]">Workspace accessories</p>
          </div>
        </div>
        <div class="bg-[#d5e1e5] h-px relative shrink-0 w-full" data-node-id="2:446" data-name="Footer divider"></div>
        <div class="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="2:447" data-name="Copyright">
          <p class="[word-break:break-word] font-['DM_Sans'] font-normal leading-[normal] not-italic relative shrink-0 text-[#66777f] text-[10px] whitespace-nowrap" data-node-id="2:448">
            © 2026 Forme. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    <div class="fixed hidden inset-0 z-[100]" data-header-panel>
      <button aria-label="Close panel" class="absolute bg-[rgba(20,42,54,0.38)] inset-0 w-full" data-close-panel type="button"></button>
      <section aria-labelledby="header-panel-title" aria-modal="true" class="absolute bg-white flex flex-col h-full p-[32px] right-0 shadow-[-16px_0_48px_rgba(29,41,47,0.16)] top-0 w-[min(420px,100vw)]" role="dialog">
        <div class="border-[#d5e1e5] border-b flex items-center justify-between pb-[22px]">
          <div>
            <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[10px]">FORME</p>
            <p class="font-['DM_Sans'] font-medium mt-[6px] text-[#1d292f] text-[26px]" data-panel-title id="header-panel-title"></p>
          </div>
          <button aria-label="Close panel" class="border border-[#d5e1e5] flex items-center justify-center rounded-full size-[36px] text-[#1d292f] text-[22px]" data-close-panel type="button">×</button>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center text-center" data-panel-content></div>
      </section>
    </div>
  </body>
</html>
