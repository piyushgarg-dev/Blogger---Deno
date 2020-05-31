import { Blog } from "./services/mongodb.ts";

const myblog = new Blog();

const x = await Blog.getAll();
console.log(x[0].title)