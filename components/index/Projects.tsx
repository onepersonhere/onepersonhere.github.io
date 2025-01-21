import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <section className="py-4 py-xl-5">
            <div className="container">
                <h2>Projects</h2>
                <ProjectList />
            </div>
        </section>
    );
};

export default Projects;