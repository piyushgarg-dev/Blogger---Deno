import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import {v4 as uuidv4} from 'https://deno.land/std/uuid/mod.ts';

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database('blogger');

const blogs = db.collection('blogs');

export interface Comments {
  _id: string;
  body: string;
}

export class Blog {

  _id: string;
  title?: string;
  body?: string;
  createdOn?: Date;
  comments?: Comments[]

  constructor() {
    this._id = uuidv4.generate();
  }

  static async getAll(): Promise<Blog[]> {
    return await blogs.find({})
  }

  static async getById(id: string): Promise<Blog>{
    return await blogs.findOne({ _id: id});
  }

  static async addNewBlog(blog: Blog){
    const newblog = new Blog();
    newblog.title = blog.title;
    newblog.body = blog.body;
    newblog.createdOn = new Date();
    await blogs.insertOne(newblog);
    return newblog;
  }

}