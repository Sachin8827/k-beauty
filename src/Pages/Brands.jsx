import HeroSectionBrands from "../components/HeroSectionBrand";
import ShowBrands from "../components/ShowBrands";
import BrandsImages from "../utils/constant/BrandsImages";
function Brands(){
    return<>
            <HeroSectionBrands/>
            <ShowBrands letter={'A'} imageData={BrandsImages[0].images} nameData={BrandsImages[0].Brands} />
            <ShowBrands letter={'B'} imageData={BrandsImages[1].images} nameData={BrandsImages[1].Brands} />
            <ShowBrands letter={'C'} imageData={BrandsImages[2].images} nameData={BrandsImages[2].Brands} />
    </>
}
export default Brands;