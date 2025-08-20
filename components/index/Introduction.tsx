import React from "react";

const Introduction: React.FC = () => {
    return (
        <section className="py-4 py-xl-5">
            <div className="container">
                <p className="fs-3">
                    Building things <strong>well</strong>, building things <strong>good</strong> are core to my work style.
                    A highly <strong>conscientious</strong> and <strong>responsible</strong> person, I am a do-er, someone who gets things <strong><span style={{ textDecoration: 'underline' }}>done</span></strong>.
                </p>
                <ul className="list-inline mb-0" style={{ paddingLeft: '0px' }}>
                    <li className="list-inline-item">
                        <a className="link-dark" href="https://www.linkedin.com/in/michael-k/" rel="external">
                            <i className="fab fa-linkedin fs-1 text-white me-2" data-bss-hover-animate="bounce"></i>
                        </a>
                    </li>
                    <li className="list-inline-item fs-1 me-2">
                        <a className="link-dark" href="https://github.com/onepersonhere" rel="external">
                            <i className="fab fa-github fs-1 text-white me-2" data-bss-hover-animate="bounce"></i>
                        </a>
                    </li>
                    <li className="list-inline-item fs-1 me-2">
                        <a className="link-dark" href="https://www.instagram.com/one_personhere/" rel="external">
                            <i className="fab fa-instagram fs-1 text-white me-2" data-bss-hover-animate="bounce"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Introduction;