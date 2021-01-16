import Nav from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Service from '../components/Service'
import Footer from '../components/Footer'
import Poortofolio from '../components/Portofolio'
import Head from 'next/head'

export default function IndexPage() {
  return (
    <div id="top" className="antialias overflow-hidden dark:bg-gray-900">
       <Head>
        <title>My Project NextJS</title>
        <link rel="icon" href="img/logo.png" />
      </Head>
      <Nav/>
      <Home/>
      <About/>
      <Poortofolio/>
      <Service/>
      <Footer/>
      <a href="#top" className="fixed bottom-5 rounded-sm right-4 bg-indigo-100 md:bg-indigo-800 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-200">
      <svg className="h-4 w-4 md:h-6 md:w-6 text-gray-600 md:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
      </svg>
      </a>
    </div>
  )
}
