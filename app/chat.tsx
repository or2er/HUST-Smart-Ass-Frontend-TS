import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function Chat() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-end' }}>
                <View style={styles.chatBubbleRed} >
                    <Text style={{
                        color: '#fff'
                    }} >
                        I’m to lazy. How to get A Calc I without learn ?
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    backgroundColor: '#F7F7FC',
                }} >
                    <View style={styles.chatBubbleWhite}>
                        <Text>
                            That’s a tough question. However, there are still some methods that you can used to get A Calc I without learning.
                            The first one is using your money to hire for someone that do the test for you. The second method is have a small
                            conservation with you Calc I teacher.
                        </Text>
                    </View>
                </View>
                <View style={styles.chatBubbleRed} >
                    <Text style={{
                        color: '#fff'
                    }} >
                        Thanks,  I think i will learn it by myself. Please prepare document related to Calc I and send to mail: maivannhatminh@gmail.com tommorow
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    backgroundColor: '#F7F7FC',
                }} >
                    <View style={styles.chatBubbleWhite}>
                        <Text>
                            Roger, I have add it to auto send mail function. Summary:
                            Topic: Calc I
                            Type: Document
                            Received Mail: maivannhatminh@gmail.com
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
});
