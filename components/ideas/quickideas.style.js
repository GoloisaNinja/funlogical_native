import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
    container: {
       marginTop: 32,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
        color: COLORS.white
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: COLORS.lightwhite
    },
    cardContainer: {
        marginTop: SIZES.medium,
        gap: SIZES.large
    },
    noresults: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.lightwhite
    }
})

export default styles;