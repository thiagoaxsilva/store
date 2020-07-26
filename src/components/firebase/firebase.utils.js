import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBZvdSw6VFTplc0urKhXeSHm4LIUXWAW6o',
  authDomain: 'store-db-65a80.firebaseapp.com',
  databaseURL: 'https://store-db-65a80.firebaseio.com',
  projectId: 'store-db-65a80',
  storageBucket: 'store-db-65a80.appspot.com',
  messagingSenderId: '628046821017',
  appId: '1:628046821017:web:ecd343d3a08f34eeb22a08',
  measurementId: 'G-C1TQS2FFTH',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth(); // auth recebe método auth de firebase.
export const firestore = firebase.firestore(); // firestore recebe método de firestore de firebase;

const provider = new firebase.auth.GoogleAuthProvider(); // instanciando o provider para receber a autenticacao do google.
provider.setCustomParameters({ prompt: 'select_account' }); // quando o provider é chamado ele abre uma janela de autenticação com conta google onde se escolhe a conta.
export const signInWithGoogle = () => auth.signInWithPopup(provider); // signInWithGoggle recebe autenticação por popup que recebe o parámetro de escolher a conta com provider.
export default firebase;
