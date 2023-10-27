import { useState, useEffect, useRef } from 'react';
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

// import { socket } from '@/utils/wsclient';

// 1 => User
// 0 => Virtual Assistant
export default function Chat() {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const [trigger, setTrigger] = useState(false)
    const scrollViewRef = useRef();

    useEffect(() => {
        console.log("Triggered")
        var formdata = new FormData();
        formdata.append("id", "chat");
        formdata.append("num", "15");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://192.168.143.131:8000/msg/read", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result['data']);
                let res = [];
                let d = result['data'];
                d.forEach(element => {
                    let tmp = {
                        user: element[0],
                        message: element[1]
                    }   
                    res.push(tmp)
                });
                console.log("check!")
                setMessages(res)
            })
            .catch(error => console.log('error', error));

    }, []);

    const handleSend = () => {
        console.log("Post message");
        socket.emit("post-msg", "chat", text);
        setMessages([...messages, {
            user: 1,
            message: text,
        }]);
        setText("")
    }

    useEffect(() => {
        socket.on("get-msg", (id, sender, msg) => {
            setMessages([...messages, {
                user: sender,
                message: msg,
            }]);
        });
    }, [messages])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                >
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
