<template>
    <div class="relative items-top justify-center h-14 bg-gray-800 sm:items-center sm:pt-1">
        <div class="bg-gray-600 overflow-hidden w-3/12 shadow text-center sm:rounded-md p-3 m-auto">
            <div class="grid grid-cols-3 divide-x divide-gray-800 ">
                <div><NuxtLink to="/" class="no-underline hover:underline hover:text-seafoam-green">Home</NuxtLink></div>
                <div><NuxtLink to="/test" class="no-underline hover:underline hover:text-seafoam-green">test</NuxtLink></div>
                <div><NuxtLink to="/about" class="no-underline hover:underline hover:text-seafoam-green">about</NuxtLink></div>
            </div>
        </div>
    </div>
</template>


<style>
a.nuxt-link-active {
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
  text-decoration: underline;
}
</style>