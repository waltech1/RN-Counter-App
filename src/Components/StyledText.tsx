import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TextProps {
  children: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  bold?: boolean;
  center?: boolean;
  secondary?: boolean;
}

const StyledText = ({ children, h1, h2, h3, h4, bold, center, secondary }: TextProps): JSX.Element => {
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    bold && styles.bold,
    center && styles.center,
    secondary && styles.secondary,
  ];

  const containerStyles = [styles.container, center && styles.center];

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    fontSize: 12,
    color: '#727272',
    margin: 10,
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
  secondary: {
    color: 'white',
  },
});

export default StyledText;
