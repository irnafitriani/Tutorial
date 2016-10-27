import React,{Component} from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Modal
} from 'react-native';

import{
    Form,
    SwitchField,
    Separator,
    InputField,
    LinkField,
    PickerField,
    DatePickerField,
    TimePickerField
} from 'react-native-form-generator';

class CustomModal extends Component{
    handleClose(){
        this.props.onHidePicker && this.props.onHidePicker();
    }

    render(){
        return (
            <Modal transparent={true}>
                <View style={{padding:20, flex:1, justifyContent:'center',backgroundColor:'rgba(43,48,62,0.57)'}}>
                    <View style={{backgroundColor:'white', borderRadius:8, flexDirection:'column'}}>
                        <Text style={{textAlign:'center', marginTop:10, paddingTop:10, paddingBottom:10,
                                    fontSize:18}}>A Custom Wrapper for picker
                        </Text>
                        {this.props.children}

                        <TouchableHighlight 
                            onPress={this.handleClose.bind(this)}
                            underlayColor='#78ac05'>
                            <View style={{flex:1, alignItems:'center'}}>
                                <Text style={{fontSize:19,padding:15}}>Close</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}

class WrappedIcon extends Component{
    render(){
        return(
            <Text>Text</Text>
        )
    }
}

export default class FormView extends Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{},
      bmiValue:0
    }
  }
  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.
    formData = {
    first_name:"",
    last_name:"",
    gender: '',
    birthday: Date,
    has_accepted_conditions: bool
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  resetForm(){

    this.refs.registrationForm.refs.first_name.setValue("");
    this.refs.registrationForm.refs.last_name.setValue("");
    this.refs.registrationForm.refs.other_input.setValue("");
    this.refs.registrationForm.refs.meeting.setDate(new Date());
    this.refs.registrationForm.refs.has_accepted_conditions.setValue(false);
  }

  calculateBMI(){
    this.state.bmiValue = this.refs.registrationForm.refs.weight.value * this.refs.registrationForm.refs.height.value
  }

  render(){
    return (<ScrollView keyboardShouldPersistTaps={true} style={{ height:200, margin:30,marginLeft:0, marginRight:0}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
        <Separator />
         <DatePickerField ref='birthday'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          iconRight={[<Text>^</Text>,
                      <Text>v</Text>
                      ]}
          placeholder='Date'/>
        <InputField ref='weight' label='Weight' placeholder='Weight'> {this.refs.registrationForm.refs.weigh}</InputField>
        <InputField ref='height' label='Height' placeholder='Height'>{this.refs.registrationForm.refs.height}</InputField>
        <Separator />
        </Form>

        <TouchableHighlight onPress={this.calculateBMI.bind(this)}>
        <View style={[{
          backgroundColor:'blue',
            flex:1, alignItems:'center',
            borderColor:(this.state.formData.has_accepted_conditions)?'#2398c9':'white',
            borderWidth:5,
            width:100,
            marginLeft:10,
          },
      ]}>
        <Text style={{fontSize:11,padding:10,color:'white'}}>Calculate</Text></View>
        </TouchableHighlight>

         <TouchableHighlight>
          <View style={[{
            backgroundColor:'grey',
              flex:1, alignItems:'center',
              borderColor:(this.state.formData.has_accepted_conditions)?'#2398c9':'white',
              borderWidth:5,
              width:200,
              marginRight:10,
            },
          ]}>
          <Text style={{fontSize:11,padding:10,color:'white'}}>Body Mass Index:{this.state.bmiValue} </Text></View>
        </TouchableHighlight>
       
      <TouchableHighlight
      disabled={!this.state.formData.has_accepted_conditions}
      onPress={()=>this.refs.registrationForm.refs.other_input.focus()}
      underlayColor='#78ac05'>
        <View style={[{
            flex:1, alignItems:'center',
            borderColor:(this.state.formData.has_accepted_conditions)?'#2398c9':'grey',
            borderWidth:5
          },
        ]}>
          <Text style={{fontSize:19,padding:15,}}>Your Body Mass Index :{this.state.bmiValue}</Text>
        </View>
      </TouchableHighlight>
      </ScrollView>
      );
    }
  }

