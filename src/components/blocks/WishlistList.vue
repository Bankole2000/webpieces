<template>
  <v-row>
    <v-col cols="12" v-for="(item, i) of items" :key="i" md="6">
      <WishlistItem :item="item" />
    </v-col>
  </v-row>
</template>

<script>
import WishlistItem from "./WishlistItem.vue";
export default {
  components: { WishlistItem },
  data() {
    return {
      items: [
        {
          title: "A kind message",
          longDesc:
            "It's okay. We probably haven't been in touch for some time now, and I'm sorry. Life happened. I'd love to hear from you again, old friend.",
          shortDesc:
            "Life happens. We fell out of touch. But I'd love to hear from you again",
          link: "https://www.quora.com/How-can-I-be-friends-with-someone-and-never-lose-them",
          image: "kindness.jpg.webp",
          gift: "A kind message",
          price: 0.0,
        },
        {
          title: "Domino's Pizza",
          longDesc:
            "It's been a while since I've had pizza, or icecream or any kind of fancy food like that. It would be nice to have a pizza to remember the day by.",
          shortDesc: "It would be nice to have a pizza to remember the day by.",
          link: "https://www.dominos.ng/pages/order/menu#!/menu/category/entrees/",
          image: "pizza.jfif.webp",
          gift: "Domino's Pizza",
          price: 4.99,
        },
        {
          title: "Cutlery Set",
          longDesc:
            "My kitchen is pretty bare. I'd love to have a set of cutlery to make it feel more like home",
          shortDesc:
            "Spoons, forks, knives, plates, cups, pots, pans - all welcome",
          link: "https://www.jumia.com.ng/generic-stainless-steel-24piece-cutlery-set-and-free-nonstick-spoon-81898872.html",
          image: "cutlery.jpg.webp",
          gift: "a Cutlery Set",
          price: 9.99,
        },
        {
          title: "Mic Stand",
          longDesc:
            "I have a lot of work to do, and I need a mic stand to keep my work going, both for meetings and calls, or for recordings as well.",
          shortDesc:
            "A mic stand to help with meetings and recordings would be really nice.",
          link: "https://www.jumia.com.ng/generic-desktop-microphone-stand-upgraded-adjustable-table-mic-stand-90071064.html",
          image: "microphone.jpg.webp",
          gift: "a Desktop Microphone Stand",
          price: 22.99,
        },
        {
          title: "Microwave",
          longDesc:
            "I don't really cook or bake much, but I'd like to someday. and a microwave would be a great way to start",
          shortDesc:
            "Did you know you can bake with a microwave oven? I'll make pizza for you - promise",
          link: "https://www.jumia.com.ng/generic-heating-baking-toasting-grilling-oven-11l-67221441.html",
          image: "microwave.jpg.webp",
          gift: "a Small Microwave Oven",
          price: 49.99,
        },
        {
          title: "Weighing Scale",
          longDesc:
            "I've been trying to lose weight, and I'd love to have a weighing scale to keep track of my progress",
          shortDesc:
            "I'd love to have a weighing scale to keep track of my progress",
          link: "https://www.jumia.com.ng/generic-bathroom-weighing-body-scale-monitor-66112037.html",
          image: "weight.jpg.webp",
          gift: "a Weighing Scale",
          price: 19.99,
        },
        {
          title: "Dumbells",
          longDesc:
            "Going to the Gym is fun and all, but it's pretty hard to do most of the time. Would be nice to workout at home with these",
          shortDesc:
            "For those days when I can't make it to the gym (which are quite a few actually)",
          link: "https://www.jumia.com.ng/generic-20kg-adjustable-dumbell-set-with-case-of-10kg-each-hand-77749689.html",
          image: "dumbell.jpg.webp",
          gift: "a Set of Dumbells",
          price: 79.99,
        },
        {
          title: "Work Chair",
          longDesc:
            "Its no secret that I tend to be seated for long hours at a time working. It would be nice to have an ergonmic work chair to not let my back get all messed up.",
          shortDesc: "I'm too young to be having back pain like this 😭",
          link: "https://www.jumia.com.ng/generic-furgle-custom-home-studio-ergonomic-gaming-chair-108448710.html",
          image: "chair1.jpg.webp",
          gift: "an Ergonomic Work Chair",
          price: 299.99,
        },
        {
          title: "Standing Desk",
          longDesc:
            "It's easy to forget to walk around or get some steps in when you're sitting all the time. I'm hoping a standing desk could fix that",
          shortDesc:
            "Really need it, just so I don't totally ruin my back and posture",
          link: "https://www.jumia.com.ng/handy-home-office-table-standing-desk-lagos-delivery-only-56723788.html",
          image: "table.jpg.webp",
          gift: "an Electronic Standing Desk",
          price: 999.99,
        },
        {
          title: "Graphics Tablet",
          longDesc:
            "I love drawing, and art in general - and I have friends who do as well. This would be a great way to get back into it",
          shortDesc: "For my friends and I to draw cool stuff with",
          link: "https://www.jumia.com.ng/generic-a50-10x6-inch-5080-lpi-smart-touch-electronic-graphic-tablet-with-type-c-interface-52297733.html",
          image: "graphicstablet.jpg.webp",
          gift: "Graphics Tablet",
          price: 109.99,
        },
        {
          title: "XBox Controller",
          longDesc:
            "Keyboard and mouse are great, but I'd love to have a controller to play games with - the difference is like night and day",
          shortDesc:
            "Don't have a PS4 or XBox, but PC games with a controller feel just as good",
          link: "https://www.jumia.com.ng/microsoft-xbox-one-s-one-x-wireless-bluetooth-controller-1708-model-charge-kit-black-81889796.html",
          image: "xboxcontroller.jpg.webp",
          gift: "an XBox Controller",
          price: 69.99,
        },

        {
          title: "Nier Automata",
          longDesc:
            "A really cool videogame about philosphy, AI, and existentialism. I'd love to play it someday",
          shortDesc:
            "A really cool game about philosphy, AI, and existentialism",
          link: "https://store.steampowered.com/app/524220/NieRAutomata/",
          image: "nier.jpg.webp",
          gift: "Nier Automata (on Steam)",
          price: 39.99,
        },
        {
          title: "Ori",
          longDesc:
            "Any title in the Ori Series would be cool. It's a great platform game, and I'd love to play it someday",
          shortDesc: "A really cool platform game. I'd love to play it someday",
          link: "https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/",
          image: "ori.jpg.webp",
          gift: "Ori (on Steam)",
          price: 29.99,
        },
        {
          title: "Final Fantasy VII Remake",
          longDesc:
            "FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
          shortDesc: "FINAL FANTASY VII is reborn, and it is glorious",
          link: "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/",
          image: "ffvii.webp",
          gift: "FFVII Remake (on Steam)",
          price: 69.99,
        },
        {
          title: "Hades",
          longDesc:
            "It's a great rogue-like video game. gripping story, the coolest voicelines ever and super high replay value. Fun for guests too!",
          shortDesc:
            "Fun gameplay, cool story, great voicelines. One of the best games of this decade",
          link: "https://store.steampowered.com/app/1145360/Hades/",
          image: "hades.jpg.webp",
          gift: "Hades (on Steam)",
          price: 24.99,
        },
        {
          title: "Octopath",
          longDesc:
            "It's a great JRPG. I'd love to play it someday, and I'm sure my friends would too, saving the world as a party of 8",
          shortDesc: "A great JRPG. We get to save the world together",
          link: "https://store.steampowered.com/app/921570/OCTOPATH_TRAVELER/",
          image: "octopath.jpg.webp",
          gift: "Octopath Traveller (on Steam)",
          price: 59.99,
        },
        {
          title: "The Garden",
          longDesc:
            "A puzzle game with fascinating architecture. Perfect for minds that like to explore and appreciate fractals",
          shortDesc: "Architecture and puzzles. A great game for the mind",
          link: "https://store.steampowered.com/app/473950/Manifold_Garden/",
          image: "manifoldgarden.jpg.webp",
          gift: "Manifold Garden (on Steam)",
          price: 9.99,
        },
        {
          title: "A Udemy Course",
          longDesc:
            "In my line of work, we need to be constantly studying and learning new things. I'd love to have a Udemy course to help me learn something new",
          shortDesc:
            "Any Udemy course would be great. I'd love to learn something new",
          link: "https://www.dominos.ng/pages/order/menu#!/menu/category/entrees/",
          image: "udemy.png.webp",
          gift: "a Udemy Course",
          price: 12.99,
        },
        {
          title: "A Piano",
          longDesc:
            "I miss playing the piano. It's been years since I last played, and I'd love to have one to play again",
          shortDesc:
            "It's been years since I touched a piano. I'd love to have one to play again",
          link: "https://www.jumia.com.ng/yamaha-psr-e463-keyboard-with-keyboard-standadapter-bag-66045357.html",
          image: "piano.jpg.webp",
          gift: "an Electronic Piano",
          price: 499.99,
        },
        {
          title: "Mini Desktop",
          longDesc:
            "A portable support system to supplement the work I do. I'd love to have one especially for the rainy day",
          shortDesc: "A portable support system to supplement the work I do.",
          link: "https://www.jumia.com.ng/hp-z2-mini-g5-workstation-intel-core-i7-10700-16gb-256gb-ssd-133841854.html",
          image: "minidesktop.jpg.webp",
          gift: "a Mini Desktop Computer",
          price: 499.99,
        },
        {
          title: "A UPS Unit",
          longDesc:
            "Uninterrupted power supply. Would help keep stuff running even when the power goes out",
          shortDesc: "Noone likes power outages.",
          link: "https://www.jumia.com.ng/blue-gate-ups-bg653i-elite-pro-backup-52825929.html",
          image: "ups.jpg.webp",
          gift: "a UPS Unit",
          price: 44.99,
        },
        {
          title: "A Printer",
          longDesc:
            "Part of growing up is realizing that you need a printer/scanner/copier at home. It's 2022",
          shortDesc:
            "It's 2022. Anyone who can, should have a printer/scanner/copier at home",
          link: "https://www.jumia.com.ng/pixma-ts3140-all-in-one-wireless-printer-printscancopy-canon-mpg1579748.html",
          image: "printer.jpg.webp",
          gift: "a Printer / Scanner",
          price: 89.99,
        },
        {
          title: "A Prayer",
          longDesc:
            "We all need prayers. I'd love to have a prayer from you, to help me through the day, and through life",
          shortDesc:
            "I'd love to have a prayer from you, to help me through the day, and through life",
          link: "https://www.crosswalk.com/faith/prayer/the-one-prayer-that-we-all-need.html",
          image: "prayer.jpg.webp",
          gift: "a Prayer",
          price: 0.0,
        },
      ],
    };
  },
};
</script>

<style>
</style>