import React from 'react';
import './Skills.css';
import ProgressBar from '../ProgressBar/ProgressBar';



function Skills() {
 
   
    return (
        <>
        <div className="heading">
                <h4>MY SKILLS</h4>
        </div>
        <div className="skills">
            <div class="card card1">
                <div class="card-body">
                    <div className="sk1">
                        
                        <ProgressBar 
                            skill="C++"
                            percent="80"
                            color="red"/>
                        
                       
                           <ProgressBar 
                            skill="JavaScript"
                            percent="75"
                            color="green"/>
                     
                    </div>
                    
                    <div className="sk1">
                        
                            <ProgressBar 
                            skill="HTML"
                            percent="95"
                            color="orange"/>
                        
                       
                           <ProgressBar 
                            skill="C"
                            percent="65"
                            color="yellow"/>
                      
                    </div>
                    <div className="sk1">
                       
                            <ProgressBar 
                            skill="Python"
                            percent="80"
                            color="green"/>
                        
                       
                            <ProgressBar 
                            skill="Matlab"
                            percent="70"
                            color="violet"/>
                        
                    </div>
                    
                </div>
            </div>
            
         
        </div>
        <div className="heading1">
                <h4>WEB TECHNOLOGIES</h4>
        </div>

        <div className="skills">
        <div class="card card1">
                <div class="card-body">
                    <div className="sk1">
                        
                        <ProgressBar 
                            skill="ReactJs"
                            percent="90"
                            color="red"/>
                        
                       
                           <ProgressBar 
                            skill="Django"
                            percent="80"
                            color="green"/>
                     
                    </div>
                    
                    <div className="sk1">
                        
                            <ProgressBar 
                            skill="ExpressJs"
                            percent="85"
                            color="orange"/>
                        
                       
                           <ProgressBar 
                            skill="Bootstrap"
                            percent="90"
                            color="yellow"/>
                      
                    </div>
                    <div className="sk1">
                       
                            <ProgressBar 
                            skill="MongoDB"
                            percent="80"
                            color="green"/>
                        
                       
                            <ProgressBar 
                            skill="WordPress"
                            percent="70"
                            color="violet"/>
                        
                    </div>
                    
                </div>
                </div>
        </div>
        </>
    )
}

export default Skills;
