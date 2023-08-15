import Carousel from '../component/Carousel'
import carousel_img1 from '../images/carousel-img1.jpg'
import carousel_img2 from '../images/carousel-img2.jpg'
import carousel_img3 from '../images/carousel-img3.jpg'

const slides = [
  carousel_img1,
  carousel_img2,
  carousel_img3
]

const Hero = () => {
  return (
    <section>
      <Carousel autoSlide={true}>
        {slides.map((item) => (
          <img src={item} alt=''/>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
