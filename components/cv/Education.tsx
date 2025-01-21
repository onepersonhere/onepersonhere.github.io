import React from 'react';
import Item from './Item';

const Education: React.FC = () => (
    <section style={{ paddingTop: '6px' }} className="section">
        <div className="container">
            <h1>Education</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-success d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-2" href="#collapse-2" role="button">Show Content</a>
                <div className="collapse" id="collapse-2">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <Item
                            title="BACHELOR OF COMPUTING, COMPUTER SCIENCE (HONOURS)"
                            organization="NATIONAL UNIVERSITY OF SINGAPORE"
                            period="Aug 2021 – Jun 2025"
                            details={[
                                "Second Major in Quantitative Finance.",
                                "Specialization in Networking and Distributed Systems.",
                                "Specialization in Multimedia Information Retrieval."
                            ]}
                            organizationClassName="text-bg-success"
                        />
                        <Item
                            title="STANFORD CODE IN PLACE"
                            organization="STANFORD"
                            period="Apr 2020 – Jun 2020"
                            details={[
                                "Online course, learnt programming methodology with python language."
                            ]}
                            organizationClassName="text-bg-success"
                        />
                        <Item
                            title="SINGAPORE GCE A LEVELS"
                            organization="ANGLO-CHINESE JUNIOR COLLEGE"
                            period="Jan 2017 – Dec 2018"
                            details={[
                                "Highest Distinction in H2 Physics and H2 Mathematics."
                            ]}
                            organizationClassName="text-bg-success"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Education;