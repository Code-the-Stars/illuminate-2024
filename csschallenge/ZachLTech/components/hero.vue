<script setup>
    const { scrollToAnchor } = useAnchorScroll({
        toTop: {
            scrollOptions: {
                behavior: 'smooth',
                offsetTop: 0,
            }
        },
    });
</script>

<template>
        <img width="750" :src="logo" alt="" class="drop-shadow-xl brightness-50 absolute z-0 -translate-y-5 translate-x-1">
        <div class="flex flex-col gap-5 justify-center items-center w-full h-full">
            <h1 class="poetsen text-5xl sm:text-7xl">{{ title }}</h1>
            <p class="text-md sm:text-lg text-center max-w-[500px]">{{ description }}</p>
            <div class="flex gap-2">
                <NuxtLink :href="`${signupPage}`" target="_blank" class="flex justify-center items-center w-24 h-10 bg-black rounded-xl transition-all hover:-translate-y-1"><span class="font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">Join Now</span></NuxtLink>
                <NuxtLink @click="scrollToAnchor('about')" class="flex justify-center items-center w-24 h-10 bg-[rgba(0,0,0,0.3)] border-2 border-black rounded-xl transition-all hover:-translate-y-1">More Info</NuxtLink>
            </div>
        </div>
</template>

<script>
    export default{
        props: {
            logo: {
                type: String,
                default: '/logo.png',
            },
            title: {
                type: String,
                default: 'Hackathon Name'
            },
            description: {
                type: String,
                default: 'Short description of this hackathon i.e. - A (virtual | in-person) hackathon designed for (high-schoolers | college students | ?anyone) to showcase their (coding skills | creativity | etc.)'
            },
            signupPage: {
                type: String,
                default: 'https://www.fillout.com/'
            },
        }
    }
</script>