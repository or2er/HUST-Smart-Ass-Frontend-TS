import { StyleSheet, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function CustomButton({ title = "Save", onPress = () => {} }) {
    return (
        <Pressable style={style.button} onPress={onPress} >
            <Icon name='add-circle' size={36} color={'white'} />
            <Text style={style.text}> {title} </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius: 45,
        elevation: 3,
        backgroundColor: 'rgba(239, 30, 59, 0.80)',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        paddingHorizontal:4,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})