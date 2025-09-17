import "./EnquiryForm.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const EnquiryForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [terms, setTerms] = useState(false);
    const [enquiryLoading, setEnquiryLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");

    // handle Enquiry Submit
    const handleEnquirySubmit = (e) => {
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

        setEnquiryLoading(true);

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/api/enquire-us-api.php`,
            data: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                mobileNumber: mobileNumber,
                email: email,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(function (response) {
            //handle success
            if (response.data.status === 0) {
                setEnquiryLoading(false);
                setFormSuccess("THANK YOU, For Trusting Us with Your Home Search!! We'll Reach Out Soon With All the Details.");
                  
                resetForm();
                setTimeout(() => {
                    setFormSuccess('');
                    props.onHide();
                }, 10000);

            } else {
                setEnquiryLoading(false);
                setFormError(response.data.msg ? response.data.msg : "Server Error");
                resetForm();

                setTimeout(() => {
                    setFormError('');
                }, 10000);
            }
        })
        .catch(function (response) {
            //handle error
            setEnquiryLoading(false);
            console.log(response);
            setFormError(response.data.msg ? response.data.msg : "Server Errorddd");
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
        setTerms(false);
    }

    const modalRef = useRef(null);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (
    //             modalRef.current &&
    //             !modalRef.current.contains(event.target) &&
    //             props.show
    //         ) {
    //             props.onHide();
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     document.addEventListener("touchstart", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //         document.removeEventListener("touchstart", handleClickOutside);
    //     };
    // }, [props.show, props]);

    return(
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdropClassName={"form_backdrop"}
            dialogClassName={"enquiry_form_div"}
            enforceFocus={false}
            backdrop={false}
            id="enquiryModal"
        >
            <Modal.Body ref={modalRef}>
                <div className="close_btn_enquiry" onClick={() => props.onHide()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <Form className="get_in_touch_form" onSubmit={handleEnquirySubmit}>

                    <h3 className="heading3">{props.heading ? props.heading : "Get Brochure"}</h3>

                    <div className="form-row">
                        <Form.Group controlId="enquiry_firstname" className="form-cols">
                            <Form.Control
                                type="text"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                            />
                        </Form.Group>
                    </div>
                    <div className="form-row">
                        <Form.Group controlId="enquiry_lastname" className="form-cols">
                            <Form.Control
                                type="text"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name"
                            />
                        </Form.Group>
                    </div>
                    <div className="form-row">
                        <Form.Group controlId="enquiry_email_address" className="form-cols">
                            <Form.Control
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email (Optional)"
                            />
                        </Form.Group>
                    </div>
                    <div className="form-row">
                        <Form.Group controlId="enquiry_mobile_number" className="form-cols">
                            <PhoneInput
                                required
                                type="tel"
                                id="enquiry_mobile_number"
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
                        <Form.Group controlId="enquiry_terms" className="form-cols">
                            <Form.Check
                                type={"checkbox"}
                                id="terms"
                                label="I agree to be contacted by 'The Tiara' and agents via WhatsApp, SMS, phone, email etc."
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                                required
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
                        <Button className="btn_submit_contact" type="submit" disabled={enquiryLoading}>
                            {enquiryLoading ? "Processing" : "Submit"}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EnquiryForm