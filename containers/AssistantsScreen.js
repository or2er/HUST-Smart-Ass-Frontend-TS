import { StyleSheet, Text, View, Image } from "react-native";

// Import component
import ServiceCard from "../../HUST-Smart-Ass-Frontend/src/components/atoms/ServiceCard";

export default function AssistantsScreen() {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection:'row'
            }}>
                <View style={styles.card}>
                    <Image source={require('../assets/images/robot.png')} style={styles.img} />
                    <Text style={styles.title} >
                        Auto Functions
                    </Text>
                    <Text style={styles.description} >
                        Set up daily tasks and make AI do it for you automatically.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/images/deep-learning.png')} style={styles.img} />
                    <Text style={styles.title} >
                        Context Search
                    </Text>
                    <Text style={styles.description} >
                        Help you look through documents, videos for data and summary.
                    </Text>
                </View>
            </View>

            <View style={{
                flexDirection:'row'
            }}>
                <View style={styles.card}>
                    <Image source={require('../assets/images/ocr.png')} style={styles.img} />
                    <Text style={styles.title} >
                        OCR Function
                    </Text>
                    <Text style={styles.description} >
                        Converts an image of text or image of document into digital file for you.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Image source={require('../assets/images/file.png')} style={styles.img} />
                    <Text style={styles.title} >
                        Summarize
                    </Text>
                    <Text style={styles.description} >
                        Extract key points from long texts or documents for you
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        padding: 12
    },
    card: {
        borderRadius: 16,
        width: '48%',
        backgroundColor: '#F0F0F0',
        elevation: 1,
        padding: 12,
        margin:4
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