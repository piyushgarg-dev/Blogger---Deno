import { Application } from "https://deno.land/x/abc@v1.0.0-rc8/mod.ts";
import { getAllBlogs, getBlogById, addNewBlog } from './controllers/index.ts';

const app = new Application();

app
.get('/blogs', getAllBlogs)
.get('/blog/:id', getBlogById)
.post('/add-blog', addNewBlog)
.start({ port: 8000 })
