<template>
    <div class="overflow-x-hidden">
         <header>
             <navbar :logo="$config.public.logo" :title="$config.public.title" :challenge="Boolean($config.public.challengeBool)" />
         </header>
 
         <main>
             <section id="hero">
                <div class="flex justify-center items-center wrap w-full h-full">
                    <hero :logo="$config.public.logo" :title="$config.public.title" :description="$config.public.heroDescription" :signupPage="$config.public.signupPage" />
                </div>
             </section>
 
             <section id="about" class="flex flex-col justify-center items-center sm:p-32 gap-[70px] wrap h-auto">
                 <p class="max-w-[950px] sm:leading-loose sm:text-center sm:text-xl p-8 sm:p-0">{{ $config.public.about }}</p>
                 <div class="flex flex-col sm:flex-row wrap p-5 gap-6">
                     <infoCard :image="$config.public.card1Image" :title="$config.public.card1Title" :description="$config.public.card1Description" />
                     <infoCard :image="$config.public.card2Image" :title="$config.public.card2Title" :description="$config.public.card2Description" />
                     <infoCard :image="$config.public.card3Image" :title="$config.public.card3Title" :description="$config.public.card3Description" />
                 </div>
             </section>
 
             <section id="schedule" class="overflow-hidden flex justify-center items-center">
                 <schedule :comingSoon="Boolean($config.public.comingSoon)" :toggleTextDetails="Boolean($config.public.toggleTextDetails)" :toggleImgDetails="Boolean($config.public.toggleImgDetails)" :textDetails="$config.public.textDetails" :imgDetails="$config.public.imgDetails" />
             </section>
             
             <section v-if="Boolean($config.public.challengeBool) == true" id="fun" class="flex flex-col gap-8 justify-center items-center">
                 <img src="/scream.png" alt="" class="sm:w-[500px] p-5 sm:p-0 absolute">
                 <a :href="$config.public.challengeGithub" class="w-auto p-5 sm:p-8 flex flex-col bg-[#060A2C]/[0.9] rounded-xl gap-3 m-5 sm:m-0">
                     <h2 class="text-2xl sm:text-5xl font-bold sm:h-[60px] bg-gradient-to-r from-blue-800 via-yellow-400 to-indigo-800 inline-block text-transparent bg-clip-text">Pre-Hackathon Challenge!</h2>
                     <p class="max-w-2xl">{{ $config.public.challengeDetails }}</p>
                 </a>
             </section>
         </main>
 
         <footer class="sm:p-8 px-3 py-5 bg-black flex sm:flex-row flex-col gap-7 sm:gap-0 sm:justify-between sm:items-center mt-24">
             <contact :email="$config.public.contactEmail" :signupPage="$config.public.signupPage" :copywriteMessage="$config.public.copywriteMessage" />
         </footer>
         <div id="contact"></div>
     </div>
 </template>