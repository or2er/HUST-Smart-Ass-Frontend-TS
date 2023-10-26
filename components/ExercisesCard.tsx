import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { useNavigation, useRouter } from "expo-router";
import {
    Text,
    Button,
    Dialog,
    Portal,
    Surface
} from 'react-native-paper'

export default function ExerciseCard({ data, key_card }) {
    const colors = {
        'beginner': 'green',
        'intermediate': '#D68500',
        'expert': 'red'
    }

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    return (
        <View>
            <View key={key_card} style={{
                backgroundColor: '#FAFAFA',
                borderColor: '#F0F0F0',
                borderWidth: 1,
                padding: 16,
                borderRadius: 16,
                marginBottom: 16
            }} >
                <Pressable onPress={showDialog} >
                    <Text
                        numberOfLines={1}
                        variant='titleMedium'
                        style={{
                            fontWeight: 'bold',
                            paddingBottom: 4
                        }} >
                        {data.name}
                    </Text>

                    <View style={{
                        backgroundColor: '#FAFAFA',
                        flexDirection: 'row',
                        paddingBottom: 4
                    }} >
                        <Text variant='bodyMedium' style={{
                            color: '#312E49',
                            marginRight: 8
                        }}>
                            Type:
                        </Text>
                        <Text variant='bodyMedium' style={{
                            color: '#312E49',
                            marginRight: 8,
                            textTransform: 'capitalize'
                        }}>
                            {data.type.split("_")[0]} {data.type.split("_")[1]}
                        </Text>
                    </View>

                    <View style={{
                        backgroundColor: '#FAFAFA',
                        flexDirection: 'row',
                        paddingBottom: 4
                    }} >
                        <Text variant='bodyMedium' style={{
                            color: '#312E49',
                            marginRight: 8
                        }}>
                            Muscle:
                        </Text>
                        <Text variant='bodyMedium' style={{
                            color: '#312E49',
                            marginRight: 8,
                            textTransform: 'capitalize'
                        }}>
                            {data.muscle.split("_")[0]} {data.muscle.split("_")[1]}
                        </Text>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        backgroundColor: '#FAFAFA'
                    }} >
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#FAFAFA',
                        }} >
                            <Text variant='bodyMedium' style={{
                                color: '#312E49',
                                marginRight: 8
                            }} >
                                Difficulty :
                            </Text>
                            <Text variant='bodyMedium' style={{
                                color: colors[data.difficulty],
                                marginRight: 8,
                                textTransform: 'capitalize'
                            }} >
                                {data.difficulty}
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#FAFAFA',
                        }} >
                            <Text variant='bodyMedium' style={{
                                color: '#312E49',
                                marginRight: 8
                            }} >
                                Equipment :
                            </Text>
                            <Text variant='bodyMedium' style={{
                                // color: 'green',
                                marginRight: 8,
                                textTransform: 'capitalize'
                            }} >
                                {data.equipment}
                            </Text>
                        </View>

                    </View>
                </Pressable>
            </View>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={{
                    backgroundColor: '#F8F8F8',
                    borderRadius: 16
                }}>
                    <Dialog.Content>
                        <Text
                            numberOfLines={1}
                            variant='titleLarge'
                            style={{
                                fontWeight: 'bold',
                                paddingBottom: 4
                            }} >
                            {data.name}
                        </Text>

                        <View style={{
                                flexDirection: 'column',
                                backgroundColor: '#FAFAFA',
                            }} >
                                <Text variant='bodyLarge' style={{
                                    color: '#312E49',
                                    marginRight: 8,
                                    fontWeight:'bold',
                                    paddingBottom:4
                                }} >
                                    Instructions :
                                </Text>
                                <Text variant='bodyMedium' style={{
                                    color: '#72777A',
                                    marginRight: 8,
                                    // textTransform: 'capitalize'
                                }} >
                                    {data.instructions}
                                </Text>
                            </View>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 48
    },
});
