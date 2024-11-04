import React from "react";

import {View} from 'react-native'

import AppRoutes from "./app.routes"; //--está logado
import AuthRoutes from "./auth.routes"; //--nao está logado

function Routes(){
    const isAuthenticated = false;
    const loading= false;

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes
