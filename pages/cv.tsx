import React, { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Introduction from '../components/cv/Introduction';
import WorkExperience from '../components/cv/Work';
import Education from '../components/cv/Education';
import Projects from '../components/cv/Projects';
import Skills from '../components/cv/Skills';
import Hackathons from '../components/cv/Hackathons';
import OtherActivity from '../components/cv/Others';

const CV: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar caller={"cv"}/>
            <main>
                <Introduction />
                <WorkExperience />
                <Education />
                <Projects />
                <Skills />
                <Hackathons />
                <OtherActivity />
            </main>
            <Footer />
        </div>
    );
};

export default CV;