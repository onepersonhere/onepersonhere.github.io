import React from 'react';

const Education: React.FC = () => (
    <section style={{ paddingTop: '6px' }}>
        <div className="container">
            <h1>Education</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-success d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button">Show Content</a>
                <div className="collapse" id="collapse-2">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <div className="col" style={{ paddingTop: '26px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">BACHELOR OF COMPUTING, COMPUTER SCIENCE (HONOURS)</h3>
                                        <h4 className="text-uppercase text-bg-success organization">NATIONAL UNIVERSITY OF SINGAPORE</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Aug 2021 – Jun 2025</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Second Major in Quantitative Finance.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Specialization in Networking and Distributed Systems.</span></li>
                                    <li className="list-group-item text-bg-secondary"><span>Specialization in Multimedia Information Retrieval.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">STANFORD CODE IN PLACE</h3>
                                        <h4 className="text-uppercase text-bg-success organization">STANFORD</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Apr 2020 – Jun 2020</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Online course, learnt programming methodology with python language.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fs-3">SINGAPORE GCE A LEVELS</h3>
                                        <h4 className="text-uppercase text-bg-success organization">ANGLO-CHINESE JUNIOR COLLEGE</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-md-flex justify-content-md-end align-items-md-start period">Jan 2017 – Dec 2018</span>
                                    </div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item text-bg-secondary"><span>Highest Distinction in H2 Physics and H2 Mathematics.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Education;