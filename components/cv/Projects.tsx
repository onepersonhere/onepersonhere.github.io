import React from 'react';

const Projects: React.FC = () => (
    <section style={{ paddingTop: '6px' }} className="section">
        <div className="container">
            <h1>Projects</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-warning d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-3" href="#collapse-3" role="button">Show Content</a>
                <div className="collapse" id="collapse-3">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <div className="col" style={{ paddingTop: '26px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">JavaBean (Artemis)</h3>
                                        <h4 className="text-uppercase text-bg-warning organization">NUS ORBITAL 2022</h4>
                                        <a href="https://tinyurl.com/2u6hww74" style={{ color: 'rgba(13,110,253,0)' }}>
                                            <h4 className="text-uppercase text-bg-warning organization">
                                                <span style={{ textDecoration: 'underline' }}>Link</span>
                                            </h4>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Apr 2022 – Aug 2022</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Main contributor with 200k lines of code, did Code Quality checks, automated test cases, CI/CD using custom GitHub Actions.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>NFT/Cloud-based, multi-platform, Open World RPG game.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Hardest difficulty achieved by fulfilling extreme requirements in software engineering skills, such as Object-Oriented Programming (OOP) through game development and peer programming.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">@cs_notes_bot</h3>
                                        <h4 className="text-uppercase text-bg-warning organization">Personal</h4>
                                        <a href="https://t.me/cs_notes_bot" style={{ color: 'rgba(13,110,253,0)' }}>
                                            <h4 className="text-uppercase text-bg-warning organization">
                                                <span style={{ textDecoration: 'underline' }}>Link</span>
                                            </h4>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">May 2021 - Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary">
                                        <span>A Telegram Bot that is able to provide users with a cloud-storage that handles text messages, images and any other files.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Security is implemented in such a way that the retrieval link is set to expire within a set time.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>It is based on NodeJS and JavaScript and self-hosted using Firebase.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">sghomework.me</h3>
                                        <h4 className="text-uppercase text-bg-warning organization">Personal</h4>
                                        <a href="https://sghomework.me/" style={{ color: 'rgba(33,37,41,0)' }}>
                                            <h4 className="text-uppercase text-bg-warning organization">
                                                <span style={{ textDecoration: 'underline' }}>Link</span>
                                            </h4>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">2021 – Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Website aims to provide needy secondary/primary school students with free tuition, hosted on GitHub pages.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Tuition is provided by a group of NUS student volunteers.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Worked on frontend and backend using Bootstrap, JavaScript, and HTML.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">Stock Analyzer</h3>
                                        <h4 className="text-uppercase text-bg-warning organization">Personal</h4>
                                        <h4 className="text-uppercase text-bg-warning organization">Private</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Dec 2021 - Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Scraped real-time financial data from Yahoo Finance/Finviz to test trading & investment strategies.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Filtered stocks according to certain criteria (DCF) are compiled into excel using Java.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">Blockchain</h3>
                                        <h4 className="text-uppercase text-bg-warning organization">Jetbrains Academy</h4>
                                        <a href="https://github.com/onepersonhere/Blockchain" style={{ color: 'rgba(33,37,41,0)' }}>
                                            <h4 className="text-uppercase text-bg-warning organization">
                                                <span style={{ textDecoration: 'underline' }}>Link</span>
                                            </h4>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Dec 2021 - Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Project based on JetBrain Academy’s Blockchain project.</span>
                                    </li>
                                    <li className="list-group-item text-bg-secondary">
                                        <span>Applied hashing, multithreading skills and serialization skill in Java.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;