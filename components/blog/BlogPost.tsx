import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    content: string;
    imageSrc?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, imageSrc }) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{title}</h1>
                    </div>
                    <div className="col d-flex justify-content-end align-items-start">
                        <p className="d-lg-flex justify-content-lg-end align-items-lg-start">{date}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <article>
                            {imageSrc && <img className="img-fluid" width="936" height="527" src={imageSrc} style={{ marginTop: '2px', marginBottom: '15px' }} />}
                            <div dangerouslySetInnerHTML={{__html: content}}/>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPost;