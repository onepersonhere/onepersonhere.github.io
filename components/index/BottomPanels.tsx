import Link from "next/link";
import React from "react";

const BottomPanels = () => {
    return (
        <section className="py-4 py-xl-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div data-aos="fade-up" className="banner" style={{ background: 'var(--bs-blue)' }}>
                            <p className="fs-1"><strong>Blog</strong><br /></p>
                            <Link href={"/blog"} legacyBehavior>
                                <a className="btn btn-dark btn-lg text-uppercase fw-bold" role="button" data-bss-hover-animate="pulse" id="button-blog">Vide <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div data-aos="fade-up" className="banner" style={{ background: 'var(--bs-blue)' }}>
                            <p className="fs-1"><strong>Notes</strong><br /></p>
                            <Link href={"/notes"} legacyBehavior>
                                <a className="btn btn-dark btn-lg text-uppercase fw-bold" role="button" data-bss-hover-animate="pulse" id="button-notes-1">Vide <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BottomPanels;