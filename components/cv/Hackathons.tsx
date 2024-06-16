import React from 'react';

const Hackathons: React.FC = () => (
    <section style={{ paddingTop: '6px' }} className="section">
        <div className="container">
            <h1>Hackathons</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-5" href="#collapse-5" role="button">Show Content</a>
                <div className="collapse" id="collapse-5">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <div className="col" style={{ paddingTop: '26px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">WELCOMECTF</h3>
                                        <h4 className="text-uppercase text-bg-primary organization">NUS greyhats</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jul 2022</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>First Place among 133 teams.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Completed all of the questions in the fastest time possible.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">STANDCON 2022</h3>
                                        <h4 className="text-uppercase text-bg-primary organization">Div0-N0H4TS</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jun 2022</span>
                                    </div>
                                </div>
                                <ul className="list-group"></ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">Grey Cat the Flag 2022</h3>
                                        <h4 className="text-uppercase text-bg-primary organization">NUS GREYHATS & NCL</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jun 2022</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>111th Place among 455 teams.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Completed several questions in the Misc category, utilized reverse engineering skills.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">Shopee Code League 2022</h3>
                                        <h4 className="text-uppercase text-bg-primary organization">Shopee</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Mar 2022</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Spearheaded a team in solving algorithmic puzzles designed by Shopee Engineering team.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Questions involved the utilization of graph theory and SSSP algorithms.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">SCDF X IBM Lifesavers’ Innovation Challenge: Call for Code 2020</h3>
                                        <h4 className="text-uppercase text-bg-primary organization">SCDF & IBM</h4>
                                        <a href="https://tinyurl.com/2rsyk2m4" style={{ color: 'rgba(13,110,253,0)' }}>
                                            <h4 className="text-uppercase text-bg-primary organization">
                                                <span style={{ textDecoration: 'underline' }}>Link</span>
                                            </h4>
                                        </a>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jun 2020</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Team project to create an app that processes SCDF operator’s data and assess their health risk in their potential real time activities.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Operator’s real time data are filtered with Artificial Intelligence through IBM Cloud.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hackathons;