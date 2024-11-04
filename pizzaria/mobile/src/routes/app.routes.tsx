import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator()
// --- para UTILIZADORES LOGADOS! --- 
function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}  />
        </Stack.Navigator>
    )
}

export default AppRoutes
