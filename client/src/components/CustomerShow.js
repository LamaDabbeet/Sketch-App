import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

class CustomerShow extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <CardSection >
            <Input
              label="Name"
              placeholder="John Doe"
              value={this.props.customer.name}
              editable={false}


            />
          </CardSection>

          <CardSection>
            <Input
              label="Phone"
              placeholder="555-555-55"
              value={this.props.customer.phone}
              editable={false}

            />
          </CardSection>

          <CardSection>
            <Input
              label="Email"
              placeholder="user@gmail.com"
              value={this.props.customer.email}
              editable={false}

            />
          </CardSection>
          <CardSection>
            <Text style={styles.labelStyle}>{"Notes"}</Text>
            <TextInput
              style={styles.inputStyle}
              multiline={true}
              placeholder="Notes"
              numberOfLines={3}
              value={this.props.customer.notes}
              editable={false}
            />
          </CardSection>
          <View>
            {this.props.customer.image ?
              <CardSection>
                <Image style={{ width: 350, height: 600 }} resizeMode="contain" source={{ uri: `data:image/png;base64,${this.props.customer.image}` }} />
              </CardSection> :
              <View >
                <Text style={{ paddingTop: 100, height: 250, fontWeight: "bold" }}>There is no sketch to show</Text>
              </View>
            }
          </View>

        </View>
      </ScrollView>
    );
  }
}

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

const mapStateToProps = (state) => {
  const { name, phone, email, notes, sketch } = state.customerForm;
  return { name, phone, email, notes, sketch };
};

export default connect(mapStateToProps, {})(CustomerShow);
