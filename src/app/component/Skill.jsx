import React from 'react'
import Image from "next/image"
const Skill = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='mt-[200px] md:uppercase text-xl text-[#5651e5] tracking-widest'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/html.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
           

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/github1.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>GITHUB</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/css.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/react.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/javascript.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/mongo.png" width={46} height={46}alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>MONGO DB</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/node.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>NODE</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 items-center justify-center'>
                        <div className='m-auto'>
                        <Image className="rounded-xl" src="/assets/shopify.png" width={46} height={46} alt='/'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>SHOPIFY</h3>
                        </div>
                    </div>
                </div>

                </div>
        </div>
    </div>
  )
}

export default Skill