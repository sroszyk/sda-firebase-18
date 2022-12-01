import './../styles/styles.css';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, list, ref as storageRef, uploadBytes } from "firebase/storage";
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore"
import { getDatabase, onChildAdded, onValue, push, ref, remove, set } from "firebase/database";
import { getAuth, EmailAuthProvider, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, getIdToken } from "firebase/auth";
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
    apiKey: "AIzaSyBJwX2FSrFkzxWXTiUHzu3TcGHi-ijfPGs",
    authDomain: "sda-firebase-9021a.firebaseapp.com",
    projectId: "sda-firebase-9021a",
    storageBucket: "sda-firebase-9021a.appspot.com",
    messagingSenderId: "994801333963",
    appId: "1:994801333963:web:5f83dfd22504d1c5660d4e",
    databaseURL: "https://sda-firebase-9021a-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
//const db = getDatabase();


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

// // const imageRef = ref(storage, "ZdjęcieCV.png");
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
//           const myFileRef = ref(storage, myFileNameInput.value);

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
// const myName = document.getElementById("myName");
// const myBtn = document.getElementById("myBtn");
// const myUsersList = document.getElementById("myUsersList");

// myBtn.addEventListener("click", () => {
//     const usersCollection = collection(db, "users");
//     const myQuery = query(usersCollection, where("Name", "==", myName.value));
//     getDocs(myQuery).then((docs) => {
//         myUsersList.innerHTML = "";
//         docs.forEach((userDoc) => {
//             const user = userDoc.data();
//             const listItem = document.createElement("li");
//             listItem.innerText = `${user.Name} ${user.Surname}`;
//             myUsersList.appendChild(listItem);
//         })
//     });
// });


//ZADANKO 
// const childrenList = document.getElementById("childrenList");
// const childNameInput = document.getElementById("childName");
// const addChildBtn = document.getElementById("addChildBtn");
// const janKowalskiDoc = doc(db, "users", "JanKowalskiId");


// onSnapshot(janKowalskiDoc, (docRes) => {
//     childrenList.innerHTML = "";
//     const janek = docRes.data();
//     janek.Dzieci.forEach(dziecko => {
//         const itemDziecko = document.createElement("li");
//         itemDziecko.innerText = dziecko;
//         childrenList.appendChild(itemDziecko);
//         //TUTAJ DODAJ PRZYCISK DELETE
//         // + EVENT LISTENER NA CLICK
//     });
// });

// addChildBtn.addEventListener("click", () => {
//     updateDoc(janKowalskiDoc, {
//         Dzieci: arrayUnion(childNameInput.value)
//     });
// })

// const userName = document.getElementById("userName");
// const userSurname = document.getElementById("userSurname");
// const addUserBtn = document.getElementById("addUserBtn");
// const usersRef = ref(db, "users");
// const usersList = document.getElementById("usersList");

// addUserBtn.addEventListener("click", () => {
//     const userRef = push(usersRef);
//     set(userRef, {
//         name: userName.value,
//         surname: userSurname.value
//     })
// }
// onValue(usersRef, (snapshot) => {
//     usersList.innerHTML = "";
//     snapshot.forEach(userSnapshot => {
//         const user = userSnapshot.val();
//         const listItem = document.createElement("li");
//         listItem.innerText = `${user.name} ${user.surname}`;

//         const removeBtn = document.createElement("button");
//         removeBtn.innerText = "Remove";
//         removeBtn.addEventListener("click", () => {
//             remove(userSnapshot.ref);
//         });
//         listItem.appendChild(removeBtn);

//         usersList.appendChild(listItem);
//     });
// })


//ZADANKO
// const fakeDoc = document.getElementById("fakeDoc");
// const docRef = ref(db, "doc");
// fakeDoc.addEventListener("input", () => {
//     set(docRef, {
//         text: fakeDoc.value
//     });
// });

