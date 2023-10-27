import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, IconButton, Button } from 'react-native-paper';
import Colors from '@/constants/Colors';
import { useState } from 'react';

export default function SuperNoteCard({ }) {
    return (
        <View style={{
            backgroundColor: '#FBFBFB',
            // width: 310,
            height: 150,
            padding: 10,
            paddingRight: 18,
            paddingBottom: 18,
            paddingLeft: 17,
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowRadius: 4,
            shadowOpacity: 1,
            elevation: 4,
            borderRadius: 13,
            marginTop: 5,
            marginLeft: 24,
            marginBottom: 20,
            marginRight: 6
        }}>
            <Text style={{
                fontFamily: 'DMSans',
                fontWeight: 'bold',
                fontSize: 25,
                color: '#303437'
            }}>Calculus I</Text>
            <TouchableOpacity style={{
                backgroundColor: 'white',
                width: 75,
                height: 26,
                borderRadius: 50,
                alignItems: 'center',
                marginTop: 7,
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowRadius: 4,
                shadowOpacity: 1,
                elevation: 4,
            }}>
                <Text style={{
                    fontFamily: 'DMSans',
                    textAlign: 'center',
                    fontSize: 12,
                    alignContent: 'center',
                    paddingTop: 5,
                    color: '#5555CB',
                    fontWeight: 'bold'
                }}>
                    STUDY
                </Text>
            </TouchableOpacity>
            <Text style={{
                color: 'rgba(32, 35, 37, 0.50)',
                fontSize: 12,
                marginTop: 7,
                // width: 313,
                lineHeight: 20
            }}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  </Text>
        </View>
    );
};