import React from 'react';
import './Sidebar.css';

const Sidebar = ({handleSidebar}) => {
    return (
        <div className="d-flex flex-column sidebar-detail justify-content-between">
            <ul className="list-unstyled pt-3">
                    <li onClick={() => handleSidebar('dashboard')}>
                        <span>Dashboard</span>
                    </li>
                    <li onClick={() => handleSidebar('employee')}>
                        <span>Employee</span>
                    </li>
                    <li onClick={() => handleSidebar('management')}>
                        <span>Management</span>
                    </li>
                    <li onClick={() => handleSidebar('attendance')}>
                        <span>Attendance</span>
                    </li>
                    <li onClick={() => handleSidebar('fee')}>
                        <span>Fee</span>
                    </li>
                    <li onClick={() => handleSidebar('notice')}>
                        <span>Notice</span>
                    </li>
            </ul>
        </div>
    );
};

export default Sidebar;