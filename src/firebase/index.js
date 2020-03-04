import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from '../store';

import config from './config';

const reactReduxFirebaseConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

firebase.initializeApp(config);

const rrfProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
};

export default rrfProps;
