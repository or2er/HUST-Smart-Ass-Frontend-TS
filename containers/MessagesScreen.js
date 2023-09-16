import { StyleSheet, Text, ScrollView, View, Button, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
// Import Component
import CustomButton from "../components/atoms/Button";
import ChatCard from "../components/atoms/ChatCard";

export default function MessagesScreen() {
    const onPressNewChat = () => {
        alert("Create New Chat")
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.container} >
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
                    paddingVertical:16
                }} >
                    <Text style={style.title} >
                        PIN CHAT
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
                    paddingVertical:16
                }} >
                    <Text style={style.title} >
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
                    paddingVertical:16
                }} >
                    <Text style={style.title} >
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
    );
}

const style = StyleSheet.create({
    title:{
        fontSize:20,
        paddingBottom:16,
        // fontWeight:'bold'
    },
    container:{
        paddingHorizontal: 16,
        paddingTop: 16
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})