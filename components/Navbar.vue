<template>
  <div>
    <div id="mobile-darken-background" class="md:hidden"></div>
    <nav class="reative px-10 py-5 mx-auto text-MediumGray bg-AlmostWhite">
      <div class="flex items-center justify-between">
        <!-- Left side -->
        <div class="flex justify-self-start">
          <img src="~/assets/img/logo.svg" class="pr-10" alt="Company Logo" />
          <ul class="hidden md:flex gap-6">
            <!-- Features -->
            <li class="relative">
              <button
                to="/"
                id="features-button"
                type="button"
                @click="ToggleFeaturesMenu()"
                class="hover:text-AlmostBlack after:inline-block after:align-bottom after:h-4 after:w-4 after:bg-[url('~/assets/img/icon-arrow-down.svg')] after:bg-no-repeat"
              >
                Features
              </button>
              <!-- Features menu -->
              <div
                id="features-menu"
                class="hidden right-2 mt-2 p-2 w-40 rounded-lg shadow-2xl bg-white divide-y divide-gray-100 z-10"
              >
                <ul class="">
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-todo.svg')] before:bg-no-repeat before:pr-5"
                    >
                      Todo List
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-calendar.svg')] before:bg-no-repeat before:pr-5"
                    >
                      Calendar
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-reminders.svg')] before:bg-no-repeat before:pr-5"
                    >
                      Reminders
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100 before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-planning.svg')] before:bg-no-repeat before:pr-5"
                    >
                      Planning
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <!-- Company -->
            <li>
              <button
                to="/"
                id="company-button"
                @click="ToggleCompanyMenu()"
                type="button"
                class="hover:text-AlmostBlack after:inline-block after:align-bottom after:h-4 after:w-4 after:bg-[url('~/assets/img/icon-arrow-down.svg')] after:bg-no-repeat"
              >
                Company
              </button>
              <!-- Company menu -->
              <div
                id="company-menu"
                class="hidden mt-2 p-2 w-32 rounded-lg shadow-2xl bg-white divide-y divide-gray-100 z-10"
              >
                <ul>
                  <li>
                    <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100">
                      History
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100">
                      Our Team
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/" class="block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <!-- Careers -->
            <li>
              <NuxtLink to="/" class="hover:text-AlmostBlack">
                Careers
              </NuxtLink>
            </li>
            <!-- About -->
            <li>
              <NuxtLink to="/" class="hover:text-AlmostBlack"> About </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Right side-->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="flex items-center hover:text-AlmostBlack"
            >Login</NuxtLink
          >
          <NuxtLink
            to="/"
            class="border-MediumGray border-2 rounded-full px-6 py-2 hover:text-AlmostBlack hover:border-AlmostBlack"
          >
            Register
          </NuxtLink>
        </div>

        <!-- Right side mobile hamburger-->
        <button
          id="hamburger-button"
          @click="ToggleHamburgerMenu()"
          class="block hamburger md:hidden focus:outline-none z-50"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Mobile Hamburger Menu -->
      <div class="md:hidden max-h-full">
        <div
          id="hamburger-menu"
          class="hidden flex-col left-1/2 space-y-4 z-40 bg-AlmostWhite max-w-full w-1/2 h-screen pl-7 top-0 pt-12"
        >
          <!-- Mobile Features -->
          <div>
            <button
              id="mobile-features-button"
              type="button"
              @click="ToggleMobileFeaturesMenu()"
              class="hover:text-AlmostBlack after:inline-block after:align-bottom after:h-4 after:w-4 after:bg-[url('~/assets/img/icon-arrow-down.svg')] after:bg-no-repeat"
            >
              Features
            </button>

            <!-- Mobile Features Menu -->
            <div id="mobile-features-menu" class="hidden">
              <ul class="ml-8 space-y-3 pt-4">
                <li
                  class="before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-todo.svg')] before:bg-no-repeat before:pr-5"
                >
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Todo List
                  </NuxtLink>
                </li>
                <li
                  class="before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-calendar.svg')] before:bg-no-repeat before:pr-5"
                >
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Calendar
                  </NuxtLink>
                </li>
                <li
                  class="before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-reminders.svg')] before:bg-no-repeat before:pr-5"
                >
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Reminders
                  </NuxtLink>
                </li>
                <li
                  class="before:inline-block before:align-middle before:h-4 before:w-4 before:bg-[url('~/assets/img/icon-planning.svg')] before:bg-no-repeat before:pr-5"
                >
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Planning
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- Mobile Company -->
          <div>
            <button
              id="mobile-company-button"
              @click="ToggleMobileCompanyMenu()"
              class="hover:text-AlmostBlack after:inline-block after:align-bottom after:h-4 after:w-4 after:bg-[url('~/assets/img/icon-arrow-down.svg')] after:bg-no-repeat"
            >
              Company
            </button>
            <!-- Mobile Company Menu -->
            <div id="mobile-company-menu" class="">
              <ul class="ml-8 space-y-3 pt-4">
                <li>
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    History
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Our Team
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/" class="hover:text-AlmostBlack">
                    Blog
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- Mobile Careers -->
          <NuxtLink to="/" class="hover:text-AlmostBlack">Careers</NuxtLink>

          <!-- Mobile About-->
          <NuxtLink to="/" class="hover:text-AlmostBlack">About</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
function ToggleFeaturesMenu() {
  const features_button = document.getElementById("features-button");
  features_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-down.svg')]"
  );
  features_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-up.svg')]"
  );

  const features_menu = document.getElementById("features-menu");
  features_menu.classList.toggle("hidden");
  features_menu.classList.toggle("absolute");
}

function ToggleCompanyMenu() {
  const company_button = document.getElementById("company-button");
  company_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-down.svg')]"
  );
  company_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-up.svg')]"
  );

  const company_menu = document.getElementById("company-menu");
  company_menu.classList.toggle("hidden");
  company_menu.classList.toggle("absolute");
}

function ToggleMobileFeaturesMenu() {
  const features_button = document.getElementById("mobile-features-button");
  features_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-down.svg')]"
  );
  features_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-up.svg')]"
  );

  const features_menu = document.getElementById("mobile-features-menu");
  features_menu.classList.toggle("hidden");
}

function ToggleMobileCompanyMenu() {
  const mobile_company_button = document.getElementById(
    "mobile-company-button"
  );
  mobile_company_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-down.svg')]"
  );
  mobile_company_button.classList.toggle(
    "after:bg-[url('~/assets/img/icon-arrow-up.svg')]"
  );

  const mobile_company_menu = document.getElementById("mobile-company-menu");
  mobile_company_menu.classList.toggle("hidden");
}

function ToggleHamburgerMenu() {
  const mobile_bg = document.getElementById("mobile-darken-background");
  mobile_bg.classList.toggle("mobile-darken-background-50");

  const hamburger_button = document.getElementById("hamburger-button");
  const hamburger_menu = document.getElementById("hamburger-menu");
  hamburger_menu.classList.toggle("hidden");
  hamburger_menu.classList.toggle("absolute");
  hamburger_menu.classList.toggle("flex");
  hamburger_button.classList.toggle("open");
}
</script>

<style scoped>
.mobile-darken-background-50 {
  z-index: 30;
  position: fixed;
  opacity: 50%;
  width: 100%;
  height: 100%;
  background-color: grey;
}

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>
