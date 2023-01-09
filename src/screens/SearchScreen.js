import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useBusinesses();

  const resultsFilter = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          style={styles.viewStyle}
          results={resultsFilter("$")}
          title="Cost Effective"
        />
        <ResultsList
          style={styles.viewStyle}
          results={resultsFilter("$$")}
          title="Pricier"
        />
        <ResultsList
          style={styles.viewStyle}
          results={resultsFilter("$$$")}
          title="Expensive"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
  },
});

export default SearchScreen;
