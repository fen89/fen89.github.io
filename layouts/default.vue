<template>
  <div>
    <nav
      class="flex items-center justify-between flex-wrap bg-teal-500 p-6 mb-10"
    >
      <router-link
        to="/"
        class="flex items-center flex-shrink-0 text-white mr-6"
      >
        <svg
          class="svg-inline--fa fa-code fa-w-20 w-10 h-5 mr-1"
          width="60"
          height="60"
          viewBox="0 0 640 512"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="code"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">{{ title }}</span>
      </router-link>

      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          @click="collapsed = !collapsed"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
        :class="{ hidden: collapsed }"
      >
        <div class="text-sm lg:flex-grow">
          <nuxt-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >Blog</nuxt-link
          >
        </div>
      </div>
    </nav>

    <section class="container px-4 mx-auto max-w-screen-lg">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '92 % chaos',
      collapsed: true
    }
  }
}
</script>
