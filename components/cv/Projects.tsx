import React from 'react';
import Item from './Item';

const Projects: React.FC = () => (
    <section className="section" style={{ paddingTop: '6px' }}>
        <div className="container">
            <h1>Projects</h1>
            <div data-aos="fade-right">
                <a className="btn btn-primary fw-lighter text-bg-warning d-inline" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-3" href="#collapse-3" role="button">Show Content</a>
                <div className="collapse" id="collapse-3">
                    <div className="row row-cols-1" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <Item
                            title="JavaBean (Artemis)"
                            organization="NUS ORBITAL 2022"
                            link="https://tinyurl.com/2u6hww74"
                            period="Apr 2022 – Aug 2022"
                            details={[
                                "Main contributor with 200k lines of code, did Code Quality checks, automated test cases, CI/CD using custom GitHub Actions.",
                                "NFT/Cloud-based, multi-platform, Open World RPG game.",
                                "Hardest difficulty achieved by fulfilling extreme requirements in software engineering skills, such as Object-Oriented Programming (OOP) through game development and peer programming."
                            ]}
                        />
                        <Item
                            title="visual.ai"
                            organization="Personal"
                            link="https://github.com/visual-ai-org/visual-ai"
                            period="June 2024 - July 2024"
                            details={[
                                "Project made for TikTok TechJam 2024",
                                "Visualizes Deep Neural Network models during training."
                            ]}
                        />
                        <Item
                            title="Stock Analyzer"
                            organization="Personal"
                            period="Dec 2021 - Current"
                            details={[
                                "Scraped real-time financial data from Yahoo Finance & Finviz to test trading & investment strategies.",
                                "Statistical analysis for individual stock using Python, Numpy, Pandas, Scipy.",
                                "Generate the Mean-Variance portfolio, the efficient portfolio frontier using matplotlib together with the tangent portfolio.",
                                "Calculates the implied volatility of stocks using the Black-Scholes-Merton formula.",
                                "Generates the Merton-Jump-Diffusion model."
                            ]}
                        />
                        <Item
                            title="@cs_notes_bot"
                            organization="Personal"
                            link="https://t.me/cs_notes_bot"
                            period="May 2021 - Current"
                            details={[
                                "A Telegram Bot that is able to provide users with a cloud-storage that handles text messages, images and any other files.",
                                "Security is implemented in such a way that the retrieval link is set to expire within a set time.",
                                "It is based on NodeJS and JavaScript and self-hosted using Firebase."
                            ]}
                        />
                        <Item
                            title="Blockchain"
                            organization="Jetbrains Academy"
                            link="https://github.com/onepersonhere/Blockchain"
                            period="Dec 2021 - Current"
                            details={[
                                "Project based on JetBrain Academy’s Blockchain project.",
                                "Applied hashing, multithreading skills and serialization skill in Java."
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;