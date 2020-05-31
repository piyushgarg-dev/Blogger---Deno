import { HandlerFunc } from 'https://deno.land/x/abc@v1.0.0-rc8/mod.ts'
import { Blog } from '../services/mongodb.ts';

interface blogRequest {
  title: string;
  content: string;
}

export const getAllBlogs: HandlerFunc = async (c) => {
  return await Blog.getAll();
}

export const getBlogById: HandlerFunc = async (c) => {
  return await Blog.getById(c.params.id);
}

export const addNewBlog: HandlerFunc = async (c) => {
  const { title, content } = await c.body<blogRequest>();

  if(!title || !content) return {error: 'Payload missing'}

  const blog = new Blog();
  blog.body = content;
  blog.title = title;
  return await Blog.addNewBlog(blog);
}