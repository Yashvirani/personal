import React from 'react';
import './ProgressBar.css';

function ProgressBar({skill,percent,color}) {
    return (
        
        
            
               
                
                            <div className="wrapper">
                                <div className="counter btn-update " data-cp-percentage={percent} data-cp-color={color}>
                                </div>
                                <h4 className="sk">{skill}</h4>
                        </div>
                
                
  
            
    )
}

export default ProgressBar;
