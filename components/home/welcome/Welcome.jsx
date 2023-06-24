import React from 'react';
import {View, Text } from 'react-native';
import styles from './welcome.style';
const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.welcomeMessage}>
                    FUN
                    <Text style={styles.messagePlain}>Logical</Text>
                </Text>
                <Text style={styles.branding}>
                    Logic sounds like socialism. Take back freedom at your next school board meeting with FunLogical.
                </Text>
            </View>
        </View>
    )
}
export default Welcome;