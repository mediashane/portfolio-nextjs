import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import style from "./appbar.module.css";
import { RiExternalLinkFill } from "react-icons/ri";
import { FiTerminal } from "react-icons/fi";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaInstagram, FaGithub } from "react-icons/fa";

export const Appbar = () => {
    const { query } = useRouter();
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const [navbar, setNavbar] = useState<boolean>(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        if (window) window.addEventListener("scroll", changeBackground);
    }, []);

    useEffect(() => {
        if (query.id) {
            setTimeout(() => {
                scroller.scrollTo(`${query.id}`, {
                    duration: 300,
                    smooth: true,
                    offset: -100,
                });
                router.push({ query: {} });
            }, 100);
        }
    }, [query, router]);

    const NavLink = ({ destination }: { destination: string }) => {
        if (router.pathname !== '/') {
            return (
                <Link passHref href={`/?id=${destination}`}>
                    <a className={style.nav_list_item + " small px-3"}>
                        {destination.charAt(0).toUpperCase() + destination.slice(1)}
                    </a>
                </Link>
            )
        }

        return (
            <ScrollLink
                className={style.nav_list_item + " small px-3"}
                to={destination}
                smooth={true}
                delay={10}
                duration={10}
            >
                {destination.charAt(0).toUpperCase() + destination.slice(1)}
            </ScrollLink>
        )
    }

    const MobileNavLink = ({ destination }: { destination: string }) => {
        if (router.pathname !== '/') {
            return (
                <Link passHref href={`/?id=${destination}`}>
                    <a className={style.nav_list_item_mobile}>
                        <h1 className="mb-0">
                            {destination.charAt(0).toUpperCase() + destination.slice(1)}
                        </h1>
                    </a>
                </Link>
            )
        }

        return (
            <ScrollLink
                className={style.nav_list_item_mobile}
                onClick={() => setOpen(false)}
                to={destination}
                smooth={true}
                delay={10}
                duration={10}
            >
                <h1 className="mb-0">
                    {destination.charAt(0).toUpperCase() + destination.slice(1)}
                </h1>
            </ScrollLink>
        )
    }

    return (
        <>
            <Navbar
                className={navbar ? style.appbar_active : style.appbar}
                variant="dark"
                fixed="top"
            >
                <Container className="d-flex align-items-center" fluid>
                    <Link passHref href="/">
                        <a className={style.appbar_brand}>
                            <>
                                <FiTerminal />Shane
                            </>
                        </a>
                    </Link>
                    <Nav className="ms-auto d-none d-sm-block">
                        <div
                            className={"scrollspy px-4"}
                        >
                            <Link passHref href="/work">
                                <a className={style.nav_list_item + " small px-3"}>
                                    Work
                                </a>
                            </Link>
                            <NavLink destination="about" />
                            <NavLink destination="contact" />
                        </div>
                    </Nav>

                    <input
                        type="checkbox"
                        id="mobileMenu"
                        className={style.burger_input}
                        onClick={() => (open ? setOpen(false) : setOpen(true))}
                        checked={open}
                    />
                    <label id="burger" htmlFor="mobileMenu" className={style.burger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>

                    {/**Mobile nav */}

                    <nav className={style.mobile_nav}>
                        <div
                            className={style.nav_list_mobile}
                        >
                            <Link passHref href="/work" onClick={() => setOpen(false)}>
                                <a className={style.nav_list_item_mobile}>
                                    <h1 className="mb-0">
                                        Work
                                    </h1>
                                </a>
                            </Link>
                            <MobileNavLink destination="about" />
                            <MobileNavLink destination="contact" />
                        </div>
                        <a
                            href="/media/pdfs/ShaneSmithResume2022.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.mobile_navigation_btn}
                        >
                            <RiExternalLinkFill className="mx-1 fs-6" fontSize={21} /> Resume
                        </a>
                        <div className={style.sm_icon_group}>
                            <div className={style.icon_container}>
                                <a
                                    href="https://www.instagram.com/shane_of_earth/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram fontSize={16} />
                                </a>
                            </div>
                            <div className={style.icon_container}>
                                <a
                                    href="https://github.com/mediashane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub fontSize={16} />
                                </a>
                            </div>
                        </div>
                    </nav>
                </Container>
            </Navbar>
        </>
    );
};
