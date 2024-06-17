import banner from "/images/Banner.jpeg";
import "../assets/styles/Hero.css";
function HeroSection() {
  return (
    <>
      <section>
        <div className='hero-image'>
          <img src={banner} alt='' />
          <div className='gradient'>
            <div className='container'>
              <div className='hero-text'>
                <h6>DR. CEURACLE</h6>
                <h4>Discover Dr. Ceuracle’s Vegan Kombucha Line</h4>
                <p>
                  Vegan Product Line formulated with Kombucha Extract and Tea
                  Complex to detoxify, refine dull looking skin , detoxify and
                  provide deep hydration. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
