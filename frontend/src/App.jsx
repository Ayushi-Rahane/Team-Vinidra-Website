import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AchievementsPage from "./pages/AchievementsPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </>
  );
}

export default App;