import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

import { getAuth } from "firebase/auth";

const auth = getAuth(app);
// firebase deploy --token "$1//0hGygStyCIwYJCgYIARAAGBESNwF-L9Irdhg_PzQGkNn0a_Uzg_dJjqfQzAq-S9Kw_eQAuUeIRv_--gbIsXot6c04jUEfZnGkcWA"