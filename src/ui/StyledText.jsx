
const variants = {
    heroText: "text-3xl mx-2 md:mx-0 md:text-6xl md:leading-8 text-white font-bold",
    bodyHeading: "text-xl md:text-3xl mb-4 leading-5",
    smallBodyHeading: "text-sm md:text-lg text-white leading-5 pt-4 mx-2 md:mx-0 ",
    smallBodyHeading2: "text-sm md:text-lg font-normal font-light leading-5 pt-4 text-[#3F3F3F]",
    
    
  };

// eslint-disable-next-line react/prop-types
export default function StyledText ({ children, variant }){
    return(
        <p className={variants[variant] ? variants[variant] : variants.bodyText} >
      {children}
    </p>
    )
}