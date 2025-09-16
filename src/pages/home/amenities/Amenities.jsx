import "./Amenities.css";
import { Col, Container, Row } from "react-bootstrap";
import waterBased from "../../../assests/images/amenities/water-based.png";
import sports from "../../../assests/images/amenities/sports.png";
import wellness from "../../../assests/images/amenities/yoga.png";
import indoor from "../../../assests/images/amenities/indoor.png";
import fitness from "../../../assests/images/amenities/treadmill.png";
import playground from "../../../assests/images/amenities/playground.png";
import business from "../../../assests/images/amenities/investment.png";
import commercial from "../../../assests/images/amenities/market.png";
import interior from "../../../assests/images/amenities/livingroom.png";
import parking from "../../../assests/images/amenities/parking.png";
import spa from "../../../assests/images/amenities/spa.png";
import dining from "../../../assests/images/amenities/dining-room.png";

// Amenities options
const amenitiesOptions = [
    {
        image: waterBased,
        text: "Water-Based & Outdoor Recreation",
    },
    {
        image: sports,
        text: "Sports & Outdoor Courts",
    },
    {
        image: wellness,
        text: "Wellness & Relaxation",
    },
    {
        image: indoor,
        text: "Indoor Games & Entertainment",
    },
    {
        image: fitness,
        text: "Health & Fitness Facilities",
    },
    {
        image: playground,
        text: "Kid’s Play Area",
    },
    {
        image: business,
        text: "Business & Community Spaces",
    },
    {
        image: commercial,
        text: "Commercial & Convenience Services",
    },
    {
        image: interior,
        text: "Posh Interior",
    },
    {
        image: parking,
        text: "Valet Parking",
    },
    {
        image: spa,
        text: "World Class Spa",
    },
    {
        image: dining,
        text: "Ultra Fine Dining",
    }
]

const Amenities = () => {
    return(
        <>
            <div className="amenities_section_banner pink_banner_section" id="amenities">
                <Container>
                    <Row>
                        <Col>
                            <div className="pink_banner_content padding-top padding-bottom">
                                <h2 className="pink_banner_heading">Amenities</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="padding-top padding-bottom amenities_lists_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="amenities_lists_block">
                                {amenitiesOptions.map((item,i) => (
                                    <div className="amenities_lists_item" key={i}>
                                        <img
                                            src={item.image}
                                            alt={item.text}
                                            className="amenities_img"
                                        />
                                        <p className="paragraph">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Amenities