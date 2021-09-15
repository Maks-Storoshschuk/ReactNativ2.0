import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {getUsers} from "../services/Api";
import User from "./user";

const Users=(props)=>{
    let {navigation}=props
    let[users,setUsers]=useState('')
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);

    return <View style={styles.base}>
        <FlatList
            data={users}
            renderItem={({item})=> <User item={item} nav={navigation}/>}
            keyExtractor={item => ''+item.id}/>
    </View>

}
export default Users;
let styles = StyleSheet.create({

})