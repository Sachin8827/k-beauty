import Blog from "../components/Blog";
import AboutHome from "../components/Common/About-Home";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import SocialMedia from "../components/Social-media";

function HomePage(){
    return <>
        <HeroSection/>
        <AboutHome/>
        <Products/>
        <Blog />
        <SocialMedia/>
    </>
}
export default HomePage;