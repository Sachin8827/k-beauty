import Slider from "react-slick";
import RenderImage from "../RenderImage";

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "grey", right: "-10px", borderRadius : '50%',display :'none' }}
        onClick={onClick}
      />
    );
  }
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "grey", left: "-10px",borderRadius : '50%', display :'none' }}
        onClick={onClick}
      />
    );
  }

function SimpleSlider({data,currentSlide, setCurrentSlide}) {
    var settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow : <CustomNextArrow /> ,
      prevArrow : <CustomPrevArrow />,
      afterChange: (index) => {
        setCurrentSlide(index); // Update currentSlide state when slide changes
      }
    };
    console.log(currentSlide)
    return (
      <Slider {...settings} initialSlide={currentSlide}>
        {console.log(currentSlide)}
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