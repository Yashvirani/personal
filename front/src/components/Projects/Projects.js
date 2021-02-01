import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
        <div className="heading">
            <h4>MY PROJECTS</h4>
        </div>
        <div className="projects">
                    <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-4 col-lg-4">
                                        <div class="card card100">
                                            <img
                                                src="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                                                class="card-img-top"
                                                alt="..."
                                                className="img1"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title title1">Netflix Clone</h5>
                                                <p class="card-text">
                                                Built a Netflix Clone using ReactJs rendering out the data from Tmdb's API endpoints. This clone fetches you the trailer of that specific show you click on from the YouTube.
                                                </p>
                                                <a href="https://yashvirani.github.io/nc/" class="btn btn-primary btn100">Inspect</a>
                                            </div>
                                            </div>
                                        </div>
                                <div class="col-sm-12 col-md-4 col-lg-4">
                                <div class="card card200">
                                            <div className="img">
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                class="card-img-top"
                                                alt="..."
                                                className="img2"
                                            />
                                            </div>
                                          
                                            <div class="card-body body2">
                                                <h5 class="card-title title2">Amazon Clone</h5>
                                                <p class="card-text">
                                                 Built an Amazon Website UI Clone using ReactJs, React Hooks. It uses Google Authentication . It has the Cart Facility and gives you the total of all Items.
                                                </p>
                                                <a href="https://yashvirani.github.io/ac/" class="btn btn-primary btn200">Inspect</a>
                                            </div>
                                            </div>
                                        
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-4">
                                <div class="card card300">
                                            <img
                                                src="data:image/png;base64,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"
                                                class="card-img-top"
                                                alt="..."
                                                className="img3"
                                            />
                                            <div class="card-body">
                                                <h5 class="card-title title3">Tinder Clone</h5>
                                                <p class="card-text">
                                                 Built Tinder Clone using ReactJS, React Hooks and Material-UI. It also has the swipe-left and swipe-right facility. 
                                                </p>
                                                <a href="https://yashvirani.github.io/tindf/" class="btn btn-primary btn300">Inspect</a>
                                            </div>
                                            </div>
                                        
                                </div>
                            </div>
                    </div>
                        
        </div>
        </>
                            
                            
                           
                        
                    
        
    )
}

export default Projects;
