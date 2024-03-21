
import Carousel from './Carousel'
import Search from './Search'

const SearchPlace = () => {
  return (
    <div className=' '>
        <div className='flex md:w-[80%] mx-auto sm:pt-10 flex-col sm:flex-row items-center sm:justify-between px-4 py-4 gap-6'>
            
            <div className='sm:hidden'>
            <Carousel/>
            </div>
            <div className='flex items-center  w-full'>
                <Search/>
                
            </div>
            <div className='hidden sm:flex pt-10'>
              <Carousel/>
            </div>
        </div>
    </div>
  )
}

export default SearchPlace