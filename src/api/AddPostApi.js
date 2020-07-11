import * as firebase from 'firebase'
import Firebase from './../Firebase/config';
export function uploadPost(post){
  const uploadData = {
    id: null,
    postPhoto: post.photo,
    postTitle: post.title,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }
  //console.log('val');;
  Firebase.firestore()
  .collection('posts')
  .add(uploadData)
  .then((snapshot) => {
    uploadData.id = snapshot.id;
    snapshot.set(uploadData);
  }).then(() => {})
  .catch((error) => console.log(error));
};