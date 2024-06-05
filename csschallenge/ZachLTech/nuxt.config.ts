// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-anchorscroll',
  ],
  runtimeConfig: {
    "public": {
      // Basic Hackathon Info
      logo: process.env.HACKATHON_LOGO_FILE,
      title: process.env.HACKATHON_NAME,
      signupPage: process.env.HACKATHON_SIGNUP_PAGE_URL,
      contactEmail: process.env.HACKATHON_CONTACT_EMAIL,
      // Hero Mini Intro
      heroDescription: process.env.SPLASH_PAGE_MINI_DESCRIPTION,
      // About Section Card Values & Description
      about: process.env.ABOUT_SECTION_DESCRIPTION,
      // Card 1
      card1Title: process.env.ABOUT_CARD_1_TITLE,
      card1Description: process.env.ABOUT_CARD_1_DESCRIPTION,
      card1Image: process.env.ABOUT_CARD_1_IMAGE_FILE,
      // Card 2
      card2Title: process.env.ABOUT_CARD_2_TITLE,
      card2Description: process.env.ABOUT_CARD_2_DESCRIPTION,
      card2Image: process.env.ABOUT_CARD_2_IMAGE_FILE,
      // Card 3
      card3Title: process.env.ABOUT_CARD_3_TITLE,
      card3Description: process.env.ABOUT_CARD_3_DESCRIPTION,
      card3Image: process.env.ABOUT_CARD_3_IMAGE_FILE,
      // Schedule Section Setup & Values
      comingSoon: process.env.SCHEDULE_COMING_SOON_BOOL,
      toggleTextDetails: process.env.SCHEDULE_TEXT_BASED_DETAILS_BOOL,
      toggleImgDetails: process.env.SCHEDULE_IMAGE_BASED_DETAILS_BOOL,
      textDetails: process.env.SCHEDULE_TEXT_DETAILS,
      imgDetails: process.env.SCHEDULE_IMAGE_DETAILS,
      // Challenge Section
      challengeBool: process.env.PRE_HACKATHON_CHALLENGE_BOOL,
      challengeGithub: process.env.PRE_HACKATHON_CHALLENGE_PAGE_URL,
      challengeDetails: process.env.PRE_HACKATHON_CHALLENGE_DETAILS,
      // FAQ
      questions: process.env.HACKATHON_FREQUENTLY_ASKED_QUESTIONS,
      // Footer
      copywriteMessage: process.env.FOOTER_COPYWRITE_DETAILS,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
