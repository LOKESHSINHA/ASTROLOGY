import { useParams, Link } from "react-router-dom";
import config from '../config';
import { useState, useEffect } from "react";
const API_BASE_URL = config.API_BASE_URL;
export default function BlogDetails() {
  const { id } = useParams(); // get blog ID from route
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);

  useEffect(() => {
    // fetch current blog
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/get-blogs?id=${id}`);
        const data = await res.json();
        setBlog(data.blog);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    // fetch all blogs for “other blogs” (excluding current)
    const fetchOtherBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/get-blogs`);
        const data = await res.json();
        const filtered = data.blogs.filter((b) => b.id !== id);
        setOtherBlogs(filtered);
      } catch (err) {
        console.error("Error fetching other blogs:", err);
      }
    };

    fetchBlog();
    fetchOtherBlogs();
  }, [id]); // ✅ only depends on id now

  if (!blog) return <p className="text-center mt-10 text-gray-500">Loading blog...</p>;

  return (
    <article className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      {/* Blog Image */}
      {blog.featuredImage && (
        <img
          src={`${API_BASE_URL}${blog.featuredImage}`}
          alt={blog.title || "Blog image"}
          className="w-full max-w-xl max-h-64 mx-auto mb-6 object-contain rounded-lg"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        {blog.title || "-"}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        {blog.publishDate ? (
          <span>
            📅{" "}
            {new Date(blog.publishDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        ) : (
          <span>📅 -</span>
        )}
        <span>✍️ {blog.author || "-"}</span>
        <span>📂 {blog.category || "-"}</span>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {blog.content
          ? blog.content.split("\n").map((line, idx) => <p key={idx}>{line}</p>)
          : <p>-</p>}
      </div>

      {/* Tags */}
      {blog.tags ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {String(blog.tags)
            .replace(/"/g, "")
            .split(",")
            .map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag.trim() || "-"}
              </span>
            ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-gray-400">No tags</p>
      )}

      {/* Other Blogs */}
      {otherBlogs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Other Blogs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherBlogs.map((b) => (
              <Link
                key={b.id}
                to={`/blog/${b.id}`}
                className="border rounded-lg p-4 hover:shadow-lg transition-all flex flex-col gap-2"
              >
                {b.featuredImage && (
                  <img
                    src={`${API_BASE_URL}${b.featuredImage}`}
                    alt={b.title || "Blog"}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                )}
                <h3 className="text-lg font-semibold text-gray-900">
                  {b.title || "-"}
                </h3>
                <p className="text-gray-600 text-sm">{b.excerpt || "-"}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back Button */}
      <Link
        to="/blog"
        className="mt-10 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
      >
        ← Back to Blogs
      </Link>
    </article>
  );
}