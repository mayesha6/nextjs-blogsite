/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`)
    const blogs = await res.json()
    console.log(blogs)
    return(
        blogs.data.data.slice(0,2).map((blog: any)=> ({
            blogId: String(blog.id)
        }))
    )
}

export const generateMetadata = async ({params}: {params: Promise<{blogId : string}>}) => {
    
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    return {
        title: blog?.data?.title,
        description: blog?.data?.content
    }
};
const BlogDetailsPage = async ({params}: {params: Promise<{blogId : string}>}) => {
    
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    console.log(blog.data.title)
    return (
        <div>
            <BlogDetailsCard blog={blog.data}/>
        </div>
    );
};

export default BlogDetailsPage;