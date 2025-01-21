import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    href: string;
    imgSrc: string;
    imgTitle: string;
    isInternalLink?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ href, imgSrc, imgTitle, isInternalLink = false }) => {
    const cardContent = (
        <div className="card">
            <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src={imgSrc} title={imgTitle} />
        </div>
    );

    return (
        <div className="col" data-bss-hover-animate="pulse">
            {isInternalLink ? (
                <Link href={href} legacyBehavior>
                    <a className="border-dark">{cardContent}</a>
                </Link>
            ) : (
                <a className="border-dark" href={href}>
                    {cardContent}
                </a>
            )}
        </div>
    );
};

export default ProjectCard;