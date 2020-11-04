import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

var firebaseConfig = {
  apiKey: "AIzaSyCt8EKCpIdKjHXxFF6nlsQBFU0R9mVYvTo",
  authDomain: "netflix-c1e95.firebaseapp.com",
  databaseURL: "https://netflix-c1e95.firebaseio.com",
  projectId: "netflix-c1e95",
  storageBucket: "netflix-c1e95.appspot.com",
  messagingSenderId: "28287991243",
  appId: "1:28287991243:web:e5a7de3306cdb5923c0a4e"
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };