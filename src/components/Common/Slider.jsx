import Slider from "react-slick";
import RenderImage from "../RenderImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

function SimpleSlider({data}) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow : <CustomNextArrow /> ,
      prevArrow : <CustomPrevArrow />
    };
    return (
      <Slider {...settings} >
        {data.map((item, index) => (
        <div key={index} >
          <RenderImage classOfDiv="pr-img-box" classOfImage={"pr-img"} imageName={`/images/${item.image}`}/>
        </div>
      ))}
        

      </Slider>
    );
  }
  export default SimpleSlider;