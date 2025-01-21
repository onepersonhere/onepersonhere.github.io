// components/Main.js
import React from 'react';
import Link from "next/link";
import Introduction from "@/components/index/Introduction";
import CVPanel from "@/components/index/CVPanel";
import BottomPanels from "@/components/index/BottomPanels";
import Projects from "@/components/index/Projects";

const Main = () => {
    return (
        <main>
            <Introduction />
            <CVPanel />
            <Projects />
            <BottomPanels />
        </main>
    );
};

export default Main;