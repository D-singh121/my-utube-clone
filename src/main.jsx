import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <Feed />
      },

      {
        path: '/video/:id',
        element: <VideoDetail />
      },

      {
        path: '/search/:searchTerm',
        element: <SearchFeed />
      },

      {
        path: '/channel/:id',
        element: <ChannelDetail />
      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
