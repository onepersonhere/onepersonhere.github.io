import React from 'react';
import SkillItem from './SkillItem';

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
                                        <SkillItem name="Java" className="text-bg-danger" tooltip="Expert" />
                                        <SkillItem name="JavaScript" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="C++" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="Python" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="Bash/Shell" className="text-bg-success" tooltip="Beginner" />
                                        <SkillItem name="C" className="text-bg-success" tooltip="Beginner" />
                                        <SkillItem name="Assembly" className="text-bg-success" tooltip="Beginner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Frameworks</h3>
                                        <SkillItem name="JavaFX" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="Spring Boot" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="Swing" className="text-bg-warning" tooltip="Intermediate" />
                                        <SkillItem name="Node.js" className="text-bg-warning" tooltip="Intermediate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Testing</h3>
                                        <SkillItem name="JUnit" className="text-bg-warning" tooltip="Intermediate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Database</h3>
                                        <SkillItem name="Firebase" className="text-bg-danger" tooltip="Advanced" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12">
                                        <h3 className="fs-3">Spoken Languages</h3>
                                        <SkillItem name="English" className="text-bg-danger" tooltip="Native" />
                                        <SkillItem name="Chinese" className="text-bg-danger" tooltip="Native" />
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