import StyledText from "../ui/StyledText";

export default function TrendingHotels (){

    const data = [
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"The Vineyard",
            location:"Berkshire",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"Grand Hotel",
            location:"Sunderland",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"Hambleton Hall",
            location:"Ruthland",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"The Lowry Hotel",
            location:"Lancaster",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"Ten Hill Palace Hotel",
            location:"Edinburgh",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"The Vineyard",
            location:"Glasgow",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"The Vineyard",
            location:"Cambridge",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"5.0"
        },
        {
            img:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
            name:"The Vineyard",
            location:"London",
            status:"Fully Booked",
            price:"From £70.00/day ",
            star:"4.5"
        },
       
    ];
    
    return (
        <div className="p-8 md:p-16">
            <div>
                <StyledText variant="bodyHeading">
                Trending Hotels
                </StyledText>
                <StyledText variant="smallBodyHeading2">
                Experience luxury beyond your expectations in the lap of nature
                </StyledText>
            </div>
             <div className="flex flex-wrap ">
        {data.map((item, index) => (
          <div key={index} className="md:w-1/4 p-2">
            <div className="mt-5 self-start border border-gray-3 p-2 rounded-md shadow-md hover:-translate-y-3 hover:scale-105 transition ease-in-out duration-150 ">
              <img src={item.img} className="w-full h-1/2 rounded-lg" alt={item.name} />
              <div className="mt-5">
                <p className="text-lg ">{item.name}</p>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 22C9.31667 19.7167 7.31267 17.5957 5.988 15.637C4.66267 13.679 4 11.8667 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8667 19.3377 13.679 18.013 15.637C16.6877 17.5957 14.6833 19.7167 12 22Z" fill="#666666"/>
                    </svg>  
                      <p className="text-[#202020]">{item.location}</p>
                    </div>

                    <div className="flex flex-row space-x-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.9271 0.695722L6.48599 5.86696L1.02432 6.69889C0.0448775 6.84731 -0.347645 8.10887 0.362634 8.83144L4.31403 12.8544L3.37945 18.5373C3.21123 19.5645 4.24674 20.3339 5.11403 19.8535L10 17.1702L14.886 19.8535C15.7533 20.33 16.7888 19.5645 16.6206 18.5373L15.686 12.8544L19.6374 8.83144C20.3476 8.10887 19.9551 6.84731 18.9757 6.69889L13.514 5.86696L11.0729 0.695722C10.6355 -0.226039 9.36823 -0.237757 8.9271 0.695722Z" fill="#FFDE33"/>
</svg>
                    <p className="text-xs font-thin">{item.star}</p>
                    </div>

                
                
                </div>
                <p className="text-xs italic text-[#811141]">{item.status}</p>
                <p className="text-xs font-manrope-thin">{item.price}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
       
      );
}