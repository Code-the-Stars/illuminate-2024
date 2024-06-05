<script setup>
    let display = ref('display: none;');
    function toggleItem(){
        if(display.value == `display: none;`){
            display.value = 'display: block;';
        }
        else{
            display.value = 'display: none;';
        }
    }
</script>

<template>
    <div class="flex flex-col w-[700px] justify-center items-center">
        <button @click="toggleItem()" class="accordion sm:text-xl border-b-2 border-b-[#010418]">{{ question }}</button>
        <div class="panel border-b-2 border-t-[#010418] border-b-2 border-b-[#010418] w-full" :style="`${display}`">
            <p class="p-4 text-sm sm:text-base">{{ answer }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            question: {
                type: String,
                default: 'Question goes here'
            },
            answer: {
                type: String,
                default: 'Answer goes here'
            }
        }
    }
</script>