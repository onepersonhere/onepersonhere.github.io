import React from 'react';

const Introduction: React.FC = () => (
    <section>
        <div className="container">
            <div className="row row-cols-sm-2 row-cols-md-2">
                <div className="col-auto col-md-6">
                    <h1>Introduction</h1>
                </div>
                <div className="col-auto col-md-6 d-flex d-xxl-flex flex-fill justify-content-end align-items-center justify-content-xxl-end align-items-xxl-center">
                    <a className="btn btn-primary" role="button" href="downloads/Resume_alt.pdf" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="container py-4 py-xl-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <img className="rounded w-100 h-100 fit-cover" data-bss-hover-animate="pulse" style={{ minHeight: '300px' }} src="assets/img/Photos/IMG_9440.jpg" alt="IMG_9440" />
                </div>
                <div className="col d-flex flex-column justify-content-center p-4">
                    <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                            <i className="material-icons">computer</i>
                        </div>
                        <div>
                            <h4>Software Engineer</h4>
                            <p>Hi there, if you are looking at my CV, I have grabbed your attention.&nbsp;</p>
                            <p>I work as a software engineer and I desire to solve interesting problem regarding this field.</p>
                            <p>If you have any work opportunities, please contact me through my&nbsp;
                                <a href="mailto: ttfd3gm8e@relay.firefox.com" style={{ color: 'rgb(255,255,255)' }}>
                                    <strong><span style={{ color: 'rgb(255, 255, 255)' }}>email</span></strong><span style={{ color: 'rgb(255, 255, 255)' }}>:&nbsp;</span>
                                    <strong><span style={{ color: 'rgb(255, 255, 255)' }}>ttfd3gm8e@relay.firefox.com</span></strong>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-camera">
                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"></path>
                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"></path>
                            </svg>
                        </div>
                        <div>
                            <h4>Photographer</h4>
                            <p>Aside from software development, I am also highly passionate in photography. Check out my photos page for some sick pictures!</p>
                        </div>
                    </div>
                    <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
                        <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md">
                            <i className="fas fa-hiking"></i>
                        </div>
                        <div>
                            <h4>Adventurer</h4>
                            <p>I love the sense of exploring in far-flung places off the edge of civilization. It is what gave me motivation to travel to and hike in remote places.</p>
                            <p>It would make my day if there is an opportunity for me to realize the dream of being a digital nomad.</p>
                            <p>Check out my blogs for my travel journeys!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Introduction;