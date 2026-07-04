import { Client, TablesDB, Storage, Query, ID } from "appwrite";
import config from "../config/config";
class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client.setEndpoint(config.url).setProject(config.projectId);
    this.database = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createRow({
        databaseId: config.databaseId,
        tableId: config.collectionId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (err) {
      console.log("the create post " + err);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateRow(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (err) {
      console.log("the update post " + err);
    }
  }
  async deletePost(slug) {
    try {
      await this.database.deleteRow({
        databaseId: config.databaseId,
        tableId: config.collectionId,
        rowId: slug,
      });
      return true;
    } catch (err) {
      console.log("the delete post " + err);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.database.getRow({
        databaseId: config.databaseId,
        tableId: config.collectionId,
        rowId: slug,
      });
    } catch (err) {
      console.log("the get post " + err);
      return false;
    }
  }
  async getPost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.getRow({
        databaseId: config.databaseId,
        tableId: config.collectionId,
        queries,
      });
    } catch (err) {
      console.log("the get post " + err);
      return false;
    }
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: config.bucketId,
        fileId: ID.unique(),
        file,
      });
    } catch (err) {
      console.log("the Upload image " + err);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile({
        bucketId: config.bucketId,
        fileId,
      });
      return true;
    } catch (err) {
      console.log("the delete image " + err);
      return false;
    }
  }
  async filePreview(fileId){
    try{
        return this.bucket.getFilePreview({
            bucketId:config.bucketId,
            fileId
        })
    }
    catch(err){
        console.log("the delete image " + err);
      return false;
    }
  }
}
const service = new Service();
export default service;
