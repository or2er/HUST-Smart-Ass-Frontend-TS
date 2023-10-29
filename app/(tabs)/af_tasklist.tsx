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

import AFTaskCard from '@/components/AFTaskCard';

export default function Messages() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    const types_dict = {
        yt: 'Youtube',
        pdf: 'PDF'
    }

    useEffect(() => {
        var formdata = new FormData();
        formdata.append("id", "chat");
        formdata.append("num", "10");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://192.168.6.50:8000/doc/read", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('doc/read:', result);
                setData(result['data'])
                // result['data'].forEach(element => {

                //     socket.emit('post-prog', element.id);
                //     socket.on('get-prog', (id, completion_rate) => {
                //         element['completion_rate'] = completion_rate
                //         // console.log(element)
                //         // tmp.push(element)
                //         setData([...data, element])
                //     })
                // });
                // console.log(tmp)

            })
            .catch(error => console.log('error', error));
    }, [])


    const filterChoice = ['Newest', 'Oldest'];
    const [typeF, setTypeF] = useState(0);

    const handleFilter = () => {
        const tmp = typeF + 1
        if (tmp < filterChoice.length) {
            setTypeF(tmp)
        } else {
            setTypeF(0)
        }
    };

    const handleStartInteract = (id) => {
        console.log(id)
        router.push({ pathname: '/chat', params: { id: id } });
        setVisible(false);
    }

    return (
        <View style={styles.container}>
            {/* Toolbar */}
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16
            }} >
                <Button mode="contained" buttonColor='rgba(239, 30, 59, 0.8)' icon={'filter-outline'} onPress={() => handleFilter()} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {filterChoice[typeF]}
                </Button>
                <IonIcon name='search-outline' size={24} color={'#303437'} />
            </View>

            {/* Body */}
            <View>
                <ScrollView>
                    {data && data.map((item, key) => {
                        return (
                            <AFTaskCard item={item} key_c = {key} key={key} />
                        )
                    })}

                    {!data && (
                        <Text variant='bodyMedium' style={{
                            color: '#312E49'
                        }} >
                            No auto functions yet
                        </Text>
                    )}
                </ScrollView>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
});
