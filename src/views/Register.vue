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

      </div>

      <button >Sign Up</button>

      <div class="angle"></div>    


    </form>

    <div class="background"></div>
    
  </div>

</template>

<script>

import Icons from '@/components/Icons.vue'

export default {
  name: 'Register',
  components: {Icons},

  data() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
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