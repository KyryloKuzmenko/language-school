import { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import Header from './components/Header/Header'

import './App.css'
import Hero from './components/Hero/Hero'
import PopularCourses from './components/PopularCourses/PopularCourses'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'

const RegistrationPage = lazy(() => import('../src/pages/RegistrationPage/RegistrationPage'))

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RegistrationPage />
            </Suspense>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <AboutUs />
              <PopularCourses />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App
