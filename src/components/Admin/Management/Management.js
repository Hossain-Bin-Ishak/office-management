import { faBriefcase, faCalendarAlt, faMobileAlt, faMoneyBillWave, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Management.css';

const Management= () => {
    return (
        <div className="dashboard-area text-white">
            <div className="cards">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#50A2FF" }} className="single-card">
                            <div className="title">
                                <h5>Name:</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserTie} />
                                </div>
                                <div className="manager-count text-end">
                                  <h4>Mr. Alex</h4>
                                </div>
                            </div>
                            <div className="manager-info mt-3">
                                <div className="designation-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faBriefcase} />
                                </div>
                                <div className="designation text-end">
                                  <h5>Senior Manager</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#43DCBD" }} className="single-card">
                            <div className="title">
                                <h5>Mobile</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMobileAlt} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>0121546489</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FF738A" }} className="single-card">
                            <div className="title">
                                <h5>Join Date</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faCalendarAlt} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>01-Oct-2020</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FFC167" }} className="single-card">
                            <div className="title">
                                <h5>Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMoneyBillWave} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>$10000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Management;