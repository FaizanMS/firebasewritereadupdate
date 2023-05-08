import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase, ref, set, onValue, child, get, push, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBlxlOUdXlngXpsJbAR5LFXCAhzh-BApFA",
  authDomain: "faizanalam97-2a6ec.firebaseapp.com",
  projectId: "faizanalam97-2a6ec",
  storageBucket: "faizanalam97-2a6ec.appspot.com",
  messagingSenderId: "241029177691",
  appId: "1:241029177691:web:8f4718142e26a80e3afa7e",
  measurementId: "G-KNS6GL0FK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getDatabase()


let mydb = database.users

    //   for (let key in db.users){


        

    //   }

    //   const starCountRef = ref(database, 'users/' + '6X1klk356MY9qAHB2yHb7FfPdHr2');
    //   onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    
    //   document.write("<h1>", data.email,"<h1>")
    //   console.log(data.email)

    //     updateStarCount(postElement, data);
    //   });


    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `users/iZjEchlBXiaJYk5LfFyyUFomQG33`)).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //   } else {
    //     console.log("No data available");
    //   }
    // }).catch((error) => {
    //   console.error(error);
    // });


   

            // const starCountRef = ref(database, 'users/6X1klk356MY9qAHB2yHb7FfPdHr2');
            // onValue(starCountRef, (snapshot) => {
            //   const data = snapshot.val();
          
            // document.write("<h1>", data,"<h1>")
            // console.log(data)
      
            //   updateStarCount(postElement, data);
            // });

            ////////////////////////////////////

            // ref.child("users").once("value").then(function(questionsSnapshot) {
            //   return questionsSnapshot.forEach(function(questionSnapshot) {
            //     return console.log(questionSnapshot.val());
            //   });
            // });

            ///////////////////////////////////
            
          //   for (var key in questionSnapshot.val()) {
          //     // key = LFutx9mQbTTyRo4A9Re5I4cKN4q2? something like that?
          
          //     for (var key2 in questionSnapshot.val()[key]) {
          //         // key2 = K_23AEu3cjcIKT1tTHf ???
          //         for (var item of questionSnapshot.val()[key][key2]['latest_receipt_info']) {
          //             console.log(item.expires_date);
          //         }
          //      }
          //  }

           //////////////////////////////


           /*
           const starCountRef = ref(database, 'users/');
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();

              for(let a in data){

                document.write("email: ", data[a].email, "<br> password: ", data[a].password, "<br><br><br>")

                

              }
          
        
            console.log(data)
      
            
            });

            */

            const updates = {};
            updates['/users/faizanms' ] = {email: "mamamia!"};
            // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
            update(ref(db), updates);

          