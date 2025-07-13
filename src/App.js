import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import EducationPage from "./pages/Education";
import ExperiencePage from "./pages/Experience";
import SkillsPage from "./pages/Skills";
import InterestsPage from "./pages/Interests";
import GalleryPage from "./pages/GalleryPage";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "education", element: <EducationPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "interests", element: <InterestsPage /> },
      { path: "interests/gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
