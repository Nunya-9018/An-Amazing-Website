<template>
    <div class="bg-black h-screen">
        <Navbar/>
        <slot/>
    </div>
</template>

<script setup>
useHead({
  title: 'An-Amazing-Website',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>

