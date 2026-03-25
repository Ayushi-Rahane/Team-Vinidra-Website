import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AchievementsPage from "./pages/AchievementsPage";
import AchievementDetail from "./pages/AchievementDetail";
import ScrollToTop from "./utils/ScrollToTop";
import StarCursorEffect from "./components/ui/StarCursorEffect";

function App() {
  return (
    <>
      <StarCursorEffect />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        {/* Dynamic achievement detail page */}
        <Route path="/achievements/:id" element={<AchievementDetail />} />
      </Routes>
    </>
  );
}

export default App;