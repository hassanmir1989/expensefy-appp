import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBX0_-nZvga0fp52r9UIPA_4FJek160aAY",
    authDomain: "expensify-a0563.firebaseapp.com",
    databaseURL: "https://expensify-a0563.firebaseio.com",
    projectId: "expensify-a0563",
    storageBucket: "expensify-a0563.appspot.com",
    messagingSenderId: "424400787990"
  };

  firebase.initializeApp(config); 


  const database = firebase.database()

  export {firebase,database as default}

// database.ref().once("value",(snapshot)=>{
    
//     snapshot.forEach((childSnapshot) => {
//         const expenses = []

//         expenses.push({
//             id:childSnapshot.key
//         })
//         console.log(expenses)
//     })
// })



// database.ref("expenses").on("value",(snapshot)=>{
    
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
        
//     })
//     console.log(expenses)
// })
// database.ref().once("value").then((snapshot) => {
//     const val = snapshot.val()
// console.log(val)
// })
// .catch((e) => {
//     console.log(e)
// })

//   database.ref().set({
//       name:"Hassan aMir",
//       age:20,
//       sex:"maale",
//       stressLevel:6,
//       job:{
//           title:"software developer",
//           company:"google"
//       },
//       works:"yeeees",
//       location:{
//           a:"khaitan",
//           b:"farwaniya"
//       }
//   }).then(() => {
//       console.log("works")
//   }).catch((e) => {
//     console.log(e)
//   })

// database.ref("location/a").set("Wassim")
// database.ref("attribute").set({wieght:20,height:120})

// database.ref("stressLevel").set(9)

// database.ref("job/company").set("amazon")

// database.ref().update({
//     "location/a":"seatle"
// })

// database.ref().on("value",(snapshot)=>{
//     console.log(snapshot.val())
// })


// database.ref().on("value",(snapshot) => {
//     console.log(`${snapshot.val().name} works at ${snapshot.val().job.company} in ${snapshot.val().location.a}`)
// })


// database.ref().update({
//         "location/a":"kuwait"
//     })



