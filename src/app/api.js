import { collection, getDocs, query, doc, getDoc, deleteDoc, updateDoc, setDoc, where ,addDoc} from "firebase/firestore";
import { db } from './firebase';



// CREATE
export const createItem = async(coleccion,id,obj) => {
    // const colRef = collection(db, coleccion,33);
    // const data = await setDoc(colRef, obj);
    // return data.id;
    if(id!=="0"){
        await setDoc(doc(db, coleccion, id), obj);
        return;
    }
    await addDoc(collection(db, coleccion),obj);
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'items');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async (coleccion)  => {
    const colRef = collection(db, coleccion);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (coleccion,clave,value) => {
    const colRef = collection(db, coleccion);
    const result = await getDocs(query(colRef, where(clave, '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (coleccion,id) => {
    const colRef = collection(db, coleccion);
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'items');
    await deleteDoc(doc(colRef, id));
}

export const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}