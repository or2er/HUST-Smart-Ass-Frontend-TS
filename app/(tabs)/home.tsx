import {
    Pressable,
    StyleSheet,
    ScrollView,
    Image,
    useColorScheme,
    ImageBackground,
} from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { Button, Text, Card, useTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useNavigation, useRouter } from "expo-router";

import Colors from '@/constants/Colors';

// Components
import TaskRecCard from '@/components/TaskRecCard';
import ImageRecCard from '@/components/ImageRecCard';
import RecentNoteCard from '@/components/RecentNoteCard';

export default function HomeScreen() {
    const theme = useTheme();
    const colorScheme = useColorScheme();
    const [data, setData] = useState();
    const router = useRouter();

    // useEffect(() => {
    //     fetch('http://192.168.1.3:5001/') // truyền link url của api vào
    //     .then(res => {  // res chính là response trả về
    //         alert(res.json())
    //         console.log(res.json)
    //         return res.json() // parse response trả về thành json
    //     })
    // },[])

    const clickTest = () => {
        alert("Hello")
        fetch('http://192.168.1.3:5001/') // truyền link url của api vào
            .then(res => {  // res chính là response trả về
                alert(res.json())
                console.log(res.json)
                // return res.json() // parse response trả về thành json
            })
    }


    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Text variant='headlineSmall' style={{
                        fontFamily: 'DMSans',
                        fontWeight: 'bold',
                        color: Colors[colorScheme ?? 'light'].text,
                        paddingBottom: 12
                    }}>
                        Home
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: 16
                    }} >
                        <Text variant='titleMedium' style={{
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            color: Colors[colorScheme ?? 'light'].secondaryText,
                            opacity: 0.8
                        }}>
                            Upcoming Tasks
                        </Text>
                        <Pressable onPress={clickTest} >
                            <IonIcon name='ellipsis-horizontal-outline' size={24} color={theme.colors.onBackground} />
                        </Pressable>
                    </View>

                    <View style={{
                        paddingBottom: 32,
                    }} >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            style={{
                                height: 220

                            }}
                        >
                            <TaskRecCard type_card='fitness' />
                            <TaskRecCard type_card='daily' />
                            <TaskRecCard type_card='fitness' />
                        </ScrollView>
                    </View>

                    <View style={{
                        paddingBottom: 16
                    }} >
                        <Text variant='titleMedium' style={{
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            color: Colors[colorScheme ?? 'light'].secondaryText,
                            opacity: 0.8
                        }}>
                            Recommendations
                        </Text>
                    </View>

                    <View style={{
                        paddingBottom: 32
                    }} >
                        <ScrollView
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                        >
                            <ImageRecCard  
                                title={'HEALTH'} 
                                img={require('@/assets/images/vegetable.jpg')} 
                                onClick={() => router.push('/home')} 
                                key={1}
                            />
                            <ImageRecCard  
                                title={'GYM WORKOUT'} 
                                img={require('@/assets/images/gym.jpg')} 
                                key={2}
                                onClick={() => router.push('/exercise_recs')}
                            />
                            {/* <ImageRecCard  key={3}/> */}
                        </ScrollView>
                    </View>

                    <View style={{
                        paddingBottom: 16
                    }} >
                        <Text variant='titleMedium' style={{
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            color: Colors[colorScheme ?? 'light'].secondaryText,
                            opacity: 0.8
                        }}>
                            Recent Notes
                        </Text>
                    </View>

                    <View>
                        <RecentNoteCard />
                        <RecentNoteCard />
                        <RecentNoteCard />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 48
    },
    content: {
        flexDirection: 'row',
        backgroundColor: '#F0F0FF',
        width: '100%',
        height: '100%'
    },
    text: {
        backgroundColor: '#F0F0FF',
        justifyContent: 'space-between'
    },
    right_part: {
        backgroundColor: '#F0F0FF',
        position: 'relative',
    },
    imageWrapper: {
        height: 'auto',
        width: '100%',
        overflow: "hidden",
        borderRadius: 24
    },
    theImage: {
        width: 220,
        height: 160,
        resizeMode: "cover",
    },
    centerText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
});
