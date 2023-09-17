import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function SavedScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello Saved!</Text>
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
