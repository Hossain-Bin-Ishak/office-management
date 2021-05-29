import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import any from '../../images/HomePage/any.jpg';
import Footer from '../Footer/Footer';

const infos = [
    {
        img: any,
        title: 'Admin'
    },
    {
        img: any,
        title: 'Employee'
    },
    {
        img: any,
        title: 'Management'
    },
];

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="main-area mb-5">
                <h2 className="title">Welcome</h2>
                <p className="sub-title">Knowledge is key to success.</p>
                <button className="btn">Take Admission</button>
            </div>

            <div className="container my-5 py-5">
                <div className="row">
                    {   
                        infos.map(info => 
                            <div className="col-md-4">
                                <div className="info-area text-center">
                                    <img className="img-fluid" src={info.img} alt="" />
                                    <h5>{info.title}</h5>
                                    <button className="viewBtn py-2 w-100 mb-3">View</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;