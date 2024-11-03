import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface Recipe {
  id: string;
  name: string;
  image: string;
}

interface Review {
  id: string;
  title: string;
  content: string;
  rating: number;
  author: string;
}

type RootStackParamList = {
  RecipeList: undefined;
  Detail: undefined;
  ReviewDetail: undefined;
};

const recipes: Recipe[] = [
  { id: '1', name: '불고기', image: 'https://example.com/recipe1.jpg' },
  { id: '2', name: '잡채', image: 'https://example.com/recipe2.jpg' },
  { id: '3', name: '나시고랭', image: 'https://example.com/recipe3.jpg' },
  { id: '4', name: '김치우동', image: 'https://example.com/recipe4.jpg' },
];

const reviews: Review[] = [
  { id: '1', title: '동그랑땡', content: '맛있는 레시피 감사합니다.', rating: 5, author: 'ㅇㅇㅇ' },
  { id: '2', title: '고등어무조림', content: '맛이 좋았습니다.', rating: 4, author: 'ㅂㅂㅂ' },
  { id: '3', title: '계란찜', content: '간단하고 맛있네요.', rating: 5, author: 'ㅎㅎㅎ' },
];

const RecipeListScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: '' });
  }, [navigation]);

  const renderItem = ({ item }: { item: Recipe }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detail')}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderReviewItem = ({ item }: { item: Review }) => (
    <TouchableOpacity
      style={styles.reviewContainer}
      onPress={() => navigation.navigate('ReviewDetail')}
    >
      <Text style={styles.reviewTitle}>{item.title}</Text>
      <Text style={styles.reviewContent}>{item.content}</Text>
      <Text style={styles.reviewAuthor}>by {item.author}</Text>
    </TouchableOpacity>
  );

  const handleSearchSubmit = () => {
    if (searchQuery) {
      navigation.navigate('Detail');
    }
  };

  return (
    <View style={styles.container}>
      {/* 상단 검색창 */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="요리를 검색해주세요"
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchSubmit}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      </View>
      
      {/* 요리 리스트 */}
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* 최신 요리 후기 */}
      <Text style={styles.reviewSectionTitle}>최신 요리 후기</Text>
      <FlatList
        data={reviews}
        renderItem={renderReviewItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reviewSectionTitle: {
    marginTop: 19,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  reviewContainer: {
    padding: 13,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  reviewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewContent: {
    fontSize: 12,
    color: '#555',
    marginVertical: 5,
  },
  reviewAuthor: {
    fontSize: 10,
    color: '#999',
  },
});

export default RecipeListScreen;

