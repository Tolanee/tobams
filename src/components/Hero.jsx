/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import StyledText from "../ui/StyledText"

 const Hero =()=>{
    return(
        <div className="bg-hero h-[640px] w-full" >
         <div className="flex flex-col items-center justify-center h-full">
            <StyledText variant="heroText" > FIND A HOME FOR YOUR DESIGNS</StyledText>
            <StyledText variant="smallBodyHeading">pop ups in top class hotels around the world</StyledText>

        <div className=" bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center w-full relative mt-5">
      <div className=" border-0 h-16 ">
        <div className=" md:inline-flex items-center gap-2 justify-center  left-0 ">
          <div className="items-start md:inline-flex flex-0 relative">
            <div className=" bg-white border-[#d8d8d8b2] border-r border-r-1 h-16 w-full  md:w-[536px]">
               <input type='search' placeholder='Find a space' className=" items-start inline-flex gap-5 left-5 relative p-2 outline-none  w-3/4 h-full "/>
               {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.385 15.4461C13.037 16.5232 11.3277 17.0432 9.60817 16.8994C7.88868 16.7556 6.28952 15.9588 5.13913 14.6728C3.98874 13.3867 3.37446 11.709 3.42244 9.98415C3.47043 8.25932 4.17704 6.61834 5.39716 5.39822C6.61727 4.17811 8.25826 3.4715 9.98309 3.42351C11.7079 3.37553 13.3857 3.98981 14.6717 5.1402C15.9578 6.29058 16.7545 7.88975 16.8983 9.60924C17.0422 11.3287 16.5221 13.038 15.445 14.3861L20.601 19.5411C20.6747 19.6097 20.7338 19.6925 20.7748 19.7845C20.8158 19.8765 20.8378 19.9758 20.8396 20.0765C20.8414 20.1772 20.8228 20.2773 20.7851 20.3707C20.7474 20.4641 20.6913 20.5489 20.62 20.6201C20.5488 20.6913 20.464 20.7475 20.3706 20.7852C20.2772 20.8229 20.1772 20.8414 20.0765 20.8397C19.9758 20.8379 19.8765 20.8158 19.7845 20.7748C19.6925 20.7339 19.6097 20.6748 19.541 20.6011L14.385 15.4461ZM6.46 13.8841C5.72604 13.15 5.22615 12.2149 5.02351 11.1968C4.82087 10.1788 4.92457 9.1235 5.32151 8.16437C5.71845 7.20523 6.39081 6.38529 7.25361 5.80817C8.11642 5.23105 9.13094 4.92265 10.169 4.92195C11.207 4.92125 12.2219 5.22828 13.0855 5.80424C13.9491 6.3802 14.6226 7.19924 15.0208 8.15784C15.419 9.11644 15.5241 10.1716 15.3229 11.1899C15.1216 12.2082 14.623 13.144 13.89 13.8791L13.885 13.8841L13.88 13.8881C12.8951 14.8707 11.5604 15.4222 10.1692 15.4214C8.77792 15.4207 7.44385 14.8678 6.46 13.8841Z" fill="#666666" fillOpacity="0.65"/>
                </svg>

                <div className=" text-[#666666a6] text-base font-medium leading-normal -mt-1 relative w-fit">Find a space</div> */}
            </div>
            
            <div className=" bg-white h-16 relative md:w-[248px]">
              <div className=" items-start inline-flex gap-28 left-5 relative top-5">
                <div className="text-[#666666a6] text-base font-medium leading-normal -mt-1 relative w-fit">Duration</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_116)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.707 15.7071C12.5195 15.8946 12.2652 15.9999 12 15.9999C11.7348 15.9999 11.4805 15.8946 11.293 15.7071L5.63601 10.0501C5.5405 9.95785 5.46431 9.84751 5.41191 9.7255C5.3595 9.6035 5.33191 9.47228 5.33076 9.3395C5.3296 9.20672 5.3549 9.07504 5.40519 8.95215C5.45547 8.82925 5.52972 8.7176 5.62361 8.6237C5.71751 8.52981 5.82916 8.45556 5.95205 8.40528C6.07495 8.355 6.20663 8.32969 6.33941 8.33085C6.47219 8.332 6.60341 8.35959 6.72541 8.412C6.84742 8.46441 6.95776 8.54059 7.05001 8.6361L12 13.5861L16.95 8.6361C17.1386 8.45394 17.3912 8.35315 17.6534 8.35542C17.9156 8.3577 18.1664 8.46287 18.3518 8.64828C18.5372 8.83369 18.6424 9.0845 18.6447 9.3467C18.647 9.60889 18.5462 9.8615 18.364 10.0501L12.707 15.7071Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_116">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </div>
            </div>

            <div className=" bg-[#811141] h-16 relative md:w-[88px] flex justify-center items-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M28.77 30.8919C26.0739 33.0461 22.6553 34.0862 19.2163 33.7986C15.7774 33.511 12.579 31.9174 10.2783 29.3453C7.97748 26.7732 6.74892 23.4177 6.84489 19.9681C6.94086 16.5184 8.35409 13.2364 10.7943 10.7962C13.2345 8.35598 16.5165 6.94275 19.9662 6.84678C23.4158 6.75081 26.7713 7.97937 29.3434 10.2801C31.9156 12.5809 33.5091 15.7793 33.7967 19.2182C34.0843 22.6572 33.0442 26.0758 30.89 28.7719L41.202 39.0819C41.3494 39.2192 41.4676 39.3848 41.5496 39.5688C41.6315 39.7528 41.6756 39.9514 41.6792 40.1528C41.6827 40.3542 41.6457 40.5543 41.5702 40.7411C41.4948 40.9279 41.3825 41.0975 41.2401 41.24C41.0976 41.3824 40.928 41.4947 40.7412 41.5701C40.5544 41.6456 40.3544 41.6826 40.153 41.6791C39.9515 41.6755 39.7529 41.6314 39.5689 41.5494C39.3849 41.4675 39.2193 41.3493 39.082 41.2019L28.77 30.8919ZM12.92 27.7679C11.4521 26.2998 10.4523 24.4295 10.047 22.3934C9.64174 20.3573 9.84914 18.2468 10.643 16.3285C11.4369 14.4102 12.7816 12.7703 14.5072 11.6161C16.2328 10.4618 18.2619 9.84505 20.3379 9.84366C22.414 9.84226 24.4439 10.4563 26.171 11.6082C27.8982 12.7602 29.2451 14.3982 30.0416 16.3154C30.838 18.2326 31.0483 20.3429 30.6457 22.3796C30.2432 24.4162 29.2459 26.2878 27.78 27.7579L27.77 27.7679L27.76 27.7759C25.7902 29.7411 23.1208 30.8441 20.3383 30.8426C17.5558 30.8412 14.8877 29.7353 12.92 27.7679Z" fill="white"/>
        </svg>

        </div>
         
           
          </div>
        
        </div>
      
      </div>
        </div>
        </div>
        
        </div>
    )
}

export default memo(Hero);

