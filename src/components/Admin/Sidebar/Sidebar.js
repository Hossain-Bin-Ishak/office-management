import { faChalkboardTeacher, faClipboardList, faMoneyBillWave, faUserFriends, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css';


const Sidebar = ({handleSidebar}) => {
    return (
        <div className="d-flex flex-column sidebar-detail justify-content-between">
            <ul className="list-unstyled pt-3">
                    <li onClick={() => handleSidebar('dashboard')}>
                        <span> <FontAwesomeIcon icon={faChalkboardTeacher}/> Dashboard</span>
                    </li>
                    <li onClick={() => handleSidebar('employee')}>
                        <span> <FontAwesomeIcon icon={faUserFriends}/>  Employee</span>
                    </li>
                    <li onClick={() => handleSidebar('management')}>
                        <span> <FontAwesomeIcon icon={faUserTie}/>  Management</span>
                    </li>
                    <li onClick={() => handleSidebar('attendance')}>
                        <span> <FontAwesomeIcon icon={faChalkboardTeacher}/>  Attendance</span>
                    </li>
                    <li onClick={() => handleSidebar('fee')}>
                        <span> <FontAwesomeIcon icon={faMoneyBillWave}/>  Salary</span>
                    </li>
                    <li onClick={() => handleSidebar('notice')}>
                        <span> <FontAwesomeIcon icon={faClipboardList}/>  Notice</span>
                    </li>
            </ul>
        </div>
    );
};

export default Sidebar;