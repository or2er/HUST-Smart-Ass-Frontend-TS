import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import {
    Text,
    Button,
} from 'react-native-paper'

export default function Messages() {

    const trash_data = [
        {
            title: 'Prepare document Calc I',
            tags: ['Send Mail', 'Prepare Document'],
            due_date: '23 Sep',
            status: 'Not Done'
        },
        {
            title: 'Summary Calculus I - Essential Functions',
            tags: ['Send Mail', 'Summary'],
            due_date: '23 Sep',
            status: 'Not Done'
        },
        {
            title: 'Prepare 2D G information ',
            tags: ['Send Mail', 'Summary'],
            due_date: '20 Sep',
            status: 'Not Done'
        },
    ];

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
                    {trash_data.map((item, key) => {
                        return (
                            <View key={key} style={{
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
                                    {item.title}
                                </Text>

                                <View style={{
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
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#FAFAFA'
                                }} >
                                    <Text variant='bodyMedium' style={{
                                        color: '#312E49',
                                        marginRight: 8
                                    }} >
                                        Due on : {item.due_date}
                                    </Text>

                                    <Text variant='bodyMedium' style={{
                                        color: '#312E49'
                                    }} >
                                        Status : {item.status}
                                    </Text>
                                </View>

                            </View>
                        )
                    })}
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
