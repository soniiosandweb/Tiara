import { useEffect } from "react"
import SEO from "../../layout/SEO/SEO"
import AboutUs from "./aboutUs/AboutUs"
import Amenities from "./amenities/Amenities"
import Banner from "./banner/Banner"
import Connectivity from "./connectivity/Connectivity"
import ContactUs from "./contactUs/ContactUs"
import FAQSection from "./faqSection/FAQSection"
import Gallery from "./galley/Gallery"
import UnitPlan from "./unitPlan/UnitPlan"
import { useLocation } from "react-router-dom"
import { scroller } from "react-scroll";

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
        // only scroll when navigation passed scrollTo
        scroller.scrollTo(location.state.scrollTo, {
            smooth: true,
            duration: 500,
            offset: -70,
        });
        }
        // 👇 clear state so reload won't scroll
        window.history.replaceState({}, document.title);
    }, [location.state]);

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

            {/* Contact Us Section */}
            <ContactUs />

            {/* FAQ Section */}
            <FAQSection />
        </>
    )
}

export default Home