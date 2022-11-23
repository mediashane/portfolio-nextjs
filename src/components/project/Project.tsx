import React from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import style from "./project.module.css";

interface ProjectProps {
    title: String;
    clients: { name: String, url: string }[];
    description: String;
    role: String;
    img: String;
    tags: String[];
    cta?: String;
    url?: String;
    left: Boolean;
    projectIndex: number;
}

export const Project = (props: ProjectProps) => {
    const { title, clients, description, role, img, tags, cta, left, url, projectIndex } = props;
    return left ? (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className={style.project_wrapper}
                transition={{ duration: 0.25, delay: 0.25 }}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <Row>
                    <Col
                        md={6}
                        className="d-flex align-items-center text-white order-2 order-md-1 order-lg-1 mt-4"
                    >
                        <div>
                            <h3 className={style.subtitle}>{title}</h3>
                            <ul className={style.list}>
                                {clients.map((client, key) => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={key}
                                        href={client.url}
                                        className={style.list_item_highlight + " small me-2 my-2"}
                                    >
                                        {client.name}
                                    </a>
                                ))}
                            </ul>
                            <p className={style.description}>{description}</p>
                            <p className={style.description}>{role}</p>
                            <ul className={style.list}>
                                {tags.map((tag, key) => (
                                    <li key={key} className={style.list_item + " small me-2 my-2"}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            {cta &&
                                <a
                                    href={`${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.btn_naked}
                                >
                                    {cta} &nbsp;
                                    <CgArrowLongRight fontSize={36} />
                                </a>
                            }
                        </div>
                    </Col>
                    <Col
                        md={6}
                        className={
                            style.feature_img_wrapper + " order-1 order-md-2 order-lg-2 "
                        }
                    >
                        <div style={{ backgroundImage: `url(${img})` }} className={style.feature_img} />
                    </Col>
                </Row>
            </motion.div>
        </AnimatePresence>
    ) : (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className={style.project_wrapper}
                transition={{ duration: 0.25, delay: 0.25 }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <Row>
                    <Col md={6} className={style.feature_img_wrapper}>
                        <div style={{ backgroundImage: `url(${img})` }} className={style.feature_img} />
                    </Col>
                    <Col md={6} className="d-flex align-items-center mt-4">
                        <div>
                            <h3 className={style.subtitle}>{title}</h3>
                            <ul className={style.list}>
                                {clients.map((client, key) => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={key}
                                        href={client.url}
                                        className={style.list_item_highlight + " small me-2 my-2"}
                                    >
                                        {client.name}
                                    </a>
                                ))}
                            </ul>
                            <p className={style.description}>{description}</p>
                            <p className={style.description}>{role}</p>
                            <ul className={style.list}>
                                {tags.map((tag, key) => (
                                    <li key={key} className={style.list_item + " small me-2 my-2"}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                            {cta &&
                                <a
                                    href={`${url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.btn_naked}
                                >
                                    {cta} &nbsp;
                                    <CgArrowLongRight fontSize={36} />
                                </a>
                            }
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </AnimatePresence>
    );
};
