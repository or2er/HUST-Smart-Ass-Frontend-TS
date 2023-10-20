import { StyleSheet, ScrollView, View, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import {
    Text
} from 'react-native-paper';
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";

// Import Component
import CustomButton from "../components/atoms/Button";
import ChatCard from "../components/atoms/ChatCard";

export default function MessagesScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();

    const onPressNewChat = () => {
        alert("Create New Chat")
    }

    const navigateChat = () => {
        // router.push({ pathname: "/chat", params: { post: "random" } })
        navigation.navigate('chat');
    }

    return (
        <View style={style.container}>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View >
                    {/* Header */}
                    <View style={style.header}>
                        <CustomButton title="New chat" onPress={onPressNewChat} />
                        <Pressable style={{
                            width: 'auto'
                        }} onPress={() => alert("Clicked Search")}>
                            <Icon name={'search-outline'} size={36} color={'black'} />
                        </Pressable>
                    </View>

                    {/* Body */}
                    <View style={{
                        paddingVertical: 16
                    }} >
                        <Text variant="titleMedium" style={style.title} >
                            PIN CHAT
                        </Text>
                        <ChatCard
                            onPress={navigateChat}
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            onPress={() => navigation.navigate('login')}
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                    </View>

                    <View style={{
                        paddingVertical: 16
                    }} >
                        <Text variant="titleMedium" style={style.title} >
                            RECENT
                        </Text>
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                    </View>

                    <View style={{
                        paddingVertical: 16
                    }} >
                        <Text variant="titleMedium" style={style.title} >
                            ALL CHAT
                        </Text>
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                        <ChatCard
                            title="How to solve Cal1 Hust and get ..."
                            description="Do problem 1, 2 and 3"
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        paddingBottom: 12,
        // fontWeight:'bold'
    },
    container: {
        paddingHorizontal: 24,
        paddingTop: 16
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})