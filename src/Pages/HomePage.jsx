import Blog from "../components/Blog";
import AboutHome from "../components/Common/About-Home";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import SocialMedia from "../components/Social-media";
import data from "../utils/constant/data";
function HomePage({inputFieldStatus}){
    return <>
        <HeroSection inputFieldStatus={inputFieldStatus}/>
        <AboutHome/>
        <Products data={data}/>
        <Blog />
        <SocialMedia/>
    </>
}
export default HomePage;