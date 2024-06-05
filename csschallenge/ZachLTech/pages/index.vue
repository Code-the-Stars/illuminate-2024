<script setup>
    let challenge = ref(true);
    let challengeGithub = ref('https://github.com/Code-the-Stars/illuminate');
    let email = ref('shayan@codethestars.org');
    let signupPage = ref('https://fillout.com');
    let copywriteMessage = ref('&copy; 2024 Code the Stars. This project falls under the MIT License!')
</script>

<template>
    <div class="overflow-x-hidden">
         <header>
             <navbar :logo="'/Illuminate.svg'" :title="'Illuminate'" :challenge="true" />
         </header>
 
         <main>
             <section id="hero">
                <div class="flex justify-center items-center wrap w-full h-full">
                    <hero :logo="'logo'" :title="'title'" :description="'desctipte'" :signupPage="'https://fillout.com'" />
                </div>
             </section>
 
             <section id="about" class="flex flex-col justify-center items-center sm:p-32 gap-[70px] wrap h-auto">
                 <p class="max-w-[950px] sm:leading-loose sm:text-center sm:text-xl p-8 sm:p-0">Illuminate is a hackathon tailored for high school students to showcase their coding skills and creative ideas. Hosted by Code the Stars, get ready for a weekend packed with engaging coding tasks, informative workshops and great opportunities to network. Come be a part of an event where you can express your imagination and interact with students, from various parts of the world.</p>
                 <div class="flex flex-col sm:flex-row wrap p-5 gap-6">
                     <infoCard :image="'/coding-in-the-classroom.png'" :title="'Coding Challenges'" :description="'Throughout this hackathon, you\'re invited to participate in a few coding challenges which are to be announced throughout the event.'" />
                     <infoCard :image="'/workshop.png'" :title="'Speaker Workshops'" :description="'Join us during our special workshops where guest speakers will guide participants through fun and educational activities'" />
                     <infoCard :image="'/network.png'" :title="'Networking Opportunities'" :description="'Anyone who joins will be able to network themselves via our Discord server and meet new people throughout our event'" />
                 </div>
             </section>
 
             <section id="schedule" class="overflow-hidden flex justify-center items-center">
                 <schedule :comingSoon="true" :toggleTextDetails="true" :toggleImgDetails="false" :textDetails="'Coming Soon! The event starts at 6:00 pm on Friday, June 7th, and ends at 12:00 pm on Sunday, June 9th. All times are EST.'" :imgDetails="'/exampleSchedule.png'" />
             </section>
             
             <section v-if="challenge == true" id="fun" class="flex flex-col gap-8 justify-center items-center">
                 <img src="/scream.png" alt="" class="sm:w-[500px] p-5 sm:p-0 absolute">
                 <a :href="challengeGithub" class="w-auto p-5 sm:p-8 flex flex-col bg-[#060A2C]/[0.9] rounded-xl gap-3 m-5 sm:m-0">
                     <h2 class="text-2xl sm:text-5xl font-bold sm:h-[60px] bg-gradient-to-r from-blue-800 via-yellow-400 to-indigo-800 inline-block text-transparent bg-clip-text">Pre-Hackathon Challenge!</h2>
                     <p class="max-w-2xl">If you're participating in this hackathon and think to yourself "hmm... what ever shall I code until this hackathon starts?" Well FEAR NOT! We challenge YOU to remake make this website! Click HERE to go to the Github Page and view more details on this challenge.</p>
                 </a>
             </section>
 
             <section id="faq" class="flex flex-col gap-8 justify-center items-center h-auto">
                 <faq />
             </section>
         </main>
 
         <footer class="sm:p-8 px-3 py-5 bg-black flex sm:flex-row flex-col gap-7 sm:gap-0 sm:justify-between sm:items-center mt-24">
             <contact :email="email" :signupPage="signupPage" :copywriteMessage="copywriteMessage" />
         </footer>
         <div id="contact"></div>
     </div>
 </template>