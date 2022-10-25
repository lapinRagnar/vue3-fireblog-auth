<template lang="">
  
  <div class="reset-password">

    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" /> 
    <Loading v-if="loading" />
    
    <div class="form-wrap">
      
      <form class="reset">

        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{name: 'login'}" >Login</router-link>
        </p>
        
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it!</p>
        
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <Icons name="email" class="icon" />
          </div>
        </div>

        <button @click.prevent="resetPassword" >Reset</button>

        <div class="angle"></div>

      </form>

      <div class="background"></div>

    </div>
  </div>
</template>

<script>

import {app}  from '@/firebase/firebaseInit'
import { getFirestore} from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";

import Icons from '@/components/Icons.vue'
import Modal from '@/components/Modal.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'ForgotPassword',  

  data() {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
      loading: null
    }
  },

  components: { Icons, Modal, Loading },

  methods: {

    async resetPassword(){

      this.loading = true
      const { bdd } = getFirestore(app)
      const auth = await getAuth(bdd)

      sendPasswordResetEmail(auth, this.email)
      .then(() => {
        // Password reset email sent!
        this.modalMessage = "if your account exists, you will receive an email!"
        this.loading = false
        this.modalActive = true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        this.modalMessage = errorMessage
        this.loading = false
        this.modalActive = true

        console.log('errorCode, errorMessage', errorCode, errorMessage)
      });

    },

    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ''
    }

  },


}
</script>

<style lang="scss" scoped>
  
  .reset-password {
    position: relative;

    .form-wrap {
      .reset {
        h2 {
          margin-bottom: 8px;
        }

        p {
          text-align: center;
          margin-bottom: 32px;
        }
      }
    }
  }
</style>