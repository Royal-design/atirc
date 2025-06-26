import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spinner } from "./components/Spinner";
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { useAppDispatch } from "./redux/store";
import { fetchBlogs } from "./redux/slices/blogSlice";

const HomePage = lazy(() =>
  import("./pages/HomePage").then(({ HomePage }) => ({
    default: HomePage
  }))
);

const WhoWeAre = lazy(() =>
  import("./pages/WhoWeAre").then(({ WhoWeAre }) => ({
    default: WhoWeAre
  }))
);

const WhatWeDo = lazy(() =>
  import("./pages/WhatWeDo").then(({ WhatWeDo }) => ({
    default: WhatWeDo
  }))
);
const News = lazy(() =>
  import("./pages/News").then(({ News }) => ({
    default: News
  }))
);
const Career = lazy(() =>
  import("./pages/Career").then(({ Career }) => ({
    default: Career
  }))
);

const Contact = lazy(() =>
  import("./pages/Contact").then(({ Contact }) => ({
    default: Contact
  }))
);

const Learning = lazy(() =>
  import("./pages/Learning").then(({ Learning }) => ({
    default: Learning
  }))
);
const Research = lazy(() =>
  import("./pages/Research").then(({ Research }) => ({
    default: Research
  }))
);
const Incubation = lazy(() =>
  import("./pages/Incubation").then(({ Incubation }) => ({
    default: Incubation
  }))
);
const Consulting = lazy(() =>
  import("./pages/Consulting").then(({ Consulting }) => ({
    default: Consulting
  }))
);

const Application = lazy(() =>
  import("./pages/Application").then(({ Application }) => ({
    default: Application
  }))
);
// learning pages
const LearningTopicDetails = lazy(() =>
  import("./pages/learning/LearningTopicDetails").then(
    ({ LearningTopicDetails }) => ({
      default: LearningTopicDetails
    })
  )
);

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre />
      },
      {
        path: "/what-we-do",

        children: [
          {
            index: true,
            element: <WhatWeDo />
          },
          {
            path: "learning",

            children: [
              {
                index: true,
                element: <Learning />
              },
              {
                path: ":topic",
                element: <LearningTopicDetails />
              }
            ]
          },
          {
            path: "research",
            element: <Research />
          },
          {
            path: "incubation",
            element: <Incubation />
          },
          {
            path: "consulting",
            element: <Consulting />
          }
        ]
      },

      {
        path: "/news",
        element: <News />
      },
      {
        path: "/career",
        element: <Career />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/application/:id",
        element: <Application />
      }
    ]
  }
]);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
