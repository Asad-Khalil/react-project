import React from 'react'
import './Navbar.scss'
import Logo from "../images/Logo.svg";
import Person from "../images/Login.svg";
import Mode from "../images/mode.svg";


function Navbar() {


    function displayTime() {
        var currentTime = new Date();
        var hrs = currentTime.getHours();
        var min = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
        var sec = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
        var session = "AM";

        document.getElementById('hrs').innerHTML = hrs;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
      
      }
      setInterval(displayTime, 1000)

    return (
        <>
            <div className="container-fluid main-nav bg-dark" id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-md-3 d-flex align-items-center">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Aratmak istediğin ogenin adini yaz." aria-label="Search" />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-2 d-flex align-items-center justify-content-center">
                            <div className="nav-right-col">
                                <div className="nav-acc-info">
                                    <img src={Person} alt="" />
                                    <img src={Mode} alt="" />
                                </div>
                                <span id="curr-time">
                                    <span id="hrs">00</span>
                                    <span>:</span>
                                    <span id="min">00</span>
                                    <span>:</span>
                                    <span id="sec">00</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;