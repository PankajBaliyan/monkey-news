import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from '../Components/NavBar'
import News from '../Components/News'
import About from '../Components/About'

let pageSizeHere = 5

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="science"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="science"
                />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: "no page found",
    },
    {
        path: "/about",
        element: (
            <div>
                <Header />
                <About />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "business",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="business"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="business"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/entertainment",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="entertainment"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="entertainment"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/general",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="general"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="general"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/health",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="health"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="health"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/science",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="science"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="science"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/sports",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="sports"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="sports"
                />
            </div>
        ),
        errorElement: "no page found",
    },
    {
        path: "/technology",
        // key: "technology",
        element: (
            <div>
                <Header />
                <News
                    pageSize={pageSizeHere}
                    country="in"
                    category="technology"
                    apiKey="dbc4762db84e44b4b6df7d41c90332ea"
                    key="technology"
                />
            </div>
        ),
        errorElement: "no page found",
    },
]);
const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default AppRouter;