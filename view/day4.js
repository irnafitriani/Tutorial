import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Form,
    StyleSheet,
    Dimensions
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

export default class Calendar extends Component{
    static propTypes ={
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            page: 'calendar',
            date: new Date(),
            selectedTab: 'home'
        };
    }
    
    render(){
        const { date } = this.state;
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Des";
        return(
            <View style={styles.container}>
                <View style={styles.selectedDateView}>
                    <Text style={{fontSize:66, textAlign:'center', color:'white'}}>{month[date.getMonth()]}</Text>
                    <Text style={{textAlign:'center',color:'white', fontSize:15}}>{weekday[date.getDay()]}</Text>
                    <Text style={{fontSize:66, textAlign:'center', color:'white'}}>{date.getDate()}</Text>
                    <Text style={{textAlign:'center',color:'white',fontSize:15}}>{date.getFullYear()}</Text>
                </View> 
                <CalendarPicker
                        selectedDate={this.state.date}
                        onDateChange={this.props.onForward}
                        screenWidth={Dimensions.get('window').width}
                        selectedBackgroundColor={'blue'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  selectedDateView: {
    backgroundColor: 'blue',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    width: Dimensions.get('window').width,
    height: 200,
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000'
  },
  tabbar: {
    backgroundColor: 'white',
    height: 64,
    borderTopColor: 'blue',
    borderTopWidth: 2
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
