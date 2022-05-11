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
import {
    getStorage,
    ref,
    uploadBytesResumable ,
    StorageReference,
    UploadMetadata,
    getDownloadURL
} from "firebase/storage";

// import { } from 'firebase/storage'

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

export const app = initializeApp(config)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage();
// Create a root reference

export const CreateCollectionRef = (collectionName: string) => collection(db, collectionName)

export const QueryCollectionWhere = (
    ref: CollectionReference,
    column: string,
    type: WhereFilterOp,
    value: any
) => query(ref, where(column, type, value))

export const GetDocsWhere = async (
    ref: CollectionReference,
    column: string,
    type: WhereFilterOp,
    value: any
) => await getDocs(QueryCollectionWhere(ref, column, type, value))

export const GetAllDocs = (collectionRef: CollectionReference) => getDocs(collectionRef)

export const AddDocTo = async (
    ref: CollectionReference,
    data: any
) => await addDoc(ref, data)

export const CreateDocumentRef = (
    collectionName: string,
    docId: string
) => doc(db, collectionName, docId)

export const AddDocWithIdTo = async (
    ref: DocumentReference,
    data: any,
    merge: boolean = false
) => await setDoc(ref, data, {merge})

export const GetDocById = async (ref: DocumentReference) => await getDoc(ref)

//Storage Functions
export {
    getDownloadURL
}
export const CreateStorageRef = (storageName: string) => ref(storage, storageName)

export const CreateImageFolderStorageRef = (
    storageName: string,
) => CreateStorageRef(`/images/${storageName}`)

export const UploadFileTask = (
    s_ref: StorageReference,
    file:Blob | Uint8Array | ArrayBuffer,
    metadata?: UploadMetadata
) => uploadBytesResumable(s_ref, file, metadata)
