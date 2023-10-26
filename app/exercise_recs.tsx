import { Platform, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import IonIcon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { useNavigation, useRouter } from "expo-router";
import DropDown from "react-native-paper-dropdown";
import {
    Text,
    Button,
    Dialog,
    Portal,
    Surface,
    Searchbar
} from 'react-native-paper'

import ExerciseCard from '@/components/ExercisesCard';

export default function ExerciseRecommendation() {
    const colors = {
        'beginner': 'green',
        'intermediate': '#D68500',
        'expert': 'red'
    }

    const typeList = [
        {
            label: 'Cardio',
            value: 'cardio'
        },
        {
            label: 'Olympic Weightlifting',
            value: 'olympic_weightlifting'
        },
        {
            label: 'Plyometrics',
            value: 'plyometrics'
        },
        {
            label: 'Powerlifting',
            value: 'powerlifting'
        },
        {
            label: 'Strength',
            value: 'strength'
        },
        {
            label: 'Stretching',
            value: 'stretching'
        },
        {
            label: 'Strongman',
            value: 'strongman'
        }
    ]

    const muscleList = [
        {
            label: 'Abdominals',
            value: 'abdominals'
        },
        {
            label: 'Abductors',
            value: 'abductors'
        },
        {
            label: 'Biceps',
            value: 'biceps'
        },
        {
            label: 'Calves',
            value: 'calves'
        },
        {
            label: 'Chest',
            value: 'chest'
        },
        {
            label: 'Forearms',
            value: 'forearms'
        },
        {
            label: 'Glutes',
            value: 'glutes'
        },
        {
            label: 'Hamstrings',
            value: 'hamstrings'
        },
        {
            label: 'Lats',
            value: 'lats'
        },
        {
            label: 'Lower Back',
            value: 'lower_back'
        },
        {
            label: 'Middle Back',
            value: 'middle_back'
        },
        {
            label: 'Neck',
            value: 'neck'
        },
        {
            label: 'Quadriceps',
            value: 'quadriceps'
        },
        {
            label: 'Traps',
            value: 'traps'
        },
        {
            label: 'Triceps',
            value: 'triceps'
        },
    ]

    const difficultyList = [
        {
            label: 'Beginner',
            value: 'beginner'
        },
        {
            label: 'Intermediate',
            value: 'intermediate'
        },
        {
            label: 'Expert',
            value: 'expert'
        },
    ]

    const router = useRouter();

    const [visible, setVisible] = useState(false);
    const [showTypeDropDown, setShowTypeDropDown] = useState(false);
    const [showMuscleDropDown, setShowMuscleDropDown] = useState(false);
    const [showDiffDropDown, setShowDiffDropDown] = useState(false);
    const [type, setType] = useState<string>("");
    const [muscle, setMuscle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");
    const [data, setData] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const onChangeSearch = query => setSearchQuery(query);

    const handleFilter = () => {
        var myHeaders = new Headers();
        myHeaders.append("X-Api-Key", "Ttsv3RpRNd3ryR7qjw+HEQ==NnZkMEKMv7hyYevy");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.api-ninjas.com/v1/exercises?type=${type}&muscle =${muscle}&difficulty=${difficulty}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                // console.log(typeof(result))
                console.log('Filter!')
                setData(result);
                setVisible(false);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("X-Api-Key", "Ttsv3RpRNd3ryR7qjw+HEQ==NnZkMEKMv7hyYevy");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.api-ninjas.com/v1/exercises", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                // console.log(typeof(result))
                setData(result);
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <View style={styles.container}>
            {/* Toolbar */}
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 16,
            }} >
                <Button mode="contained" buttonColor='rgba(239, 30, 59, 0.8)' icon={'filter-outline'} onPress={showDialog} style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    Filter
                </Button>
                <IonIcon name='search-outline' size={24} color={'#303437'} />

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} style={{
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16
                    }} >
                        <Dialog.Content>
                            <Text variant="titleLarge" style={{
                                color: '#312E49',
                                fontWeight: 'bold',
                                marginBottom: 16,
                                fontFamily: 'DMSans'
                            }} >
                                Filter
                            </Text>
                            <Surface elevation={0} style={{
                                marginVertical: 8
                            }} >
                                <DropDown
                                    placeholder={"Type"}
                                    mode={"outlined"}
                                    visible={showTypeDropDown}
                                    showDropDown={() => setShowTypeDropDown(true)}
                                    onDismiss={() => setShowTypeDropDown(false)}
                                    value={type}
                                    setValue={setType}
                                    list={typeList}
                                    dropDownItemTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                    dropDownItemSelectedTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                />
                            </Surface>

                            <Surface elevation={0} style={{
                                marginVertical: 8
                            }} >
                                <DropDown
                                    placeholder={"Muscle"}
                                    mode={"outlined"}
                                    visible={showMuscleDropDown}
                                    showDropDown={() => setShowMuscleDropDown(true)}
                                    onDismiss={() => setShowMuscleDropDown(false)}
                                    value={muscle}
                                    setValue={setMuscle}
                                    list={muscleList}
                                    dropDownItemTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                    dropDownItemSelectedTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                />
                            </Surface>

                            <Surface elevation={0} style={{
                                marginVertical: 8
                            }} >
                                <DropDown
                                    placeholder={"Difficulty"}
                                    mode={"outlined"}
                                    visible={showDiffDropDown}
                                    showDropDown={() => setShowDiffDropDown(true)}
                                    onDismiss={() => setShowDiffDropDown(false)}
                                    value={difficulty}
                                    setValue={setDifficulty}
                                    list={difficultyList}
                                    dropDownItemTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                    dropDownItemSelectedTextStyle={{
                                        fontFamily: 'DMSans'
                                    }}
                                />
                            </Surface>

                            <Surface elevation={0} style={{
                                marginVertical: 8,
                                borderRadius: 45,
                                paddingHorizontal: 84
                            }} >
                                <Button
                                    mode="contained"
                                    buttonColor='rgba(239, 30, 59, 0.8)'
                                    onPress={handleFilter}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}>
                                    Done
                                </Button>
                            </Surface>

                        </Dialog.Content>
                    </Dialog>
                </Portal>
            </View>

            {/* Body */}
            <View style={{
                // paddingBottom:32
            }} >
                <ScrollView>
                    {data && data.map((item, key) => {
                        return (
                            <ExerciseCard data={item} key_card={key} />
                        )
                    })}

                    <Text variant='bodyMedium' style={{

                    }} >
                        Loading ...
                    </Text>
                </ScrollView>
            </View>

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
