import  { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Loader from './components/Loader'
const Home = lazy(() => import('./pages/Home'))
const Collection = lazy(() => import('./pages/Collection'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Product = lazy(() => import('./pages/Product'))
const Cart = lazy(() => import('./pages/Cart'))
const Login = lazy(() => import('./pages/Login'))
const Placeorder = lazy(() => import('./pages/Placeorder'))
const Orders = lazy(() => import('./pages/Orders'))
const Verify = lazy(() => import('./pages/Verify'))


const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <main className='pl-5 pr-4 sm:pr-[5vw] md:pr-[5vw] lg:pr-[6vw]'>

        <Searchbar />
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<Placeorder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
      </Suspense>
    </main >
    <Footer />
    </>
  )
}

export default App
