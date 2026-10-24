<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Curated technology for a better everyday.">
    <title>Forme — Premium Technology Storefront</title>
    @vite(['src/index.css', 'resources/js/storefront.js'])
  </head>
  <body>
    <div class="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="2:3" data-name="FORME — Premium technology storefront">
      <div class="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full z-40" data-node-id="2:4" data-name="Retail navigation">
        <div class="bg-[#202d27] content-stretch flex h-[32px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="2:5" data-name="Store announcement">
          <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="2:6">
            Curated devices, thoughtful essentials and everyday accessories.
          </p>
        </div>
        <div class="bg-white content-stretch flex h-[80px] items-center justify-between overflow-visible px-[64px] relative shrink-0 w-full" data-node-id="2:7" data-name="Main navigation">
          <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[30px] whitespace-nowrap" data-node-id="2:8">
            FORME
          </p>
          <div class="bg-[#f4f5f1] content-stretch flex gap-[12px] h-[40px] items-center px-[16px] relative shrink-0 w-[360px]" data-node-id="2:9" data-name="Product search">
            <div class="relative shrink-0 size-[17px]" data-node-id="2:10" data-name="search">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/e30e9.svg') }}" />
            </div>
            <input aria-label="Search products" class="bg-transparent flex-1 font-['Inter:Regular'] outline-none text-[#202522] text-[12px] placeholder:text-[#717772]" data-product-search placeholder="Search devices, brands and essentials" type="search">
            <div class="absolute bg-white border border-[#dfe3dc] hidden left-0 p-[8px] rounded-[4px] shadow-[0_16px_40px_rgba(32,37,34,0.14)] top-[48px] w-full z-50" data-search-results role="listbox"></div>
          </div>
          <div class="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2:13" data-name="Account actions">
            <button aria-label="Open account menu" class="relative shrink-0 size-[20px]" data-open-panel="account" data-node-id="2:14" data-name="user-round" type="button">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/b4eb0.svg') }}" />
            </button>
            <button aria-label="Open wishlist" class="relative shrink-0 size-[20px]" data-open-panel="wishlist" data-node-id="2:16" data-name="heart" type="button">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/4ff0c.svg') }}" />
            </button>
            <button aria-label="Open shopping bag" class="content-stretch flex gap-[8px] items-center relative shrink-0" data-open-panel="bag" data-node-id="2:18" data-name="Shopping bag" type="button">
              <div class="relative shrink-0 size-[20px]" data-node-id="2:19" data-name="shopping-bag">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/991a5.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[12px] whitespace-nowrap" data-node-id="2:21">
                Bag (0)
              </p>
            </button>
          </div>
        </div>
        <div class="border-[#dfe3dc] border-b border-solid border-t content-stretch flex h-[44px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="2:22" data-name="Category navigation">
          <div class="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="2:23" data-name="Shop destinations">
            <button class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d]" data-nav-category="all" data-node-id="2:24" type="button">
              Shop all
            </button>
            <button class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#202522]" data-nav-category="smartphones" data-node-id="2:25" type="button">
              Smartphones
            </button>
            <button class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#202522]" data-nav-category="laptops" data-node-id="2:26" type="button">
              Laptops
            </button>
            <button class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#202522]" data-nav-category="tablets" data-node-id="2:27" type="button">
              Tablets
            </button>
            <button class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#202522]" data-nav-category="mobile-accessories" data-node-id="2:28" type="button">
              Mobile accessories
            </button>
            <button class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#202522]" data-nav-category="audio" data-node-id="2:29" type="button">
              Audio
            </button>
          </div>
          <div class="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="2:30" data-name="Editorial destinations">
            <button class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-nav-category="new-arrivals" data-node-id="2:31" type="button">
              New arrivals
            </button>
          </div>
        </div>
      </div>
      <div class="bg-[#edefe8] content-stretch flex h-[600px] items-start relative shrink-0 w-full" data-node-id="2:32" data-name="Hero collection">
        <div class="content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip pb-[32px] pl-[64px] pr-[48px] pt-[72px] relative shrink-0 w-[608px]" data-node-id="2:33" data-name="Collection introduction">
          <div class="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="2:34" data-name="Season label">
            <div class="bg-[#245c4d] h-px relative shrink-0 w-[24px]" data-node-id="2:35" data-name="Accent rule"></div>
            <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[11px] whitespace-nowrap" data-node-id="2:36">
              THE EVERYDAY, ELEVATED
            </p>
          </div>
          <div class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#202522] text-[54px] w-[min-content]" data-node-id="2:37">
            <p class="leading-[1.1] mb-0">Good design.</p>
            <p class="leading-[1.1] mb-0">Great technology.</p>
            <p class="leading-[1.1]">Better everyday.</p>
          </div>
          <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.65] not-italic relative shrink-0 text-[#717772] text-[15px] w-[408px]" data-node-id="2:38">
            Discover thoughtfully selected devices and essentials. Less noise. More of what matters.
          </p>
          <div class="content-stretch flex items-start overflow-clip pt-[6px] relative shrink-0" data-node-id="2:39" data-name="Hero actions">
            <button class="bg-[#245c4d] border border-[#245c4d] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-scroll-target="#featured" data-node-id="2:40" data-name="Shopping action" type="button">
              <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="2:41">
                Explore the collection
              </p>
              <div class="relative shrink-0 size-[16px]" data-node-id="2:42" data-name="arrow-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/c4615.svg') }}" />
              </div>
            </button>
          </div>
          <div class="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal items-center justify-between leading-[normal] not-italic overflow-clip pt-[10px] relative shrink-0 text-[#717772] text-[10px] w-full whitespace-nowrap" data-node-id="2:44" data-name="Collection edition">
            <p class="relative shrink-0" data-node-id="2:45">
              CURATED FOR HOW YOU LIVE
            </p>
            <p class="relative shrink-0" data-node-id="2:46">
              01 / 03
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="2:47" data-name="Hero photography">
          <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:48" data-name="Everyday technology still life">
            <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/7c3c6.png') }}" />
          </div>
          <div class="absolute bg-white bottom-[28px] content-stretch flex items-center left-[32px] overflow-clip p-[18px] w-[332px]" data-node-id="2:49" data-name="Featured collection note">
            <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="2:50" data-name="Collection information">
              <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[10px]" data-node-id="2:51">
                THE ESSENTIAL EDIT
              </p>
              <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[14px]" data-node-id="2:52">
                Built for your everyday rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-[#dfe3dc] border-b border-solid content-stretch flex gap-[40px] items-start overflow-clip px-[64px] py-[28px] relative shrink-0 w-full" data-node-id="2:53" data-name="Product focus">
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:54" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:55" data-name="camera">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/a8096.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:57" data-name="Details">
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:58">
              Camera-first devices
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:59">
              Capture life with better detail and clarity.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:60" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:61" data-name="package-check">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8135e.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:63" data-name="Details">
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:64">
              All-day battery life
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:65">
              Power through your day without interruption.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:66" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:67" data-name="badge-check">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/a7052.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:69" data-name="Details">
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:70">
              Premium materials
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:71">
              Thoughtful finishes that feel better in hand.
            </p>
          </div>
        </div>
        <div class="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px overflow-clip relative" data-node-id="2:72" data-name="Product focus">
          <div class="relative shrink-0 size-[25px]" data-node-id="2:73" data-name="messages-square">
            <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/aea8c.svg') }}" />
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:75" data-name="Details">
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[12px]" data-node-id="2:76">
              Everyday essentials
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772] text-[11px]" data-node-id="2:77">
              Accessories that complement your daily routine.
            </p>
          </div>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[56px] pt-[64px] px-[64px] relative shrink-0 w-full" id="categories" data-node-id="2:78" data-name="Category discovery">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:79" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:80" data-name="Heading">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:81">
              FIND YOUR NEXT ESSENTIAL
            </p>
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:82">
              Technology, in its element.
            </p>
          </div>
          <button class="content-stretch flex items-center overflow-clip pb-[5px] relative shrink-0" data-scroll-target="#featured" data-node-id="2:83" data-name="Browse link" type="button">
            <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[14px] whitespace-nowrap" data-node-id="2:84">
              Browse all categories
            </p>
          </button>
        </div>
        <div class="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:85" data-name="Category grid">
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:86" data-name="Category card" href="{{ route('categories.show', 'smartphones') }}">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:87" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:88" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/1a9ca.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:89" data-name="Category link">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:90">
                Smartphones
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:91" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:93">
              Stay connected, beautifully.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:94" data-name="Category card" href="{{ route('categories.show', 'laptops') }}">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:95" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:96" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/ce84b.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:97" data-name="Category link">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:98">
                Laptops
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:99" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:101">
              For your next big idea.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:102" data-name="Category card" href="{{ route('categories.show', 'tablets') }}">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:103" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:104" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/0aacd.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:105" data-name="Category link">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:106">
                Tablets
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:107" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:109">
              Possibility, in your hands.
            </p>
          </a>
          <a class="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-w-px overflow-clip relative" data-node-id="2:110" data-name="Category card" href="{{ route('categories.show', 'mobile-accessories') }}">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[188px] items-start overflow-clip p-[20px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:111" data-name="Category photography">
              <div class="flex-[1_0_0] min-h-px relative w-full" data-node-id="2:112" data-name="Category product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/745a4.png') }}" />
              </div>
            </div>
            <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:113" data-name="Category link">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#202522] text-[17px] whitespace-nowrap" data-node-id="2:114">
                Mobile accessories
              </p>
              <div class="relative shrink-0 size-[18px]" data-node-id="2:115" data-name="arrow-up-right">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8d0f0.svg') }}" />
              </div>
            </div>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:117">
              The details make the difference.
            </p>
          </a>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[72px] pt-[16px] px-[64px] relative shrink-0 w-full" id="featured" data-node-id="2:118" data-name="Featured products">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:119" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:120" data-name="Heading">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:121">
              THE FORME SELECTION
            </p>
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:122">
              Exceptional by design.
            </p>
          </div>
        </div>
        <div class="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:123" data-name="Product filters">
          <div class="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="2:124" data-name="Category tabs">
            <div class="bg-[#245c4d] border border-[#245c4d] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:125" data-name="Category filter">
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="2:126">
                All devices
              </p>
            </div>
            <div class="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:127" data-name="Category filter">
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:128">
                Smartphones
              </p>
            </div>
            <div class="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:129" data-name="Category filter">
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:130">
                Laptops
              </p>
            </div>
            <div class="bg-white border border-[#dfe3dc] border-solid content-stretch flex items-start overflow-clip px-[18px] py-[10px] relative rounded-[100px] shrink-0" data-node-id="2:131" data-name="Category filter">
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[12px] whitespace-nowrap" data-node-id="2:132">
                Tablets
              </p>
            </div>
          </div>
        </div>
        <div class="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:133" data-name="Product grid">
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="smartphones" data-node-id="2:134" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:135" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:136" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/2d2a2.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:137" data-name="Product badge">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:138">
                  OUR PICK
                </p>
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:139" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:140" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:142" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:143">
                APPLE
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:144">
                iPhone 13 Pro
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:145">
                128GB · Unlocked · Graphite
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:146" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:147" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:149">
                  4.8
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:150">
                  (124 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:151" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:152">
                  $999.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:153" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/f48d4.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:157" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:158" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:160">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="laptops" data-node-id="2:161" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:162" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:163" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/b0999.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:164" data-name="Product badge">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:165">
                  BESTSELLER
                </p>
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:166" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:167" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:169" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:170">
                APPLE
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:171">
                MacBook Pro 14″
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:172">
                M1 Pro · 16GB RAM · 512GB SSD
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:173" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:174" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:176">
                  4.9
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:177">
                  (86 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:178" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:179">
                  $1,999.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:180" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/8cea2.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:183" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:184" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:186">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="tablets" data-node-id="2:187" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:188" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:189" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/a1a1c.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[13.67px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:190" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:191" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:193" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:194">
                SAMSUNG
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:195">
                Galaxy Tab S8
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:196">
                11″ display · 128GB · Wi-Fi
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:197" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:198" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:200">
                  4.7
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:201">
                  (58 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:202" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:203">
                  $699.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:204" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/4c43d.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:208" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:209" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:211">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="smartphones" data-node-id="2:212" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:213" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:214" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/46886.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:215" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:216" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:218" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:219">
                SAMSUNG
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:220">
                Galaxy S23 Ultra
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:221">
                256GB · Unlocked · Phantom black
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:222" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:223" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:225">
                  4.8
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:226">
                  (92 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:227" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:228">
                  $1,199.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:229" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/6a280.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:233" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:234" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:236">
                Add to bag
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-stretch flex h-[496px] items-start overflow-clip relative shrink-0 w-full" id="workspace" data-node-id="2:237" data-name="Curated workspace collection">
        <div class="h-full relative shrink-0 w-[816px]" data-node-id="2:238" data-name="Quiet workspace">
          <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/8a59d.png') }}" />
        </div>
        <div class="bg-[#202d27] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-w-px overflow-clip p-[56px] relative" data-node-id="2:239" data-name="Collection story">
          <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#bcc8bf] text-[11px] whitespace-nowrap" data-node-id="2:240">
            THE WORKSPACE EDIT
          </p>
          <div class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[44px] text-white w-[min-content]" data-node-id="2:241">
            <p class="leading-[1.12] mb-0">Less distraction.</p>
            <p class="leading-[1.12]">More possibility.</p>
          </div>
          <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] min-w-full not-italic relative shrink-0 text-[#bcc8bf] text-[14px] w-[min-content]" data-node-id="2:242">
            Create a space that works as beautifully as it looks. Explore devices and small essentials for a more focused day.
          </p>
          <button class="bg-white border border-[#dfe3dc] border-solid content-stretch flex gap-[16px] h-[48px] items-center overflow-clip px-[22px] relative rounded-[4px] shrink-0" data-scroll-target="#accessories" data-node-id="2:243" data-name="Shopping action" type="button">
            <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[14px] whitespace-nowrap" data-node-id="2:244">
              Build your workspace
            </p>
            <div class="relative shrink-0 size-[16px]" data-node-id="2:245" data-name="arrow-right">
              <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/0775e.svg') }}" />
            </div>
          </button>
          <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#bcc8bf] text-[11px] whitespace-nowrap" data-node-id="2:247">
            Laptops · Keyboards · Everyday accessories
          </p>
        </div>
      </div>
      <div class="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[72px] relative shrink-0 w-full" id="accessories" data-node-id="2:248" data-name="Everyday essentials">
        <div class="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="2:249" data-name="Section heading">
          <div class="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="2:250" data-name="Heading">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#245c4d] text-[11px]" data-node-id="2:251">
              SMALL DETAILS. BIG DIFFERENCE.
            </p>
            <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#202522] text-[36px]" data-node-id="2:252">
              Complete your everyday.
            </p>
          </div>
        </div>
        <div class="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:253" data-name="Accessories grid">
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="audio" data-new-arrival data-node-id="2:254" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:255" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:256" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/8f66f.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:257" data-name="Product badge">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:258">
                  NEW ARRIVAL
                </p>
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:259" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:260" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:262" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:263">
                APPLE
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:264">
                AirPods Pro
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:265">
                Active noise cancellation · USB-C
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:266" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:267" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:269">
                  4.8
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:270">
                  (108 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:271" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:272">
                  $249.00
                </p>
                <div class="relative shrink-0 size-[12px]" data-node-id="2:273" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/ca37d.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:275" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:276" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:278">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="mobile-accessories" data-new-arrival data-node-id="2:279" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:280" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:281" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/25fc8.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-start left-[16px] overflow-clip px-[10px] py-[6px] rounded-[4px] top-[16px]" data-node-id="2:282" data-name="Product badge">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[10px] whitespace-nowrap" data-node-id="2:283">
                  NEW ARRIVAL
                </p>
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:284" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:285" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:287" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:288">
                BELKIN
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:289">
                BoostCharge Pro 3-in-1
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:290">
                15W wireless charging · MagSafe
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:291" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:292" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:294">
                  4.7
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:295">
                  (42 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:296" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:297">
                  $149.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[30px]" data-node-id="2:298" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/6bf7d.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:301" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:302" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:304">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="mobile-accessories" data-node-id="2:305" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:306" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:307" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/a3684.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[13.67px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:308" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:309" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:311" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:312">
                LOGITECH
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:313">
                MX Keys Mini
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:314">
                Wireless keyboard · Graphite
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:315" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:316" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:318">
                  4.9
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:319">
                  (67 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:320" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:321">
                  $99.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:322" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/c4251.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:326" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:327" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:329">
                Add to bag
              </p>
            </div>
          </div>
          <div class="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-product-category="audio" data-node-id="2:330" data-name="Product card">
            <div class="bg-[#f4f5f1] content-stretch flex flex-col h-[266px] items-center justify-center overflow-clip p-[32px] relative rounded-[4px] shrink-0 w-full" data-node-id="2:331" data-name="Product photography">
              <div class="h-[202px] relative shrink-0 w-full" data-node-id="2:332" data-name="Product">
                <img alt="" class="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="{{ asset('assets/6d140.png') }}" />
              </div>
              <div class="absolute bg-white content-stretch flex items-center justify-center overflow-clip right-[14px] rounded-[100px] size-[32px] top-[14px]" data-node-id="2:333" data-name="Save product">
                <div class="relative shrink-0 size-[17px]" data-node-id="2:334" data-name="heart">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/036e3.svg') }}" />
                </div>
              </div>
            </div>
            <div class="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:336" data-name="Product details">
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:337">
                SONY
              </p>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#202522] text-[18px] w-[min-content]" data-node-id="2:338">
                WH-1000XM5
              </p>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#717772] text-[12px] w-[min-content]" data-node-id="2:339">
                Noise cancelling · 30-hour battery
              </p>
              <div class="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-node-id="2:340" data-name="Reviews">
                <div class="relative shrink-0 size-[12px]" data-node-id="2:341" data-name="star">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/976b9.svg') }}" />
                </div>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#202522] text-[11px] whitespace-nowrap" data-node-id="2:343">
                  4.8
                </p>
                <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[11px] whitespace-nowrap" data-node-id="2:344">
                  (96 reviews)
                </p>
              </div>
              <div class="content-stretch flex items-center justify-between overflow-clip pb-[4px] pt-[6px] relative shrink-0 w-full" data-node-id="2:345" data-name="Price and finishes">
                <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[18px] whitespace-nowrap" data-node-id="2:346">
                  $399.00
                </p>
                <div class="h-[12px] relative shrink-0 w-[48px]" data-node-id="2:347" data-name="Color options">
                  <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/eac21.svg') }}" />
                </div>
              </div>
            </div>
            <div class="border border-[#dfe3dc] border-solid content-stretch flex gap-[10px] h-[42px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="2:351" data-name="Add to bag">
              <div class="relative shrink-0 size-[15px]" data-node-id="2:352" data-name="plus">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/1010f.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:354">
                Add to bag
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="[word-break:break-word] bg-[#f4f5f1] content-stretch flex flex-col gap-[28px] items-center leading-[normal] not-italic overflow-clip px-[64px] py-[36px] relative shrink-0 w-full whitespace-nowrap" data-node-id="2:355" data-name="Selected brands">
        <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[#717772] text-[10px]" data-node-id="2:356">
          THE BRANDS YOU TRUST. THE SELECTION YOU DESERVE.
        </p>
        <div class="content-stretch flex items-center justify-between overflow-clip px-[72px] relative shrink-0 text-[#202522] w-full" data-node-id="2:357" data-name="Brand names">
          <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:358">
            Apple
          </p>
          <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[22px]" data-node-id="2:359">
            SAMSUNG
          </p>
          <p class="font-['Inter:Bold'] font-bold relative shrink-0 text-[28px]" data-node-id="2:360">
            SONY
          </p>
          <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:361">
            logitech
          </p>
          <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:362">
            belkin
          </p>
          <p class="font-['Inter:Medium'] font-medium relative shrink-0 text-[28px]" data-node-id="2:363">
            Microsoft
          </p>
        </div>
      </div>
      <div class="content-stretch flex flex-col gap-[40px] items-start overflow-clip pb-[24px] pt-[56px] px-[64px] relative shrink-0 w-full" id="footer" data-node-id="2:403" data-name="Store footer">
        <div class="content-stretch flex gap-[72px] items-start overflow-clip relative shrink-0 w-full" data-node-id="2:404" data-name="Footer navigation">
          <div class="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[348px]" data-node-id="2:405" data-name="Brand and product focus">
            <p class="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#202522] text-[32px] whitespace-nowrap" data-node-id="2:406">
              FORME
            </p>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.7] not-italic relative shrink-0 text-[#717772] text-[13px] w-[280px]" data-node-id="2:407">
              Curated technology for a better everyday.
            </p>
            <div class="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="2:408" data-name="Product focus">
              <div class="relative shrink-0 size-[18px]" data-node-id="2:409" data-name="camera">
                <img alt="" class="absolute block inset-0 max-w-none size-full" src="{{ asset('assets/0eaee.svg') }}" />
              </div>
              <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#245c4d] text-[12px] whitespace-nowrap" data-node-id="2:411">
                Explore devices, accessories and everyday essentials.
              </p>
            </div>
            <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:412">
              Smartphones · Laptops · Tablets · Audio · Accessories
            </p>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:413" data-name="Navigation group">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:414">
              Explore
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:415">
              Smartphones
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:416">
              Laptops
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:417">
              Tablets
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:418">
              Mobile accessories
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:419">
              Audio
            </p>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:420" data-name="Navigation group">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:421">
              Product focus
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:422">
              Camera-first devices
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:423">
              All-day battery life
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:424">
              Premium materials
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:425">
              Everyday essentials
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:426">
              Workspace accessories
            </p>
          </div>
          <div class="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[12px] whitespace-nowrap" data-node-id="2:427" data-name="Navigation group">
            <p class="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#202522]" data-node-id="2:428">
              Collections
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:429">
              The everyday edit
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:430">
              The workspace edit
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:431">
              Audio essentials
            </p>
            <p class="font-['Inter:Regular'] font-normal relative shrink-0 text-[#717772]" data-node-id="2:432">
              New arrivals
            </p>
          </div>
        </div>
        <div class="bg-[#dfe3dc] h-px relative shrink-0 w-full" data-node-id="2:446" data-name="Footer divider"></div>
        <div class="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-node-id="2:447" data-name="Copyright">
          <p class="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#717772] text-[10px] whitespace-nowrap" data-node-id="2:448">
            © 2026 Forme. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    <div class="fixed hidden inset-0 z-[100]" data-header-panel>
      <button aria-label="Close panel" class="absolute bg-[rgba(32,37,34,0.38)] inset-0 w-full" data-close-panel type="button"></button>
      <section aria-labelledby="header-panel-title" aria-modal="true" class="absolute bg-white flex flex-col h-full p-[32px] right-0 shadow-[-16px_0_48px_rgba(32,37,34,0.16)] top-0 w-[min(420px,100vw)]" role="dialog">
        <div class="border-[#dfe3dc] border-b flex items-center justify-between pb-[22px]">
          <div>
            <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[10px]">FORME</p>
            <p class="font-['Inter:Medium'] mt-[6px] text-[#202522] text-[26px]" data-panel-title id="header-panel-title"></p>
          </div>
          <button aria-label="Close panel" class="border border-[#dfe3dc] flex items-center justify-center rounded-full size-[36px] text-[#202522] text-[22px]" data-close-panel type="button">×</button>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center text-center" data-panel-content></div>
      </section>
    </div>
  </body>
</html>
