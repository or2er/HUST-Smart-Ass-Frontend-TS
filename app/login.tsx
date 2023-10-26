import { useState } from 'react';
import { Pressable, StyleSheet, ScrollView, Easing } from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { useNavigation, useRouter } from "expo-router";
import {
    Text,
    TextInput,
    IconButton,
    Button,
    Checkbox,
    HelperText
} from 'react-native-paper';

export default function Login() {
    const navigation = useNavigation();
    const router = useRouter();

    const [hide, setHide] = useState(true);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('red');

    const handleLogin = () => {
        setTimeout(() => {
            router.push('/(tabs)/home');
        }, 1000);
    }

    const hasErrors = () => {
        return !/\S+@\S+\.\S+/.test(email) && email != '';
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text variant='headlineMedium' style={{
                    fontFamily: 'SF_Pro_Display_Bold',
                    color: '#312E49',
                    marginBottom: 24
                }} > Login </Text>

                <View style={styles.form} >
                    <View style={styles.form_section} >
                        <Text variant='bodyMedium' style={styles.form_title}>
                            Email
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Your Email'
                            outlineColor='#747980'
                            textColor='#312E49'
                            placeholderTextColor='#747980'
                            onChangeText={newEmail => setEmail(newEmail)}
                            defaultValue={email}
                            left={<TextInput.Icon icon={() => <Ionicon name='mail-outline' size={24} color='#747980' />} />}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                        <HelperText type="error" visible={hasErrors()}>
                            Email address is invalid!
                        </HelperText>
                    </View>

                    <View style={styles.form_section} >
                        <Text variant='bodyMedium' style={styles.form_title}>
                            Password
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Your Password'
                            outlineColor='#747980'
                            textColor='#312E49'
                            placeholderTextColor='#747980'
                            defaultValue={password}
                            onChangeText={newPassword => setPassword(newPassword)}
                            secureTextEntry={hide}
                            left={<TextInput.Icon icon={() => <Ionicon name='lock-closed-outline' size={24} color='#747980' />} />}
                            right={<TextInput.Icon
                                onPress={() => setHide(!hide)}
                                icon={() => <Ionicon name={hide ? 'eye-outline' : 'eye-off-outline'} size={24} color='#747980' />} />}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center",
                            }}
                        />
                        {/* <HelperText type="error" style={{color: color}} visible={true}>
                            {message}
                        </HelperText> */}
                    </View>

                    <View style={styles.additionalSection} >
                        <View style={styles.remember} >
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked)
                                }}
                                uncheckedColor='#667085'
                            />
                            <Text variant='bodyMedium' style={{ color: '#747980', fontFamily: 'SF_Pro_Display_SemiBold' }} >
                                Remember me
                            </Text>
                        </View>

                        <Pressable onPress={() => alert("Press!")} >
                            <Text variant='bodyMedium' style={{ color: 'rgba(239, 30, 59, 0.7)', fontFamily: 'SF_Pro_Display_SemiBold' }} >
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>

                    <Button
                        mode='contained'
                        onPress={() => handleLogin()}
                        style={styles.button}
                    >
                        Sign In
                    </Button>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 56 }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#CDCED1' }} />
                        <View>
                            <Text variant='bodyMedium' style={{
                                width: 120,
                                textAlign: 'center',
                                fontStyle: 'italic',
                                fontFamily: 'SF_Pro_Display_SemiBold',
                                color: '#747980'
                            }}>
                                or continue with
                            </Text>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#CDCED1' }} />
                    </View>

                    <View style={styles.logoSection} >
                        <IconButton
                            mode='outlined'
                            icon='facebook'
                            iconColor='#312E49'
                            size={56}
                            onPress={() => alert('Press!')}
                            style={{
                                borderRadius: 6,
                                borderColor: '#EBE9F1'
                            }}
                        />

                        <IconButton
                            mode='outlined'
                            icon='google'
                            iconColor='#312E49'
                            size={56}
                            onPress={() => alert('Press!')}
                            style={{
                                borderRadius: 6,
                                borderColor: '#EBE9F1',
                            }}
                        />

                        <IconButton
                            mode='outlined'
                            icon='linkedin'
                            iconColor='#312E49'
                            size={56}
                            onPress={() => alert('Press!')}
                            style={{
                                borderRadius: 6,
                                borderColor: '#EBE9F1'
                            }}
                        />

                    </View>



                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 16,
            }}>
                <Text variant='bodyMedium' style={{
                    color: '#747980',
                    fontFamily: 'SF_Pro_Display_SemiBold'
                }}>
                    Don't have an account?
                </Text>
                <Pressable onPress={() => {
                    router.push("/signup");
                }}>
                    <Text variant='bodyMedium' style={{
                        color: 'rgba(239, 30, 59, 0.7)',
                        fontFamily: 'SF_Pro_Display_SemiBold',
                        paddingLeft: 8
                    }}>
                        Sign Up
                    </Text>
                </Pressable>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 64
    },
    form: {

    },
    form_section: {
        marginBottom: 18
    },
    form_title: {
        color: '#312E49',
        fontFamily: "SF_Pro_Display_Bold",
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 6
    },
    remember: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    additionalSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: "#EF1E3B",
        borderRadius: 6,
        marginTop: 64,
        fontFamily: 'SF_Pro_Display_Bold'
    },
    logoSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    icon: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#EBE9F1',
        borderRadius: 6
    }
});
