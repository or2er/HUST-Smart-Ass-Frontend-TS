import { Platform, StyleSheet, ScrollView, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed'
import MiniTag from '@/components/MiniTag';

export default function Messages() {
    const [note, setNote] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: '#F37373', width: 92, height: 16, borderRadius: 50, marginTop: 20 }}></View>
                <TextInput
                    placeholder="Title"
                    style={{
                        fontFamily: 'DMSans',
                        fontSize: 40,
                        marginTop: 12,
                        fontWeight: 'bold',
                    }}
                />
                <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                    <MiniTag />
                    <MiniTag />
                    <MiniTag />
                </View>
                <View style={{ flex: 1 }}>
                    <TextInput
                        editable
                        multiline
                        scrollEnabled={false} // Disable scrolling for the TextInput
                        placeholder='Note'
                        value={note}
                        onChangeText={(text) => setNote(text)}
                        style={styles.textInput}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 48,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    textInput: {
        marginTop: 15,
        fontSize: 20,
        fontFamily: 'DMSans',
        textAlign: 'left',
        lineHeight: 30
    },

});