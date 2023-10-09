import {
    Pressable,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
import { View } from '@/components/Themed';
import { Text, useTheme } from 'react-native-paper';

import Colors from '@/constants/Colors';

export default function ImageRecCard() {
    // const theme = useTheme();
    // const colorScheme = useColorScheme();

    return (
        <View style={{
            marginRight:16
        }} >
            <Pressable onPress={() => alert('Click!')} >
                <View style={styles.imageWrapper} >
                    <ImageBackground source={require('@/assets/images/vegetable.jpg')} style={styles.theImage}>
                        <View style={styles.centerText}>
                            <Text variant='bodyLarge' style={{
                                color: '#fff',
                                fontWeight: 'bold'
                            }} >HEALTH</Text>
                        </View>
                    </ImageBackground>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 'auto',
        width: '100%',
        overflow: "hidden",
        borderRadius: 24,
    },
    theImage: {
        width: 220,
        height: 160,
        resizeMode: "cover",
    },
    centerText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
});
