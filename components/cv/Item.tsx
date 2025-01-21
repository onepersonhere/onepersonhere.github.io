import React from 'react';

interface ItemProps {
    title: string;
    organization: string;
    link?: string;
    period: string;
    details: string[];
    organizationClassName?: string;
}

const Item: React.FC<ItemProps> = ({ title, organization, link, period, details, organizationClassName = "text-bg-warning" }) => (
    <div className="col" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
        <div className="item">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="fs-3">{title}</h3>
                    <h4 className={`text-uppercase organization ${organizationClassName}`}>{organization}</h4>
                    {link && (
                        <a href={link} style={{ color: 'rgba(33,37,41,0)' }}>
                            <h4 className={`text-uppercase organization ${organizationClassName}`}>
                                <span style={{ textDecoration: 'underline' }}>Link</span>
                            </h4>
                        </a>
                    )}
                </div>
                <div className="col-md-6">
                    <span className="d-md-flex justify-content-md-end align-items-md-start period">{period}</span>
                </div>
            </div>
            <ul className="list-group">
                {details.map((detail, index) => (
                    <li key={index} className="list-group-item text-bg-secondary">
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default Item;