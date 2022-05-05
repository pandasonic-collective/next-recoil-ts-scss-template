import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    WhereFilterOp,
    CollectionReference,
    DocumentReference
} from 'firebase/firestore'

// import { } from 'firebase/storage'

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

export const app = initializeApp(config)
export const db = getFirestore()
export const auth = getAuth()

export const CreateCollectionRef = (collectionName: string) => collection(db, collectionName)
export const QueryCollectionWhere = (ref: CollectionReference, column: string, type: WhereFilterOp, value: any) => query(ref, where(column, type, value))
export const GetDocsWhere = async (ref: CollectionReference, column: string, type: WhereFilterOp, value: any) => await getDocs(QueryCollectionWhere(ref, column, type, value))
export const AddDocTo = async (ref: CollectionReference, data: any) => await addDoc(ref, data)
export const CreateDocumentRef = (collectionName: string, docId: string) => doc(db, collectionName, docId)
export const AddDocWithIdTo = async (ref: DocumentReference, data: any, merge: boolean = false) => await setDoc(ref, data, {merge})
export const GetDocById = async (ref: DocumentReference) => await getDoc(ref)

//Provider PreRegister




// export const db = firebase.firestore()
//
// export const preRegisters = db.collection('pre-register')
// export const users = db.collection('Users')
//
//
// // export const auth = firebase.auth()
// // export const googleProvider = new firebase.auth.GoogleAuthProvider()
//
// export const storage = firebase.storage()
