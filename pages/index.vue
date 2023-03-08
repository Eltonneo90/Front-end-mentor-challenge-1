<template>
  <section>
    <div
      class="flex flex-col my-4 items-center justify-center md:flex-row-reverse md:mx-10 md:mb-20"
    >
      <!-- Image mobile -->
      <div class="w-full h-auto md:hidden">
        <img src="~/assets/img/image-hero-mobile.png" alt="Hero Image" />
      </div>
      <div class="hidden md:flex md:h-[550px] md:ml-4">
        <img src="~/assets/img/image-hero-desktop.png" alt="Hero Image" />
      </div>

      <!-- Left container -->
      <Homeleft></Homeleft>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
