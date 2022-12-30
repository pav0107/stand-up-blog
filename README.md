# Adventures in Stand-Up

I've built this site as a blog-type site to host some of my thoughts on my stand-up experiences. I built it with Next.js 13, Sanity v3 (a CMS which uses the GROQ query language), TypeScript and Tailwind CSS.

This meant that I was able to put together the content including images and links in Sanity's CMS, and then output that through Next.js.

# Next.js 13

Instead of a pages folder, I've got an app folder. Inside this I'm using route grouping to separate out my files into users and admin folders, without altering the route.

# Sanity.io

A CMS, which allows me to control who is authenticated to post: in this case, just me at the moment. It's currently just for some of my memories of doing stand-up, but I may make it broader in the future, which may include other people posting on it.

# Dependencies

[next-sanity](https://www.npmjs.com/package/next-sanity): a sanity.io toolkit for Next.js
