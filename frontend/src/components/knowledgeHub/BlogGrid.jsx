import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogGrid = ({ blogs }) => {
  const navigate = useNavigate();

  /* EMPTY STATE */
  if (!blogs || blogs.length === 0) {
    return (
      <div className="py-2 flex flex-col items-center justify-center text-center px-2">
        {/* GLOW ORB */}
        <div
          className="w-32 h-32 rounded-full 
          bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_70%)]
          blur-2xl mb-6"
        />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-light tracking-wide
          bg-gradient-to-r from-white via-sky-300 to-white 
          text-transparent bg-clip-text mb-3"
        >
          No Articles Found
        </motion.h2>

        <p className="text-white/60 max-w-md leading-relaxed mb-4">
          No blogs match this filter yet. Try switching filters or explore other categories to continue learning.
        </p>
      </div>
    );
  }

  /* NORMAL GRID */
  return (
    <div className="px-[8%] pb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <motion.div
          key={blog.id}
          whileHover={{
            scale: 1.03,
            y: -5,
            boxShadow: "0 15px 50px rgba(56,189,248,0.3)",
            borderColor: "#38bdf8",
          }}
          whileTap={{ scale: 0.97 }}
          className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 transition-all duration-300 shadow-lg"
        >
          {/* BLOG IMAGE */}
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* BLOG INFO */}
          <div className="absolute bottom-0 p-5">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-300 transition">
              {blog.title}
            </h3>

            <div className="flex justify-between text-sm text-white/60">
              <span>{blog.date}</span>
            </div>

            {/* READ ARTICLE BUTTON */}
            <div
              onClick={() => navigate(`/knowledge-hub/blog/${blog.id}`)}
              className="flex items-center gap-2 mt-3 text-sky-300 opacity-0 group-hover:opacity-100 transition cursor-pointer"
            >
              Read Article <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogGrid;