import IonIcon from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    PaperProvider
} from 'react-native-paper';


import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof IonIcon>['name'];
    color: string;
}) {
    return <IonIcon size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <Tabs
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'home') {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (route.name === 'notes') {
                                iconName = focused
                                    ? 'document-text'
                                    : 'document-text-outline';
                            } else if (route.name === 'ai_assistants') {
                                iconName = focused
                                    ? 'hardware-chip'
                                    : 'hardware-chip-outline';
                            } else if (route.name === 'messages') {
                                iconName = focused
                                    ? 'chatbubble-ellipses'
                                    : 'chatbubble-ellipses-outline';
                            } else if (route.name === 'saved') {
                                iconName = focused ? 'bookmark' : 'bookmark-outline';
                            }

                            // You can return any component that you like here!
                            return (
                                <TabBarIcon name={iconName} size={size} color={color} />
                            );
                        },
                        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                        // Colors[colorScheme ?? 'light'].tint
                    })}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            title: 'Home',
                            headerShown: false,
                            // tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
                            headerRight: () => (
                                <Link href="/messages" asChild>
                                    <Pressable>
                                        {({ pressed }) => (
                                            <IonIcon
                                                name="information-circle-outline"
                                                size={25}
                                                color={
                                                    Colors[colorScheme ?? 'light'].text
                                                }
                                                style={{
                                                    marginRight: 15,
                                                    opacity: pressed ? 0.5 : 1,
                                                }}
                                            />
                                        )}
                                    </Pressable>
                                </Link>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="notes"
                        options={{
                            title: 'Notes',
                            headerShown: false,
                        }}
                    />
                    <Tabs.Screen
                        name="ai_assistants"
                        options={{
                            title: 'AI Assistants',
                            headerShown: false,
                        }}
                    />
                    <Tabs.Screen
                        name="messages"
                        options={{
                            title: 'Conservations',
                        }}
                    />
                    <Tabs.Screen
                        name="saved"
                        options={{
                            title: 'Saved',
                        }}
                    />
                </Tabs>
            </SafeAreaProvider>
        </PaperProvider>
    );
}
