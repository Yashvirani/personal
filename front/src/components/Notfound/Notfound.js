import React from 'react';
import './Notfound.css';
import { useHistory } from 'react-router-dom';

function Notfound() {
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }
    return (
        <div className="notfound">
                            <section class="page_404">
                    <div class="container">
                        <div class="row">	
                        <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center p404">404</h1>
                        
                        
                        </div>
                        
                        <div class="contant_box_404">
                        <h3 class="h21">
                        Look like you're lost
                        </h3 >
                        
                        <p class="p23">the page you are looking for not avaible!</p>
                        
                        <a href="" onClick={goBack} class="link_404">Go to Home</a>
                    </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Notfound;
