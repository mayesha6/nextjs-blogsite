import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      revalidate: 30
    }
  })
  const blogs = await res.json()
  console.log(blogs.data.data)
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 py-10 container mx-auto">
        {blogs.data.data.slice(0,3).map((blog : IPost)=>{
          return(
            <BlogCard key={blog.id} post={blog}/>
          )
        })}
      </div>
    </div>
  );
}
