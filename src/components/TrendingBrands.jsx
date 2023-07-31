import StyledText from "../ui/StyledText";
import { useState } from 'react';
import Tcolor from '../assets/tobamsColor.png';
import collxx from '../assets/colxx.png';
import royal from '../assets/royal.png';
import fine from '../assets/fine.png';
import imagery from '../assets/imagery.png';
import mirage from '../assets/mirage.png';
import aperture from '../assets/aperture.png';
import exclusiveShots from '../assets/exclusiveShots.png'








export default function TrendingBrands(){
   
    

    const data = [
        {
            img:Tcolor,
            name:"Tobams Colors",
            excerpt:"Tobams Colors has been created to provide worldwide identity within A...",
            content:"Tobams Colors has been created to provide worldwide identity within African Ankara wax material. We created a fusion of high end clothing with traditional African prints utilising rich colours to create every day, stylish yet affordable pieces.We use a core set of 6 colours to differentiate ourselves. Our staple colors and patterns remain the same but each season is represented by a different organisation of these colours. Each of our colors represent an important aspect of nature. The colors are an acronym of our name.Our products have been designed with versatility in mind. We have aimed to blend African culture with everyday trends using African Super Wax customized prints and contemporary designs. The product range is aligned to both men and women",
           

        },
        {
            img:collxx,
            name:"Collxx",
            excerpt:"The Collxx, is a multinational platform that promotes sustainabil...",
            content:"The Collxx, is a multinational platform that promotes sustainability and social entrepreneurship. We curate with local product designers all over the world promoting their talents and showcasing their talents to the world. We encourage these local product designers to make products that we design and we paid them and we get to sell these products.We also promote social impact by advertising these local designers on our platform and get you to contact them.We make a difference by looking for local talents and empowering these talents by buying their products and showcasing them and their products to the world.",
            
        },
        {
            img:royal,
            name:"The Royal Seams",
            excerpt:"At The Royal Seams, we believe that fashion is more than just clothing—it's a ...",
            content:"At The Royal Seams, we believe that fashion is more than just clothing—it's a statement of elegance, confidence, and individuality. We are a premium clothing brand dedicated to crafting exquisite garments that exude timeless style and impeccable craftsmanship. Our journey began with a passion for creating clothing that reflects the grace and grandeur of royalty. Inspired by the opulence of regal fashion, we meticulously design each piece to befit kings and elevate the wardrobes of discerning individuals",
            
        },
        {
            img:imagery,
            name:"Imaginary Photography",
            excerpt:"Imaginary Photography is not just about capturing moments; it's about creating...",
            content:"Imaginary Photography is not just about capturing moments; it's about creating a world of visual enchantment. We are a photography brand passionate about turning dreams into extraordinary images.We believe that every photograph tells a unique story. Through our lens, we explore the realms of imagination, capturing the essence and emotions of each precious moment.",
            
        },
        {
            img:fine,
            name:"Fine Silk Fashion",
            excerpt:"We believe that the touch and drape of silk have the power to transform...",
            content:"We believe that the touch and drape of silk have the power to transform your look and elevate your confidence. Each piece is carefully designed and meticulously crafted to showcase the luxurious allure of silk, making you feel effortlessly glamorous.Whether it's a sophisticated evening gown, a chic blouse, or a tailored suit, our collection offers versatile pieces that seamlessly transition from day to night. With our timeless designs, you can embrace a sense of understated luxury and make a lasting impression on any occasion.",
            
        },
        {
            img:mirage,
            name:"Mirage Wears",
            excerpt:"Mirage Wears is a dynamic clothing brand that breathes life into your style. We are...",
            content:"Mirage Wears is a dynamic clothing brand that breathes life into your style. We are passionate about creating fashion that captures the essence of individuality and empowers you to make a statement.At Mirage Wears, we believe that clothing should be an expression of your unique personality. Our carefully curated collection blends contemporary trends with timeless designs, offering a diverse range of pieces that cater to your distinctive taste.Mirage Wears is more than just a clothing brand; it's a lifestyle.",
            
        },
        {
            img:exclusiveShots,
            name:"Exclusive Shots",
            excerpt:"Exclusive Shots is a photography brand dedicated to capturing moments of...",
            content:"Exclusive Shots is a photography brand dedicated to capturing moments of extraordinary beauty. With a keen eye for detail and a passion for storytelling, we create stunning visual narratives that leave a lasting impression. At Exclusive Shots, we believe that every photograph has the power to tell a unique story. Whether it's a wedding, a special event, or a lifestyle shoot, our talented photographers go above and beyond to capture the essence and emotion of each moment.",
            
        },
        {
            img:aperture,
            name:"Aperture Studios",
            excerpt:"Aperture Studios is a photography brand dedicated to the art of visual...",
            content:"Aperture Studios is a photography brand dedicated to the art of visual storytelling. We believe that every moment holds a story waiting to be told, and through our lens, we bring those stories to life.At Aperture Studios, we pride ourselves on our ability to capture the essence and emotion of each moment. Our skilled photographers have a keen eye for detail and a passion for creating compelling narratives through their images. At Aperture Studios, we invite you to embark on a visual journey with us. Let us tell your story, capture your memories, and create images that will be treasured for generations to come. Unleash the power of visual storytelling with Aperture Studios.",
            
        },
       
    ];
    const [hoverStates, setHoverStates] = useState(data.map(() => false));
    const handleMouseEnter = (index) => {
        setHoverStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = true;
          return newStates;
        });
      };
    
      const handleMouseLeave = (index) => {
        setHoverStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = false;
          return newStates;
        });
      };
    
    return (
        <div className="p-8 md:p-16">
            <div>
                <StyledText variant="bodyHeading">
                Trending Brands
                </StyledText>
                <StyledText variant="smallBodyHeading2">
                Everything looks good with confidence and that confidence is what our brands give, a better you.
                </StyledText>
            </div>
            <div className="flex flex-wrap">
  {data.map((item, index) => (
    <div
      key={index}
      className="md:w-1/4 p-2"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <div className="mt-5 self-start border border-gray-3 p-2 rounded-md shadow-md transform transition-transform hover:-translate-y-1 hover:scale-105  ease-out duration-300">
        <img src={item.img} className="w-full h-1/2 rounded-lg" alt={item.name} />
        <div className="mt-5">
          <p className="text-lg text-[#202020]">{item.name}</p>
          <p className={`text-xs font-thin text-[#494848] ${hoverStates[index] ? 'hidden' : 'block'}`}>{item.excerpt}</p>
          <p className={`text-xs font-thin text-[#494848] ${hoverStates[index] ? 'block' : 'hidden'}`}>
            {item.content}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
       
      );
}