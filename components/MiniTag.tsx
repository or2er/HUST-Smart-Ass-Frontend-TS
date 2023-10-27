import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import Colors from '@/constants/Colors';
import { useState } from 'react';

export default function MiniTag() {
    return (
        <TouchableOpacity style={{
            backgroundColor: 'white',
            width: 60,
            height: 25,
            borderRadius: 50,
            alignItems: 'center',
            marginTop: 7,
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowRadius: 4,
            shadowOpacity: 1,
            elevation: 4,
            marginTop: 17,
            marginRight: 13,
            marginLeft: 2,
        }}>
            <Text style={{
                fontFamily: 'DMSans',
                textAlign: 'center',
                fontSize: 10,
                alignContent: 'center',
                paddingTop: 5,
                color: '#5555CB',
                fontWeight: 'bold'
            }}>
                STUDY
            </Text>
        </TouchableOpacity>
    );
}