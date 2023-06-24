import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {COLORS, icons} from '../../../constants';
import styles from './search.style';
const Search = ({
                    searchHeader,
                    placeholderText,
                    setSearch,
                    searchString,
                    handleSearch }) => {
    return (
        <>
            <View>
                <Text
                    style={styles.searchMessage}
                >{searchHeader}</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchString}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholderTextColor={COLORS.lightwhite}
                        placeholder={placeholderText}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => handleSearch()}
                    style={styles.searchBtn}>
                    <Image
                        source={icons.search}
                        resizeMode={"contain"}
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}
export default Search;