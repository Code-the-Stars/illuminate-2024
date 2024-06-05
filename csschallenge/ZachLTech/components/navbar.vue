<script setup>
    const { scrollToAnchor } = useAnchorScroll({
        toTop: {
            scrollOptions: {
                behavior: 'smooth',
                offsetTop: 0,
            }
        },
    });

    let display = ref('display: none;');
    function toggleMenu(){
        if(display.value == `display: none;`){
            display.value = 'display: block;';
        }
        else{
            display.value = 'display: none;';
        }
    }
</script>

<template>
    <nav class="w-screen flex justify-between px-2 sm:px-8 py-2 items-center fixed backdrop-blur-sm z-10">
        <NuxtLink @click="scrollToAnchor('hero')" class="flex items-center gap-2">
            <img id="Logo" :src="logo" width="40px" height="40px" alt="Logo" class="select none" >
            <h1 class="poetsen select-none">{{ title }}</h1>
        </NuxtLink>
        <div class="flex flex-col sm:hidden">
            <button @click="toggleMenu()" class="menu">
                <img width="25" src="/menu.svg" alt="">
            </button>
            <ul onclick="this.style.display = 'none'" :style="`${display}`" class="menu-list absolute bg-[#060A2C] rounded text-center">
                <li class="m-1 mt-2"><NuxtLink @click="scrollToAnchor('hero')">Home</NuxtLink></li>
                <li class="m-1"><NuxtLink @click="scrollToAnchor('about')">About</NuxtLink></li>
                <li class="m-1"><NuxtLink @click="scrollToAnchor('schedule')">Schedule</NuxtLink></li>
                <li class="m-1"><NuxtLink :href="signupPage" class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Register</NuxtLink></li>
                <li v-if="challenge == true" class="m-1"><NuxtLink @click="scrollToAnchor('fun')">Challenge</NuxtLink></li>
                <li class="m-1"><NuxtLink @click="scrollToAnchor('faq')">FAQ</NuxtLink></li>
                <li class="m-1 mb-2"><NuxtLink @click="scrollToAnchor('contact')">Contact</NuxtLink></li>
            </ul>
        </div>
        <ul class="hidden sm:flex gap-2 items-center rounded"> 
            <li><NuxtLink @click="scrollToAnchor('hero')">Home</NuxtLink></li>
            <li><NuxtLink @click="scrollToAnchor('about')">About</NuxtLink></li>
            <li><NuxtLink @click="scrollToAnchor('schedule')">Schedule</NuxtLink></li>
            <li><NuxtLink class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" :href="signupPage">Register</NuxtLink></li>
            <li v-if="challenge == true"><NuxtLink @click="scrollToAnchor('fun')">Challenge</NuxtLink></li>
            <li><NuxtLink @click="scrollToAnchor('faq')">FAQ</NuxtLink></li>
            <li><NuxtLink @click="scrollToAnchor('contact')">Contact</NuxtLink></li>
        </ul>
    </nav>
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
            challenge: {
                type: Boolean,
                defalut: false
            },
            signupPage: {
                type: String,
                default: 'https://fillout.com'
            }
        }
    }
</script>