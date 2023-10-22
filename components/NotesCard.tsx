import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import Colors from '@/constants/Colors';
import { useState } from 'react';

export default function NotesCard({ tagName, colorTag }) {
    const [checked, setChecked] = useState(false);

    const toggleCheck = () => {
        setChecked(!checked);
    };

    return (
        <Card mode='elevated' style={{ backgroundColor: 'white', marginTop: 12 }}>
            <Card.Content>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={toggleCheck}>
                        <View style={{
                            width: 35,
                            height: 35,
                            borderRadius: 50,
                            borderColor: '#C7C9CA',
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {checked ? (
                                <Image
                                    source={require('../assets/images/Tick.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                />
                            ) : null}
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: 'DMSans', fontSize: 16, fontWeight: 'bold' }}>
                                Join codeforce contest
                            </Text>
                            <Text style={{ fontFamily: 'DMSans', fontSize: 10 }}>
                                12:00 PM
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 6, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'DMSans', fontSize: 12 }}>
                                Do problem 1, 2 and 3
                            </Text>
                            <View style={{
                                backgroundColor: colorTag,
                                width: 36,
                                height: 20,
                                borderRadius: 50,
                            }}>
                                <Text style={{
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontSize: 11,
                                    paddingTop: 2.4,
                                }}>{tagName}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
}
