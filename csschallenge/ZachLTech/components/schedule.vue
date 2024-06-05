<template>

    <div v-if="comingSoon == true" class="absolute w-[120%] h-12 bg-yellow-500 rotate-12 border-4 border-black hidden sm:flex items-center px-12 justify-between">
        <p class="text-black text-5xl font-semibold text-clip">COMING SOON&emsp;COMING SOON</p>
        <p class="text-black text-5xl font-semibold text-clip">COMING SOON&emsp;COMING SOON</p>
    </div>
    <div v-if="comingSoon == true" class="absolute w-[120%] h-12 bg-yellow-500 -rotate-12 border-4 border-black hidden sm:flex items-center px-12 justify-between">
        <p class="text-black text-5xl font-semibold text-clip">COMING SOON&emsp;COMING SOON</p>
        <p class="text-black text-5xl font-semibold text-clip">COMING SOON&emsp;COMING SOON</p>
    </div>

    <div class="w-auto p-8 flex flex-col sm:bg-[#060A2C] rounded-xl gap-3 sm:border-4 sm:border-black">
        <h2 class="sm:text-5xl text-3xl font-bold">Schedule</h2>
        <p v-if="toggleTextDetails == true" class="max-w-md">{{ textDetails }}</p>
        <img class="cover rounded-xl" v-if="toggleImgDetails == true" :src="imgDetails" alt="">
    </div>
</template>

<script>
    export default{
        props: {
            comingSoon: {
                type: Boolean,
                default: false
            },
            toggleTextDetails: {
                type: Boolean,
                default: false
            },
            toggleImgDetails: {
                type: Boolean,
                default: false
            },
            textDetails: {
                type: String,
                default: 'Details about the schedule | is the schedule coming soon? | how long is the hackathon? | when does it start? | what are the dates & times? | what time zone?'
            },
            imgDetails: {
                type: String,
                default: '/exampleSchedule.png'
            }
        }
    }
</script>