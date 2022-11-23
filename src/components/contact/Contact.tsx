import React, { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import { Row, Col, Form } from "react-bootstrap";
import { FaHome, FaPhone, FaEnvelopeOpen } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { IoWarning } from "react-icons/io5";

export const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean | null>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        emailjs
            .send(
                process.env.yourServiceID === undefined
                    ? ""
                    : process.env.yourServiceID,
                process.env.yourTemplateID === undefined
                    ? ""
                    : process.env.yourTemplateID,
                {
                    from_name: name,
                    to_name: "Shane",
                    from_email: email,
                    message: message,
                },
                process.env.userID === undefined ? "" : process.env.userID
            )
            .then((res) => {
                setName("");
                setEmail("");
                setMessage("");
                setLoading(false);
                setStatus(true);
            })
            .catch((err) => {
                setLoading(false);
                setStatus(false);
            });
    };

    return (
        <Element id="contact"
            name="contact">
            <div className={style.contact}>
                <video loop muted autoPlay controls={false} className={style.bg}>
                    <source src="/media/videos/bgPlants2.mp4" type="video/mp4" />
                </video>
                <main className={"content " + style.contact_content}>
                    <h1 className={style.title}>
                        Contact
                    </h1>

                    <Row>
                        <Col md={6} className={style.contact_left}>
                            <div>
                                <div className={style.contact_title}>
                                    <h2 className={style.subtitle + " mb-0"}>Reach out</h2>
                                    <p className={style.contact_text}>
                                        Have an exciting project that you&apos;d like me to be a part of? Write me an email and I&apos;ll get back to you lickety-split.
                                    </p>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <FaHome fontSize={28} className={style.contact_icon} />
                                        <p className={style.contact_info}>Lisbon, Portugal</p>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <FaEnvelopeOpen
                                            fontSize={24}
                                            className={style.contact_icon}
                                        />
                                        <p className={style.contact_info}>shane@mediashane.com</p>
                                    </div>

                                    <div className="d-flex align-items-center mb-3">
                                        <FaPhone fontSize={24} className={style.contact_icon} />
                                        <p className={style.contact_info}>+1 801 410 3048</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <Form onSubmit={sendEmail}>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label className={style.contact_label}>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className={style.contact_input}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className={style.contact_label}>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        className={style.contact_input}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label className={style.contact_label}>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        className={style.contact_input}
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        rows={6}
                                        required
                                    />
                                </Form.Group>
                                <button
                                    className={style.contact_btn}
                                    disabled={loading ? true : false}
                                >
                                    {status === null ? (
                                        "Submit"
                                    ) : status === true ? (
                                        <div className="d-flex align-items-center justify-content-center">
                                            <GoCheck fontSize={21} /> Email Sent Successfully!
                                        </div>
                                    ) : (
                                        <div className="d-flex align-items-center justify-content-center">
                                            <IoWarning fontSize={21} /> Sorry there was a problem.
                                        </div>
                                    )}
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </main>
            </div>
        </Element>
    );
};
