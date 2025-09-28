import CreateBlogsForm from "@/components/modules/Blogs/CreateBlogsForm";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-full">
      <h1 className="my-5 text-center text-xl">Create Blog</h1>
      <CreateBlogsForm/>
    </div>
  );
};

export default CreateBlog;
