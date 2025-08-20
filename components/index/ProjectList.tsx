import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        href: "https://docs.google.com/document/d/1wQjGsiPLWeSY_6v22aFV54N9r4aaHnMU-TmhsJElN44/edit?usp=sharing",
        imgSrc: "/assets/img/Index/JavaBean%20Presentation(1).png",
        imgTitle: "NUS Orbital; Artemis level achieved :)",
        isInternalLink: false
    },
    {
        href: "https://onepersonhere.github.io/telebot/",
        imgSrc: "/assets/img/Index/photo_2021-06-11_10-30-03.jpg",
        imgTitle: "My first project; a telegram bot",
        isInternalLink: false
    },
    {
        href: "https://github.com/visual-ai-org/visual-ai",
        imgSrc: "/assets/img/Index/visual-ai.png",
        imgTitle: "Visualizes NN models during training",
        isInternalLink: false
    },
    {
        href: "https://onepersonhere.github.io/Blockchain/",
        imgSrc: "/assets/img/Index/blockchain(1).png",
        imgTitle: "A simulation of how blockchain works in Java",
        isInternalLink: false
    },
    {
        href: "https://ay2223s1-cs2103t-t10-4.github.io/tp/",
        imgSrc: "/assets/img/Index/Minefriends(1).png",
        imgTitle: "Software Engineering team project",
        isInternalLink: false
    },
    {
        href: "/photos",
        imgSrc: "/assets/img/Photos/IMG_8577.jpg",
        imgTitle: "I am also a photographer!",
        isInternalLink: true
    }
];

const ProjectList: React.FC = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 py-5 projects" data-aos="fade-up">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectList;