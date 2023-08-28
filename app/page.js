import Image from 'next/image'
import Navbar from './components/Navbar'
import TopMenu from './components/TopMenu'
import Banner from './components/Banner'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto'>
      <TopMenu />
      {/* <Navbar /> */}
      <Banner />
    </main>
  )
}
