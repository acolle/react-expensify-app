import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//
// // Subscription child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // Subscription child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // Subscription child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// // Subscriptions do not support Promises
// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });
//
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //
// //     const expenses = [];
// //
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });
//
//
// // database.ref('expenses').push({
// //   decription: "Rent",
// //   amount: 123450,
// //   createdAt: 3495847272
// // });
// //
// // database.ref('expenses').push({
// //   decription: "Gym",
// //   amount: 4325,
// //   createdAt: 877654383
// // });
// //
// // database.ref('expenses').push({
// //   decription: "Cinema",
// //   amount: 12300,
// //   createdAt: 64635139
// // });
//
// // database.ref('notes').push({
// //   title: "Title 3",
// //   body: "Body 3"
// // });
// //
// // database.ref('notes/-Lgl0PME3Zc9fZHn6Ic8').remove();
//
// // database.ref().set({
// //   name: 'Anthony',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Dublin',
// //     country: 'Ireland'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log(e);
// // });
// //
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }, (e) => {
// //   console.log('Error fetching the data', e);
// // });
//
// // database.ref().update({
// //   stressLevel: 9,
// //   name: 'Alex',
// //   'job/company': 'Amazon',
// //   'location/city': 'Cork'
// // })
//
// //
// // database.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });
// //
// // database.ref().set({
// //   name: 'Antoine Pierrot',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Dublin',
// //     country: 'Ireland'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log(e);
// // });
// //
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Cork'
// // })
// //
// // database.ref('isSingle').remove()
// // .then(() => {
// //   console.log("Remove succeeded.");
// // }).catch((e) => {
// //     console.log("Remove failed: " + e.message);
// //   });
// //
// // database.ref('age').set(27);
// // database.ref('location/city').set('Sarrebourg');
// // database.ref('location/country').set('France');
// // database.ref('attributes').set({
// //   weight: 77,
// //   height: 192
// // }).then(() => {
// //   console.log('Data is updated');
// // }).catch((e) => {
// //   console.log(e);
// // });
