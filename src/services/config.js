/*
  Ce fichier contient les variables de configuration
  reliées à Firebase et ses produits.
*/

// Configuration Firebase (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCALR26mfBqim8lJw9DongwsXO3agomG7Y",
  authDomain: "panier-achats-cpatry.firebaseapp.com",
  databaseURL: "https://panier-achats-cpatry-default-rtdb.firebaseio.com",
  projectId: "panier-achats-cpatry",
  storageBucket: "panier-achats-cpatry.appspot.com",
  messagingSenderId: "834323949561",
  appId: "1:834323949561:web:c4a89652abde78b46dff28",
  measurementId: "G-N0T5DY59QR"
};
export default firebaseConfig;

// Nom de la collection principale
export const utilRef = "utilisateurs-ex5";
// Nom de la sous-collection
export const dossRef = "dossiers";