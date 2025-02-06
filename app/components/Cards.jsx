import React from 'react'

const Cards = () => {
    return (
        <div className='w-full bg-zinc-900 h-screen flex gap-5 py-20 px-10'>
            <div className='cardcontainer w-1/2'>
                <div className='card w-full h-[55vh] bg-[#004D43] rounded-xl '>
                    <div className='flex justify-center items-center h-[80%]' >
                        <h1 className='text-6xl text-[#CDEA68]'>ochi</h1>
                    </div>
                    <h1 className='border-2 text-[#CDEA68] border-[#CDEA68] py-1 px-2 rounded-full w-fit ml-8 mt-1 text-[14px]'>&copy; 2019-2022</h1>
                </div>


            </div>

            <div className='cardcontainer w-1/2 flex gap-5'>
                <div className='card w-full h-[55vh] bg-[#212121] rounded-xl '>
                    <div className='flex justify-center items-center  h-[80%]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                    </div>
                    <h1 className='uppercase border-2 text-xs w-fit py-1 px-2 rounded-full ml-5 mb-10 border-zinc-100 font-extralight'>Rating 5.0 on Clutch</h1>

                </div>

                <div className='card w-full h-[55vh] bg-[#212121] rounded-xl'>
                    <div className='flex justify-center items-center h-[80%]'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-20 h-20' alt="" />
                    </div>
                    <h1 className='uppercase border-2 text-xs w-fit py-1 px-2 rounded-full ml-5 mb-10 border-zinc-100 font-extralight'>Bussiness BootCamp ALMUNI   </h1>
                </div>

            </div>

        </div>
    )
}

export default Cards