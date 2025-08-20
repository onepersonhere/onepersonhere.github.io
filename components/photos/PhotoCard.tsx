import React from 'react';

interface PhotoCardProps {
    imgSrc: string;
    story: string;
    location: string;
    mapLink: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imgSrc, story, location, mapLink }) => {
    return (
        <div className="container py-4 py-xl-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <img className="rounded w-100 h-100 fit-cover" data-bss-hover-animate="pulse" style={{ minHeight: '300px' }} src={imgSrc} alt="Photograph" />
                </div>
                <div className="col d-flex flex-column justify-content-center p-4">
                    <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4>Story</h4>
                            <p>{story}</p>
                        </div>
                    </div>
                    <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                            <i className="fas fa-location-arrow"></i>
                        </div>
                        <div>
                            <h4>Location</h4>
                            <p>{location}</p>
                            <a href={mapLink}>Google Maps&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;