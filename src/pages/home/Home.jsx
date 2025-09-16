import SEO from "../../layout/SEO/SEO"
import AboutUs from "./aboutUs/AboutUs"
import Amenities from "./amenities/Amenities"
import Banner from "./banner/Banner"
import Connectivity from "./connectivity/Connectivity"
import Gallery from "./galley/Gallery"
import UnitPlan from "./unitPlan/UnitPlan"

const Home = () => {
    return(
        <>
            {/* SEO */}
            <SEO title={"Tiara Real Estate"} />

            {/* Banner Section */}
            <Banner />

            {/* About Us Section */}
            <AboutUs />

            {/* Connectivity Section */}
            <Connectivity />

            {/* Unit Plan Section */}
            <UnitPlan />

            {/* Amenities Section */}
            <Amenities />

            {/* Gallery Section */}
            <Gallery />
        </>
    )
}

export default Home