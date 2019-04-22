import _ from 'lodash';
import React, { Component } from 'react';
import { getCustomers } from '../actions';
import { connect } from 'react-redux';
import { StyleSheet, ActivityIndicator, TouchableOpacity, FlatList, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


class MyListItem extends React.PureComponent {

  _onPress = () => {
    debugger;

    this.props.onPressItem(this.props.item);

  };

  render() {

    return (
      <TouchableOpacity

        {...this.props}
        onPress={this._onPress}>
        <View style={styles.GridViewContainer} >
          <Text style={styles.GridViewTextLayout} >{this.props.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: true
    };
  }
  componentWillMount() {
    this.props.getCustomers();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ customers: nextProps.customers })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.customers !== this.props.customers) {
      this.props.getCustomers();
    }
  }

  _keyExtractor = (item, index) => item._id;

  _onPressItem = (item) => {
    debugger;
    console.log(item);
    Actions.customerShow({ customer: item });

  };

  _renderItem = ({ item }) => (
    <MyListItem
      style={{ flex: 1 }}
      id={item._id}
      item={item}
      onPressItem={() => this._onPressItem(item)}
      title={item.name}
    />
  );

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        {this.state.customers.length > 0 ?
          <FlatList
            data={this.state.customers}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            extraData={this.state}
            numColumns={3}
          /> :
          <View style={styles.container}>
            <ActivityIndicator size={'large'} />
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const customers = state.customers;
  return { customers };

};


export default connect(mapStateToProps, {
  getCustomers
})(CustomersList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#18829c'
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },
  GridTouchable: {
    margin: 5
  }
})