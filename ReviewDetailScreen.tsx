import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>요리 후기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ReviewDetailScreen;
