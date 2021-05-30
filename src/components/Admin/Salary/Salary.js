import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DashboardCss from  './Salary.module.css';

const Salary= () => {
    return (
        <div className="dashboard-area text-white">
            <div className="cards">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#50A2FF" }} className={DashboardCss.singleCard}>
                            <div className="title">
                                <h5>Total Manager Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMoneyBillWave} />
                                </div>
                                <div className="manager-count text-end">
                               <h4>$10000.00</h4>
                                </div>
                            </div>
                            <div className="manager-info mt-3">
                                <div className="designation-icon">
                               
                                </div>
                                <div className="designation text-end">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#43DCBD" }} className={DashboardCss.singleCard}>
                            <div className="title">
                                <h5>Manager's Due Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMoneyBillWave} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>$50000.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FF738A" }} className={DashboardCss.singleCard}>
                            <div className="title">
                                <h5>Total Staff Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }}icon={faMoneyBillWave} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>$100000.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ backgroundColor: "#FFC167" }} className={DashboardCss.singleCard}>
                            <div className="title">
                                <h5>Staff's Due Salary</h5>
                            </div>
                            <div className="manager-info">
                                <div className="manager-icon">
                                    <FontAwesomeIcon style={{ fontSize: '25px' }} icon={faMoneyBillWave} />
                                </div>
                                <div className="manager-count text-end">
                                    <h5>$100000.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Salary;