<template>
  
  <div class="form-wrap">  

    <form class="register">
      
      <p class="login-register">
        Already have an account?        
        <router-link class="router-link" :to="{name: 'login'}" >Login</router-link>
      </p>
      
      <h2>Create Your FireBlog Account</h2>
      
      <div class="inputs">

        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <Icons name="user" class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <Icons name="user" class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Username" v-model="username">
          <Icons name="user" class="icon" />
        </div>

        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <Icons name="email" class="icon" />
        </div>

        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <Icons name="password" class="icon" />
        </div>

        <div v-show="error" class="error">{{ this.errorMsg }}</div>

      </div>

      <button @click.prevent="register" >Sign Up</button>

      <div class="angle"></div>    


    </form>

    <div class="background"></div>
    
  </div>

</template>

<script>

import Icons from '@/components/Icons.vue'

import {app}  from '@/firebase/firebaseInit'
import { getFirestore} from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth"
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 


export default {
  name: 'Register',
  components: {Icons},

  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',

      error: null,
      errorMsg: '',
    }
  },

  methods: {
    
    async register() {

      if (this.email !=='' && this.lastName !== '' && this.username !== '' && this.firstName !== '' && this.password !== '') {
        
        this.error = false
        this.errorMsg = ''

        console.log('firestore app', app)

        const db = getFirestore(app)
        console.log('la variable db pour addDoc', db)

        const { bdd } = getFirestore(app)
        console.log('la variable bdd pour getAuth', bdd)

        const firebaseAuth = await getAuth(bdd)
        console.log('firebaseAuth', firebaseAuth)

      

        await createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
          .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('utilisateur a été crée', user)
            console.log(`id utilisateur crée`, user.uid)

            const colRef = collection(db, 'users')
            const data = {
              firstName: this.firstName,
              lastName: this.lastName,
              username: this.username,
              email: this.email
            }

            const docRef = await addDoc(colRef, data)
            console.log('Document was created with ID:', docRef.id)

            this.$router.push({ name: 'home'})
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('code erreur, message erreur', errorCode, errorMessage)
            
          });

          return
      } 
      this.error = true
      this.errorMsg = 'Please fill out all the fields'

      return
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {

    h2 {
      max-width: 350px;
    }

  }
</style>