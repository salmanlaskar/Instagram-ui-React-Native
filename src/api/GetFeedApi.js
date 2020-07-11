import * as firebase from 'firebase'
import Firebase from './../Firebase/config'
export  function getPosts(){
    return Firebase
      .firestore()
      .collection('posts')
      .orderBy('createdAt')
      .get()
      .then(function(querySnapshot) {
        let posts = querySnapshot.docs.map(doc => doc.data())
         //console.log(posts)
        return posts
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      });
}