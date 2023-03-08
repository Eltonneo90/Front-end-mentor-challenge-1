<template>
  <div
    class="flex flex-col items-center justify-center mt-8 space-y-8 text-center md:text-left md:items-start md:w-1/2 md:space-y-10 md:space-x-4"
  >
    <div class="flex flex-col items-center space-y-4 mx-4 md:space-y-10">
      <h1 class="flex font-bold text-3xl md:text-7xl md:flex-wrap md:max-w-lg">
        Make Remote Work
      </h1>
      <h1 class="flex text-gray-600 md:text-lg md:max-w-lg md:self-start">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar
      </h1>
      <!-- Learn more -->
      <button
        class="rounded-3xl bg-AlmostBlack py-4 px-8 text-white text-lg font-bold mt-5 border-2 border-AlmostBlack md:self-start md:hover:text-AlmostBlack md:hover:bg-white"
      >
        <NuxtLink to="/">Learn more</NuxtLink>
      </button>
    </div>
    <!-- Client companies -->
    <div class="flex justify-evenly space-x-4 items-center my-6 md:w-auto">
      <div>
        <img src="~/assets/img/client-databiz.svg" alt="" class="w-full" />
      </div>

      <div>
        <img src="~/assets/img/client-audiophile.svg" alt="" class="w-full" />
      </div>
      <div>
        <img src="~/assets/img/client-meet.svg" alt="" class="w-full" />
      </div>
      <div>
        <img src="~/assets/img/client-maker.svg" class="w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<stylescoped>

</stylescoped>
