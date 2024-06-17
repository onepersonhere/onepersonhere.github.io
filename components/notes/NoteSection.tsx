import React from 'react';

interface NotesSectionProps {
    title: string;
    children: React.ReactNode;
}

const NotesSection: React.FC<NotesSectionProps> = ({ title, children }) => (
    <section>
        <div className="container">
            <h1 className="fs-2" style={{ paddingTop: '15px' }}>{title}</h1>
        </div>
        <div className="container">
            <div className="vstack">
                {children}
            </div>
        </div>
    </section>
);

export default NotesSection;