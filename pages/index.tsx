import type { NextPage } from "next";
import React from "react";

import { Layout } from "../src/components/layout/Layout";
import { Hero } from "../src/components/hero/Hero";
import { About } from "../src/components/about/About";
import { Banner } from "../src/components/banner/Banner";
import { Contact } from "../src/components/contact/Contact";
import { PageTransition } from "../src/components/pagetransition/PageTransition";

const Home: NextPage = () => {

    return (
        <>
            <Layout>
                <PageTransition>
                    <Hero />
                    <About />
                    <Banner />
                    <Contact />
                </PageTransition>
            </Layout>
        </>
    );
};

export default Home;
