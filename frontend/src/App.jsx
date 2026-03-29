import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AchievementsPage from "./pages/AchievementsPage";
import AchievementDetail from "./pages/AchievementDetail";
import GalleryPage from "./pages/GalleryPage";
import KnowledgeHub from "./pages/KnowledgeHub";
import BlogDetail from "./pages/BlogDetail";
import TeamPage from "./components/TeamPage";

import ScrollToTop from "./utils/ScrollToTop";
import StarCursorEffect from "./components/ui/StarCursorEffect";

function App() {
  return (
    <>
      <StarCursorEffect />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/achievements/:id" element={<AchievementDetail />} />

        {/* Knowledge Hub Routes */}
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/knowledge-hub/:type" element={<KnowledgeHub />} />
        <Route path="/knowledge-hub/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;