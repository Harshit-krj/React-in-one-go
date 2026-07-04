import { Client, Account, ID } from "appwrite";
import config from "../config/config";
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.url).setProject(config.projectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, name, password }) {
    try {
      const user = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (user) {
        return this.login({email,password});
      } else {
        return user;
      }
    } catch (err) {
      throw err;
    }
  }
  async login({email,password}){
    try{
        return await this.account.createEmailPasswordSession({email,password});
    }
    catch(err){
        throw err;
    }
  }
  async getCurrentUser(){
    try{
        return await this.account.get();
    }catch(err){
        console.log("the get service "+err);
        return null;
    }
  }
  async logout(){
    try{
        await this.account.deleteSessions();
        return true;
    }
    catch(err){
        console.log("the log out service "+err);
        return false;
    }
  }
}
const authservice = new AuthService();
export default authservice;