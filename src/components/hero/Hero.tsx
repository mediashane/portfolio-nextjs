import React from "react";
import Link from 'next/link'
import style from "./hero.module.css";
import FadeIn from "react-fade-in";

import { Link as ScrollLink } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";

export const Hero = () => {
    return (
        <div className={style.hero} id="home">
            <div className={"content " + style.hero_content}>
                <div className={style.hero_wrapper}>
                    <Row className={"py-4"}>
                        <Col md={6} className="d-flex align-items-center">
                            <FadeIn delay={100}>
                                <p className={style.highlight + " mb-0 fw-bold"}>
                                Senior Fullstack Software Engineer
                                </p>
                                <h1 className={style.title}>
                                    Hi there, I&apos;m Shane
                                </h1>
                                <p className={style.description}>
                                    I&apos;m an experienced engineer who&apos;s shipped projects and products for some of the biggest brands and companies in the world.
                                    Web, mobile and desktop - I work in all environments with creativity, flexibility and reliability. Currently working at <a target="_blank" rel="noopener noreferrer" href="https://www.koalition.com/" className={style.link}>Koalition Interactive</a>.
                                </p>
                                <div
                                    className={
                                        "d-flex flex-sm-row flex-column align-items-start align-items-sm-center " +
                                        style.btn_group
                                    }
                                >
                                    <ScrollLink
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        delay={10}
                                        duration={10}
                                        className={"text-center " + style.btn_primary}
                                    >
                                        Get In Touch
                                    </ScrollLink>
                                    <Link passHref href="/work">
                                        <a className={"my-3 " + style.btn_line}>
                                            See my work &nbsp;
                                            <CgArrowLongRight fontSize={36} />
                                        </a>
                                    </Link>
                                </div>
                            </FadeIn>
                        </Col>
                        <Col
                            md={6}
                            className={
                                style.hero_img_wrapper +
                                " d-flex align-items-center justify-content-center"
                            }
                        >
                            <FadeIn delay={100}>
                                <div style={{ backgroundImage: `url(/media/images/hero.png)` }} className={style.hero_img} />
                            </FadeIn>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
