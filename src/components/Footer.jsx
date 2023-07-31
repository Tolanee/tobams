
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
    )
}