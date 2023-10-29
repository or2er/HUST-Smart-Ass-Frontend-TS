import { StyleSheet, SafeAreaView, FlatList, Image, useColorScheme, Pressable } from 'react-native';
import { View } from '@/components/Themed';
import {
    Text,
} from 'react-native-paper';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import AssistantsScreen from '@/containers/AssistantsScreen';

export default function AI_Assistants_Screen({ navigation }) {
    const colorScheme = useColorScheme();

    const dataSource = [
        {
            img_uri: require('@/assets/images/robot.png'),
            title: 'Auto Functions',
            desc: 'Set up daily tasks and make AI do it for you automatically.',
            redirect: 'af_tasklist',
        },
        {
            img_uri: require('@/assets/images/deep-learning.png'),
            title: 'Context Search',
            desc: 'Help you look through documents, videos for data and summary.',
            redirect: ''
        },
        {
            img_uri: require('@/assets/images/ocr.png'),
            title: 'OCR Function',
            desc: 'Converts an image of text or image of document into digital file for you.',
            redirect: ''
        },
        {
            img_uri: require('@/assets/images/file.png'),
            title: 'Summarize',
            desc: 'Extract key points from long texts or documents for you',
            redirect: ''
        }
    ]
    return (
        <SafeAreaView style={styles.container}>
            {/* <AssistantsScreen /> */}
            <Text variant='headlineSmall' style={{
                fontFamily: 'DMSans',
                fontWeight: 'bold',
                color: Colors[colorScheme ?? 'light'].text,
                paddingBottom: 12,
                paddingLeft: 12
            }}>
                AI Assistants
            </Text>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#FAFAFA',
                        borderColor: '#F0F0F0',
                        borderWidth: 1,
                        padding: 12,
                        borderRadius: 16,
                        margin: 6
                    }}>
                        <Link href={item.redirect && item.redirect} asChild>
                            <Pressable >

                                <Image style={styles.imageThumbnail} source={item.img_uri} />
                                <Text variant='titleMedium' style={{
                                    fontWeight: 'bold'
                                }} >
                                    {item.title}
                                </Text>
                                <Text variant='bodyMedium' style={{
                                    color: '#848484'
                                }}>
                                    {item.desc}
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 48,
        backgroundColor: 'white'
    },
    imageThumbnail: {
        width: 64,
        height: 64,
        marginBottom: 8
    }
});
