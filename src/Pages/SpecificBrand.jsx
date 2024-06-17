import HeroSectionBrand from '../components/HeroSectionBrand'
import Products from '../components/Products';
import data from '../utils/constant/data';
function SpecificBrand(){
    return<>
        <HeroSectionBrand />
        <Products data={data}/>
        <Products data={data.slice(0,4)} heading={"RECENTLY VIEWED PRODUCTS"} />
    </>
}
export default SpecificBrand;