import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { View, TouchableOpacity, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" color="#FFFFFF" size={24} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>FEIRA DE SANTANA</Text>
      <TouchableOpacity>
        <Icon name="refresh" color="#FFFFFF" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
