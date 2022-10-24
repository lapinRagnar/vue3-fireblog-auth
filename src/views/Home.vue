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
     
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    BlogPost,
    BlogCard
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

      sampleBlogCards: [
        { blogTitle: 'BlogCard #1', blogCoverPhoto: 'stock-1', blogDate: 'Jan 1, 2022'},
        { blogTitle: 'BlogCard #2', blogCoverPhoto: 'stock-2', blogDate: 'Jan 2, 2022'},
        { blogTitle: 'BlogCard #3', blogCoverPhoto: 'stock-3', blogDate: 'Jan 3, 2022'},
        { blogTitle: 'BlogCard #4', blogCoverPhoto: 'stock-4', blogDate: 'Jan 4, 2022'},
        { blogTitle: 'BlogCard #5', blogCoverPhoto: 'stock-5', blogDate: 'Jan 5, 2022'},
        { blogTitle: 'BlogCard #6', blogCoverPhoto: 'stock-6', blogDate: 'Jan 6, 2022'},
      ]
    
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


</style>
