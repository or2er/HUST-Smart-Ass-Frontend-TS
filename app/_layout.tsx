import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    MD3LightTheme,
    MD3DarkTheme,
    PaperProvider
} from 'react-native-paper';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const router = useRouter();
    const [loaded, error] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
        DMSans: require('@/assets/fonts/DMSans.ttf'),
        DMSans_Italic: require('@/assets/fonts/DMSans-Italic.ttf'),
        SF_Pro_Display_Bold: require('@/assets/fonts/SF-Pro-Display-Bold.otf'),
        SF_Pro_Display_SemiBold: require('@/assets/fonts/SF-Pro-Display-Semibold.otf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) { // Done load
            SplashScreen.hideAsync();
            router.push('/login')
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

const lightTheme = {
    ...MD3LightTheme,
    colors: {
        "primary": "rgb(191, 0, 40)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(255, 218, 216)",
        "onPrimaryContainer": "rgb(65, 0, 7)",
        "secondary": "rgb(0, 90, 195)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(216, 226, 255)",
        "onSecondaryContainer": "rgb(0, 26, 66)",
        "tertiary": "rgb(92, 83, 167)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(228, 223, 255)",
        "onTertiaryContainer": "rgb(24, 3, 98)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(255, 251, 255)",
        "onBackground": "rgb(32, 26, 26)",
        "surface": "rgb(255, 251, 255)",
        "onSurface": "rgb(32, 26, 26)",
        "surfaceVariant": "rgb(244, 221, 220)",
        "onSurfaceVariant": "rgb(82, 67, 66)",
        "outline": "rgb(133, 115, 114)",
        "outlineVariant": "rgb(215, 193, 192)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(54, 47, 46)",
        "inverseOnSurface": "rgb(251, 238, 237)",
        "inversePrimary": "rgb(255, 179, 177)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(252, 238, 244)",
            "level2": "rgb(250, 231, 238)",
            "level3": "rgb(248, 223, 231)",
            "level4": "rgb(247, 221, 229)",
            "level5": "rgb(246, 216, 225)"
        },
        "surfaceDisabled": "rgba(32, 26, 26, 0.12)",
        "onSurfaceDisabled": "rgba(32, 26, 26, 0.38)",
        "backdrop": "rgba(59, 45, 44, 0.4)"
    }
};
const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        "primary": "rgb(255, 179, 177)",
        "onPrimary": "rgb(104, 0, 17)",
        "primaryContainer": "rgb(146, 0, 28)",
        "onPrimaryContainer": "rgb(255, 218, 216)",
        "secondary": "rgb(174, 198, 255)",
        "onSecondary": "rgb(0, 46, 106)",
        "secondaryContainer": "rgb(0, 67, 150)",
        "onSecondaryContainer": "rgb(216, 226, 255)",
        "tertiary": "rgb(199, 191, 255)",
        "onTertiary": "rgb(46, 33, 118)",
        "tertiaryContainer": "rgb(68, 58, 142)",
        "onTertiaryContainer": "rgb(228, 223, 255)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(32, 26, 26)",
        "onBackground": "rgb(237, 224, 223)",
        "surface": "rgb(32, 26, 26)",
        "onSurface": "rgb(237, 224, 223)",
        "surfaceVariant": "rgb(82, 67, 66)",
        "onSurfaceVariant": "rgb(215, 193, 192)",
        "outline": "rgb(160, 140, 139)",
        "outlineVariant": "rgb(82, 67, 66)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(237, 224, 223)",
        "inverseOnSurface": "rgb(54, 47, 46)",
        "inversePrimary": "rgb(191, 0, 40)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(43, 34, 34)",
            "level2": "rgb(50, 38, 38)",
            "level3": "rgb(57, 43, 43)",
            "level4": "rgb(59, 44, 44)",
            "level5": "rgb(63, 47, 47)"
        },
        "surfaceDisabled": "rgba(237, 224, 223, 0.12)",
        "onSurfaceDisabled": "rgba(237, 224, 223, 0.38)",
        "backdrop": "rgba(59, 45, 45, 0.4)"
    }
};

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    const paperTheme =
        colorScheme === 'dark'
            ? darkTheme
            : lightTheme;

    return (
        <PaperProvider theme={paperTheme}>
            <SafeAreaProvider>
                {/* <ThemeProvider value={DefaultTheme}> */}
                {/* colorScheme === 'dark' ? DarkTheme : DefaultTheme */}
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="modal"
                        options={{
                            presentation: 'modal',
                            headerShown: false,
                            headerTitle: 'Modal',
                        }}
                    /> */}
                    <Stack.Screen
                        name="ai_assistants"
                        options={{
                            headerTitle: 'AI Assistants'
                        }}
                    />
                    {/* <Stack.Screen
                        name="chat"
                        options={{
                            headerTitle: 'Your Virtual Assistant'
                        }}
                    /> */}
                    <Stack.Screen
                        name="diet_recs"
                        options={{
                            // headerShown: false
                            title:'Diet Recommendation'
                        }}
                    />
                    <Stack.Screen
                        name="exercise_recs"
                        options={{
                            // headerShown: false
                            title:'Exercises'
                        }}
                    />
                    <Stack.Screen
                        name="login"
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="signup"
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack>
                {/* </ThemeProvider> */}
            </SafeAreaProvider>
        </PaperProvider>
    );
}
