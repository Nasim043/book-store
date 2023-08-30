import Image from 'next/image'
import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'
import AboutPage from './components/AboutPage'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import Featured from './components/Fetured'
import Insurance from './components/Insurance'
import LatestBlog from './components/LatestBlog'
import TopInteresting from './components/TopInterestiong'

export default function Home() {
  return (
    <main className='bg-gray-200'>
      <TopMenu />
      {/* <Navbar /> */}
      <Navbar2 />
      <Banner />
      <TopInteresting />
      <AboutPage />
      <Featured />
      <Insurance />
      <LatestBlog />
      <Footer />
    </main>
  )
}
