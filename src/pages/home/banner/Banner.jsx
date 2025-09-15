import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return(
        <div className="home_banner_section">
            <Container>
                <Row>
                    <Col>
                        <div className="home_banner_content">
                            <div className="home_banner_content_div">
                                <h1 className="home_banner_heading">Welcome to Tiara Estate, Where Every Detail Speaks of Luxury.</h1>
                                <p className="banner_text">Discover 308 high-rise residences in New Chandigarh, crafted to elevate your lifestyle and become a timeless address in the region.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner