import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./ContactUs.css";
import { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";

const ContactUs = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");

    // handle Contact Submit
    const handleContactSubmit = (e) => {
        e.preventDefault();

        if (mobileNumber) {
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 8000);

                return false;
            }
        }

        setLoading(true);

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/api/enquire-us-api.php`,
            data: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                mobileNumber: mobileNumber,
                email: email,
                message: message,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {

            console.log(typeof(response.data.status))
            //handle success
            if (response.data.status === 0) {
                setLoading(false);
                setFormSuccess("THANK YOU, For Trusting Us with Your Home Search!! We'll Reach Out Soon With All the Details.");
                  
                resetForm();
                setTimeout(() => {
                    setFormSuccess('');
                }, 10000);

            } else {
                setLoading(false);
                setFormError("Some error occured");
                resetForm();

                setTimeout(() => {
                    setFormError('');
                }, 10000);
            }
        })
        .catch(function (response) {
            //handle error
            setLoading(false);
            console.log(response);
            setFormError("Some error occured");
            resetForm();
            setTimeout(() => {
                setFormError('');
            }, 10000);
        });
    }

    // Handle Reset Form
    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobileNumber("");
        setMessage("");
    }

    return(
        <div className="contact_us_section padding-top padding-bottom" id="contact">
            <Container>
                <Row>
                    <Col>
                        <div className="contact_us_block">
                            <h3 className="heading3 heading_text">We think this might just change how people think about living in New Chandigarh. It's the kind of place we'd want to come home to ourselves.</h3>
                            <div className="get_in_touch_block">
                                <h3 className="heading3">Get In Touch</h3>
                                <Form className="get_in_touch_form" onSubmit={handleContactSubmit}>
                                    <div className="form-row">
                                        <Form.Group controlId="firstname" className="form-cols">
                                            <Form.Control
                                                type="text"
                                                required
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                placeholder="First Name *"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="lastname" className="form-cols">
                                            <Form.Control
                                                type="text"
                                                required
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                placeholder="Last Name *"
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="form-row">
                                        <Form.Group controlId="email_address" className="form-cols">
                                            <Form.Control
                                                type="text"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email *"
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="form-row">
                                        <Form.Group controlId="mobile_number" className="form-cols">
                                            <PhoneInput
                                                required
                                                type="tel"
                                                id="mobile_number"
                                                placeholder="Mobile Number"
                                                className="form-control"
                                                country="IN"
                                                defaultCountry="IN"
                                                value={mobileNumber}
                                                onChange={setMobileNumber}
                                                limitMaxLength={true}
                                                national="true"
                                                international={false}
                                            />
                                            {phoneError &&
                                                <Form.Control.Feedback type="invalid" className="d-block">
                                                    {phoneError}
                                                </Form.Control.Feedback>
                                            }
                                            
                                        </Form.Group>
                                    </div>
                                    <div className="form-row">
                                        <Form.Group controlId="message" className="form-cols">
                                            <Form.Control
                                                as={"textarea"}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Type Message"
                                                rows={4}
                                            />
                                        </Form.Group>
                                    </div>

                                    {formSuccess &&
                                        <p className="form-row form-success">{formSuccess}</p>
                                    }
                                    {formError &&
                                        <p className="form-row form-error">{formError}</p>
                                    }
                                    <div className="form-row form-btn-row">
                                        <Button className="btn_submit_contact" type="submit" disabled={loading}>
                                            {loading ? "Processing" : "Submit"}
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs