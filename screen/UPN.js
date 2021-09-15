import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import UserDetailScreen from "./userDetailScreen";
import Users from "../components/users";

let StackNavigator = createStackNavigator();

const UserPageNavigator=()=>{
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'Users'} component={Users}/>
            <StackNavigator.Screen name={'User Detail'} component={UserDetailScreen}/>
        </StackNavigator.Navigator>
    )
}
export default UserPageNavigator
