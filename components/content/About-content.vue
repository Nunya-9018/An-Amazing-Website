<template>
    <div class="h-3/4 sm:container p-6 bg-neutral-900 text-white rounded-lg mr-auto ml-auto mt-8">
        <div class="float-left pr-2">
            <img src="https://s.gravatar.com/avatar/7090dd17bef42fc12a6824ff9ca7aebc?s=128" />
        </div>
        <div>
            <h1 class="text-xl underline">Hello, I'm {{ info.name }}</h1>
            <p>Im 16 and I'm learning web-development (Nuxtjs 3, tailwindcss, Java script, and Type script) currently, and Circuit and Micro Python.</p>
        </div>
    </div>
</template>

<script setup>
const { data: discord } = await useFetch(`https://api.lanyard.rest/v1/users/382579396848123914`, { pick: ['data'] })
const { data: info } = await useFetch('/api/info', {pick: ['name', 'name1']}) 
</script>