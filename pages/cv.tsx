import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Introduction from '../components/cv/Introduction';
import WorkExperience from '../components/cv/Work';
import Education from '../components/cv/Education';
import Projects from '../components/cv/Projects';
import Skills from '../components/cv/Skills'; // Uncomment when you create this component
import Hackathons from '../components/cv/Hackathons'; // Uncomment when you create this component

const CV: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                <Introduction />
                <WorkExperience />
                <Education />
                <Projects />
                <Skills />
                <Hackathons />
            </main>
            <Footer />
        </div>
    );
};

export default CV;