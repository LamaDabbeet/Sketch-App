import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomer, nameCChanged, phoneChanged, emailChanged, notesChanged, saveImage, uploadCloud } from '../actions';
import { CardSection, Input, Button } from './common';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';


class CustomerCreate extends Component {
  onNameChange(text) {
    this.props.nameCChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onNotesChange(text) {
    this.props.notesChanged(text);
  }

  onButtonPress() {
    const { name, phone, email, notes, image } = this.props;
    debugger;

    this.canvas.getBase64('jpg', false, true, false, false, (err, image) => {
      debugger;
      this.props.addCustomer({ name, phone, email, notes, image });
      this.props.uploadCloud({ image, name });
    })
  }

  render() {
    return (
      <ScrollView >
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-500}>
          <View style={styles.container}>
            <CardSection >
              <Input
                label="Name"
                placeholder="John Doe"
                onChangeText={this.onNameChange.bind(this)}
                value={this.props.name}
                numberOfLines={1}
              />
            </CardSection>

            <CardSection>
              <Input
                label="Phone"
                placeholder="555-555-55"
                onChangeText={this.onPhoneChange.bind(this)}
                value={this.props.phone}
                numberOfLines={1}
              />
            </CardSection>

            <CardSection>
              <Input
                label="Email"
                placeholder="user@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                numberOfLines={1}
              />
            </CardSection>
            <CardSection>

              <Text style={styles.labelStyle}>{"Notes"}</Text>
              <TextInput
                style={styles.inputStyle}
                multiline={true}
                placeholder="Notes"
                numberOfLines={3}
                value={this.props.notes}
                onChangeText={this.onNotesChange.bind(this)}

              />

            </CardSection>


            <Text style={{ marginTop: 20 }}>{"Sketch Below"}</Text>
            <View style={styles.container}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SketchCanvas
                  ref={ref => this.canvas = ref}
                  style={{ flex: 1, height: 500 }}
                  strokeColor={'#18829c'}
                  strokeWidth={7}
                />
              </View>
            </View>

            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Create
             </Button>
            </CardSection>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}



const mapStateToProps = ({ customerForm }) => {
  const { name, phone, email, notes, image } = customerForm;
  debugger;
  return { name, phone, email, notes, image };
};

export default connect(mapStateToProps, {
  addCustomer, notesChanged, nameCChanged, phoneChanged, emailChanged, saveImage, uploadCloud
})(CustomerCreate);




const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
});
