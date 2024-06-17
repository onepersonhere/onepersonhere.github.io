import React from 'react';
import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogPost from '../../components/blog/BlogPost';
import Pagination from '../../components/Pagination';
import {useRouter} from "next/router";

interface BlogStruct {
    title: string;
    date: string;
    content: string;
    imageSrc?: string;
}

const blog1: BlogStruct = {
    title: "Hello World",
    date: "5 December 2022",
    content: `
        <p>Hello World indeed...</p>
        <p>I spent my entire day on writing this website, finally I am almost done.</p>
        <p>I wish I could complete the website by the time I travel to Penang on Wednesday with my group of Malaysian friends. (They are actually all Malaysian)</p>
    `,
    imageSrc: "/assets/img/Blog/Hello%20World%20(2).gif"
};

const blog2: BlogStruct = {
    title: "Modreg Day",
    date: "6 December 2022",
    content: `
        <p>Today is Modreg round 0. For those who do not know what is Modreg, it is a day where we as NUS students are trying to bid for the modules we want to take next semester.</p>
        <p>Failure to bid for the correct modules may change the course of my studies...</p>
        <p>Wish me luck!</p>
    `
};

const blogs: BlogStruct[] = [blog1, blog2];

const Blog: React.FC = () => {
    const router = useRouter();
    const page = parseInt(router.query.page as string) || 1;
    const blog = blogs[page - 1];

    return (
        <>
            <Header  caller={"blog"}/>
            <main>
                <section>
                    <div className="container">
                        <h1 className="border rounded-0 border-5 d-inline-block">
                            log
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="-32 0 512 512" className="float-start">
                                <path d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"></path>
                            </svg>
                        </h1>
                    </div>
                </section>
                <BlogPost
                    title={blog.title}
                    date={blog.date}
                    content={blog.content}
                    imageSrc={blog.imageSrc}
                />
                <Pagination
                    nextLink={page < 2 ? `/blog?page=${page + 1}` : `/blog`}
                    previousLink={page > 1 ? `/blog?page=${page - 1}` : `/blog?page=${blogs.length}`}
                    currentPage={page}
                    totalPages={2}
                    href="/blog"
                />
            </main>
            <Footer />
        </>
    );
};

export default Blog;