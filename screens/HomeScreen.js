// HomeScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const news = useSelector((state) => state.news);

  return (
    <View>
      <Text>Welcome to Morning Motivation Station!</Text>
      
      {news && news.length > 0 && (
        news.map((article, index) => (
          <View key={index}>
            <Text>Title: {article.title}</Text>
            <Text>Author: {article.author}</Text>
            <Text>Published Date: {article.publish_date}</Text>
            <Text>Text: {article.text}</Text>
            <Image
              source={{ uri: article.image }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Language: {article.language}</Text>
            <Text>Country: {article.source_country}</Text>
            <Text>Sentiment: {article.sentiment}</Text>
          </View>
        ))
      )}
    </View>
  );
};

export default HomeScreen;

