import Carousel from './Carousel'
import styles from './SearchPlace.module.css'
const SearchPlace = () => {
  return (
    <>
        <div className='flex flex-col sm:flex-row items-center px-4 py-4 gap-6'>
            
            <div className=''>
            <Carousel/>
  
  
  
 
 

            </div>
            <div className='border'>
                <h1>Find a home you&apos;ll <span className={styles.headingFont}>love</span></h1>
            </div>
            
        </div>
    </>
  )
}

export default SearchPlace