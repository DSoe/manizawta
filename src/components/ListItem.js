import React, { Component } from 'react';
//import { Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { View, Image } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { Card } from '../commons/';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedItem: undefined
    };
  }

  setModalVisible(visible, x) {
    this.setState({ modalVisible: visible, selectedItem: x });
  }

  render() {
    const { image } = this.props.item;
  //  const { title, description, image, id } = this.props.item;

  //  const { headerContentStyle, headerTextStyle } = styles;
    return (

      <Card>
        {/* <TouchableOpacity
          onPress={() => this.setModalVisible(!this.state.modalVisible, id)}
        >
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <Card>
            <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible, id)}>
              <View>
                  <Text>{description}</Text>
              </View>
            </TouchableOpacity>
          </Card>

        </Modal> */ }
        <FlipCard
          friction={18}
          perspective={1000}
          // flipHorizontal
          // flipVertical={false}
        >
        <View style={styles.slide}>
         <Image style={styles.imageStyle} source={{ uri: image }} />
        { /*  <Text style={styles.textStyle}>{detail}</Text> */ }
        </View>
        <View style={styles.slide}>
         <Image style={styles.imageStyle} source={{ uri: image }} />
        </View>
        </FlipCard>
      </Card >
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  headerContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTextStyle: {
    fontSize: 18,
    padding: 9
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  descriptionContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 50
  },
  imageStyle: {
    flex: 1,
    width: null
  },
  textStyle: {
    flex: 1,
    flexWrap: 'wrap'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
};

export default ListItem;
