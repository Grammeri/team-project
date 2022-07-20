import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Logging} from "../pages/Logging";
import {Error404} from "../pages/Error404";
import {NewPassword} from "../pages/NewPassword";
import {Test} from "../pages/Test";
import {Registration} from "../pages/Registration";
import {PasswordRecovery} from "../pages/PasswordRecovery";
import {Profile} from "../pages/Profile";


type ContentPropsType = {

}

export const Content = (props: ContentPropsType) => {
    return (
        <>
            <div className="content">
                <Routes>
                    <Route path={'/Logging'} element={<Logging/>}/>
                    <Route path={'/Registration'} element={<Registration/>}/>
                    <Route path={'/Profile'} element={<Profile/>}/>
                    <Route path={'/Error404'} element={<Error404/>}/>
                    <Route path={'/PasswordRecovery'} element={<PasswordRecovery/>}/>
                    <Route path={'/NewPassword'} element={<NewPassword/>}/>
                    <Route path={'/Test'} element={<Test/>}/>
                </Routes>
            </div>
        </>
    )
}

