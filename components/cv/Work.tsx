import React from 'react';

const WorkExperience: React.FC = () => (
    <section style={{ paddingTop: '6px' }}>
        <div className="container">
            <h1>Work Experience</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-info d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button">Show Content</a>
                <div className="collapse" id="collapse-1">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <div className="col" style={{ paddingTop: '26px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">JUNIOR TECHNICAL SUPPORT ENGINEER</h3>
                                        <h4 className="text-uppercase text-bg-info organization">Binance</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jan 2023 – Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>WIP</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">OPERATIONS &amp; LOGISTICS DIRECTOR</h3>
                                        <h4 className="text-uppercase text-bg-info organization">NUSSU COMMIT</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">2022 – Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>In charge of maintaining/debugging NUS computers and cloud-based virtual machines.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Managed cell members for duty allocations.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">FINANCE &amp; LOGISTICS EXCO</h3>
                                        <h4 className="text-uppercase text-bg-info organization">NUS COMPUTING CLUB, SPORTS CELL</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">2021 – Current</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Organized school events and activities.&nbsp;</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">SIGNAL OPERATOR, SATCOMS&nbsp;</h3>
                                        <h4 className="text-uppercase text-bg-info organization">SINGAPORE ARMED FORCES</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">2019 – 2021 </span></div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Technical skills in operating signaling, satellite and networking communication equipment.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Trained in CCNA, awarded best signal operator based on exemplary performance in CCNA theory.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WorkExperience;