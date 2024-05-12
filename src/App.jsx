import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactMePage from "./pages/ContactMePage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ErrorBoundary, Layout } from "./components";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/resume" element={<ResumePage />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />
            <Route exact path="/contactme" element={<ContactMePage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default App;
