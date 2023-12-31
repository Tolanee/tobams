import exclusiveImg from '../assets/exclusive.png';
import StyledText from '../ui/StyledText';
export default function ExclusiveBrands(){
    return(
        <div className='p-8 md:p-16'>
            <StyledText variant="bodyHeading" >
            Meet Our Verified Exclusive Brands
                </StyledText>
            <div className='flex flex-col md:flex-row pt-8'>
            <img src={exclusiveImg} alt='image' className=' w-full md:w-1/2' />
            <div className='bg-[#FFEFF6] flex flex-col justify-center py-3 md:py-0 px-20 space-y-6 w-full md:w-1/2'>
                <p>Exceptional Brands</p>
                <p>Exclusive Brands</p>
                <p>Verified for Quality Services</p>

                <button className='w-[150px] p-3 rounded-lg  bg-white text-base flex'><p className=''>Learn More </p>  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 20.16C7.488 20.16 3.84 16.512 3.84 12C3.84 7.488 7.488 3.84 12 3.84C16.512 3.84 20.16 7.488 20.16 12C20.16 16.512 16.512 20.16 12 20.16ZM12 4.8C8.016 4.8 4.8 8.016 4.8 12C4.8 15.984 8.016 19.2 12 19.2C15.984 19.2 19.2 15.984 19.2 12C19.2 8.016 15.984 4.8 12 4.8Z" fill="#811141"/>
  <path d="M11.856 16.656L11.184 15.984L15.168 12L11.184 8.01599L11.856 7.34399L16.512 12L11.856 16.656Z" fill="#811141"/>
  <path d="M7.67999 11.52H15.84V12.48H7.67999V11.52Z" fill="#811141"/>
</svg></span></button>

            </div>
            </div>
        </div>
    )
}