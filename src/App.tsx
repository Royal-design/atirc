import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spinner } from "./components/Spinner";
import { RootLayout } from "./layouts/RootLayout";
import { ErrorPage } from "./pages/ErrorPage";

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
        element: <WhatWeDo />
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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
