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
                            title="ML ENGINEER"
                            organization="Binance"
                            period="May 2024 – Current"
                            details={[
                                "Log anomaly keyword extraction using Tensorflow, keras as well as Apache Spark, Lucene, Nutch & Solr.",
                                "Logs extraction using Elasticsearch, Logstash, Kibana and Datadog.",
                                "Fixed anomaly forecast prediction algorithm and improved efficiency on anomaly alert latency."
                            ]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="FULL STACK SOFTWARE ENGINEER (TECHOPS)"
                            organization="Binance"
                            period="Jan 2023 – Jul 2023"
                            details={[
                                "Involved in front-end and back-end development of incident reporting model and algorithm platform, using React JS, NextJS and Java Spring Boot.",
                                "Project manager and backend developer for Air Classroom app.",
                                "Involved in designing MySQL database and maintaining Google Cloud Platform for back-end API development."
                            ]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="VICE PRESIDENT"
                            organization="NUSSU COMMIT"
                            period="Jun 2023 – Jun 2024"
                            details={[
                                "Led the committee in planning and executing events.",
                                "Support directors in their roles and ensure smooth operations of the committee."
                            ]}
                            organizationClassName="text-bg-info"
                        />
                        <Item
                            title="OPERATIONS & LOGISTICS DIRECTOR"
                            organization="NUSSU COMMIT"
                            period="Jun 2022 – Jun 2023"
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