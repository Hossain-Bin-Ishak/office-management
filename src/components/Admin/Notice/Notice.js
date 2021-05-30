import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Notice = () => {
    return (
        <div className='notice-area'>
            <h3 style={{backgroundColor: "#57A5FF", color: 'white', textAlign: 'center', padding: '10px', marginRight: '20px'}}>Notice area</h3>
            <div className="d-flex justify-content-center">
            <div style={{width: '550px', height: 'auto', marginTop: '20px', backgroundColor: "#F44336", color: 'white', padding: '10px'}} className="notice">
                <div className="date d-flex justify-content-between">
                    <h4>Dec. 13, 2021 || By CEO</h4>
                    <FontAwesomeIcon style={{color: 'white', cursor:'pointer'}} icon={faTimes}></FontAwesomeIcon>
                </div>
                <div className="notice-text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, placeat?
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Notice;