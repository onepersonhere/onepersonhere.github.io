import Link from "next/link";
import React from "react";

const CVPanel = () => {
    return (
        <section className="py-4 py-xl-5">
            <div className="container">
                <div data-aos="fade-up" className="banner">
                    <p className="fs-1"><strong>Curriculum Vitae</strong><br /></p>
                    <Link href="/cv" legacyBehavior>
                        <button className="btn btn-dark btn-lg text-uppercase fw-bold" data-bss-hover-animate="pulse" id="button-cv" type="button" >
                            Vide illud <i className="fas fa-chevron-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CVPanel;