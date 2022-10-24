<template>
  <header>
    <nav class="container">
      
      <div class="branding">
        <router-link class="header" :to="{ name: 'home'}">FireBlogs</router-link>
      </div>

      <div class="nav-links">
        <ul>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="">Blogs</router-link>
          <router-link class="link" to="">Créer post</router-link>
          <router-link class="link" to="">Login/register</router-link>
        </ul>
      </div>

      <Icons class="menu-icon" name="menuIcon" />

      <transition name="mobile-nav">
        <ul>  
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="">Blogs</router-link>
          <router-link class="link" to="">Créer post</router-link>
          <router-link class="link" to="">Login/register</router-link>
        </ul>
      </transition>


    </nav>
  </header>
</template>
<script>

import Icons from '@/components/Icons.vue'

export default {
  name: 'Navigation',
  components: {
    Icons
  }    
}
</script>
<style lang="scss" scoped>

  header {
    border-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;

    .link{
      font-weight: 500;
      padding: 0 8px;
      transition: .3s color ease;
      
      &:hover{
        color: #1ab8b8;
      }
    }

    nav{
      display: flex;
      padding: 25px 0;

      .branding{
        display: flex;
        align-items: center;

        .header{
          font-weight: 600;
          font-size: 24px;
          color: black;
          text-decoration: none;
        }
      }

      .nav-links{
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;

        ul{
          margin-right: 32px;

          .link{
            margin-right: 32px;
          }

          .link:last-child{
            margin-right: 0;
          }
        }

      }
    }


    .menu-icon{
      cursor: pointer;
      position: absolute;
      top: 23px;
      right: 25px;
      height: 25px;
      width: auto;
      
    }
    

  }


</style>