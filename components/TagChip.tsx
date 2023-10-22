import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import Colors from '@/constants/Colors';
import { useState } from 'react';

const mapping = {
    'Project': '#F37373',
    'Resource': '#E1FFE4',
    'Archive': '#A1C0F7',
    'Areas': '#FAEBA0'
}
export default function TagChip({ textName }) {

    return (
        <>
            <TouchableOpacity style={{
                backgroundColor: mapping[textName],
                width: 75,
                height: 26,
                borderRadius: 50,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontFamily: 'DMSans',
                    textAlign: 'center',
                    fontSize: 12,
                    alignContent: 'center',
                    paddingTop: 5,
                    color: 'black'
                }}>
                    {textName}
                </Text>
            </TouchableOpacity>
        </>
    );
}
