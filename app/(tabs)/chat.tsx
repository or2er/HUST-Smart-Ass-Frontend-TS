import { useState } from 'react';
import { Platform, StyleSheet, ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import { Text, TextInput, IconButton, Button } from 'react-native-paper';

// 1 => User
// 0 => Virtual Assistant
export default function Chat() {
    const data = [
        {
            user: 1,
            message: 'I’m to lazy. How to get A Calc I without learn ?',
        },
        {
            user: 0,
            message: `That’s a tough question. However, there are still some methods that you can used to get A Calc I without learning. The first one is using your money to hire for someone that do the test for you. The second method is have a small conservation with you Calc I teacher.`,
        },
        {
            user: 1,
            message: `Thanks,  I think i will learn it by myself. Please prepare document related to Calc I and send to mail: maivannhatminh@gmail.com tommorow`,
        },
        {
            user: 0,
            message: `Roger, I have add it to auto send mail function. Summary:
            Topic: Calc I
            Type: Document
            Received Mail: maivannhatminh@gmail.com`,
        },
    ];

    const [text, setText] = useState('');
    const [messages, setMessages] = useState(data);

    const handleSend = async () => {
        console.log(process.env.EXPO_PUBLIC_API_URL);
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/`);
        const text = await res.text();
        console.log(text);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {messages.map((item, key) => {
                        return (
                            <View
                                style={
                                    item.user == 1
                                        ? styles.chatBubbleRed
                                        : styles.chatBubbleWhite
                                }
                                key={key}
                            >
                                <Text
                                    variant="bodyMedium"
                                    style={{
                                        color: item.user ? '#fff' : '#312E49',
                                    }}
                                >
                                    {item.message}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <TextInput
                        // label="Ask me anything ..."
                        placeholder="Ask me anything..."
                        // dense={true}
                        mode="outlined"
                        value={text}
                        onChangeText={(text) => setText(text)}
                        // multiline = {true}
                        // numberOfLines = {2}
                        style={{
                            // backgroundColor: 'rgba(247, 247, 252, 1)',
                            height: 60,
                            justifyContent: 'center',
                        }}
                    />
                </View>

                <IconButton
                    icon="send"
                    size={24}
                    onPress={handleSend}
                    style={{
                        marginRight: 0,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        backgroundColor: '#F7F7FC',
        flex: 1,
        padding: 12,
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
        alignSelf: 'flex-end',
    },
    footer: {
        height: 60,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EDEDED',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'#000'
    },
});
