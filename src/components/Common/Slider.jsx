import Slider from "react-slick";
import RenderImage from "../RenderImage";


function SimpleSlider({ data, currentSlide, setCurrentSlide }) {


  const settings = {
    customPaging: function (i) {
      return (
        <a >
          <img src={`/images/${data[i].image}`} style={{ width: "100%", imageRendering :"pixelated" }} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  }
  return (
    <Slider {...settings} >
      {data.map((item, index) => (
        <div key={index}>
          <RenderImage
            classOfDiv="pr-img-box"
            classOfImage={"pr-img"}
            imageName={`/images/${item.image}`}
          />
        </div>
      ))}
    </Slider>
  );
}
export default SimpleSlider;