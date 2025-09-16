import "./Gallery.css";
import { Col, Container, Row } from "react-bootstrap";
import gallery1 from "../../../assests/images/gallery/gallery1.png";
import gallery2 from "../../../assests/images/gallery/gallery2.png";
import gallery3 from "../../../assests/images/gallery/gallery3.png";
import gallery4 from "../../../assests/images/gallery/gallery4.png";
import gallery5 from "../../../assests/images/gallery/gallery5.png";
import gallery6 from "../../../assests/images/gallery/gallery6.png";
import gallery7 from "../../../assests/images/gallery/gallery7.png";
import gallery8 from "../../../assests/images/gallery/gallery8.png";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Slideshow, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Gallery List
const galleryList = [
    {
        src: gallery1,
        title: "Gallery 1",
        rows: 2,
        cols: 2,
    },
    {
        src: gallery2,
        title: "Gallery 2",
    },
    {
        src: gallery3,
        title: "Gallery 3",
    },
    {
        src: gallery4,
        title: "Gallery 4",
        rows: 2,
        cols: 1,
    },
    {
        src: gallery5,
        title: "Gallery 5",
    },
    {
        src: gallery6,
        title: "Gallery 6",
    },
    {
        src: gallery7,
        title: "Gallery 7",
        rows: 2,
    },
    {
        src: gallery8,
        title: "Gallery 8",
        rows: 2,
        cols: 4,
    },
]

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    return(
        <>
            <div className="gallery_banner_section padding-top padding-bottom">
                <Container>
                    <Row>
                        <Col>
                            <div className="gallery_banner_block padding-bottom">
                                <h2 className="pink_banner_heading">Gallery</h2>
                                <h3 className="heading3 margin-2">Benchmark in New Chandigarh:</h3>
                                <p className="paragraph_text">We're not just building another apartment complex, we're creating something New Chandigarh has never seen before.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="gallery_images_section padding-bottom">
                <Container>
                    <Row>
                        <Col>
                            <div className="gallery_images_blocks">
                                {galleryList.map((item,i) => (
                                    <div className={`gallery_images_item ${item.rows ? "large rows_"+item.rows : "small"} ${item.cols && "cols_"+item.cols} gallery_${i+1}`} key={i}>
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="gallery_image"
                                            onClick={() => setIndex(i)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Lightbox
                index={index}
                slides={galleryList}
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

export default Gallery