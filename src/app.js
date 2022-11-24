import './../styles/styles.css';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore"

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

//             getDownloadURL(result.ref).then((url) => {
//                 const myImage = document.getElementById("myImage");
//                 myImage.src = url;
//             });
//         });
//     }
//     else {
//         myResult.innerText = "Error: Wybierz plik!";
//     }
// });

//ZADANKO
//1. Wyświetl wszystkie pliki w postaci listy numerowanej bądź nienumerowanej
// const storageRef = ref(storage);
// listAll(storageRef).then((res) => {
//     const myList = document.getElementById("myFilesList");
//     res.items.forEach(item => {
//         const listItem = document.createElement("li");
//         listItem.innerText = item.fullPath;
//         myList.appendChild(listItem);
//     })
// })


// const imageRef = ref(storage, "Test2.jpg");
// deleteObject(imageRef).then(() => {
//     console.log("Plik usunieto!");
// });


//ZADANKO
// Wyswietl wszystkie obrazki, które są w twoim CloudStorage
// const storageRef = ref(storage);
// listAll(storageRef).then((res) => {
//     res.items.forEach(item => {
//         const img = document.createElement("img");
//         const div = document.createElement("div");

//         div.classList.add("card");
//         img.classList.add('image');

//         div.appendChild(img);
//         document.body.appendChild(div);

//         getDownloadURL(item).then((url) => {
//             img.src = url;
//         })
//     })
// })


// //ZADANKO
// // Dodajemy przycisk usuń, który usuwa wskazane zdjęcie i odświeża liste.
// function loadImagesList() {
//     const storageRef = ref(storage);
//     document.body.innerHTML = "";
//     listAll(storageRef).then((res) => {
//         res.items.forEach(item => {
//             const img = document.createElement("img");
//             const div = document.createElement("div");
//             const deleteBtn = document.createElement("button");
//             deleteBtn.innerText = "Delete";
//             deleteBtn.dataset.imageName = item.fullPath;

//             // deleteBtn.addEventListener("click", (event) => {
//             //     const imageRef = ref(storage, event.target.dataset.imageName);
//             //     deleteObject(imageRef).then(() => {
//             //         console.log("Plik usunieto!");
//             //     });
//             // });

//             deleteBtn.addEventListener("click", () => {
//                 deleteObject(item).then(() => {
//                     loadImagesList();
//                 });
//             });

//             div.classList.add("card");
//             img.classList.add('image');

//             div.appendChild(img);
//             div.appendChild(deleteBtn);
//             document.body.appendChild(div);

//             getDownloadURL(item).then((url) => {
//                 img.src = url;
//             })
//         })
//     })
// }

// loadImagesList();

const db = getFirestore(app);
// const usersCollection = collection(db, "users");
// addDoc(usersCollection, {
//     Name: "Szymon",
//     Surname: "Roszyk"
// });

// const myDoc = doc(db, "users", "NowyUserId");
// getDoc(myDoc).then((respData) => {
//     const myUser = respData.data();
//     const test = myUser.Name;
// });

//ZADANKO
// Pobierz dokument, a nastepnie jego pola (imie, nazwisko i wiek) przypisz do
// 3 elementów HTML typu input. Następnie dodaj przycisk, który po kliknięciu pobierze aktualnie
// wpisane dane w te inputy i zaktualizuje dokument o nowe wartość.
// const myName = document.getElementById("myName");
// const mySurname = document.getElementById("mySurname");
// const myAge = document.getElementById("myAge");
// const myBtn = document.getElementById("myBtn");

// const myDoc = doc(db, "users", "NowyUserId");
// getDoc(myDoc).then((respData) => {
//     const myUser = respData.data();
//     myName.value = myUser.Name;
//     mySurname.value = myUser.Surname;
//     myAge.value = myUser.Age;
// });

// myBtn.addEventListener("click", () => {
//     updateDoc(myDoc, {
//         Name: myName.value,
//         Surname: mySurname.value,
//         Age: parseInt(myAge.value)
//     })
// })


//ZADANKO
// Wyswietl liste (imie i nazwisko) wszystkich dokumentów w users
// Dodaj przycisk EDIT do każdego list itema
// Po kliknięciu na EDIT inputy mają zostać uzupełnione o dane z dokumentu
// Po kliknięciu na SAVE dokument ma zostać zaktualizowany
// const myName = document.getElementById("myName");
// const mySurname = document.getElementById("mySurname");
// const myAge = document.getElementById("myAge");
// const myBtn = document.getElementById("myBtn");
// const myUsersList = document.getElementById("myUsersList");

// const usersCollection = collection(db, "users");
// getDocs(usersCollection).then((docs) => {
//     docs.forEach((userDoc) => {
//         const user = userDoc.data();
//         const listItem = document.createElement("li");
//         const editBtn = document.createElement("button");
//         editBtn.innerText = "Edit";

//         editBtn.addEventListener("click", () => {
//             myName.value = user.Name;
//             mySurname.value = user.Surname;
//             myAge.value = user.Age;
//             myBtn.dataset.userId = userDoc.id;
//         });

//         listItem.innerText = `${user.Name} ${user.Surname}`;
//         listItem.appendChild(editBtn);
//         myUsersList.appendChild(listItem);
//     })
// });

// myBtn.addEventListener("click", (event) => {
//     const myDoc = doc(db, "users", event.target.dataset.userId);
//     updateDoc(myDoc, {
//         Name: myName.value,
//         Surname: mySurname.value,
//         Age: parseInt(myAge.value)
//     })
// })


//ZADANKO
// Utwórz dokument HTML zawierający pole input i przycisk. Po naciśnięciu przycisku
// utwórz query bazując na imieniu wprowadzonym do pola input. Wykorzystaj query aby
// pobrać listę użytkowników spełniających dane kryterium i wyświetl ich w liście
const myName = document.getElementById("myName");
const myBtn = document.getElementById("myBtn");
const myUsersList = document.getElementById("myUsersList");

myBtn.addEventListener("click", () => {
    const usersCollection = collection(db, "users");
    const myQuery = query(usersCollection, where("Name", "==", myName.value));
    getDocs(myQuery).then((docs) => {
        myUsersList.innerHTML = "";
        docs.forEach((userDoc) => {
            const user = userDoc.data();
            const listItem = document.createElement("li");
            listItem.innerText = `${user.Name} ${user.Surname}`;
            myUsersList.appendChild(listItem);
        })
    });
});