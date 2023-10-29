import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import {
    Text,
    Button,
    Dialog,
    Portal,
    Surface
} from 'react-native-paper'
import { useRouter } from 'expo-router';
import { socket } from '@/utils/socketio';
import { BACKEND_URL } from "@env"

export default function AFTaskCard({item, key_c}) {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const types_dict = {
        yt: 'Youtube',
        pdf: 'PDF'
    }

    const handleStartInteract = (id) => {
        console.log(id)
        router.push({ pathname: '/chat', params: { id: id } });
        setVisible(false);
    }


    return (
        <Surface elevation={0} key={key_c} >
            <Pressable onPress={showDialog}>
                <View style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: '#F0F0F0',
                    borderWidth: 1,
                    padding: 16,
                    borderRadius: 16,
                    marginBottom: 16
                }} >
                    <Text
                        numberOfLines={1}
                        variant='titleMedium'
                        style={{
                            fontWeight: 'bold',
                            paddingBottom: 4
                        }} >
                        {item.name}
                    </Text>

                    {/* <View style={{
            backgroundColor: '#FAFAFA',
            flexDirection: 'row',
            paddingBottom: 4
        }} >
            {item.tags.map((item, key) => {
                return (
                    <Text variant='bodySmall' key={key} style={{
                        color: '#0070F0',
                        marginRight: 8
                    }}>
                        {item}
                    </Text>
                )
            })}
        </View> */}

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: '#FAFAFA'
                    }} >
                        <Text variant='bodyMedium' style={{
                            color: '#312E49',
                            marginRight: 8
                        }} >
                            Type : {types_dict[item.type]}
                        </Text>

                        <Text variant='bodyMedium' style={{
                            color: '#312E49'
                        }} >
                            Status : {item.processing_status}
                        </Text>
                    </View>
                </View>
            </Pressable>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={{
                    backgroundColor: '#F8F8F8',
                    borderRadius: 16
                }} >
                    <Dialog.Content>
                        <Text
                            numberOfLines={1}
                            variant='titleMedium'
                            style={{
                                fontWeight: 'bold',
                                paddingBottom: 4
                            }} >
                            {item.name}
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#FAFAFA'
                        }} >
                            <Text variant='bodyMedium' style={{
                                color: '#312E49',
                                marginRight: 8
                            }} >
                                Type : {types_dict[item.type]}
                            </Text>

                            <Text variant='bodyMedium' style={{
                                color: '#312E49'
                            }} >
                                Status : {item.processing_status}
                            </Text>
                        </View>
                        {item.processing_status == 1 && (
                            <Button mode="contained" buttonColor='rgba(239, 30, 59, 0.8)' onPress={() => handleStartInteract(item.id)} style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 16
                            }}>
                                Start Interact
                            </Button>
                        )}

                    </Dialog.Content>
                </Dialog>
            </Portal>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
});