// onValue(docRef, (snapshot) => {
//     const docObj = snapshot.val();
//     if(fakeDoc.value !== docObj.text){
//         fakeDoc.value = docObj.text;
//     }
// })


// const usernameInput = document.getElementById("username");
// const usercolorInput = document.getElementById("usercolor");
// const adduserBtn = document.getElementById("adduser");
// const userSelect = document.getElementById("userselect");
// const selectedUserHeader = document.getElementById("selecteduser");
// const messageInput = document.getElementById("message");
// const sendMessageBtn = document.getElementById("sendmessage");
// const messagesDiv = document.getElementById("messages");
// let selectedUser = {};
// const messagesRef = ref(db, "messages");

// onChildAdded(messagesRef, (messageSnapshot) => {
//     const message = messageSnapshot.val();

//     const messageDiv = document.createElement("div");
//     const textSpan = document.createElement("span");
//     const authorSpan = document.createElement("span");
//     const dateSpan = document.createElement("span");

//     textSpan.innerText = message.text;
//     authorSpan.innerText = message.createdBy;
//     dateSpan.innerText = message.createdAt;

//     messageDiv.appendChild(textSpan);
//     messageDiv.appendChild(authorSpan);
//     messageDiv.appendChild(dateSpan);
//     messageDiv.style.backgroundColor = message.color;
//     messageDiv.classList.add("message");

//     messagesDiv.appendChild(messageDiv);
// })

// sendMessageBtn.addEventListener("click", () => {
//     const message = {
//         text: messageInput.value,
//         createdAt: new Date().toISOString(),
//         createdBy: selectedUser.username,
//         color: selectedUser.color
//     };

//     const messageRef = push(messagesRef);
//     set(messageRef, message);
// })

// adduserBtn.addEventListener("click", () => {
//     const userRef = ref(db, `users/${usernameInput.value}`);
//     set(userRef, {
//         color: usercolorInput.value
//     });
// });

// userSelect.addEventListener("change", () => {
//     selectedUser = {
//         username: userSelect.value,
//         color: userSelect.selectedOptions[0].dataset.color
//     }
//     selectedUserHeader.innerText = userSelect.value;
//     selectedUserHeader.style.color = userSelect.selectedOptions[0].dataset.color;
// })

// const usersRef = ref(db, "users");
// onValue(usersRef, (snapshot) => {
//     userSelect.innerHTML = "";
//     const emptyOption = document.createElement("option");
//     userSelect.appendChild(emptyOption);

//     snapshot.forEach(userSnapshot => {
//         const user = userSnapshot.val();
//         const option = document.createElement("option");
//         option.innerText = userSnapshot.key;
//         option.dataset.color = user.color;
//         userSelect.appendChild(option);
//     })
// })


// const loginHeader = document.getElementById("loginHeader");
// const buttonSignOut = document.getElementById("signOutButton");
// const profilePhotoInput = document.getElementById("profilePhotoInput");
// const sendPhotoBtn = document.getElementById("sendPhoto");
// const photoProfileImg = document.getElementById("profilePhoto"); 
// const addressInput = document.getElementById("address");
// const motherNameInput = document.getElementById("motherName");
// const salary = document.getElementById("salary");
// const phoneNumber = document.getElementById("phoneNumber");
// const updateBtn = document.getElementById("updateBtn");

// buttonSignOut.addEventListener("click", () => {
//     signOut(auth);
// })

// updateBtn.addEventListener("click", () => {
//     const docRef = doc(db, `users/R8f79i05sqYcPTBO1OeCPx1rIlJ2`);
//     setDoc(docRef, {
//         address: addressInput.value,
//         motherName: motherNameInput.value,
//         salary: salary.value,
//         phoneNumber: phoneNumber.value
//     });
// })

// // sendPhotoBtn.addEventListener("click", () => {
// //     const file = profilePhotoInput.files[0];
// //     const fileRef = storageRef(storage, `${auth.currentUser.uid}/${file.name}`);
// //     uploadBytes(fileRef, file).then(result => {
// //         getDownloadURL(fileRef).then((url) => {
// //             updateProfile(auth.currentUser, {
// //                 photoURL: url
// //             });
// //         });
// //     });
// // });

