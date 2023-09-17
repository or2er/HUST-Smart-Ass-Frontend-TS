import { StyleSheet, Text, View, Image } from "react-native";

export default function ServiceCard({ img_uri = '../../assets/images/robot.png', title = "", desc = "" }) {
    return (
        <View style={styles.card}>
            <Image source={require('../../assets/images/robot.png')} style={styles.img} />
            <Text style={styles.title} >
                {title}
            </Text>
            <Text style={styles.description} >
                {desc}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '50%',
        backgroundColor: '#F0F0F0',
        elevation: 1,
        borderRadius: 16,
        padding: 12
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8
    },
    description: {
        fontSize: 14,
        color: '#848484'
    },
    img: {
        marginBottom: 12,
        width: 64,
        height: 64
    }
})