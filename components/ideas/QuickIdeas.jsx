import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import IdeaCard from "../common/cards/idea/IdeaCard";
import useFetch from "../../hooks/useFetch";
import {COLORS} from "../../constants";

import styles from './quickideas.style';

const QuickIdeas = () => {
    const { data, isLoading, error } = useFetch("ideas");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hills To Die On</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                {isLoading ? (
                    <ActivityIndicator
                        size={"large"}
                        color={COLORS.lightwhite}
                    />
                ) : error ? (
                    <Text>Something went wrong...</Text>
                ) : (
                    data?.map((issue, index) => (
                        <IdeaCard key={`issuekey-${index}-${issue.id}`} issue={issue} />
                    ))
                )}
            </View>
        </View>
    )
}
export default QuickIdeas;