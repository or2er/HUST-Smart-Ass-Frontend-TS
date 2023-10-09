import { StyleSheet, Image, useColorScheme } from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { Text, Card, useTheme,  } from 'react-native-paper';

import Colors from '@/constants/Colors';

export default function TaskRecCard({type}) {
    const colorScheme = useColorScheme();
    const theme = useTheme();
    const color_card = {
        'fitness': '#F0F0FF',
        'daily': '#FFF9F0'
    }

    return (
        <Card style={styles.card} >
            <Card.Content style={styles.content} >
                <View style={styles.text}>
                    <View style={{ backgroundColor: color_card[type] }} >
                        <Text variant="titleLarge" style={{ 
                            fontWeight: 'bold',
                            color: Colors[colorScheme ?? 'light'].text
                        }}>Workout</Text>
                        <Text variant="bodyMedium" style={{
                            color: Colors[colorScheme ?? 'light'].secondaryText
                        }} >Today at 2:45 PM</Text>
                    </View>
                    <Text variant='bodyLarge' style={{
                        // fontWeight:'bold',
                        color: '#6C7072',
                        alignItems: 'center'
                    }} >
                        <IonIcon name='location' size={16} color={'#6C7072'} />
                        HUST GYM
                    </Text>
                </View>
                <View style={styles.right_part} >
                    <View style={{
                        backgroundColor: '#fff',
                        width: 'auto',
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                        borderRadius: 15,
                        // position:'relative',
                        marginLeft: 40
                    }} >
                        <Text variant='bodySmall' style={{
                            color: '#5555CB',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            paddingHorizontal: 16,
                            paddingVertical: 8
                        }} >FITNESS</Text>
                    </View>

                    <Image source={require('@/assets/images/woman_run.png')} style={{
                        position: 'absolute',
                    }} />
                </View>

            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: '#F0F0FF',
        width: 290,
        height: 175,
        marginRight:16
    },
    content: {
        flexDirection: 'row',
        backgroundColor: '#F0F0FF',
        width: '100%',
        height: '100%'
    },
    text: {
        backgroundColor: '#F0F0FF',
        justifyContent: 'space-between'
    },
    right_part: {
        backgroundColor: '#F0F0FF',
        position: 'relative',
    }
});
