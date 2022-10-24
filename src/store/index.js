import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      { blogTitle: 'BlogCard #1', blogCoverPhoto: 'stock-1', blogDate: 'Jan 1, 2022'},
      { blogTitle: 'BlogCard #2', blogCoverPhoto: 'stock-2', blogDate: 'Jan 2, 2022'},
      { blogTitle: 'BlogCard #3', blogCoverPhoto: 'stock-3', blogDate: 'Jan 3, 2022'},
      { blogTitle: 'BlogCard #4', blogCoverPhoto: 'stock-4', blogDate: 'Jan 4, 2022'},
      { blogTitle: 'BlogCard #5', blogCoverPhoto: 'stock-5', blogDate: 'Jan 5, 2022'},
      { blogTitle: 'BlogCard #6', blogCoverPhoto: 'stock-6', blogDate: 'Jan 6, 2022'},
    ],

    editPost: null,


  },
  getters: {
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log('dans le store', state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
