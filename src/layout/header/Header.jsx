import "./Header.css";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../assests/images/logo.png";
import menuIcon from "../../assests/images/menu.png";
import { Link, useLocation } from "react-router-dom";
import callIcon from "../../assests/images/telephone-call.png";
import { useEffect, useState } from "react";
import EnquiryForm from "../../components/enquiryForm/EnquiryForm";
import ScrollToSection from "../../ScrollLink";

const Header = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");

    const [scrollClass, setScrollClass] = useState('scroll');

    const [formHeading, setFormHeading] = useState("");
    const [enquiryShow, setEnquiryShow] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    
    useEffect(() => {
        const listenScrollEvent = () => {
            if (locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1])) {
                const newScrollClass = window.scrollY > 50 ? '' : 'scroll';
                setScrollClass(newScrollClass);
            } else {
                setScrollClass('scroll');
            }
        };

        window.addEventListener("scroll", listenScrollEvent);

        // eslint-disable-next-line
    },[locationValue]);

    // handle Enquiry Click
    const handleEnquiryClick = () => {
        setFormHeading("Enquire Now");
        setEnquiryShow(true);
    }

    // handle Enquiry Click
    const handleDownloadBrochureClick = () => {
        setFormHeading("Download Brochure");
        setEnquiryShow(true);
    }

    // Show popup automatic
    useEffect(() => {
        setTimeout(() => {
            setEnquiryShow(true);
        }, 5000); 
    }, []);

    return(
        <>
            <div className={`main_header ${scrollClass} ${locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1]) ? "home_header" : ""}`}>
                <Navbar key={"lg"} expand={"lg"}>
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Tiara Logo" className="logo_header" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`header_offcanvas`} onClick={handleShow}>
                            <img src={menuIcon} alt="menu" className="menu_icon" />
                        </Navbar.Toggle>

                        <Navbar.Offcanvas
                            show={show}
                            onHide={handleClose}
                            id={`header_offcanvas`}
                            aria-labelledby={`header_label_offcanvas`}
                            placement="end"
                            className="header_offcanvas"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-grow-1">
                                    {menuLists.map((menu,i) => (
                                        <Nav.Link
                                            as="span"
                                            key={i}
                                            onClick={handleClose}
                                        >
                                            <ScrollToSection to={menu.id}>{menu.title}</ScrollToSection>
                                        </Nav.Link>
                                    ))}
                                </Nav>
                                <Link to={"tel:+91 0000000000"} className="header_call">
                                    <img src={callIcon} alt="Call" className="call_icon" />
                                    +91 0000000000
                                </Link>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>

            {/* Fixed buttons */}
            <div className="fixed_btns_section">
                <Button className="btn_fixed_header" onClick={() => handleEnquiryClick()}>Enquire Now</Button>
                <Button className="btn_fixed_header" onClick={() => handleDownloadBrochureClick()}>Download Brochure</Button>
            </div>

            {/* Enquiry Form */}
            <EnquiryForm
                show={enquiryShow}
                onHide={() => setEnquiryShow(false)}
                heading={formHeading}
            />
        </>
    )
}

export default Header