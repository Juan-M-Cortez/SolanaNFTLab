import { DefaultTheme } from "@react-navigation/native";

const defaultTheme = {
    ...DefaultTheme,
    conatiner: {
        flex: 1, // Corrected from "flix" to "flex"
        alignItems: "center",
        justifyContent: "center",
        // Add more colors as needed
    },
    text: {
        fontSize: 24,
        fontWeight: "bold", // Corrected from "frontWeight" to "fontWeight"
        marginBottom: 16,
        // Add more typography styles as needed
    },
};