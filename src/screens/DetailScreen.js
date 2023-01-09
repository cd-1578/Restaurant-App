import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
  const [details, setDetails] = useState(null);
  const id = navigation.getParam("id");
  const getDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setDetails(response.data);
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  if (!details) {
    return null;
  }

  return (
    <View>
      <Text>{details.name}</Text>
      <FlatList
        data={details.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
  },
});

export default DetailScreen;
