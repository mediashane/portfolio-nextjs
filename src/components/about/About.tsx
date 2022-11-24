import React from "react";
import { Element } from "react-scroll";
import style from "./about.module.css";
import { Row, Col } from "react-bootstrap";
import { RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import {
    SiJavascript,
    SiTypescript,
    SiGraphql,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
} from "react-icons/si";

export const About = () => {
    return (
        <Element id="about"
            name="about">
            <div className={style.about}>
                <main className="content">
                    <h1 className={style.title}>
                        About
                    </h1>
                    <div className={style.about_wrapper}>
                        <Row>
                            <Col md={6} sm={12} className="mb-lg-0 mb-4">
                                <div className={style.profile_wrapper}>
                                    <div style={{ backgroundImage: `url(/media/images/mypic.png)` }} className={style.profile_pic} />
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="mt-lg-0 mt-4">
                                <h2 className={style.subtitle}>Shane Smith</h2>
                                <p className={style.description}>
                                    Originally from Portland, Oregon, I&apos;m a senior software and fullstack web developer capable of leading teams, working independently, or fitting in. Years of agency and freelance experience have conditioned me to adapt to and work with just about any tech, team or timeline.
                                </p>
                                <p className={style.description}>
                                    Start-ups, legacy platforms, greenfield applications - I&apos;ve done it all. While I can readily produce and succeed in just about any circumstance, I truly thrive in creative and friendly environments that give space for experimentation, independent thought and supportive collaboration.
                                </p>
                                <p className={style.description}>
                                    I have many years of experience in a variety of technologies, but I primarily focus on the JavaScript ecosystem in all of it&apos;s forms and formats.
                                </p>
                                <p className={style.description}>
                                    Here are a few technologies I’ve enjoyed working with recently and throughout my career:
                                </p>
                                <ul className={style.list}>
                                    <li className={style.list_item}>
                                        <SiJavascript fontSize={18} className="ms-0 mx-1" /> JavaScript (ES6+)
                                    </li>
                                    <li className={style.list_item}>
                                        <SiTypescript fontSize={18} className="ms-0 mx-1" /> Typescript
                                    </li>
                                    <li className={style.list_item}>
                                        <SiReact fontSize={18} className="ms-0 mx-1" /> React / React Native
                                    </li>
                                    <li className={style.list_item}>
                                        <SiNodedotjs fontSize={18} className="ms-0 mx-1" /> Node.js
                                    </li>
                                    <li className={style.list_item}>
                                        <SiNextdotjs fontSize={18} className="ms-0 mx-1" /> Next.js
                                    </li>
                                    <li className={style.list_item}>
                                        <SiGraphql fontSize={18} className="ms-0 mx-1" /> GraphQL
                                    </li>
                                </ul>

                                <div className="d-flex align-items-center mt-4 flex-wrap">
                                    <a
                                        href="/media/pdfs/ShaneSmithResume2022.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.about_link + " mx-3 ms-0 small"}
                                    >
                                        <RiExternalLinkFill fontSize={28} /> &nbsp; Resume
                                    </a>
                                    <a
                                        href="https://github.com/mediashane"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={style.about_link + " small"}
                                    >
                                        <RiGithubFill fontSize={28} /> &nbsp;mediashane
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </main>
            </div>
        </Element>
    );
};
