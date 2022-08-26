<template>
  <div class="sm:pt-2">
    <div class="bg-neutral-900 text-violet-700 text-center w-2/12 ml-auto mr-auto p-3 rounded-lg grid grid-cols-3 divide-x divide-black">
        <div><NuxtLink to="/" class="no-underline hover:underline hover:text-violet-500 ">Home</NuxtLink></div>
        <div class="blog"><NuxtLink to="/blog" class="no-underline hover:underline hover:text-violet-500">Blog</NuxtLink></div>
        <div><NuxtLink to="/about" class="no-underline hover:underline hover:text-violet-500">About</NuxtLink></div>
    </div>
  </div>
</template>

<style>
a.router-link-exact-active {
  color: #8b5cf6;
  text-decoration: underline;
  font-weight: bold;
}

.blog .router-link-active {
  color: #8b5cf6;
  text-decoration: underline;
  font-weight: bold;
}
</style>