import React from 'react';

interface SkillItemProps {
    name: string;
    className: string;
    tooltip: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, className, tooltip }) => (
    <h4 className={`text-uppercase ${className} organization`} data-bs-toggle="tooltip" data-bss-tooltip="" style={{ marginLeft: '6px' }} title={tooltip}>
        {name}
    </h4>
);

export default SkillItem;