import { useEffect, useState } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { socket } from '@/utils/socketio';

import {
    Text,
    TextInput,
    IconButton,
    Button
} from 'react-native-paper';

// 1 => User
// 0 => Virtual Assistant
export default function Chat() {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);

    socket.on("get-msg", (id, sender, msg) => {
        console.log("New message got", id, sender, msg);
        setMessages([...messages, {
            user: sender,
            message: msg,
        }]);
    });

    useEffect(() => {
        console.log("Triggered")
        socket.emit("post-past-msg", "chat", 20);
    }, []);

    const handleSend = () => {
        console.log("Post message");
        socket.emit("post-msg", "chat", text);
        setMessages([...messages, {
            user: 1,
            message: text,
        }]);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {messages.map((item, key) => {
                        return (
                            <View style={item.user == 1 ? styles.chatBubbleRed : styles.chatBubbleWhite} key={key}>
                                <Text variant='bodyMedium' style={{
                                    color: item.user ? '#fff' : '#312E49'
                                }} >
                                    {item.message}
                                </Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <View style={{
                    flex: 1,
                }} >
                    <TextInput
                        // label="Ask me anything ..."
                        placeholder='Ask me anything...'
                        // dense={true}
                        mode='outlined'
                        value={text}
                        onChangeText={text => setText(text)}
                        // multiline = {true}
                        // numberOfLines = {2}
                        style={{
                            // backgroundColor: 'rgba(247, 247, 252, 1)',
                            height: 60,
                            justifyContent: "center"
                        }}
                    />
                </View>

                <IconButton
                    icon="send"
                    size={24}
                    onPress={handleSend}
                    style={{
                        marginRight: 0
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        backgroundColor: '#F7F7FC',
        flex: 1,
        padding: 12
    },
    chatBubbleWhite: {
        padding: 10,
        borderRadius: 16,
        width: '60%',
        elevation: 1,
        backgroundColor: 'white',
        marginBottom: 12,
    },
    chatBubbleRed: {
        padding: 10,
        borderRadius: 16,
        width: '60%',
        elevation: 1,
        backgroundColor: '#F24B62',
        marginBottom: 12,
        alignSelf: 'flex-end'
    },
    footer: {
        height: 60,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EDEDED',
        flexDirection: 'row',
        alignItems: 'center'
        // backgroundColor:'#000'
    }
});
