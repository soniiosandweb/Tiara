import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../assests/images/Tiara-logo.png";
import locationIcon from "../../assests/images/location.png";
import emailIcon from "../../assests/images/email.png";
import phoneIcon from "../../assests/images/phone-call.png";
import facebookIcon from "../../assests/images/facebook.png";
import instagramIcon from "../../assests/images/instagram.png";
import twitterIcon from "../../assests/images/twitter.png";
import youtubeIcon from "../../assests/images/youtube.png";
import ScrollToSection from "../../ScrollLink";

// contact details
const contactDetails = [
    {
        icon: emailIcon,
        text: "Email: info@thetiara.in",
        link: "mailto:info@thetiara.in",
    },
    {
        icon: phoneIcon,
        text: "+91-XXXXXXXXXX",
        link: "tel:+91-XXXXXXXXXX",
    },
    {
        icon: locationIcon,
        text: "Lorem Ipsum is simply dummy text",
        link: "",
    }
];

// Social Links
const socialLinks = [
    {
        icon: twitterIcon,
        link: "/",
        title: "Twitter",
    },
    {
        icon: facebookIcon,
        link: "/",
        title: "Facebook",
    },
    {
        icon: youtubeIcon,
        link: "/",
        title: "Youtube",
    },
    {
        icon: instagramIcon,
        link: "/",
        title: "Instagram",
    }
]

const Footer = () => {

    const menuLists = [
        {
            title: "About Us",
            link: "#about",
            id: "about",
        },
        {
            title: "Connectivity",
            link: "#connectivity",
            id: "connectivity",
        },
        {
            title: "Unit Plan",
            link: "#unitplan",
            id: "unitplan"
        },
        {
            title: "Amenities",
            link: "#amenities",
            id: "amenities",
        },
        {
            title: "Gallery",
            link: "#gallery",
            id: "gallery",
        },
        {
            title: "Contact Us",
            link: "#contact",
            id: "contact",
        }
    ]

    return(
        <div className="main_footer">
            <Container>
                <Row>
                    <Col>
                        <div className="footer_top_section">
                            {/* Column 1 */}
                            <div className="footer_cols col1">
                                <a href="/" className="footer_logo_link">
                                    <img src={footerLogo} alt="Tiara Logo" className="footer_logo" />
                                </a>
                                <p className="footer_about_text">An ultra-luxury home address providing 4 & 5 BHK luxury apartments with international-grade amenities, peaceful green environment, and best connectivity in the heart of Medicity.</p>
                            </div>

                            {/* Column 2 */}
                            <div className="footer_cols col2">
                                <p className="footer_heading">Quick Links</p>
                                <ul className="footer_menu">
                                    {menuLists.map((item,i) => (
                                        <li key={i} className="footer_menu_item">
                                            <ScrollToSection to={item.id}>{item.title}</ScrollToSection>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div className="footer_cols col3">
                                <p className="footer_heading">Contact Us</p>
                                <div className="footer_details_block">
                                    {contactDetails.map((item,i) => (
                                        <div className="footer_details_item" key={i}>
                                            <img src={item.icon} alt="icons" className="contact_icons" />
                                            {item.link ? 
                                                <a href={item.link}>
                                                    <p className="footer_contact_text">{item.text}</p>
                                                </a>
                                            :
                                                <p className="footer_contact_text">{item.text}</p>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 4 */}
                            <div className="footer_cols col4">
                                <p className="footer_heading">Follow Us:</p>
                                <ul className="social_items_list">
                                    {socialLinks.map((item,i) => (
                                        <li key={i} className="social_item">
                                            <a href={item.link} target="_blank" rel="noreferrer">
                                                <img src={item.icon} alt={item.title} className="social_icon" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className="footer_disclaimer">
                            <p className="disclaimer_heading">Disclaimer:</p>
                            <ul className="displaimer_content">
                                <li>
                                    <p className="paragraph">1. The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                                </li>
                                <li>
                                    <p className="paragraph">2. Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized realestate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                                </li>
                                <li>
                                    <p className="paragraph">3. We are the Authorized Channel Partner of 'The Tiara'. All rights for logo & images are reserved to developer.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="footer_bottom_section">
                            <div className="footer_bottom_col">
                                <p className="paragraph"><a href={"/"} target="_blank" rel="noreferrer">Terms & Conditions</a> and <a href={"/"} target="_blank" rel="noreferrer">Privacy Policy</a></p>
                            </div>
                            <div className="footer_bottom_col">
                                <p className="paragraph">Crafted By: <a href={"https://iosandweb.net/"} target="_blank" rel="noreferrer">IosAndWeb Technologies</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer