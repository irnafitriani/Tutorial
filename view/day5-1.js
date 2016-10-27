import React,{ Component} from 'react';
import{
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image
} from 'react-native'

export default class SearchPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchString: 'london'
        }
    }

    onSearchTextChanged(event){
        console.log('onSearchTextChanged');
        this.setState({searchString: event.nativeEvent.text});
        console.log(this.state.searchString);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.flowRight}>
                    <TextInput style={styles.searchInput} placeholder='Search via name or postcode' 
                        value={this.state.searchString}
                        onChange={this.onSearchTextChanged.bind(this)} />
                    <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        textAlign: 'center',
        color: '#656565',
        fontSize: 18,
        marginBottom: 20
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonText:{
        fontSize: 18,
        color:'white',
        alignSelf: 'center'
    },
    button:{
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'#48BBEC',
        borderColor:'#48BBEC',
        borderWidth:1,
        borderRadius:8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth : 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    }
})