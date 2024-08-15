import React from 'react'
import Navbar from "../components/Navbar";
import Page1 from "../components/Page1";
import Footer from "../components/Footer";

export default function page2() {
  return (
  <>
    <Navbar />
    <div className='min-h-screen'>
        <Page1/>
    </div>
    <Footer />
  </>
  )
}
