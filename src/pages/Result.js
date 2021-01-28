import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import CommonStyle from '../styles/common.style';
import PageStyle from '../styles/Result.style';

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.params?.name || '',
      age: props.route.params?.age || '',
      birthday: props.route.params?.birthday || '',
      married: props.route.params?.married ?? false,
    };
  }

  goHome = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {name, age, birthday, married} = this.props.route.params;
    return (
      <View style={CommonStyle.container}>
        <View style={CommonStyle.pageContent}>
          <View style={CommonStyle.card}>
            <Text style={PageStyle.infoText}>Name: {name}</Text>
            <Text style={PageStyle.infoText}>Age: {age}</Text>
            <Text style={PageStyle.infoText}>Birthday: {birthday}</Text>
            <Text style={PageStyle.infoText}>
              Married: {married ? 'True' : 'False'}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.goHome}
            style={PageStyle.button}>
            <Text style={CommonStyle.buttonText}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
