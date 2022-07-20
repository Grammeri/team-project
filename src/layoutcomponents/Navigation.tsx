import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className={"nav"}>
            <div><button><NavLink to={"/Logging"}>Logging</NavLink></button></div>
            <div><button><NavLink to={"/Registration"}>Registration</NavLink></button></div>
            <div><button><NavLink to={"/Profile"}>Profile</NavLink></button></div>
            <div><button><NavLink to={"/Error404"}>Error404</NavLink></button></div>
            <div><button><NavLink to={"/PasswordRecovery"}>PasswordRecovery</NavLink></button></div>
            <div><button><NavLink to={"/NewPassword"}>NewPassword</NavLink></button></div>
            <div><button><NavLink to={"/Test"}>Test</NavLink></button></div>
        </div>
    );
};
