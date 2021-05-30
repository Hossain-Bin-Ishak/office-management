import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-area">
            <div className="cards">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#50A2FF" }} className="single-card">
                            <div className="title">
                                <h5>Total Manager</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserTie} />
                                </div>
                                <div className="manager-count text-end">
                                    <h1>0</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#43DCBD" }} className="single-card">
                            <div className="title">
                                <h5>Total Staff</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserTie} />
                                </div>
                                <div className="manager-count text-end">
                                    <h1>0</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FF738A" }} className="single-card">
                            <div className="title">
                                <h5>Managers Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} style={{ fontSize: '25px' }} icon={faUserTie} />
                                </div>
                                <div className="manager-count text-end">
                                    <h1>0</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FFC167" }} className="single-card">
                            <div className="title">
                                <h5>Staffs Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faUserTie} />
                                </div>
                                <div className="manager-count text-end">
                                    <h1>0</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;