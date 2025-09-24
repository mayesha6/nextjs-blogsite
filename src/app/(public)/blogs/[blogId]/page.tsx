import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

const BlogDetailsPage = async ({params}: {params: Promise<{blogId : string}>}) => {
    
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    console.log(blog)
    return (
        <div>
            <BlogDetailsCard blog={blog.data}/>
        </div>
    );
};

export default BlogDetailsPage;