
export default function Footer (){
    const footerMenus = [
        {
          title: "Helpful Tips",
          subMenu: [
            { name: "How it Works" },
            { name: "Rent Space"},
            { name: "Hotel Dashboard"},
            { name: "Trending Hotel"},
            { name: "Verified Brands"},


          ],
        },
        {
          title: "Quicklinks",
          subMenu: [
            { name: "FAQs" },
            { name: "Terms of Service " },
            { name: "Privacy policy "},
            { name: "Cookie policy "},
          ],
        },
        {
          title: "Discover",
          subMenu: [
            { name: "City Guide" },
            { name: "Blog"},
            { name: "Reviews" },
            { name: "Events" },
            
          ],
        },
       
      ];
    return(
        <div>
             <div className="flex flex-col md:flex-row p-8 md:p-16">
            <div className="flex flex-row flex-wrap w-full md:w-2/3 space-x-3 md:space-x-32">
  {footerMenus.map((item, index) => (
    <div key={index} className="my-3 md:mt-0">
      <p className="text-[#811141] pb-5">{item.title}</p>
      <div>
        {item.subMenu.map((menu, subIndex) => (
          <p className="pt-3" key={subIndex}>{menu.name}</p>
        ))}
      </div>
    </div>
  ))}
</div>

            <div className="w-full md:w-1/3">
                <p>Get updates about available spaces, weekly digest of our most important activities and more in your email</p>
                <div className="mt-2 w-full flex flex-row">
                    <input placeholder="Enter Your Email Address" type="text" value="" className="border border-gray-200 p-3 w-2/3"/>
                    <input type="submit" value="Subscribe" className="bg-[#811141] text-white p-3 w-1/3 "/>
                </div>

            </div>
           
        </div>

        <div className="bg-[#202020] flex flex-row text-white px-16 items-center space-x-2 py-2">
            <p>Hotels Fashion  </p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8 1.625C6.73915 1.625 5.50661 1.99889 4.45824 2.69938C3.40988 3.39988 2.59278 4.39551 2.11027 5.56039C1.62776 6.72527 1.50152 8.00707 1.7475 9.2437C1.99348 10.4803 2.60064 11.6162 3.4922 12.5078C4.38376 13.3994 5.51967 14.0065 6.7563 14.2525C7.99293 14.4985 9.27473 14.3722 10.4396 13.8897C11.6045 13.4072 12.6001 12.5901 13.3006 11.5418C14.0011 10.4934 14.375 9.26086 14.375 8C14.373 6.30985 13.7007 4.6895 12.5056 3.49439C11.3105 2.29927 9.69015 1.62698 8 1.625ZM8 13.625C6.88748 13.625 5.79995 13.2951 4.87492 12.677C3.94989 12.0589 3.22892 11.1804 2.80318 10.1526C2.37744 9.12476 2.26604 7.99376 2.48309 6.90262C2.70013 5.81147 3.23586 4.80919 4.02253 4.02252C4.8092 3.23585 5.81148 2.70012 6.90262 2.48308C7.99376 2.26604 9.12476 2.37743 10.1526 2.80318C11.1804 3.22892 12.0589 3.94989 12.677 4.87492C13.2951 5.79994 13.625 6.88748 13.625 8C13.6233 9.49133 13.0302 10.9211 11.9757 11.9756C10.9211 13.0302 9.49134 13.6233 8 13.625ZM5.875 8C5.875 8.446 6.01533 8.88069 6.27611 9.24251C6.53689 9.60432 6.90491 9.87491 7.32802 10.016C7.75113 10.157 8.2079 10.1613 8.63361 10.0283C9.05932 9.89536 9.4324 9.6318 9.7 9.275C9.75976 9.19543 9.84868 9.14287 9.94719 9.12886C10.0457 9.11485 10.1458 9.14056 10.2253 9.20031C10.3049 9.26007 10.3574 9.34899 10.3715 9.4475C10.3855 9.54602 10.3598 9.64606 10.3 9.72563C9.93786 10.2082 9.43308 10.5646 8.85714 10.7444C8.28121 10.9242 7.6633 10.9182 7.09095 10.7273C6.51859 10.5365 6.02079 10.1704 5.66804 9.68088C5.31529 9.1914 5.12547 8.60335 5.12547 8C5.12547 7.39665 5.31529 6.8086 5.66804 6.31912C6.02079 5.82963 6.51859 5.46353 7.09095 5.27266C7.6633 5.08179 8.28121 5.07582 8.85714 5.2556C9.43308 5.43538 9.93786 5.7918 10.3 6.27437C10.3598 6.35394 10.3855 6.45398 10.3715 6.5525C10.3574 6.65101 10.3049 6.73993 10.2253 6.79969C10.1458 6.85944 10.0457 6.88515 9.94719 6.87114C9.84868 6.85713 9.75976 6.80456 9.7 6.725C9.4324 6.3682 9.05932 6.10464 8.63361 5.97166C8.2079 5.83868 7.75113 5.84301 7.32802 5.98405C6.90491 6.12509 6.53689 6.39568 6.27611 6.75749C6.01533 7.1193 5.875 7.554 5.875 8Z" fill="white"/>
</svg></p>
            <p> {2023} All Rights Reserved.</p>
        </div>
        </div>
       
    )
}