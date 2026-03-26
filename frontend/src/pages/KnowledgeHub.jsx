import { useSearchParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { categories } from "../data/knowledgeCategories";
import { blogs } from "../data/knowledgeBlogs";

import CategoryHero from "../components/knowledgeHub/CategoryHero";
import BlogGrid from "../components/knowledgeHub/BlogGrid";
import CategoryTabs from "../components/knowledgeHub/CategoryTabs";
import OtherCategories from "../components/knowledgeHub/OtherCategories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KnowledgeHub = () => {
  const [params] = useSearchParams();
  const type = params.get("type");

  const [activeFilter, setActiveFilter] = useState("all");

  const category = categories.find((c) => c.slug === type);

  const categoryBlogs = type
    ? blogs.filter((b) => b.category === type)
    : blogs;

  const filteredBlogs = useMemo(() => {
    if (activeFilter === "latest")
      return categoryBlogs.filter((b) => b.latest);

    if (activeFilter === "popular")
      return categoryBlogs.filter((b) => b.popular);

    if (activeFilter === "beginner")
      return categoryBlogs.filter((b) => b.level === "beginner");

    return categoryBlogs;
  }, [activeFilter, categoryBlogs]);

  // <-- NEW: Scroll to top whenever 'type' changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [type]);

  return (
    <div className="text-white">
      <Navbar />

      <CategoryHero category={category} count={filteredBlogs.length} />

      <CategoryTabs
  active={activeFilter}
  setActive={setActiveFilter}
  isEmpty={filteredBlogs.length === 0}
/>

      <BlogGrid blogs={filteredBlogs} />

      <OtherCategories current={type} />

      <Footer />
    </div>
  );
};

export default KnowledgeHub;