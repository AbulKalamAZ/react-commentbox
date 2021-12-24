import app from "./config";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayUnion,
} from "firebase/firestore/lite";

const db = getFirestore(app);

// Create doc in commentboxes collection

const createDocInCollection = async (id) => {
  // docData with the id first
  const docData = {
    id: id,
    comments: [],
  };

  try {
    await setDoc(doc(db, "commentboxes", id), docData);
    return id;
  } catch (e) {
    return new Error("setDoc function failed!");
  }
};

// Update doc in commentboxes collection

const updateDocInCollection = async (newComment, id) => {
  const docRef = doc(db, "commentboxes", id);

  try {
    await updateDoc(docRef, {
      comments: arrayUnion(newComment),
    });
  } catch (err) {
    console.log(err);
  }
};

// Read doc in commentboxes collection

const readDocInCollection = async (id) => {
  const docRef = doc(db, "commentboxes", id);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return new Error("No such document!");
    }
  } catch (err) {
    console.log(err);
  }
};

const utilities = {
  createDocInCollection,
  updateDocInCollection,
  readDocInCollection,
};

export default utilities;
