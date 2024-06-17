import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import NoteCard from "@/components/notes/NoteCard";
import NotesSection from "../../components/notes/NoteSection";
import {useRouter} from "next/router";

const notes1 = [
    {
        title: 'CS1101S Programming Methodology',
        grade: 'A',
        review: `<p>Could be considered one of the hardest introductory modules in NUS. There is a very heavy workload. 4h solely on lectures and 2h on tutorials. On top of that you still are required to do coding tasks, which could take up literally 1 whole day.</p>
                            <p>You would start off with the theory of recursion, and some basic programs that limit your answer to using solely recursion. This encourages you to think in a different way - a way where a programmer should think. This way of thinking would help you in your future career as a programmer/computer scientist.</p>
                            <p>All in all, CS1101S is definitely memorable for me, and it’s definitely much better than other CS1010 modules in terms of the concepts we learnt.</p>`,
        link: 'https://github.com/onepersonhere/notes/tree/main/Sem%201/CS1101S',
        rating: 4,
    },
    {
        title: 'CS1231S Discrete Structures',
        review: `<p>Could be considered the hardest module in semester 1, this module requires knowledge from H3 Mathematics, for the topics on logic. If you do not have such knowledge, then it will be very hard to chase for top grades. Furthermore, the <code>S</code> version meant that all students taking the mod is from CS, and the bell curve would be disadvantages to those who do not have strong fundamentals in mathematical logic.</p>
                 <p>The topics covered are the following:</p>
                    
                 <ul>
                    <li>Logic and proof techniques propositions, conditionals, quantifications.</li>
                    <li>Relations and Functions Equivalence relations and partitions. Partially ordered sets. Well-Ordering Principle.</li>
                    <li>Function equality. Boolean/identity/inverse functions. Bijection.</li>
                    <li>Mathematical formulation of data models (linear model, trees, graphs).</li>
                    <li>Counting and Combinatoric Pigeonhole Principle. Inclusion-Exclusion Principle.</li>
                    <li>Number of relations on a set, number of injections from one finite set to another, Diagonalization proof An infinite countable set has an uncountable power set.</li>
                    <li>Algorithmic proof An infinite set has a countably infinite subset. Subsets of countable sets are countable.</li>
                 </ul>`,
        link: 'https://github.com/onepersonhere/notes/tree/main/Sem%201/CS1231S',
        rating: 2,
    },
    {
        title: 'IS1103 Ethics in Computing',
        review: `<p>One of the worse module in NUS. (Thankfully they reorganized this mod into IS1108)</p>
                 <p>This was taken during covid semester, the entire module was conducted in 10 quizzes (10 weeks) and each quiz has 10 questions - that's 100 questions for 100% of the grade! 
                 The questions were supposedly based on the provided textbook (which you need to buy/pirate). 
                 It was well known that there are many people who cheated in this mod, where they will form large groups to discuss and distribute the quiz answers.</p>`,
        rating: 1,
    },
    {
        title: 'MA1521 Calculus in Computing',
        review: `<p>This module covers fundamental data structures and algorithms, including arrays, linked lists, stacks, queues, trees, and graphs.</p>
                 <p>The workload is heavy with weekly assignments and quizzes. Understanding the time and space complexity of algorithms is crucial for doing well.</p>
                 <p>CS2040S has provided me with a strong foundation in data structures and algorithms, which is essential for any software engineer.</p>`,
        link: 'https://github.com/onepersonhere/notes/tree/main/Sem%201/MA1521',
        rating: 4,
    },
    {
        title: 'RVX1002 What do you mean? Meaning & Communication in Intercultural contexts',
        grade: 'A',
        review: `<p>This was one of the better mods I have taken in semester 1. The module was conducted in a small class of around 16 people, however since it was covid semester, some of my classmates are connected to the class through Zoom, whereas the rest of us are at the physical classroom.</p>
                 <p>I didn't have any idea what it was about, until I started learning from the mod. I felt that the prof was very engaging despite the lack of interaction from my classmates. It was definitely an interesting topic to learn. This module was very much about linguistics and how to simplify people's communication.</p>`,
        rating: 5,
    },
];
const notes2 = [
    {
        title: 'CS2030S Programming Methodology II',
        grade: 'A-',
        review: `<p>This module was interesting during my time. We have multiple labs in which we are to write a code that fits the description of the assignment. The code was to be in the style of OOP.</p>
                 <p>There were 2 practical exams, a midterm and a final exam. Unfortunately, the server was down during the second practical exam and we had to rush as they reduced the exam time by half.</p>
                 <p>All in all, it is still a doable module as it is a more advanced version of CS1101S.</p>`,
        link: 'https://github.com/onepersonhere/notes/tree/main/Sem%202/CS2030S',
        rating: 4,
    },
];

const semesters = [
    {
        title: 'Semester 1',
        notes: notes1,
    },
    {
        title: 'Semester 2',
        notes: notes2,
    },
    {
        title: 'Semester 3',
        notes: [],
    },
    {
        title: 'Semester 4',
        notes: [],
    },
];

const Note: React.FC = () => {
    const router = useRouter();
    // page must be a number
    const page = parseInt(router.query.page as string) || 1;

    const title = semesters[page - 1].title;
    const notes = semesters[page - 1].notes;

    return (
        <>
            <Header caller={"notes"}/>
            <main>
                <section>
                    <div className="container">
                        <h1>My notes</h1>
                    </div>
                </section>
                <NotesSection title={title}>
                    {notes.map((note, index) => (
                        <NoteCard
                            key={index}
                            index={index}
                            title={note.title}
                            grade={note.grade}
                            review={note.review}
                            link={note.link}
                            rating={note.rating}
                        />
                    ))}
                </NotesSection>
            </main>
            <Pagination
                nextLink={page < 4 ? `/notes?page=${page + 1}` : `/notes`}
                currentPage={page}
                totalPages={4}
                href="/notes"
            />
            <Footer/>
        </>
    );
}

export default Note;