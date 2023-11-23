import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { onValue, getDatabase, set, ref as databaseRef } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyADlFpFRYXFTTnYtdPWaS5FpylahOkyTek",
    authDomain: "guitar-tunner-9bd54.firebaseapp.com",
    projectId: "guitar-tunner-9bd54",
    storageBucket: "guitar-tunner-9bd54.appspot.com",
    messagingSenderId: "534214805325",
    appId: "1:534214805325:web:8941f0e10a240d5d085904",
    measurementId: "G-4F13BLVGNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app)
const db = getDatabase(app)


const user = auth.currentUser;
const userId = user.uid;

function displayUserImage() {
    if (user) {
        const profileRef = databaseRef(db, `Users/${userId}/ProfileImg`);
        const NavuserImgElement = document.getElementById('Navuserimg');
        const NavuserImgResElement = document.getElementById('NavuserimgRes');

        onValue(profileRef, (snapshot) => {
            const ProfileImg = snapshot.val();

            if (ProfileImg && ProfileImg.ProfileImgUrl) {
                NavuserImgElement.src = ProfileImg.ProfileImgUrl;
                NavuserImgResElement.src = ProfileImg.ProfileImgUrl;
            } else {
                NavuserImgElement.src = 'https://firebasestorage.googleapis.com/v0/b/guitar-tunner-9bd54.appspot.com/o/Fallbackimage%2FUserAccountImg.jpg?alt=media&token=196736bc-792c-4f98-bef2-5ce5f2efa047'
                NavuserImgResElement.src = 'https://firebasestorage.googleapis.com/v0/b/guitar-tunner-9bd54.appspot.com/o/Fallbackimage%2FUserAccountImg.jpg?alt=media&token=196736bc-792c-4f98-bef2-5ce5f2efa047'
            }
        })
    } else {
        console.log
    }
}