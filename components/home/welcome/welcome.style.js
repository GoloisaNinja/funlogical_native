import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    branding: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.lightwhite,
    },
    welcomeMessage: {
        fontFamily: FONT.gembuck,
        fontSize: 42,
        color: COLORS.secondary,
        marginTop: 24,
        marginBottom: 32
    },
    messagePlain: {
        color: COLORS.white
    },
    searchMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.white,
        marginTop: 32
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.black,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.darkgray,
        paddingHorizontal: SIZES.medium
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center"
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white
    },
});

export default styles;