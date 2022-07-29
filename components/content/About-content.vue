<template>
    <div class="h-3/4 sm:container p-6 bg-neutral-900 text-white rounded-lg mr-auto ml-auto mt-8">
        <div class="max-h-4/6 w-2/4 container border-neutral-600 border-2 rounded-sm p-2">
            <div class="float-left pr-2"> <img src="https://s.gravatar.com/avatar/7090dd17bef42fc12a6824ff9ca7aebc?s=76" /></div>
            <h1 class="text-xl underline">Hello, I'm {{ info.name }}</h1>
            <p class="break-words">{{ info.bio }}</p>
       </div>
       <div class="max-h-4/6 w-2/4 container border-neutral-600 border-2 rounded-sm p-2">
       </div>
    </div>
</template>

<script setup>
const { data: discord } = await useFetch(`https://api.lanyard.rest/v1/users/382579396848123914`, { pick: ['data'] })
const { data: info } = await useFetch('/api/info', {pick: ['name', 'bio']}) 
</script>