import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const collectionName = "cart"

export const getCartFromAPI = async () => {
    let cart = {}
    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
        cart = doc.data()
        cart.id = doc.id
    });

    return cart
}

export const addCartToAPI = async (cart) => {
    const currentCart = localStorage.getItem("currentCart")
    if (!currentCart) {
        const docRef = await addDoc(collection(db, collectionName), cart);
        localStorage.setItem("currentCart", docRef.id)
        console.log("Document written with ID: ", docRef.id);
    } else {
        const cartRef = doc(db, collectionName, cart.id);
        await updateDoc(cartRef, cart)
    }
}

export const updateCartToAPI = async (cart, id) => {
    const cartRef = doc(db, collectionName, id);
    await updateDoc(cartRef, cart)
}

export const deleteCartFromAPI = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
}