// sendPhotoBtn.addEventListener("click", async () => {
//     const file = profilePhotoInput.files[0];
//     const fileRef = storageRef(storage, `${auth.currentUser.uid}/${file.name}`);
//     const _ = await uploadBytes(fileRef, file);
//     const url = await getDownloadURL(fileRef);
//     updateProfile(auth.currentUser, {
//         photoURL: url
//     });
// });

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log(photoProfileImg.classList);
//         loginHeader.innerText = `Witaj ${user.displayName}!`
//         photoProfileImg.src = user.photoURL;
//         buttonSignOut.classList.remove("hidden");
//         profilePhotoInput.classList.remove("hidden");
//         sendPhotoBtn.classList.remove("hidden");
//         photoProfileImg.classList.remove("hidden");

//     }
//     else {
//         loginHeader.innerText = "Zaloguj się! Dziadu!";
//         buttonSignOut.classList.add("hidden");
//         profilePhotoInput.classList.add("hidden");
//         sendPhotoBtn.classList.add("hidden");
//         photoProfileImg.classList.add("hidden");

//         const ui = new firebaseui.auth.AuthUI(auth);
//         ui.start('#firebaseui-auth-container', {
//             callbacks: {
//                 signInSuccessWithAuthResult: (authResult, redirectUrl) => {
//                     console.log(authResult);
//                     console.log(redirectUrl);
//                 }
//             },
//             signInOptions: [
//                 EmailAuthProvider.PROVIDER_ID,
//                 GoogleAuthProvider.PROVIDER_ID
//             ],
//             signInSuccessUrl: "http://localhost:8080/"
//         });
//     }
// });

const container = document.getElementById("container");
const auth = getAuth(app);
const noteTitleInput = document.getElementById("noteTitle");
const noteTextInput = document.getElementById("noteText");
const noteThumbnailInput = document.getElementById("noteThumbnail");
const saveBtn = document.getElementById("saveBtn");
const previewThumbnail = document.getElementById("previewThumbnail");
const notesList = document.getElementById("notesList");

noteThumbnailInput.addEventListener("change", () => {
    const file = noteThumbnailInput.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onloadend = function () {
            previewThumbnail.src = fileReader.result;
        }
        fileReader.readAsDataURL(file);
    }
    else {
        previewThumbnail.src = "";
    }
})

saveBtn.addEventListener("click", async () => {
    const file = noteThumbnailInput.files[0];
    const collRef = collection(db, `users/${auth.currentUser.uid}/notes`);
    const fileRef = storageRef(storage, `${auth.currentUser.uid}/${file.name}`);
    let _ = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);

    _ = await addDoc(collRef, {
        title: noteTitleInput.value,
        text: noteTextInput.value,
        thumbnail: url
    });

    noteTitleInput.value = "";
    noteTextInput.value = "";
    noteThumbnailInput.value = "";
    previewThumbnail.src = "";
});

function displayNotes() {
    const collRef = collection(db, `users/${auth.currentUser.uid}/notes`);
    getDocs(collRef).then((docs) => {
        docs.forEach(doc => {
            const note = doc.data();
            const noteContainer = document.createElement("div");
            noteContainer.classList.add("note-container");

            const thumbnail = document.createElement("img");
            thumbnail.src = note.thumbnail;

            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
            const title = document.createElement("div");
            title.innerText = note.title;

            const text = document.createElement("div");
            text.innerText = note.text;

            textContainer.appendChild(title);
            textContainer.appendChild(text);

            noteContainer.appendChild(textContainer);
            noteContainer.appendChild(thumbnail);
            notesList.appendChild(noteContainer);
        })
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        container.classList.remove("hidden");
        displayNotes();
    }
    else {
        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                EmailAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: "http://localhost:8080/"
        });
    }
})
