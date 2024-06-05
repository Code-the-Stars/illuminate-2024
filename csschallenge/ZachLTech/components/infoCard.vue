<template>
    <div class="sm:max-w-sm rounded-lg shadow bg-[#060A2C] transition-all sm:hover:-translate-y-5">
        <img class="rounded-t-lg w-[920px] h-[200px] sm:h-[260px]" :src="image" alt="" />
        <div class="sm:p-5 px-2 py-1">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">{{ title }}</h5>
            <div class="w-auto mb-4 h-[2px] bg-slate-300 rounded"></div>
            <p class="mb-3 font-normal text-lg text-gray-400 text-center">{{ description }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            image: {
                type: String,
                default: '/coding-in-the-classroom.png'
            },
            title: {
                type: String,
                default: 'Card Title Here'
            },
            description: {
                type: String,
                default: 'Small description here for the event/opportunity attached to this hackathon'
            },
        }
    }
</script>