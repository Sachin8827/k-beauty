import Banner from '../assets/images/Banner2.svg'
import '../assets/styles/Hero.css'
function HeroSectionBrands(){
    return <>
        <section className="banners">
        <div className="hero-image">
            <img src={Banner} alt="" />
            <div className='gradient'>
            </div>
        </div>
        </section>
    </>
}
export default HeroSectionBrands;