import "./UnitPlan.css";
import { Col, Container, Row } from "react-bootstrap";
import towerA from "../../../assests/images/unitplan/tower-A.png";
import towerB from "../../../assests/images/unitplan/tower-B.png";
import towerC from "../../../assests/images/unitplan/tower-C.png";
import towerD from "../../../assests/images/unitplan/tower-D.png";
import towerE from "../../../assests/images/unitplan/tower-E.png";
import towerF from "../../../assests/images/unitplan/tower-F.png";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { Fullscreen, Slideshow, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Unit Plan Lists
const unitPlanLists = [
    {
        src: towerA,
        title: "Tower A"
    },
    {
        src: towerB,
        title: "Tower B"
    },
    {
        src: towerC,
        title: "Tower C"
    },
    {
        src: towerD,
        title: "Tower D"
    },
    {
        src: towerE,
        title: "Tower E"
    },
    {
        src: towerF,
        title: "Tower F"
    }
]

const UnitPlan = () => {

    const [index, setIndex] = useState(-1);

    return(
        <>
            <div className="unit_plan_section_banner pink_banner_section" id="unitplan">
                <Container>
                    <Row>
                        <Col>
                            <div className="pink_banner_content padding-top padding-bottom">
                                <h2 className="pink_banner_heading">Unit Plan</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="unit_plan_blocks padding-top padding-bottom">
                <Container>
                    <Row>
                        <Col>
                            <div className="unit_plan_lists">
                                {unitPlanLists.map((item,i) => (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="unit_plan_image"
                                        key={i}
                                        onClick={() => setIndex(i)}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Lightbox
                index={index}
                slides={unitPlanLists}
                open={index >= 0}
                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                controller={{ closeOnBackdropClick: true }}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Zoom, Slideshow,Thumbnails]}
                counter={{ container: { style: { top: 0, bottom: "unset" } } }}
            />
        </>
    )
}

export default UnitPlan