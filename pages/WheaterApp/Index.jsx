import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { RiMapPin2Line } from "react-icons/ri"
import { RxCalendar } from "react-icons/rx"
import { WiHumidity } from "react-icons/wi"
import Footer from '../../components/organisms/footer'
import Navbar from '../../components/organisms/navbar'
import Wheater from '../../components/organisms/Wheater'
import Spinner from '/components/molecules/Spinner'
import { toast } from 'react-toastify';



export default function Index() {
  
  const [Weather,setWeather] = useState({});
  const [City, setCity] = useState('');
  const [Loading, setLoading] = useState(false);
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.NEXT_PUBLIC_WHEATER_KEY}`
  const FetchApi = (e)=>{
      e.preventDefault()
      setLoading(true)
      axios.get(url).then((response)=>{
        setWeather(response.data)
      })
      .catch(error => {
        toast.error('Kota tidak ditemukan',{
          theme:'colored'
      })
    })
    setCity("")
    setLoading(false)
  }
  
  return (
      <>
        <Navbar />
          <div className='min-h-screen  items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-stone-900 to-gray-900'>
            <div className='container lg:px-20'>
              Weather App

          
            <form onSubmit={FetchApi} className='mt-20'>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e)=>setCity(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search City ...." required />
                    <button onClick={FetchApi} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            {Loading ? <Spinner /> : ""}
            
            {Weather.main ? <Wheater data={Weather}/> :
            <div className='flex flex-col lg:flex-row gap-5 mt-10 justify-center items-center'>
              <div className='w-full p-5 lg:min-w-[30%] lg:min-h-[100%]  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
                <Image
                src={"http://openweathermap.org/img/wn/10d@2x.png"} 
                width={300}
                height={300}
                alt={"Weather"}
                />
                <div className="ml-5 text-white">
                            <div className='flex flex-col gap-1'>
                                <p className="text-white text-5xl -mt-10">{0}&#176; C</p>
                                <p className="text-white text-xl mb-2">{0}</p>
                            </div>
                            <hr></hr>
                            <div className='mt-2 '>
                                <div className="flex flex-row gap-1 items-center text-white">
                                    <RiMapPin2Line />
                                    <p>Nama Kota || Kode Negara</p>
                                </div>
                                <div className='flex flex-row gap-1 items-center'>
                                    <RxCalendar />
                                    <p>00 xxxx 0000</p>
                                    <p>00:00 WIB</p>
                                </div>
                                    <p>{`Data tanggal dan waktu merujuk pada Indonesia bagian barat`}</p>
                            </div>
                        
                        </div>
              </div>

              <div className=' text-center lg:text-left text-white p-4 w-full lg:min-w-[65%] lg:min-h-[100%] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
                <p>{`Today's Highlight`}</p>

                <div className='flex flex-col lg:flex-row gap-10'>
                  <div className=' w-full lg:w-[30%] mt-5 border rounded-xl p-4'>
                    <p>Wind Status</p>
                    <div className='flex justify-center lg:justify-start'>
                    <Image 
                    className='p-5 flex justify-center'
                    src={`/icon/wind.png`}
                    width={167}
                    height={167}
                    alt="Wind speed"
                    />
                    </div>
                    <div className='flex justify-between'>
                      <p>Feels Like: </p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-2xl font-bold'>0</p> 
                        <p>km/h</p>
                      </div>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-md font-bold'>00:00</p> 
                        <p>WIB</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full lg:w-[30%] mt-5 border rounded-xl p-4'>
                    <p>{`Sunrise & Sunset`}</p>
                    <div className='flex justify-center lg:justify-start'>
                    <Image 
                    className='p-5 flex justify-center'
                    src={`/icon/sunset.png`}
                    width={167}
                    height={167}
                    alt="Wind speed"
                    />
                    </div>
                    <div className='flex justify-between'>
                      <p>Sunrise:</p>
                      <p>Sunset:</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-2xl font-bold'>00:00</p> 
                        <p>WIB</p>
                      </div>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-2xl font-bold'>00:00</p> 
                        <p>WIB</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full lg:w-[30%] mt-5 border rounded-xl p-4'>
                    <p>Feels Like</p>
                    <div className='flex justify-center lg:justify-start'>
                    <Image 
                    className='p-5 flex justify-center'
                    src={`/icon/thermometer.png`}
                    width={167}
                    height={167}
                    alt="Thermometer"
                    />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-2xl font-bold'>0&#176;</p> 
                        <p>C</p>
                      </div>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-sm text-right'>kelembapan membuat terasa lebih panas</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='text-left justify-center flex flex-row gap-10'>
                  <div className='w-1/2 lg:w-[45%] mt-5 border rounded-xl p-4'>
                    <p>Kelembapan</p>
                    <div className='flex justify-between'>
                      <div className='flex items-center w-1/2'>
                        <p className='text-2xl'>0</p>
                        <p>%</p>
                      </div>
                      <WiHumidity size={"2em"} />
                    </div>
                  </div>
                  <div className='w-1/2 lg:w-[45%] mt-5 border rounded-xl p-4'>
                  <p>koordinat</p>
                    <div className='flex justify-between'>
                        <p>Latitude</p>
                        <p>Longitude</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-sm lg:text-2xl'>0</p>
                        <p className='text-sm lg:text-2xl'>0</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            }


            </div>
          </div>
        <Footer />
      </>
    )
}

// 8ad573a03dfbe1905aa1dc7f60af5707