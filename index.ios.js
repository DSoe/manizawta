import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/commons/Header';
import LibraryList from './src/components/LibraryList';

//Create a Component
const App = () => (
    //expand the view to scrollable.
    <View style={{ flex: 1 }}>
        
        <LibraryList />
    </View>
);

AppRegistry.registerComponent('manizawta', () => App);
