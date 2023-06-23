import {Stack} from "expo-router";
import {useCallback} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync().then();
const Layout = () => {
    const [fontsLoaded] = useFonts({
        MTThin: require('../assets/fonts/MontserratThin-K7B6D.ttf'),
        MTXLight: require('../assets/fonts/MontserratExtralight-jEZ6j.ttf'),
        MTRegular: require('../assets/fonts/MontserratRegular-BWBEl.ttf'),
        MTMedium: require('../assets/fonts/MontserratMedium-nRxlJ.ttf'),
        MTSemiBold: require('../assets/fonts/MontserratSemibold-Yz368.ttf'),
        MTBold: require('../assets/fonts/MontserratBold-DOWZd.ttf'),
        MTXBold: require('../assets/fonts/MontserratExtrabold-VGO60.ttf'),
        GemBuck: require('../assets/fonts/gembuck.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    },[fontsLoaded])

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView()} />
}
export default Layout;