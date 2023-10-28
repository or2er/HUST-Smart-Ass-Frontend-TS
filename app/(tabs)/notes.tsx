import { StyleSheet } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Text, View } from '@/components/Themed';
import { FAB } from 'react-native-paper';
import Colors from '@/constants/Colors';
import { useNavigation, useRouter } from "expo-router";
import Dialog from "react-native-dialog";

import {
    Pressable,
    ScrollView,
    Image,
    useColorScheme,
    ImageBackground,
} from 'react-native';
import NotesCard from '@/components/NotesCard';
import { useState } from 'react';
import TagChip from '@/components/TagChip';
import SuperNoteCard from '@/components/SuperNoteCard';
import PopupTextInput from '@/components/PopUpTextInput';

const options = [
    { label: "Task", value: "1" },
    { label: "Note", value: "2" }
];


export default function NotesScreen() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('1');

    const switchTab = (value) => {
        setActiveTab(value);
    };
    const changeTab = () => {
        if(activeTab === '2')
            router.push('/createNote')
        if(activeTab === '1') {
            setModalVisible(true)
        }

    }

    const [isModalVisible, setModalVisible] = useState(false);
    const [enteredText, setEnteredText] = useState('');

  const handleSave = (text) => {
    setEnteredText(text);
  };


    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.container}>
                <SwitchSelector
                    options={options}
                    initial={0}
                    borderColor='#C7C9CA'
                    buttonColor='#303437'
                    hasPadding
                    height={47}
                    fontSize={15}
                    textStyle={{
                        fontFamily: 'DMSans',
                        fontWeight: 'bold'
                    }}
                    selectedTextStyle={{
                        fontFamily: 'DMSans',
                        fontWeight: 'bold'
                    }}
                    style={{
                        width: 170,
                        marginTop: 10,
                    }}
                    buttonMargin={2}
                    onPress={switchTab}
                />
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={changeTab}
                />
            </View>
            <View>
                <ScrollView>
                    {activeTab === '1' && (
                        <>
                            <View style={styles.container2}>
                                <Text style={{
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                }}>
                                    Today
                                </Text>
                                <NotesCard tagName='P' colorTag='#F37373'></NotesCard>
                                <NotesCard tagName='R' colorTag='#E1FFE4'></NotesCard>
                                <NotesCard tagName='R' colorTag='#E1FFE4'></NotesCard>
                            </View>

                            <View style={styles.container3}>
                                <Text style={{
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                }}>
                                    Older
                                </Text>
                                <NotesCard tagName='A' colorTag='#FAEBA0'></NotesCard>
                                <NotesCard tagName='R' colorTag='#E1FFE4'></NotesCard>
                                <NotesCard tagName='A' colorTag='#A1C0F7'></NotesCard>
                                <NotesCard tagName='A' colorTag='#A1C0F7'></NotesCard>

                            </View>
                        </>
                    )}
                    {activeTab === '2' && (
                        <View style={{
                            // marginRight: 16
                        }}>
                            <View style={{
                                marginTop: 25,
                                // flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}>
                                <TagChip textName='Project'></TagChip>
                                <TagChip textName='Resource'></TagChip>
                                <TagChip textName='Archive'></TagChip>
                                <TagChip textName='Areas'></TagChip>
                            </View>
                            <View style={styles.container4}>
                                <ScrollView style={{ flex: 1 }}>
                                    <SuperNoteCard></SuperNoteCard>
                                    <SuperNoteCard></SuperNoteCard>
                                    <SuperNoteCard></SuperNoteCard>
                                    <SuperNoteCard></SuperNoteCard>
                                </ScrollView>
                            </View>

                        </View>
                    )}
                </ScrollView>
            </View>
            <PopupTextInput
        isVisible={isModalVisible}
        onSave={handleSave}
        onCancel={() => setModalVisible(false)}
      />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingTop: 48,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    container2: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    container3: {
        paddingHorizontal: 16,
        paddingTop: 20,
        marginTop: 15,
        marginBottom: 40
    },
    container4: {
        marginTop: 20,
        marginBottom: 120,
        marginRight: 15
    },
    fab: {
        marginTop: 10,
        backgroundColor: 'white',
        paddingLeft: 6,
        width: 68,
        height: 54,
    },
});