import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  Dimensions,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import ListItem from './ListItem';
import config from '../../config';

const { width } = Dimensions.get('window');

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  image: {
    width,
    flex: 1
  },
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  }
};


class LibraryList extends Component {

state = { lists: [] };

componentDidMount() {
    firebase.initializeApp(config);
    const firebaseRef = firebase.database().ref();
    firebaseRef.on('value', (snapshot) => {
    this.setState({ lists: snapshot.val() });
    });
}

  renderContents() {
    return (
      this.state.lists.map(item =>
        <ListItem key={item.title} item={item} />
      )
    );
  }

  render() {
    return (
      <View>
      { /* <Image source={require('../../img/Andriod-Tayartaw-BG.png')}
          style={styles.container} > */ }
        <Swiper
          loop={false}
        >
          {
            this.renderContents()
          }
        </Swiper>
    {  /*</Image> */ }
      </View>
    );
  }
}

export default LibraryList;
