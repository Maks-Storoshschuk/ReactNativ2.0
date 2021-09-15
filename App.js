
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserPageNavigator from "./screen/UPN";
import Home from "./components/Home";



let BottomTabNavigator=createBottomTabNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen options={{headerShown: false}} name={'Users'} component={UserPageNavigator} />
                <BottomTabNavigator.Screen options={{headerShown: false}} name={'Home'} component={Home}/>
            </BottomTabNavigator.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:36
    }
});
