import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function NotesScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello Notes!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
