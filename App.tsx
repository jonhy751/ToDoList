import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import HomePage from "./src/screens/home";
import {useFonts,Inter_400Regular,Inter_700Bold} from "@expo-google-fonts/inter"
import { ActivityIndicator } from "react-native";
export default function App() {
  const [fontLoaded] =useFonts({Inter_400Regular,Inter_700Bold})

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ?
      <HomePage />
      : <ActivityIndicator />}
      <StatusBar style="light"  translucent/>
    </ThemeProvider>
  );
}
