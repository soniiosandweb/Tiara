import "./FAQSection.css";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const faqLists = [
    {
        question: "What kinds of apartments are available and what are their sizes?",
        answer: "Tiara Estate offers ultra-premium 4 and 5 BHK high-rise residences. These homes are thoughtfully planned with spacious layouts, generous balconies, and premium fittings, ensuring ample space, privacy, and comfort for modern family living."
    },
    {
        question: "Is the project legally approved?",
        answer: "Yes, Tiara Estate is RERA-approved, assuring complete legal compliance, transparency, and quality standards. Buyers can have peace of mind knowing the project meets all required regulations for safe and secure property investment."
    },
    {
        question: "Where is the project located?",
        answer: "The project is strategically located in New Chandigarh’s Medicity, close to reputed hospitals, schools, and leisure hubs. With direct access via Madhya Marg extension, it offers excellent connectivity while keeping residents in a serene environment."
    },
    {
        question: "What are the key amenities offered?",
        answer: "Residents enjoy a 60,000 sq. ft. clubhouse, fitness and wellness facilities, landscaped gardens, indoor and outdoor recreation zones, secure gated living, and community spaces that together deliver a lifestyle of luxury, exclusivity, and convenience."
    },
    {
        question: "When is possession expected?",
        answer: "Possession timelines are carefully planned to ensure quality delivery. For exact possession dates, prospective buyers are encouraged to connect with the Tiara Estate sales team, who will provide the latest project-specific handover details."
    }
]

const FAQSection = () => {
    return(
        <div className="faq_section padding-top padding-bottom">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading3">Frequently Asked Questions</h2>
                        <Accordion>
                            {faqLists.map((item,i) => (
                                <Accordion.Item eventKey={i} key={i}>
                                    <Accordion.Header>{item.question}</Accordion.Header>
                                    <Accordion.Body>{item.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FAQSection