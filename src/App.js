import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import EducationPage from "./pages/Education";
import ExperiencePage from "./pages/Experience";
import SideProjectsPage from "./pages/SideProjects";
import SkillsPage from "./pages/Skills";
import ErrorPage from "./pages/Error";

import { ThemeProvider } from "./components/hooks/context/ThemeContext";
import { LanguageProvider } from "./components/hooks/context/LanguageContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "education", element: <EducationPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "side-projects", element: <SideProjectsPage /> },
      { path: "skills", element: <SkillsPage /> },
    ],
  },
]);

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
