import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import IdeaCard from "../common/cards/idea/IdeaCard";
import Search from "../common/search/Search";
import useFetch from "../../hooks/useFetch";
import {COLORS} from "../../constants";

import styles from './quickideas.style';

const QuickIdeas = () => {
    const { data, isLoading, error } = useFetch("ideas");
    const [newDataIsLoading, setNewDataIsLoading] = useState(false);
    const [newFetchError, setNewFetchError] = useState(null);
    const [search, setSearch] = useState("");
    const [dataToDisplay, setDataToDisplay] = useState([]);
    const base = 'https://sbbadideasapi-production.up.railway.app/api/v1/'
    const handleShowAll = async () => {
        setNewDataIsLoading(true)
        try {
            const response = await axios.get(base + "ideas/all");
            setDataToDisplay(response.data);
        } catch(err) {
            setNewFetchError(err);
        } finally {
            setNewDataIsLoading(false);
        }
    }
    const handleSearch = async () => {
        const encodedSearch = encodeURI(search);
        const endpoint = base + "ideas/search?query=" + encodedSearch;
        setNewDataIsLoading(true);
        try {
            const response = await axios.get(endpoint);
            setDataToDisplay(response.data);
            setSearch("");
        } catch(err) {
            setNewFetchError(err);
        } finally {
            setNewDataIsLoading(false);
        }
    }
    useEffect(() => {
        setDataToDisplay(data)
    },[data])
    return (
        <>
            <Search
                searchHeader={"Find a divisive topic"}
                placeholderText={"try 'jesus' or 'murica'"}
                searchString={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{`Hills to die on (${dataToDisplay?.length})`}</Text>
                <TouchableOpacity
                    onPress={() => handleShowAll()}
                >
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                {isLoading || newDataIsLoading ? (
                    <ActivityIndicator
                        size={"large"}
                        color={COLORS.lightwhite}
                    />
                ) : error || newFetchError ? (
                    <Text>Something went wrong...</Text>
                ) : dataToDisplay?.length > 0 ? (
                    dataToDisplay.map((issue, index) => (
                        <IdeaCard key={`issuekey-${index}-${issue.id}`} issue={issue} />
                    ))
                ): (
                    <Text
                        style={styles.noresults}
                    >Sorry...no results!</Text>
                )}
            </View>
        </View>
        </>
    )
}
export default QuickIdeas;