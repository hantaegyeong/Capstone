import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import recipeData from './recipeData';

const DetailScreen = () => {
  const recipe = recipeData;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>조리 시간: {recipe.cookTime} 분</Text>
        <Text style={styles.infoText}>분량: {recipe.servingSize}인분</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>재료</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>조리 방법</Text>
        {recipe.steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={styles.stepDescription}>{index + 1}. {step.description}</Text>
            <Image source={{ uri: step.image }} style={styles.stepImage} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  infoText: {
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 5,
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stepImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  }
});

export default DetailScreen;
