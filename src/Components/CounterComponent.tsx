import React from 'react';
import StyledText from './StyledText';
import StyledButton from './StyledButton';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { decrement, increment, incrementByAmount } from '../store/slices/counterSlice';

export default function CounterComponent() {
  const count = useSelector((state: RootState) => state.counter.value.toString());
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleIncrementByAmount = () => dispatch(incrementByAmount(5));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container} />
        <StyledText h1 center secondary>
          {count}
        </StyledText>
        <View style={styles.container} />
        <StyledButton onPress={handleIncrement}>
          <StyledText h2 center secondary>
            +
          </StyledText>
        </StyledButton>
        <View style={styles.container} />
        <StyledButton onPress={handleDecrement}>
          <StyledText h2 center secondary>
            -
          </StyledText>
        </StyledButton>
        <View style={styles.container} />
        <StyledButton onPress={handleIncrementByAmount}>
          <StyledText h2 center secondary>
            +5
          </StyledText>
        </StyledButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
