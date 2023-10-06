import type { NextPage } from "next";
import React from "react";
import Link from 'next/link'

import { Layout } from "../src/components/layout/Layout";
import { Projects } from "../src/components/projects/Projects";
import { PageTransition } from "../src/components/pagetransition/PageTransition";

const Speech: NextPage = () => {

    return (
        <div>
            <a 
            href="https://docs.google.com/presentation/d/1FSQ6CBMgLJt4U6HIGLBC3ycSS8aFCIHZqgl1yBjdPUQ/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            Speech
            </a>
        </div>
    );
};

export default Speech;
