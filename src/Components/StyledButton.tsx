import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  children: JSX.Element;
  onPress: () => void;
}

const StyledButton = ({ children, onPress }: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff9922',
    borderRadius: 8,
  },
});

export default StyledButton;
