import React from 'react';
import Link from 'next/link';

interface PaginationProps {
    previousLink?: string;
    nextLink?: string;
    currentPage: number;
    totalPages: number;
    href: string;
}

const Pagination: React.FC<PaginationProps> = ({ previousLink, nextLink, currentPage, totalPages, href }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section>
            <div className="container d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center">
                <nav>
                    <ul className="pagination">
                        {previousLink && (
                            <li className="page-item">
                                <Link href={previousLink} legacyBehavior>
                                    <a className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </Link>
                            </li>
                        )}
                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                                {number === 1 ? (
                                    <Link href={`${href}`} legacyBehavior>
                                        <a className="page-link">{number}</a>
                                    </Link>
                                ) : (
                                    <Link href={`${href}?page=${number}`} legacyBehavior>
                                        <a className="page-link">{number}</a>
                                    </Link>
                                )}
                            </li>
                        ))}
                        {nextLink && (
                            <li className="page-item">
                                <Link href={nextLink} legacyBehavior>
                                    <a className="page-link" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Pagination;