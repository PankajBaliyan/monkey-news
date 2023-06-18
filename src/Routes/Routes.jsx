import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../Components/NavBar';
import News from '../Components/News';
import About from '../Components/About';
import LoadingBar from 'react-top-loading-bar';

// Default Variables
let pageSizeHere = 10;
let apiKey = process.env.REACT_APP_API_KEY;
let country = 'in';

const AppRouter = () => {
  const [progress, setProgress] = useState(0);
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="science"
            apiKey={apiKey}
            key="science"
          />
        </div>
      ),
      // errorElement: <ErrorPage />,
      errorElement: 'no page found',
    },
    {
      path: '/about',
      element: (
        <div>
          <Header />
          <About />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: 'business',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="business"
            apiKey={apiKey}
            key="business"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/entertainment',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="entertainment"
            apiKey={apiKey}
            key="entertainment"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/general',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="general"
            apiKey={apiKey}
            key="general"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/health',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="health"
            apiKey={apiKey}
            key="health"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/science',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="science"
            apiKey={apiKey}
            key="science"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/sports',
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="sports"
            apiKey={apiKey}
            key="sports"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
    {
      path: '/technology',
      // key: "technology",
      element: (
        <div>
          <Header />
          <News
            updateProgress={updateProgress}
            pageSize={pageSizeHere}
            country={country}
            category="technology"
            apiKey={apiKey}
            key="technology"
          />
        </div>
      ),
      errorElement: 'no page found',
    },
  ]);

  return (
    <React.StrictMode>
      <LoadingBar color="#f11946" progress={progress} />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default AppRouter;
