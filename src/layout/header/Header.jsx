import "./Header.css";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../assests/images/logo.png";
import menuIcon from "../../assests/images/menu.png";
import { Link, useLocation } from "react-router-dom";
import callIcon from "../../assests/images/telephone-call.png";
import { useEffect, useState } from "react";

const Header = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");

    const [scrollClass, setScrollClass] = useState('scroll');

    const menuLists = [
        {
            title: "About Us",
            link: "#about",
        },
        {
            title: "Connectivity",
            link: "#connectivity",
        },
        {
            title: "Unit Plan",
            link: "#unitplan",
        },
        {
            title: "Amenities",
            link: "#amenities",
        },
        {
            title: "Gallery",
            link: "#gallery",
        },
        {
            title: "Contact Us",
            link: "#contact",
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

    return(
        <>
            <div className={`main_header ${scrollClass}`}>
                <Navbar key={"lg"} expand={"lg"}>
                    <Container >
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Tiara Logo" className="logo_header" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`header_offcanvas`}>
                            <img src={menuIcon} alt="menu" className="menu_icon" />
                        </Navbar.Toggle>

                        <Navbar.Offcanvas
                            id={`header_offcanvas`}
                            aria-labelledby={`header_label_offcanvas`}
                            placement="end"
                            className="header_offcanvas"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-grow-1">
                                    {menuLists.map((menu,i) => (
                                        <Nav.Link href={menu.link} key={i}>{menu.title}</Nav.Link>
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

            <div className="fixed_btns_section">
                <Button className="btn_fixed_header">Enquire Now</Button>
                <Button className="btn_fixed_header">Download Brochure</Button>
            </div>
        </>
    )
}

export default Header