import React, {useState} from 'react';
import Management from './Management/Management';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Employee from './Employee/Employee';
import Attendance from './Attendance/Attendance';
import Fee from './Fee/Fee';
import Notice from './Notice/Notice';

const Admin = () => {
    const [pathSelected, setPathSelected] = useState('');

    const handleSidebar = (value) => {
        setPathSelected(value);
    }

    return (
        <div className="overflow-hidden">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar handleSidebar={handleSidebar} />
                </div>

                <div className="col-md-9">
                    {
                        pathSelected == 'employee' ? <Employee /> :
                        pathSelected == 'management' ? <Management /> :
                        pathSelected == 'attendance' ? <Attendance /> :
                        pathSelected == 'fee' ? <Fee /> :
                        pathSelected == 'notice' ? <Notice /> : <Dashboard />
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;