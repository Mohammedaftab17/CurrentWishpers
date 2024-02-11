import { Client, Databases, Account } from "appwrite";
import Configure from "./Configure";

const client = new Client();
client
  .setEndpoint(Configure.appwriteUrl)
  .setProject(Configure.appwriteProjectId);

export const databases = new Databases(client);
export const account = new Account(client);
export default client;
