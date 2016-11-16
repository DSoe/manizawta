import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
  //  borderWidth: 1,
    borderRadius: 2,
//    borderColor: '#ddd',
//    borderBottomWidth: 1,
    flex: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    paddingTop: 10
  }
};

export { Card };
