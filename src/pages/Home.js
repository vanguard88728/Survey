import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';

import CommonStyle from '../styles/common.style';
import PageStyle from '../styles/Home.style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      birthday: new Date(),
      showPicker: false,
      married: false,
    };
  }

  getCurrentDate = () => {
    const {birthday} = this.state;
    return moment(birthday).format('MM-DD-YYYY');
  };

  changeDate = (event, selectedDate) => {
    this.setState({birthday: selectedDate, showPicker: false});
  };

  showDatePicker = () => {
    this.setState({showPicker: true});
  };

  showResult = () => {
    const {name, age, married} = this.state;
    this.props.navigation.navigate('Result', {
      name,
      age,
      birthday: this.getCurrentDate(),
      married,
    });
  };

  render() {
    const {birthday, showPicker, married} = this.state;

    return (
      <View style={CommonStyle.container}>
        <View style={CommonStyle.pageContent}>
          <Text style={CommonStyle.inputLabel}>Enter your name</Text>
          <TextInput
            style={CommonStyle.inputText}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({name: text})}
          />

          <Text style={CommonStyle.inputLabel}>Enter your age</Text>
          <TextInput
            style={CommonStyle.inputText}
            underlineColorAndroid="transparent"
            keyboardType={'numeric'}
            onChangeText={(text) => this.setState({age: text})}
          />

          <Text style={CommonStyle.inputLabel}>Select birth date</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.showDatePicker}
            style={PageStyle.dateContainer}>
            <Text style={PageStyle.dateText}>{this.getCurrentDate()}</Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker value={birthday} onChange={this.changeDate} />
          )}

          <View style={PageStyle.rowContainer}>
            <CheckBox
              disabled={false}
              value={married}
              onValueChange={(value) => {
                console.log('NEW VALUE', value);
                this.setState({married: value});
              }}
            />
            <Text style={PageStyle.checkLabel}>Married</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.showResult}
            style={PageStyle.button}>
            <Text style={CommonStyle.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
