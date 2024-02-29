import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Custom icon positioned in the corner */}
      <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <TouchableOpacity onPress={() => {/* Handle icon press */}}>
          <Ionicons name="custom-icon" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
