import "./Connectivity.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import PGIChandigarh from "../../../assests/images/connectivity/PGI-chandigarh.png";
import university from "../../../assests/images/connectivity/punjab-university.png";
import cancerHospital from "../../../assests/images/connectivity/cancer-hospital.png";
import elanteMall from "../../../assests/images/connectivity/elante-mall.png";
import sukhnaLake from "../../../assests/images/connectivity/sukna-lake.png";
import openIcon from "../../../assests/images/connectivity/open_icon.png";

import exteriorImg from "../../../assests/images/connectivity/exterior.png";
import bedroomImg from "../../../assests/images/connectivity/bedroom.png";
import livingRoomImg from "../../../assests/images/connectivity/living-room.png";
import poolImg from "../../../assests/images/connectivity/pool.png";

import calendarIcon from "../../../assests/images/connectivity/calendar.png";
import locationIcon from "../../../assests/images/connectivity/location.png";
import sofaIcon from "../../../assests/images/connectivity/long-sofa.png";
import poolIcon from "../../../assests/images/connectivity/pool-icon.png";

// Connectivity options
const connectivityOptions = [
    {
        image: PGIChandigarh,
        title: "PGI, Chandigarh",
        time: "2 Minutes"
    },
    {
        image: university,
        title: "Punjab University",
        time: "2 Minutes"
    },
    {
        image: cancerHospital,
        title: "Bhabha Cancer Hospital",
        time: "1 Minute",
    },
    {
        image: elanteMall,
        title: "Nexus Elante Mall",
        time: "15 Minutes",
    },
    {
        image: sukhnaLake,
        title: "Sukhna Lake",
        time: "5 Minutes",
    }
]

// Areas Images
const areasOptions = [
    {
        image: exteriorImg,
        text: "Exterior",
    },
    {
        image: bedroomImg,
        text: "Bedroom",
    },
    {
        image: livingRoomImg,
        text: "Living Room",
    },
    {
        image: poolImg,
        text: "Pool",
    }
]

// Living Experience Options
const livingExperiences = [
    {
        image: calendarIcon,
        text: "Timely Delivery",
    },
    {
        image: locationIcon,
        text: "Prime Locations Across Dubai",
    },
    {
        image: sofaIcon,
        text: "Luxury Furnishing",
    },
    {
        image: poolIcon,
        text: "40+ Amenities",
    }
]

const Connectivity = () => {
    return(
        <>
            <div className="connectivity_section padding-top" id="connectivity">
                <Container>
                    <Row>
                        <Col>
                            <h3 className="heading3 margin-2">Location & Connectivity:</h3>
                            <p className="paragraph_text">Positioned in the heart of New Chandigarh's Medicity, Tiara Estate keeps you close to premium healthcare, education, and leisure. Easy access from the Madhya Marg extension ensures you're always well connected.</p>
                            <div className="connectivity_grid">
                                {connectivityOptions.map((item,i) => (
                                    <div className="connectivity_item" key={i}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="connectivity_img"
                                        />
                                        <p className="paragraph">{item.title}</p>
                                        <p className="paragraph">{item.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="btn_div">
                                <Button className="btn_register_interest">
                                    <img
                                        src={openIcon}
                                        alt="Open"
                                        className="btn_icon"
                                    />
                                    Register Interest
                                </Button>
                            </div>
                            <h4 className="heading4 padding-top margin-2">Imagine a life where everything is just moments away, yet you always feel a sense of peace and privacy. That's the feeling you'll find here.</h4>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Areas Images */}
            <div className="areas_images_section">
                {areasOptions.map((item,i) => (
                    <div 
                        className="areas_images_item padding-top padding-bottom" 
                        style={{backgroundImage: `url(${item.image})`}}
                        key={i}
                    >
                        <Container className="h-100">
                            <Row className="h-100">
                                <Col className="h-100">
                                    <div className="areas_images_conent">
                                        <h2 className="areas_images_heading">{item.text}</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))}
            </div>

            {/* Design & Living Experience */}
            <div className="padding-top padding-bottom design_living_experience">
                <Container>
                    <Row>
                        <Col>
                            <div className="design_living_flex">
                                <div className="design_living_col">
                                    <h3 className="heading3">Design & Living Experience:</h3>
                                    <p className="paragraph_text">More than walls and windows, a curated sanctuary where exceptional design enhances every moment of daily life.</p>
                                    <div className="living_experiences_grid">
                                        {livingExperiences.map((item,i) => (
                                            <div className="living_experiences_item" key={i}>
                                                <img
                                                    src={item.image}
                                                    alt={item.text}
                                                    className="living_icon"
                                                />
                                                <p className="paragraph">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="design_living_col">
                                    <div className="design_living_right">
                                        <h4 className="heading4">28 stories built by people who genuinely care about how you'll feel coming home every single day.</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Connectivity