import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "All Blogs | Next Blog" ,
  description : "browse all blogs on web development, Next JS, React JS and more."
}

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    cache:"no-store"
  })
  const blogs = await res.json()
  console.log(blogs.data.data)
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="container py-16 mx-auto grid grid-cols-3 gap-5">
        {blogs.data.data.map((blog : IPost)=>(
          <BlogCard key={blog.id} post={blog}/>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
