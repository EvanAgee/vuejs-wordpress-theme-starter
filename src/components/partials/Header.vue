<template>
  <nav class="site-header flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="site-header__interior flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.43 148.01" style="width: 80px;">
          <title>vwp-glyph</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path class="logo-cls-1" d="M176.77,10.33,116.18,148H65L0,.42H59.92L91,82.69,122.12.42" />
              <path
                class="logo-cls-1"
                d="M122.12.42h51.46l0,.14,22.6,70.2L222.06,0h46.2L294.1,70.76,316.74.42h55.12L319.49,148H272.83L244.7,75.16,216.57,148H169.92L119.76,6.67"
              />
              <path
                class="logo-cls-1"
                d="M342.81.42h72c42.54,0,71.58,17.37,71.58,52.13V53c0,35.38-29.5,54.22-72.72,54.22H396.32V147H342.81Zm67.92,71.81c13.72,0,22.87-5.66,22.87-16.12v-.42c0-10.68-8.46-16.12-22.64-16.12H396.32V72.23Z"
              />
            </g>
          </g>
        </svg>
      </router-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Tailwind Docs</a
        >
      </div>
    </div>
  </nav>
</template>

<style type="postcss" scoped>
.logo-cls-1 {
  fill: #ffffff;
}

.site-header {
  background: linear-gradient(to right, #92025f, #3b1e58);
}
</style>
