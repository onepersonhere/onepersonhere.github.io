// components/Main.js
import React from 'react';

const Main = () => {
    return (
        <main>
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
            <section className="py-4 py-xl-5">
                <div className="container">
                    <div data-aos="fade-up" className="banner">
                        <p className="fs-1"><strong>Curriculum Vitae</strong><br /></p>
                        <button className="btn btn-dark btn-lg text-uppercase fw-bold" data-bss-hover-animate="pulse" id="button-cv" type="button">
                            Vide illud <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-4 py-xl-5">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 py-5 projects" data-aos="fade-up">
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="https://docs.google.com/document/d/1wQjGsiPLWeSY_6v22aFV54N9r4aaHnMU-TmhsJElN44/edit?usp=sharing">
                                <div className="card">
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Index/JavaBean%20Presentation(1).png" title="NUS Orbital; Artemis level achieved :)" />
                                </div>
                            </a>
                        </div>
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="https://onepersonhere.github.io/telebot/">
                                <div className="card" style={{ transform: 'scale(1)' }}>
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Index/photo_2021-06-11_10-30-03.jpg" style={{ transform: 'scale(1)' }} title="My first project; a telegram bot" />
                                </div>
                            </a>
                        </div>
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="http://sghomework.me/">
                                <div className="card">
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Index/sghomework.me(1).png" title="A volunteering based tuition website" />
                                </div>
                            </a>
                        </div>
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="https://onepersonhere.github.io/Blockchain/">
                                <div className="card">
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Index/blockchain(1).png" title="A simulation of how blockchain works in Java" />
                                </div>
                            </a>
                        </div>
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="https://ay2223s1-cs2103t-t10-4.github.io/tp/">
                                <div className="card">
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Index/Minefriends(1).png" title="Software Engineering team project" />
                                </div>
                            </a>
                        </div>
                        <div className="col" data-bss-hover-animate="pulse">
                            <a className="border-dark" href="photos.html">
                                <div className="card">
                                    <img className="card-img w-100 d-block" data-bs-toggle="tooltip" data-bss-tooltip="" src="/assets/img/Photos/IMG_8577.jpg" title="I am also a photographer!" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 py-xl-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div data-aos="fade-up" className="banner" style={{ background: 'var(--bs-blue)' }}>
                                <p className="fs-1"><strong>Blog</strong><br /></p>
                                <a className="btn btn-dark btn-lg text-uppercase fw-bold" role="button" data-bss-hover-animate="pulse" id="button-blog" href="blog/blog.html">Vide <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col">
                            <div data-aos="fade-up" className="banner" style={{ background: 'var(--bs-blue)' }}>
                                <p className="fs-1"><strong>Notes</strong><br /></p>
                                <a className="btn btn-dark btn-lg text-uppercase fw-bold" role="button" data-bss-hover-animate="pulse" id="button-notes-1" href="notes/notes.html">Vide <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;