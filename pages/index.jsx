import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Banner from '../components/organisms/banner'
import Footer from '../components/organisms/footer'
import Navbar from '../components/organisms/navbar'
export default function Home() {
  useEffect(()=>{
    Aos.init({
      once:true,
      duration:1000,
    });
  },[])
  return (
    <>
      <div className='relative'>
        <Navbar />
        <Banner />
        <Footer />
        </div>
    </>
  )
}
