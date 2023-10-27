import { Platform, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed'
import MiniTag from '@/components/MiniTag';

export default function Messages() {

    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#F37373',
                width: 92,
                height: 16,
                borderRadius: 50,
                marginTop: 20,
            }}></View>
            <TextInput placeholder="Title" style={{
                fontFamily: 'DMSans',
                fontSize: 40,
                marginTop: 12,
                fontWeight: 'bold'
            }}></TextInput>
            <View style={{
                flexDirection: 'row',
                marginBottom: 6
            }}>
                <MiniTag></MiniTag>
                <MiniTag></MiniTag>
                <MiniTag></MiniTag>
            </View>
            <View style={{ marginTop: 15, flex: 1 }}>
                <TextInput
                    editable
                    multiline
                    placeholder='Note'
                    textAlignVertical="top"
                    style={styles.textInput}
                ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 48,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        lineHeight: 30,
        fontFamily: 'DMSans',
        padding: 0,
        fontSize: 20,
    },
});