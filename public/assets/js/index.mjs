
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";


async function httpGet (url) {
    let response = await fetch(url, {
        mode: 'no-cors'
    });
    let data = await response.json();
    return data;
}


async function main() {
  // Load the script
  try {
    var firebaseConfig = {
        apiKey: "AIzaSyByPjdkgxTU0pQXpZMgrVwJpivy_E_cBFg",
        authDomain: "portfolio-onepersonhere.firebaseapp.com",
        projectId: "portfolio-onepersonhere",
        storageBucket: "portfolio-onepersonhere.appspot.com",
        messagingSenderId: "318798962274",
        appId: "1:318798962274:web:de382a0d67b6be49727b3b",
        measurementId: "G-PPTSPLBSDT"
      };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    console.log(`successfully loaded firebase`);

    let apiKey = "125ad3433faf93cb76211df26443216815aadcdacfa0f9ab4ae58a48";

    $("#button-cv").on("click", async function(){
        logEvent(analytics, 'button_clicked');
        const counterRef = doc(db, "count", "count")
        const counterSnap = await getDoc(counterRef);
        const curr_count = counterSnap.data().count;
        
        try {
          await updateDoc(counterRef, {
            count: curr_count + 1
          });

          await $.getJSON('https://api.ipdata.co?api-key=' + apiKey, function(data) {
              const geoRef = doc(db, "ip", data["ip"]);
              setDoc(geoRef, data);
              console.log("Document written with ID: " +  data["ip"]);
          });
        } catch (e) {
          console.log('error', e);
        }
        location.href = "/cv";
    })
  } catch (e) {
    console.log('error', e);
  } 
}

main();