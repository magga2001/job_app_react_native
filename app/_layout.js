import { Stack } from "expo-router";
import { useCallback } from "react";
//Only import useFonts for custom font
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//When the app screen is initially loading, this will make the splash screen visible
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // For custom font
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // Loading fonts onto the screen
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // We only want to show Homepage if the font has been loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
