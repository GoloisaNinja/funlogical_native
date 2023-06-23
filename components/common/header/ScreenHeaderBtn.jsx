import React from 'react';
import {TouchableOpacity, Image, I } from 'react-native';
import styles from './screenheader.style';
const ScreenHeaderBtn = ({ icon, dimension }) => {
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Image source={icon}
                   resizeMode="cover"
                   style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}
export default ScreenHeaderBtn;