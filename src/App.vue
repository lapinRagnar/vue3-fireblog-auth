<template>

  <Navigation />
  <div class="page-principale">Page app</div>
  <router-view/>
  <Footer />

</template>

<script setup>

import { onMounted } from 'vue'
import { db } from '@/firebase/firebaseInit'
import { collection, getDocs } from 'firebase/firestore'
import Navigation from '@/components/Navigation.vue'
import Footer from './components/Footer.vue';

onMounted(async () => {
  console.log(process.env)
  // const querySnapshot = await getDocs(collection(db, 'todos'))
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   // console.log(doc.id, " => ", doc.data())
  //   console.log(doc.id, " => ", doc.data())
  // })
})

</script>

<style lang="scss">

  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }

  .link-light {
    color: #fff;
  }

  .page-principale{
    min-height: 350px;
  }

</style>

