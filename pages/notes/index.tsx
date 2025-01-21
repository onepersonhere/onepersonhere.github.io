import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import NoteCard from "@/components/notes/NoteCard";
import NotesSection from "../../components/notes/NoteSection";
import {useRouter} from "next/router";
import React, { useEffect, useState } from "react";
import {NoteStruct} from "@/types/Notes/NoteStruct";

const Note: React.FC = () => {
    const router = useRouter();
    const [semesters, setSemesters] = useState<NoteStruct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/notes.json')
            .then(response => response.json())
            .then(data => {
                setSemesters(data.semesters);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const page = parseInt(router.query.page as string) || 1;
    const title = semesters[page - 1].title;
    const notes = semesters[page - 1].notes;
    const color = semesters[page - 1].color;

    return (
        <>
            <Header caller={"notes"}/>
            <main>
                <section>
                    <div className="container">
                        <h1>NUS course review</h1>
                    </div>
                </section>
                <NotesSection title={title}>
                    {notes.map((note: NoteStruct, index: number) => (
                        <NoteCard
                            key={index}
                            index={page * 10 + index}
                            title={note.title}
                            grade={note.grade}
                            review={note.review}
                            link={note.link}
                            rating={note.rating}
                            color={color}
                            expanded={note.expanded}
                        />
                    ))}
                </NotesSection>
            </main>
            <Pagination
                nextLink={page < semesters.length ? `/notes?page=${page + 1}` : `/notes`}
                previousLink={page > 1 ? `/notes?page=${page - 1}` : `/notes?page=${semesters.length}`}
                currentPage={page}
                totalPages={semesters.length}
                href="/notes"
            />
            <Footer/>
        </>
    );
}

export default Note;