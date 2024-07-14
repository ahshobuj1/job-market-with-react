import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Jobs from './components/jobs/Jobs.jsx';
import Error from './components/errors/Error.jsx';
import AppliedJobs from './pages/appliedJobs/AppliedJobs.jsx';
import Blogs from './pages/blogs/Blogs.jsx';
import Statistics from './pages/statistics/Statistics.jsx';
import JobDetails from './components/jobDetails/JobDetails.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/jobs',
                element: <Jobs />,
            },
            {
                path: '/job/:jobId',
                loader: () => fetch('data/jobs.json'),
                element: <JobDetails />,
            },
            {
                path: '/applied',
                element: <AppliedJobs />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
