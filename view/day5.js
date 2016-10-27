import React, { Component } from 'react';
import{
    AppRegistry,
    Text,
    StyleSheet,
    Navigator
} from 'react-native';

import SearchPage from './day5-1'

export default class PropertyFinder extends Component{
    render(){
        return(
           <Navigator style={styles.container} 
            initialRoute={{
                title: 'PropertyFinder',
                component: SearchPage
            }}
            renderScene={(route, navigator) => {
                    return<route.component navigator={navigator} title={route.title}
                        index={route.index} />
                }}
            />
        )
    } 
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
})