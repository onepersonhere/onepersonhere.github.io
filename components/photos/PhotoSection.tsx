import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoSection: React.FC = () => {
    return (
        <section>
            <div className="container" style={{ marginBottom: '24px' }}>
                <div className="row">
                    <div className="col">
                        <h1>New Zealand</h1>
                    </div>
                    <div className="col d-flex d-sm-flex justify-content-end align-items-start justify-content-sm-end align-items-sm-start">
                        <p className="d-lg-flex justify-content-lg-end align-items-lg-start">28 May - 6 June 2022</p>
                    </div>
                </div>
                <div>
                    <a className="btn btn-primary d-inline" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-1" href="#collapse-1" role="button">Show Content</a>
                    <div className="collapse show" id="collapse-1">
                        <PhotoCard
                            imgSrc="assets/img/Photos/IMG_8577.jpg"
                            story="I remember on that day, I had a severe stomach ache due to an unfortunate incident the previous night. We did not turn on the heater as we fail to realize that the heater was actually the air-con. What an eye-opener, air-con doesn't only give out cold air!"
                            location="This is a picture taken by me while we are driving from Christchurch to Franz Josef, through Arthur's Pass."
                            mapLink="https://goo.gl/maps/32hv1JboGgwMUWfN8"
                        />
                        <PhotoCard
                            imgSrc="assets/img/Photos/IMG_9186.jpg"
                            story="I really love this image as evident from my profile pics on my social medias. This is the place where I really get to experience the dry winter wind that you never get in Singapore."
                            location="This was taken on the highest paved road in New Zealand, on the way from Franz Josef to Queenstown."
                            mapLink="https://goo.gl/maps/EAihCaasiWquMVBK7"
                        />
                        <PhotoCard
                            imgSrc="assets/img/Photos/IMG_9285.jpg"
                            story="The day before this was very gloomy, it had rained heavily and we missed the beautiful Lake Wanaka and Hawea scenery. Fortunately that day has the perfect weather, rainbows were abundant everywhere we drove!"
                            location="This picture was taken on the way from Queenstown to Glenorchy."
                            mapLink="https://goo.gl/maps/7g8zo6kPdaHSEx2d7"
                        />
                        <PhotoCard
                            imgSrc="assets/img/Photos/IMG_9934.jpg"
                            story="Lake Tekapo is definitely the highlight of my trip, the weather was perfect and I was able to do astrophotography. Unfortunately, I messed up the focus and most of the 'astro' photographs turned out to be blurry :("
                            location="Definitely Lake Tekapo"
                            mapLink="https://goo.gl/maps/yHgttNGLJfn15oaS9"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;