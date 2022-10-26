<template>

  <Navigation v-if="!navigation" />

  <router-view/>

  <Footer v-if="!navigation"  />

</template>

<script setup>

import store  from '@/store/index'

import {app}  from '@/firebase/firebaseInit'
import { getFirestore} from 'firebase/firestore';
import { getAuth, onAuthStateChanged  } from "firebase/auth";

import { onMounted, ref, watch } from 'vue'


import Navigation from '@/components/Navigation.vue'
import Footer from './components/Footer.vue';

const navigation = ref(null)

onMounted(async () => {
  
  // console.log(process.env)
  // const querySnapshot = await getDocs(collection(db, 'todos'))
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   // console.log(doc.id, " => ", doc.data())
  //   console.log(doc.id, " => ", doc.data())
  // })

  // this.checkRoutes()

  const { bdd } = getFirestore(app)
  const firebaseAuth = await getAuth(bdd)
  
  // ceci ne marche pas pour recupérer le currentUser au demarage
  console.log('current user - ne marche pas ', firebaseAuth.currentUser)
  
  

  // currentUser - utilisation de l'observer pour eviter que le currentUser soit null
  onAuthStateChanged(firebaseAuth, (user) => {

    
    console.log('mon store', store)
    store.commit('updateUser', user)

    if (user) {
      const uid = user.uid
      console.log('uid currentuser', uid, user)

      
      store.dispatch('getCurrentUser')

    } else {
      console.log('pas d\'user connecté!' );
    }
  }) 


})

function checkRoutes() {

  if (this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword') {
    this.navigation = true
    return
  }

  this.navigation = false
  
}


// watch(() => {
//   $route() {
//     this.checkRoutes()
//   }
// })

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
    // min-height: 100vh;
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

  // .page-principale{
  //   min-height: 350px;
  // }

  .arrow {
    margin-left: 8px;
    width: 12px;
    path {
      fill: #000
    }
  }


  .arrow-light {
    path {
      fill: #fff
    }
  }

  /** ----------------------------------------bouton ------------------------------------------- */

  button,
  .router-button {
    transition: 500ms ease all;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .button-ghost {
    color: #000;
    padding: 0;
    border-radius: 0;
    margin-top: 50px;
    font-size: 15px;
    font-weight: 500;
    background-color: transparent;
    @media (min-width: 700px) {
      margin-top: 0;
      margin-left: auto;
    }
    i {
      margin-left: 8px;
    }
  }

  .button-light {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  
  .button-inactive {
    pointer-events: none !important;
    cursor: none !important;
    background-color: rgba(128, 128, 128, 0.5) !important;
  }

  /** ----------------------------------------gestion des erreurs globalement ------------------------------------------- */

  .error {
    text-align: center;
    font-size: 12px;
    color: red;
  }

  .blog-card-wrap {
    position: relative;
    padding: 80px 16px;
    background-color: #f1f1f1;
    @media(min-width: 500px) {
      padding: 100px 16px;
    }

    .blog-cards {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;

      @media(min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media(min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }

    }
  }

</style>

