import Image from "next/image"
export default function Photo() {
    return (
    <div className=' flex flex-col items-center'>
        <div className="flex w-full justify-center items-center border border-gray-400 p-4 rounded-lg  hover:bg-gray-700/40 mb-10 mt-5">
            <p className="text-gray-300 text-sm text-center lg:text-2xl hover:text-white ">{"Hello i'm full stack developer based in Sidoarjo"}</p>
        </div>

        <div className="text-white flex flex-col justify-between md:flex-row items-center lg:justify-between md:justify-around  gap-5 mb-10 w-full lg:mt-5 lg:relative">
            <div className='block text-center md:text-left font-sans'>
                
                <h1 className="text-2xl lg:text-4xl md:text-2xl">Rayhan Alief Febryan</h1>
                <p className="text-sm lg:text-lg md:text-md mt-3 flex">
                    {"I'am  "}
                </p>    
            </div>
            <Image src="/image/rayhanAlief.jpeg" width={160} height={160} alt="Photo Profile" className='rounded-full border-double border-8 border-gray-100 lg:absolute lg:right-16'/>
        </div>
    </div>
    )
}
