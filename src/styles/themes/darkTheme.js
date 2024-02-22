import { DarkTheme } from "@react-navigation/native";

const darkTheme = {
  ...DarkTheme,
  container: {
    flex: 1, // Corrected from "flix" to "flex"
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1b1b1d',
    // Add more colors as needed
  },
  text: {
    fontSize: 24,
    fontWeight: "bold", // Corrected from "frontWeight" to "fontWeight"
    marginBottom: 16,
    color: '#ffffff',
    // Add more typography styles as needed
  },
  // Add more theme properties such as spacing, borders, etc.
};

const darkDrawer = {
  ...DarkTheme,
  container: {
    backgroundColor: '#131314',
  },
}

export default darkTheme; darkDrawer;
