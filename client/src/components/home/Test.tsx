import React from 'react'

const Test = () => {
  return (
    <div className='relative'>
        <div className='grid grid-cols-2 h-[100vh]'>
            <div className='bg-blue-950'>
            <div className=' w-[80%] mx-auto flex flex-col gap-8   mt-8 text-white'>
                <div className='px-2' style={{borderLeft:"2px solid pink"}}>
                    <h1>Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores quaerat aspernatur explicabo quia beatae laudantium officiis odio, ab tenetur neque eum excepturi recusandae corporis minima odit pariatur eveniet dolorum. </p>
                </div>
                <div>
                    <h1>Heading</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='border border-pink-800 p-2' >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eligendi quas, ut placeat qui quis alias et numquam cupiditate. Exercitationem corrupti repudiandae, impedit eum reiciendis explicabo. Aspernatur possimus placeat explicabo.</p>
                        </div>
                        <div className='border border-pink-800 p-2' >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem vitae iure dignissimos accusamus enim rerum, incidunt quae dolorem aliquam nisi fugit laboriosam error explicabo minus, expedita fugiat cupiditate recusandae!</p>
                        </div>
                        <div className='border border-pink-800 p-2' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam explicabo molestiae necessitatibus voluptatem in ducimus labore, est optio maxime, ab doloremque possimus provident natus temporibus. Eum placeat hic sed!</div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-purple-900 flex justify-center items-center px-10'>
                <div className=''>
                        <h1>Heading</h1>
                    <div className='flex items-center gap-2'>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/lady-gaga-attends-netflixs-maestro-los-angeles-photo-call-news-photo-1707081486.jpg" alt="" className='w-[60px] h-[60px] rounded-lg'/>
                        <div className='bg-purple-600 flex items-center gap-2 p-1 rounded-lg text-white'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In reiciendis quisquam repellat debitis? Odit, deleniti?</p>
                            <p>icon</p>
                            <p>icon</p>
                        </div>

                    </div>
                    <button className='w-full bg-purple-600 py-1 mt-2 text-white'>Accept the event</button>
                </div>
            </div>

        </div>
        <div className='absolute inset-0  flex justify-center mt-10'>
<div className='rounded-lg '>
<img src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg" alt="" className='object-cover rounded-lg w-[160px] h-[130px]'/>
</div>
        </div>
    </div>
  )
}

export default Test