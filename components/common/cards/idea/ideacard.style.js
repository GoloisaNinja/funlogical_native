import {StyleSheet} from "react-native";

import {COLORS, SIZES, FONT } from '../../../../constants';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        backgroundColor: COLORS.darkgray,
        borderLeftWidth: 2,
        borderLeftColor: COLORS.greyshadow,
        padding: SIZES.small
    },
    title: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.white,
        marginBottom: 12
    },
    cardText: {
        color: COLORS.lightwhite,
        fontFamily: FONT.xlight,
        fontSize: SIZES.small,
        marginBottom: 12
    },
    tagsContainer: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    },
    tagContainer: {
        borderWidth: 1,
        borderColor: COLORS.tetradic,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: COLORS.tetradic
    },
    tag: {
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontSize: 8,
    }
})
export default styles;