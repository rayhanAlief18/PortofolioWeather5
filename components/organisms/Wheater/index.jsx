import { motion } from 'framer-motion';
import Image from "next/image";
import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { WiHumidity } from "react-icons/wi";

const Wheater = ({data})=>{
    const today = new Date()
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const sunrise =  new Date(data.sys.sunrise * 1000);
    const sunset =  new Date(data.sys.sunset * 1000);

    return(
        <>
            <motion.div
            className="text-white flex flex-col lg:flex-row gap-5 mt-10"
            initial={{
                y:-100,
                opacity:0
            }}
            transition={{ duration: 1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            >
                <div className='pb-3 lg:min-w-[30%]  bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg'>
                        <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                        width={250}
                        height={250}
                        alt={"Weather"}
                        className=""
                        />
                        <div className="ml-5">
                            <div className='flex flex-col gap-1'>
                                <p className="text-white text-5xl -mt-10">{data.main.temp.toFixed(0) - 273}&#176; C</p>
                                <p className="text-white text-xl mb-2">{data.weather[0].main}</p>
                            </div>
                            <hr></hr>
                            <div className='mt-2 '>
                                <div className="flex flex-row gap-1 items-center text-white">
                                    <RiMapPin2Line />
                                    <p>{data.name}, {data.sys.country}</p>
                                </div>
                                <div className='flex flex-row gap-1 items-center'>
                                    <RxCalendar />
                                    <p>{today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</p>
                                    
                                </div>
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
                        <p className='text-2xl font-bold'>{data.wind.speed}</p> 
                        <p>km/h</p>
                      </div>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-md font-bold'>{today.getHours()}:{today.getMinutes()}</p> 
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
                        <p className='text-2xl font-bold'>{sunrise.getHours()}:{sunrise.getMinutes()}</p> 
                        <p>WIB</p>
                      </div>
                      <div className='flex gap-1 items-center justify-center'>
                        <p className='text-2xl font-bold'>{sunset.getHours()}:{sunset.getMinutes()}</p> 
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
                        <p className='text-2xl font-bold'>{data.main.feels_like.toFixed(0) - 273}&#176;</p> 
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
                    <p className='mb-2'>Kelembapan</p>
                      <hr className='-mt-1 mb-1'/>
                    <div className='mt-2 flex justify-between'>
                      <div className='flex items-center w-1/2'>
                        <p className='text-2xl'>{data.main.humidity}</p>
                        <p>%</p>
                      </div>
                      <WiHumidity size={"2em"} />
                    </div>
                  </div>
                  <div className='w-1/2 lg:w-[45%] mt-5 border rounded-xl p-4'>
                  <p className='mb-2'>koordinat</p>
                  <hr className='-mt-1 mb-1'/>
                    <div className='flex justify-between'>
                        <p>Latitude</p>
                        <p>Longitude</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='text-sm lg:text-2xl'>{data.coord.lat}</p>
                        <p className='text-sm lg:text-2xl'>{data.coord.lon}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
        </>
    )
}

export default Wheater