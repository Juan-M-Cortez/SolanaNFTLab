import { DarkTheme } from "@react-navigation/native";

const darkTheme = {
  ...DarkTheme,
  container: {
    flex: 1, // Corrected from "flix" to "flex"
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgb(27, 27, 29)',
    // Add more colors as needed
  },
  text: {
    fontSize: 24,
    fontWeight: "bold", // Corrected from "frontWeight" to "fontWeight"
    marginBottom: 16,
    color: 'rgb(227, 227, 227)',
    // Add more typography styles as needed
  },
  // Add more theme properties such as spacing, borders, etc.
};

export default darkTheme;
