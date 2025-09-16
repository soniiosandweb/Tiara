import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import aboutImg from "../../../assests/images/about-us.jpg";

const AboutUs = () => {
    return(
        <div className="about_us_section padding-top" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading2 margin-2">4 & 5 BHK Ultra-Premium Residences | Assured quality with RERA approval</h2>
                        <h3 className="heading3">Luxury & Exclusivity:</h3>
                        <p className="paragraph_text">Step into a world where space, privacy, and indulgence come together. 4 & 5 BHK residences with access to a grand 60,000 sq. ft. clubhouse, offering you more than a home, an exclusive way of life.</p>
                        <div className="about_us_image">
                            <img
                                src={aboutImg}
                                alt="About Us"
                                className="about_img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs