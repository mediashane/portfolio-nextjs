import React from "react";
import style from "./footer.module.css";
import { Row, Col } from "react-bootstrap";
import { FiTerminal } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <main className={style.footer_content}>
                <Row>
                    <Col
                        lg={5}
                        md={5}
                        className="text-center text-sm-start order-3 order-lg-0 order-md-0 d-flex justify-content-center justify-content-lg-start justify-content-md-start"
                    >
                        <p className={style.footer_text + " small"}>
                            © 2022 Shane Smith
                        </p>
                    </Col>
                    <Col lg={2} md={2} className="d-flex justify-content-center">
                        <p className={style.highlight + " mb-0 fw-bold"}>
                            <FiTerminal />Shane
                        </p>
                    </Col>
                </Row>
            </main>
        </footer>
    );
};
