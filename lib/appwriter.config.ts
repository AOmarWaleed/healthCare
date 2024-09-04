
import * as sdk from 'node-appwrite';
//! ERROR
export const {
    PROJECT_ID,
    API_KEY,
    DB_ID,
    USERS_COLLECTION_ID,
    DOCTORS_COLLECTION_ID,
    APPOINTMENTS_COLLECTION_ID,
    NEXT_PUBLIC_STORAGE_ID: STORAGE_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,

} = process.env;


//! all undefined
console.log(
    process.env,
    PROJECT_ID,
    API_KEY,
    DB_ID,
    USERS_COLLECTION_ID,
    DOCTORS_COLLECTION_ID,
    APPOINTMENTS_COLLECTION_ID
);


const client = new sdk.Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1")
    // .setEndpoint(ENDPOINT!)
    .setProject("66d6e1600028e25e2a88")
    // .setProject(PROJECT_ID!)
    .setKey("standard_9e53846d01fed3ad15b90807239154f86c2816c82816956af9cfac3e9b83ee88733f386fa08e0b0dcf8ff6968936f926877b1462ef1bfb2c37413b33bf142170ad5e10b5ea18f58d9753246ae5320aa34425f87167a656d174fb36873565c4ad6c3759e7eee5cd5075799f4a3ffe2ab2fabf6e38a6d2202ab2fea1f4b8862c47");
// .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);













