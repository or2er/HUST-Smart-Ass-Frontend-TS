import { StyleSheet } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Text, View } from '@/components/Themed';
import { FAB } from 'react-native-paper';
import Colors from '@/constants/Colors';
import {
    Pressable,
    ScrollView,
    Image,
    useColorScheme,
    ImageBackground,
} from 'react-native';
import NotesCard from '@/components/NotesCard';

const options = [
    { label: "Task", value: "1" },
    { label: "Note", value: "2" }
];


export default function NotesScreen() {
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
                />
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <ScrollView style={{ paddingBottom: 12 }}>
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
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingTop: 48,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    container2: {
        paddingHorizontal: 30,
        paddingTop: 16,
    },
    container3: {
        paddingHorizontal: 30,
        paddingTop: 20,
        marginTop: 15,
    },
    fab: {
        marginTop: 10,
        backgroundColor: 'white',
        paddingLeft: 6,
        width: 68,
        height: 54,

    },
});
