import React from "react";
import style from "./banner.module.css";
import { Row, Col } from "react-bootstrap";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export const Banner = () => {
    return (
        <div className={style.banner}>
            <main className="banner_content">
                <Row style={{ maxWidth: "1280px" }}>
                    <Col md={6}>
                        <h1 className={style.title + " mb-0"}>
                            Driven by creativity and humanitarian values.
                        </h1>
                    </Col>
                    <Col md={4} className="d-flex align-items-center">
                        <p className="mb-0 mt-2">
                            I&apos;m always looking to work on exceptional projects with outstanding people,
                            especially where my values are aligned or my creativity is sparked.
                        </p>
                    </Col>
                    <Col
                        md={2}
                        className="d-flex align-items-center justify-content-lg-center justify-content-md-center  justify-content-start mt-4 mt-lg-0 mt-md-0 "
                    >
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            delay={10}
                            duration={10}
                            className={style.banner_btn}
                        >
                            <IoChevronForwardOutline fontSize={32} />
                        </Link>
                    </Col>
                </Row>
            </main>
        </div>
    );
};
