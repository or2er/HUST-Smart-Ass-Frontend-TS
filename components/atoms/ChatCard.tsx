import { StyleSheet, Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function ChatCard({ title = "Lorem Ipsum", description = "lorem ipsum", onPress = () => { } }) {
    return (
        <Pressable style={style.container} onPress={onPress} >
            <Icon name="baseball" size={32} />
            <View style={{
                paddingLeft: 16
            }} >
                <View>
                    <Text style={style.title} >
                        {title}
                    </Text>
                    <Text style={style.description} >
                        {description} - 05: 32
                    </Text>
                </View>

            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#312E49',
        fontSize: 16
    },
    description: {
        color: 'rgba(32, 35, 37, 0.50)',
        fontSize: 12,

    },
    container: {
        marginLeft: 2,
        width: 327,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        elevation: 2,
        borderRadius: 14,
        borderBlockColor: '#fff',
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        paddingHorizontal: 4,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})