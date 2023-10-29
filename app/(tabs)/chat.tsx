import { useState, useEffect, useRef } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { socket } from '@/utils/socketio';
import { BACKEND_URL } from "@env"
import { useLocalSearchParams } from 'expo-router'
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
    const [typing, setTyping] = useState(false);
    const [chatVideo, setChatVideo] = useState(false);
    const scrollViewRef = useRef();
    const requestUri = "http://" + BACKEND_URL;
    const { id } = useLocalSearchParams();
    // console.log(id)

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

        fetch(`${requestUri}/msg/read`, requestOptions)
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
                // console.log("check!")
                if (id) {
                    console.log('Id Check')
                    setMessages([...res, {
                        user: 0,
                        message: { 'msg': `Start interacting with video ${id} !. Type 'End interact' to stop interacting with video`, 'type': 'normal', 'data': '' },
                    }]);
                    console.log(messages)
                    setChatVideo(true)
                } else {
                    setMessages(res)
                }
            })
            .catch(error => console.log('error', error));
    }, [id]);

    const handleSend = () => {
        // Handle chat video
        if (chatVideo == false && text.toLowerCase() != 'end interact') {
            console.log('Trigger normal')
            socket.emit("post-msg", "chat", text); // Normal chat
        }
        if (chatVideo == true && text.toLowerCase() != 'end interact') {
            socket.emit("post-msg", id, text); // Chat video
        }

        // Handle link recommendation to chat
        const diet_rec_keywords = ['diet rec', 'diet recommendation', 'recipe recommendation', 'health recommendation']
        const ex_rec_keywords = ['workout', 'exercise recommendation']
        // if (text.toLowerCase().includes('diet recommendation')){
        //     setText("");

        //     setTyping(true)
        //     var formdata = new FormData();
        //     formdata.append("age", '25');
        //     formdata.append("height", '170');
        //     formdata.append("weight", '68');
        //     formdata.append("gender", 'male');
        //     formdata.append("activity", 'Light exercise');
        //     formdata.append("weight_plan", 'Mild weight loss');

        //     var requestOptions = {
        //         method: 'POST',
        //         body: formdata,
        //         redirect: 'follow'
        //     };
        //     const requestUri = "http://" + BACKEND_URL;

        //     fetch(`${requestUri}/recommend`, requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             console.log(result);
        //             // setData(result);
        //             let res = 'The diet recommendations are: \n'
        //             let diet = result.diet;
        //             let breakfast = diet.breakfast;
        //             let lunch = diet.lunch;
        //             let dinner = diet.dinner;
        //             res = res + 'Breakfast: \n'
        //             breakfast.forEach(element => {
        //                 res = res + element['Name'] + '\n'
        //             });
        //             res = res + 'Lunch: \n'
        //             lunch.forEach(element => {
        //                 res = res + element['Name'] + '\n'
        //             });
        //             res = res + 'Dinner: \n'
        //             dinner.forEach(element => {
        //                 res = res + element['Name'] + '\n'
        //             });
        //             setMessages([...messages,
        //                 {
        //                     user: 1,
        //                     message: { 'msg': text, 'type': 'normal', 'data': '' },
        //                 },
        //                 {
        //                 user: 0,
        //                 message: { 'msg': res, 'type': 'normal', 'data': '' },
        //             }]);
        //             setTyping(false)
        //             console.log(messages)
        //         })
        //         .catch(error => console.log('error', error));
        // }

        // Handle add message to list for chat video and normal chat
        if (text.toLowerCase() == 'end interact') {
            setChatVideo(false)
            setMessages([...messages,
            {
                user: 1,
                message: { 'msg': text, 'type': 'normal', 'data': '' },
            },
            {
                user: 0,
                message: { 'msg': `End interacting. Thanks!`, 'type': 'normal', 'data': '' },
            }]);
            setText("");
            setTyping(false);
        } else {
            setMessages([...messages, {
                user: 1,
                message: { 'msg': text, 'type': 'normal', 'data': '' },
            }]);
            setText("");
            setTyping(true);
        }
    }

    useEffect(() => {
        socket.on("get-msg", (id, sender, response_msg) => {
            setMessages([...messages, {
                user: sender,
                message: response_msg,
            }]);
            setTyping(false);
        });
    }, [messages])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
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
                                    {item.message.msg}
                                </Text>
                            </View>
                        )
                    })}
                    {typing && (
                        <Text variant='bodyMedium' >
                            Typing ...
                        </Text>
                    )}
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
