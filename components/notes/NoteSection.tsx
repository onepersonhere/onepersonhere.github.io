import React from 'react';

interface NotesSectionProps {
    children: React.ReactNode;
}

const NotesSection: React.FC<NotesSectionProps> = ({ children }) => (
    <section>
        <div className="container">
            <h1 className="fs-2" style={{ paddingTop: '15px' }}>Semester 1</h1>
        </div>
        <div className="container">
            <div className="vstack">
                {children}
            </div>
        </div>
    </section>
);

export default NotesSection;