import type { NextPage } from "next";
import React from "react";

import { Layout } from "../src/components/layout/Layout";
import { Projects } from "../src/components/projects/Projects";
import { PageTransition } from "../src/components/pagetransition/PageTransition";

const Home: NextPage = () => {

    return (
        <>
            <Layout>
                <a href="https://docs.google.com/presentation/d/1FSQ6CBMgLJt4U6HIGLBC3ycSS8aFCIHZqgl1yBjdPUQ/edit?usp=sharing">Speech</a>
            </Layout>
        </>
    );
};

export default Home;
