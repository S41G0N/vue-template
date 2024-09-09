<template>
  <header class="flex flex-col items-center py-8 bg-gray-50">
    <img alt="Vue logo" class="logo w-32 h-32 mb-6" src="@/assets/logo.svg" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300">Home</RouterLink>
      </nav>
    </div>
  </header>
  <div class="max-w-2xl mx-auto mt-8 text-xl font-semibold text-blue-600 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    THIS IS THE DEFAULT VUE COMPONENT STYLED BY TAILWINDCSS
  </div>
</template>
