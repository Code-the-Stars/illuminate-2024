<template>
    <div class="flex flex-col gap-1 w-[300px] text-sm sm:text-base">
        <p>Contact: <a class="underline" :href="`mailto:${email}`" target="_blank" id="email">{{ email }}</a></p>
        <p>Join this Hackathon: <a class="underline" :href="signupPage">Register</a></p>
        <p>Edit this website: <a class="underline" href="https://github.com/ZachLTech/hackathonTemplate">Github</a></p>
    </div>
    <p class="text-sm sm:text-base">{{ copywriteMessage }}</p>
    <p class="w-[300px] text-sm sm:text-base">Site designed with ❤️ by <a class="underline bg-gradient-to-r from-green-400 to-green-700 inline-block text-transparent bg-clip-text" href="https://zachl.tech" target="_blank">ZachLTech</a></p>
</template>

<script>
    export default{
        props: {
            email: {
                type: String,
                default: 'OrganizerEmail@sample.com'
            },
            signupPage: {
                type: String,
                default: 'https://fillout.com'
            },
            copywriteMessage: {
                type: String,
                default: '© <YEAR> <ORGANIZATION>. This project falls under <LICENSE> OR All Rights Reserved.'
            }
        }
    }
</script>