import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from '../../assets/slider 1.png'
import slider_2 from '../../assets/slider 2.jpg'
import slider_3 from '../../assets/slider 3.jpg'
import slider_4 from '../../assets/slider 4.jpg'

const Banner = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="  h-full m-0 left-0">
        <img className=" w-full h-full max-h-80 bg-cover" src={slider_1}></img>
      </div>
      <div>
        <img className=" w-full h-full max-h-80 bg-cover" src={slider_2}></img>
      </div>
      <div>
        <img className=" w-full h-auto max-h-80 bg-cover" src={slider_3}></img>
      </div>
      <div>
        <img className=" w-full h-auto max-h-80 bg-cover" src={slider_4}></img>
      </div>
    </Slider>
  )
}

export default Banner