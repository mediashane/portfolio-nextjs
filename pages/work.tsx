import type { NextPage } from "next";
import React from "react";

import { Layout } from "../src/components/layout/Layout";
import { Projects } from "../src/components/projects/Projects";
import { PageTransition } from "../src/components/pagetransition/PageTransition";

const Home: NextPage = () => {

    return (
        <>
            <Layout>
                {/* <PageTransition> */}
                    <Projects />
                {/* </PageTransition> */}
            </Layout>
        </>
    );
};

export default Home;
