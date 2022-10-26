import { createStore } from 'vuex'

import {app}  from '@/firebase/firebaseInit'
import { getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'
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

      // state.profileEmail = payload.data().email
      // state.profileFirstName = payload.data().firstName
      // state.profileLastName = payload.data().lastName
      // state.profileUserName = payload.data().userName
    },

    setProfileInitials(state) {
      state.profileInitials = state.profileFirstName.substr(0, 1).toUpperCase() + state.profileLastName.substr(0, 1).toUpperCase()
    }

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
        console.log('dans actions getCurrentUser', doc.id, " => ", doc.data())
        const dbResults = doc.data()
        console.log('id ', auth.currentUser.uid);
        dbResults['id'] = auth.currentUser.uid
        console.log('ajouter id', dbResults)
        commit('setProfileInfo', dbResults)
      });

      commit('setProfileInitials')

      // ------------------------------------

      // const dbResults = [] 
      // const querySnapshot = await getDocs(collection(database, "users"))      
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data())
      //   // const document = { [doc.id]: doc.data() }
      //   const document = doc.data() 
      //   dbResults.push(document)
      // });

      // console.log('dbResults', dbResults)
      // commit('setProfileInfo', dbResults)
      // commit('setProfileInitials')


      // -------------------------------------
      // const firebaseAuth = await getAuth(bdd)

      // const dataBase = await db.collection('users').doc(app.auth().currentUser.uid)
      // const dbResults = await dataBase.get()
      // commit(commit('setProfileInfo', dbResults))
      // commit('setProfileInitials')
      // console.log('dbResults', dbResults)

      // -------------------------------

      // const dbResults = []

      // try {

      //   const docRef = collection(database, "users")
      //   const docsSnap = await getDocs(docRef);
  
      //   console.log('docRef, docsSnap', docRef, docsSnap)

      //   if(docsSnap.docs.length > 0) {

      //     docsSnap.forEach(doc => {
      //         console.log(doc.data());
      //         dbResults.push(doc.data())
      //     })

      //     console.log('dbResults', dbResults)

      //     // this.commit('setProfileInfo', docsSnap.docs )
      //     // this.commit('setProfileInfo', docsSnap )
  
      //   }

      // } catch (error) {
      //   console.log(error);
      // }

      // -------------------------------------------

      // commit('setProfileInfo', dbResults)
      // commit('setProfileInitials')

      // if (docsSnap) {
      //   console.log("Document data:", docsSnap.data())
      //   const dbResults = docsSnap.data()
      //   commit('setProfileInfo', dbResults)
      //   commit('setProfileInitials')
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!")
      // }


    }
  },
  modules: {
  }
})
