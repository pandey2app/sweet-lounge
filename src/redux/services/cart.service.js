import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const collectionName = "carts"

export const getCartFromAPI = async () => {
    const carts = []
    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
        let cart = doc.data()
        cart.id = doc.id
        carts.push(cart)
    });

    return carts
}

export const addCartToAPI = async (cart) => {
    const docRef = await addDoc(collection(db, collectionName), cart);
    console.log("Document written with ID: ", docRef.id);
}

export const updateCartToAPI = async (cart, id) => {
    const cartRef = doc(db, collectionName, id);
    await updateDoc(cartRef, cart)
}

export const deleteCartFromAPI = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
}