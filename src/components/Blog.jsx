/** @format */

import React from "react";
import { blogPosts } from "../assets/assets";

const Blog = () => {
  return (
    <section id="blog" className="py-12 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          {" "}
          My Journey
        </h2>
        <div className="relative">
          <div className="absolute left-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full" />
            <div>
              {blogPosts.map((post, index) => (
                <div key={post.id} className="mb-8 rerlative">
                  <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white " />
                  <div className="ml-12 pl-8 pr-4 bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {post.timeline} | {post.community}
                    </p>
                    <p className="text-gray-700 mt-4">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Blog;
