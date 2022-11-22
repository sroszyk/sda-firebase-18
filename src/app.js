import './../styles/styles.css';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJwX2FSrFkzxWXTiUHzu3TcGHi-ijfPGs",
    authDomain: "sda-firebase-9021a.firebaseapp.com",
    projectId: "sda-firebase-9021a",
    storageBucket: "sda-firebase-9021a.appspot.com",
    messagingSenderId: "994801333963",
    appId: "1:994801333963:web:5f83dfd22504d1c5660d4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


//ZADANKO!

//1. Po kliknieciu w elemencie H1 ma sie pojawic info "Przesyłam..."
//2. Po zakończeniu przesyłania w elemencie H1 ma się pojawić info "Przesłano!"
//3. Dodajemy nowy input, w którym użytkownik może wpisać nazwę pliku
//4. Plik z tą nazwą będzie przesłany
//5. Jeżeli użytkownik nie wybrał pliku i kliknął prześli, to w elemencie H1 wyświetlamy
//   "Error: Wybierz plik" 
// const myBtn = document.getElementById("mySendBtn");
// myBtn.addEventListener("click", () => {
//     const myResult = document.getElementById("myResult");

//     const file = document.getElementById("myFileInput").files[0];
//     if (file) {
//         myResult.innerText = "Przesyłam...";
//         const myFileNameInput = document.getElementById("myFileNameInput");
//         const myFileRef = ref(storage, myFileNameInput.value);

//         uploadBytes(myFileRef, file).then((result) => {
//             myResult.innerText = "Przesłano!";
//         });
//     }
//     else {
//         myResult.innerText = "Error: Wybierz plik!";
//     }
// });

// const imageRef = ref(storage, "ZdjęcieCV.png");
// getDownloadURL(imageRef).then((url) => {
//     const myImage = document.getElementById("myImage");
//     myImage.src = url;
// });


//ZADANKO!
//1. Po przesłaniu obrazka wyświetl ten obrazek w HTMLu
// -- Wykorzystaj metode getDownloadURL
const myBtn = document.getElementById("mySendBtn");
myBtn.addEventListener("click", () => {
    const myResult = document.getElementById("myResult");

    const file = document.getElementById("myFileInput").files[0];
    if (file) {
        myResult.innerText = "Przesyłam...";
        const myFileNameInput = document.getElementById("myFileNameInput");
        const myFileRef = ref(storage, myFileNameInput.value);

        uploadBytes(myFileRef, file).then((result) => {
            myResult.innerText = "Przesłano!";

            getDownloadURL(result.ref).then((url) => {
                const myImage = document.getElementById("myImage");
                myImage.src = url;
            });
        });
    }
    else {
        myResult.innerText = "Error: Wybierz plik!";
    }
});