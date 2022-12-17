import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export const Postdata = async (data, collectiondata) => {
  let timeStamp = serverTimestamp();
  let status = "active";
  try {
    await addDoc(collectiondata, { ...data, timeStamp, status });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (type, setUsers) => {
  const userCollectiontionRef = collection(db, type);
  try {
    const data = await getDocs(userCollectiontionRef);
    setUsers(data.docs.map((uesr) => ({ ...uesr.data(), id: uesr.id })));
  } catch (err) {
    console.log(err);
  }
};

export const LogoutUser = async () => {
  await signOut(auth);
  localStorage.clear();
  alert("Logout Successfully");
  window.location.replace("/");
};

export function getAlldata(type, setList) {
  let list = [];
  const unsub = onSnapshot(
    collection(db, type),
    (snapshot) => {
      snapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
      setList(list);
      // console.log(list);
    },
    (err) => {
      console.log(err);
    }
  );
  return unsub;
}
