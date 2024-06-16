import React from 'react';

const Skills: React.FC = () => (
    <section style={{ paddingTop: '6px' }} className="section">
        <div className="container">
            <h1>Skills Summary</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-danger d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-4" href="#collapse-4" role="button">Show Content</a>
                <div className="collapse" id="collapse-4">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="fs-3">Programming Languages</h3>
                                        <h4 className="text-uppercase text-bg-danger organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Expert">Java</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">JavaScript</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">C++</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">Python</h4>
                                        <h4 className="text-uppercase text-bg-success organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Beginner">Bash/Shell</h4>
                                        <h4 className="text-uppercase text-bg-success organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Beginner">C</h4>
                                        <h4 className="text-uppercase text-bg-success organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Beginner">Assembly</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Frameworks</h3>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">JavaFX</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">Spring Boot</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">Swing</h4>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">Node.js</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Testing</h3>
                                        <h4 className="text-uppercase text-bg-warning organization" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title="Intermediate">JUnit</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Database</h3>
                                        <h4 className="text-uppercase text-bg-danger organization" data-bs-toggle="tooltip" data-bss-tooltip="" title="Advanced">Firebase</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Spoken Languages</h3>
                                        <h4 className="text-uppercase text-bg-danger organization" data-bs-toggle="tooltip" data-bss-tooltip="" title="Native">English</h4>
                                        <h4 className="text-uppercase text-bg-danger organization" data-bs-toggle="tooltip" data-bss-tooltip="" title="Native" style={{ marginLeft: '6px' }}>Chinese</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;