import { createStore } from 'vuex'

import {app}  from '@/firebase/firebaseInit'
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, query, where} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth"



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

    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
    profileDocId: null,

  },

  getters: {
  },

  mutations: {

    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log('dans le store', state.editPost)
    },

    updateUser(state, payload) {
      state.user = payload
    },

    setProfileInfo(state, payload){
      state.profileId = payload.id
      console.log('je suis la dans la mutations setProfileInfo', payload)

      state.profileEmail = payload.email
      state.profileFirstName = payload.firstName
      state.profileLastName = payload.lastName
      state.profileUserName = payload.username
      state.profileId = payload.id
      state.profileDocId = payload.docId

    },

    setProfileInitials(state) {
      // state.profileInitials = 'AB'
      console.log('aaaaaaa', state.profileFirstName)

      if (state.profileFirstName == null ) {
        state.profileInitials = 'AN'
      } else {
        state.profileInitials = state.profileFirstName.replace(/ /g, "").substr(0, 1).toUpperCase() + state.profileLastName.replace(/ /g, "").substr(0, 1).toUpperCase()
      }
    },

    changeFistName(state, payload) {
      state.profileFirstName = payload
    },

    changeLastName(state, payload) {
      state.profileLastName = payload
    },

    changeUserName(state, payload) {
      state.profileUserName = payload
    },

  },


  actions: {

    async getCurrentUser({commit}) {

      const database = getFirestore(app)
      // const { bdd } = getFirestore(app)
      const auth = getAuth(app)

      // le mail du currentUser dans auth
      console.log('current user dans action - email', auth.currentUser.email);
      console.log('current user dans action - id', auth.currentUser.uid);

      const q = query(collection(database, "users"), where("email", "==", auth.currentUser.email))      
      console.log("chercher l'user qui a l'email = à le meme email que le current user", q)  

      const querySnapshot = await getDocs(q)

      console.log('querySnapshot', querySnapshot)


      querySnapshot.forEach((doc) => {

        console.log('je suis la')

        console.log('dans actions getCurrentUser', doc.id, " => ", doc.data())
        const dbResults = doc.data()
        console.log('id ', auth.currentUser.uid);
        dbResults['id'] = auth.currentUser.uid
        dbResults['docId'] = doc.id
        console.log('ajouter id', dbResults)
        commit('setProfileInfo', dbResults)
        commit('setProfileInitials')
      });

      commit('setProfileInitials')

    },

    async updateUserSetting({ commit, state }) {

      const database = getFirestore(app)
      
      const docRef = doc(database, "users", state.profileDocId);

      const data = {
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUserName,
      }

      setDoc(docRef, data)
        .then(docRef => {
            console.log("Entire Document has been updated successfully", docRef)
            commit('setProfileInitials')
        })
        .catch(error => {
            console.log(error);
        })
      

    }

  },


  modules: {
  }
})
