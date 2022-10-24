<template>
  <div class="home">
    
    <BlogPost :post="welcomeScreen" />
    
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index" /> 
    
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>

    <div class="updates">
      
      <div class="container">
      
        <h2>never miss a post. Regiter for your free account today</h2>
      
        <router-link class="router-button" to="#">
          Register for FireBlogs <Icons name="arrow-light-right" class="arrow arrow-light" />
        </router-link>


      </div>
    </div>
     
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';

import Icons from '@/components/Icons.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BlogPost,
    BlogCard,
    Icons,
},
  data(){
    return {

      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },

      sampleBlogPosts: [
        {
          title: 'c\'est mon super titre 1',
          blogHTML: 'ceci est mon super contenu1',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'c\'est mon super titre 2',
          blogHTML: 'ceci est mon super contenu1',
          blogCoverPhoto: 'coding'
        },
        {
          title: 'c\'est mon super titre 3',
          blogHTML: 'ceci est mon super contenu1',
          blogCoverPhoto: 'designed-for-everyone'
        },
      ],

      // sampleBlogCards: [
      //   { blogTitle: 'BlogCard #1', blogCoverPhoto: 'stock-1', blogDate: 'Jan 1, 2022'},
      //   { blogTitle: 'BlogCard #2', blogCoverPhoto: 'stock-2', blogDate: 'Jan 2, 2022'},
      //   { blogTitle: 'BlogCard #3', blogCoverPhoto: 'stock-3', blogDate: 'Jan 3, 2022'},
      //   { blogTitle: 'BlogCard #4', blogCoverPhoto: 'stock-4', blogDate: 'Jan 4, 2022'},
      //   { blogTitle: 'BlogCard #5', blogCoverPhoto: 'stock-5', blogDate: 'Jan 5, 2022'},
      //   { blogTitle: 'BlogCard #6', blogCoverPhoto: 'stock-6', blogDate: 'Jan 6, 2022'},
      // ]
    
    }
  },

  computed: {

    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-card-wrap {

    .container {

      h3 {
        font-weight: 300;
        font-style: 28px;
        margin-bottom: 32px;
      }

    }
  }

  .updates {

    .container {
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media(min-width: 800px) {
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-button {
        display: flex;
        font-size: 14px;
        text-decoration: none;

        @media(min-width: 800px) {
          margin-left: auto;

        }
      }

      h2 {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;

        @media(min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }

    }
  }


</style>
