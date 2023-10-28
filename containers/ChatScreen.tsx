import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native'

export default function ChatScreen() {
    const initialText = ''
    const [text, setText] = useState(initialText)

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={style.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' }}>
            <View style={style.chatBubbleRed} >
                <Text style={{
                    color: '#fff'
                }} >
                    I’m to lazy. How to get A Calc I without learn ?
                </Text>
            </View>
            <View style={{
                width: '100%',
            }} >
                <View style={style.chatBubbleWhite}>
                    <Text>
                        That’s a tough question. However, there are still some methods that you can used to get A Calc I without learning.
                        The first one is using your money to hire for someone that do the test for you. The second method is have a small
                        conservation with you Calc I teacher.
                    </Text>
                </View>
            </View>
            <View style={style.chatBubbleRed} >
                <Text style={{
                    color: '#fff'
                }} >
                    Thanks,  I think i will learn it by myself. Please prepare document related to Calc I and send to mail: maivannhatminh@gmail.com tommorow
                </Text>
            </View>
            <View style={{
                width: '100%',
            }} >
                <View style={style.chatBubbleWhite}>
                    <Text>
                        Roger, I have add it to auto send mail function. Summary:
                        Topic: Calc I
                        Type: Document
                        Received Mail: maivannhatminh@gmail.com
                    </Text>
                </View>
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
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
        marginBottom: 12
    },
    chatBubbleRed: {
        padding: 10,
        borderRadius: 16,
        width: '60%',
        elevation: 1,
        backgroundColor: '#F24B62',
        marginBottom: 12
    }
})