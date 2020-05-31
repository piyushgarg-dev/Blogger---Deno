# Blogger - Made with Deno 🚀

## Quick Start

Run: ```deno run --allow-net --allow-write --allow-read --allow-plugin --unstable index.ts```

## Api Refrence

### Get All Blogs
* Route: /blogs
* Method: GET

### Get Blog by ID
* Route /blog/:id
* Method: GET

### Add new blog
* Route: /add-blog
* Method: POST
* Body: { title: string, content: string }