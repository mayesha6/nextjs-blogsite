"use client";
import { useState } from "react";
import Form from "next/form";
import { create } from "@/actions/create";

export default function CreateBlogsForm() {
  const [isFeatured, setIsFeatured] = useState(false);

  return (
    <Form
      action={create}
      className="max-w-lg mx-auto p-4 border rounded-lg shadow-md space-y-4"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          name="content"
          rows={4}
          placeholder="Write your content here..."
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      {/* Featured */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Featured
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === true}
              onChange={() => setIsFeatured(true)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="featured"
              value="false"
              checked={isFeatured === false}
              onChange={() => setIsFeatured(false)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          name="thumbnail"
          placeholder="https://example.com/image.jpg"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tags (comma separated)
        </label>
        <input
          type="text"
          name="tags"
          placeholder="e.g. react,nextjs,tailwind"
          className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}
