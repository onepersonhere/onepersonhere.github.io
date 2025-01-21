import React from 'react';
import Item from './Item';

const WorkExperience: React.FC = () => (
    <section className="section" style={{ paddingTop: '6px' }}>
        <div className="container">
            <h1>Work Experience</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-info d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button">Show Content</a>
                <div className="collapse" id="collapse-1">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <Item
                            title="JUNIOR TECHNICAL SUPPORT ENGINEER"
                            organization="Binance"
                            period="Jan 2023 – Current"
                            details={["WIP"]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="OPERATIONS & LOGISTICS DIRECTOR"
                            organization="NUSSU COMMIT"
                            period="2022 – Current"
                            details={[
                                "In charge of maintaining/debugging NUS computers and cloud-based virtual machines.",
                                "Managed cell members for duty allocations."
                            ]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="FINANCE & LOGISTICS EXCO"
                            organization="NUS COMPUTING CLUB, SPORTS CELL"
                            period="2021 – Current"
                            details={["Organized school events and activities."]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="SIGNAL OPERATOR, SATCOMS"
                            organization="SINGAPORE ARMED FORCES"
                            period="2019 – 2021"
                            details={[
                                "Technical skills in operating signaling, satellite and networking communication equipment.",
                                "Trained in CCNA, awarded best signal operator based on exemplary performance in CCNA theory."
                            ]}
                            organizationClassName="text-bg-info"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WorkExperience;