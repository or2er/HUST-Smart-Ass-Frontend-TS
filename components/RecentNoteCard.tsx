import {
    Pressable,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import { Button, Text, Card, useTheme } from 'react-native-paper';

import Colors from '@/constants/Colors';

export default function RecentNoteCard() {
    const theme = useTheme();
    const colorScheme = useColorScheme();

    return (
        <Card style={{
            backgroundColor:'#F0F0FF',
            marginBottom: 8
        }} >
            <Card.Content>
                <Text variant='bodyLarge'
                    style={{
                        fontWeight: 'bold',
                        paddingBottom: 8
                    }}
                >
                    Cal I
                </Text>
                <Text variant='bodyMedium'
                    style={{
                        color: Colors[colorScheme ?? 'light'].secondaryText
                    }}
                >
                    A & B = 1 {"\n"}
                    A - B = 0 = All we need is max {"\n"}
                    A B
                </Text>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({

});
