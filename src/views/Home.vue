<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPosts" :key="index"> 
      
    </BlogPost> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BlogPost
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
      ]
    
    }
  }
}
</script>
