import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/knowledgeBlogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Reveal animation for scroll-in elements
const revealUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
        <p className="text-lg mb-4">Blog not found</p>
        <button
          onClick={() => navigate("/knowledge-hub")}
          className="px-6 py-2 rounded-full border border-white/20 hover:border-sky-400 hover:text-sky-300 transition"
        >
          Back to Knowledge Hub
        </button>
      </div>
    );
  }

  return (
    <div className="text-white bg-gradient-to-b from-black via-black/90 to-black">
      <Navbar />

      {/* HERO SECTION */}
      <motion.div
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.25),transparent_60%)]"
        />
        {/* TITLE WITH REPEATABLE MOTION */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-4xl md:text-5xl lg:text-6xl font-thin tracking-[0.32em] 
            bg-gradient-to-r from-white via-sky-300 to-white text-transparent bg-clip-text px-6"
        >
          {blog.title}
        </motion.h1>
      </motion.div>

      {/* BLOG CONTENT */}
      <div className="max-w-4xl mx-auto py-12 px-6 md:px-0 space-y-12">

        {/* BACK BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: "rgba(14,165,233,0.1)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate(`/knowledge-hub?type=${blog.category}`)}
          className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-black/50 text-sky-300 font-medium text-sm hover:bg-sky-400/10 hover:border-sky-400 hover:shadow-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          <ArrowLeft size={18} />
          Back to Knowledge Hub
        </motion.button>

        {/* BLOG META */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={revealUp}
          className="flex flex-col md:flex-row justify-between text-white/50 mb-6 gap-2"
        >
          <span>{blog.date}</span>
          <span>{blog.readTime} read</span>
          <span>Level: {blog.level}</span>
          <span>Tag: {blog.tag}</span>
        </motion.div>

        {/* BLOG BODY BOX */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 1 }}
          variants={revealUp}
          className="bg-black/80 border border-white/20 backdrop-blur-md rounded-3xl p-12 shadow-[0_15px_50px_rgba(0,255,255,0.15)] space-y-10 hover:shadow-[0_20px_60px_rgba(56,189,248,0.3)] transition-shadow duration-500"
        >
          {blog.content.map((block, idx) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <motion.p
                    key={idx}
                    whileHover={{ color: "#38bdf8" }}
                    variants={revealUp}
                    className="text-white/90 leading-relaxed md:text-lg"
                  >
                    {block.text}
                  </motion.p>
                );
              case "heading":
                return (
                  <motion.h2
                    key={idx}
                    whileHover={{ scale: 1.02, color: "#38bdf8" }}
                    variants={revealUp}
                    className="text-2xl md:text-3xl font-semibold mt-6 text-sky-300"
                  >
                    {block.text}
                  </motion.h2>
                );
              case "blockquote":
                return (
                  <motion.blockquote
                    key={idx}
                    whileHover={{ backgroundColor: "rgba(14,165,233,0.1)" }}
                    variants={revealUp}
                    className="border-l-4 border-sky-400 pl-6 italic text-sky-300 bg-black/25 p-4 rounded-md"
                  >
                    {block.text}
                  </motion.blockquote>
                );
              default:
                return null;
            }
          })}
        </motion.div>

        {/* RELATED ARTICLES */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-thin mb-6 tracking-[0.12em] text-white/80">
            Related Articles
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs
              .filter((b) => b.category === blog.category && b.id !== blog.id)
              .slice(0, 3)
              .map((b) => (
                <motion.div
                  key={b.id}
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0 10px 40px rgba(56,189,248,0.3)",
                    borderColor: "#38bdf8",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate(`/knowledge-hub/blog/${b.id}`)}
                  className="cursor-pointer rounded-2xl overflow-hidden group relative shadow-lg border border-white/10 transition-all duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${b.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-semibold group-hover:text-sky-300 transition">
                      {b.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;