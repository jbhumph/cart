import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx';
import Header from './components/header/Header.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    element: <Products />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
