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
    Surface,
    Searchbar,
    TextInput
} from 'react-native-paper'


export default function RecipeCard({ data, key_c }) {
    const [visible, setVisible] = useState(false);
    // console.log('inside card:', data)

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Surface elevation={0} >
            <Pressable onPress={showDialog} >
                <Surface elevation={0} key={key_c} style={{
                    backgroundColor: '#FAFAFA',
                    borderWidth: 1,
                    borderColor: '#F0F0F0',
                    padding: 12,
                    borderRadius: 8,
                    marginVertical: 4
                }} >
                    <Text
                        variant='bodySmall'
                        style={{
                            color: '#72777A',
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                        }}
                    >
                        {data.Name ? data.Name : 'Demo Food'}
                    </Text>

                </Surface>
            </Pressable>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} style={{
                    backgroundColor: '#F8F8F8',
                    borderRadius: 16,
                    maxHeight: 500
                }}>
                    <Dialog.Content>
                        <View style={{
                            backgroundColor: '#FAFAFA',
                        }}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    backgroundColor: '#FAFAFA',
                                }}
                            >
                                <Text
                                    numberOfLines={1}
                                    variant='titleLarge'
                                    style={{
                                        fontWeight: 'bold',
                                        paddingBottom: 4
                                    }} >
                                    {data.Name}
                                </Text>

                                <Text
                                    variant='bodyMedium'
                                    style={{
                                        fontFamily: 'DMSans',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Ingredients:
                                </Text>
                                {data.RecipeIngredientParts.map((item, key) => {
                                    return (
                                        <Text
                                            variant='bodySmall'
                                            key={key}
                                            style={{
                                                fontFamily: 'DMSans',
                                                color: '#72777A'
                                            }}
                                        >
                                            - {capitalize(item)}
                                        </Text>
                                    )
                                })}

                                <Text
                                    variant='bodyMedium'
                                    style={{
                                        fontFamily: 'DMSans',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Recipe Instructions:
                                </Text>
                                {data.RecipeInstructions.map((item, key) => {
                                    return (
                                        <Text
                                            variant='bodySmall'
                                            key={key}
                                            style={{
                                                fontFamily: 'DMSans',
                                                color: '#72777A'
                                            }}
                                        >
                                            - {capitalize(item)}
                                        </Text>
                                    )
                                })}
                                <Text
                                    variant='bodySmall'
                                    style={{
                                        color: '#72777A'
                                    }}
                                >
                                    - Cook time: {data.CookTime} mins
                                </Text>
                                <Text
                                    variant='bodySmall'
                                    style={{
                                        color: '#72777A'
                                    }}
                                >
                                    - Preparation Time: {data.PrepTime} mins
                                </Text>
                                <Text
                                    variant='bodySmall'
                                    style={{
                                        color: '#72777A'
                                    }}
                                >
                                    - Total Time: {data.TotalTime} mins
                                </Text>
                            </ScrollView>
                        </View>

                    </Dialog.Content>
                </Dialog>
            </Portal>
        </Surface>
    );
}

const styles = StyleSheet.create({

});
