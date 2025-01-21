import React from 'react';
import Item from './Item';

const Hackathons: React.FC = () => (
    <section style={{ paddingTop: '6px' }} className="section">
        <div className="container">
            <h1>Hackathons</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-5" href="#collapse-5" role="button">Show Content</a>
                <div className="collapse" id="collapse-5">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <Item
                            title="WELCOMECTF"
                            organization="NUS greyhats"
                            period="Jul 2022"
                            details={[
                                "First Place among 133 teams.",
                                "Completed all of the questions in the fastest time possible."
                            ]}
                            organizationClassName="text-bg-primary"
                        />
                        <Item
                            title="STANDCON 2022"
                            organization="Div0-N0H4TS"
                            period="Jun 2022"
                            details={[]}
                            organizationClassName="text-bg-primary"
                        />
                        <Item
                            title="Grey Cat the Flag 2022"
                            organization="NUS GREYHATS & NCL"
                            period="Jun 2022"
                            details={[
                                "111th Place among 455 teams.",
                                "Completed several questions in the Misc category, utilized reverse engineering skills."
                            ]}
                            organizationClassName="text-bg-primary"
                        />
                        <Item
                            title="Shopee Code League 2022"
                            organization="Shopee"
                            period="Mar 2022"
                            details={[
                                "Spearheaded a team in solving algorithmic puzzles designed by Shopee Engineering team.",
                                "Questions involved the utilization of graph theory and SSSP algorithms."
                            ]}
                            organizationClassName="text-bg-primary"
                        />
                        <Item
                            title="SCDF X IBM Lifesavers’ Innovation Challenge: Call for Code 2020"
                            organization="SCDF & IBM"
                            link="https://tinyurl.com/2rsyk2m4"
                            period="Jun 2020"
                            details={[
                                "Team project to create an app that processes SCDF operator’s data and assess their health risk in their potential real time activities.",
                                "Operator’s real time data are filtered with Artificial Intelligence through IBM Cloud."
                            ]}
                            organizationClassName="text-bg-primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hackathons;