import { useState } from 'react';
import { Pressable, StyleSheet, ScrollView } from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';
import { View } from '@/components/Themed';
import { useNavigation, useRouter } from "expo-router";
import {
    Text,
    TextInput,
    IconButton,
    Button,
    Checkbox
} from 'react-native-paper';

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

    const [hide, setHide] = useState(true);
    const [checked, setChecked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('red');

    const hasErrors = () => {
        return !/\S+@\S+\.\S+/.test(email) && email != '';
    };

    const checkPass = (pass: string) => {
        setPassword(pass);
        if (strongPassword.test(pass)) {
            setColor('green');
            setMessage('Strong Password');
        } else if (mediumPassword.test(pass)) {
            setColor('yellow');
            setMessage('Medium Password');
        } else {
            setColor('red');
            setMessage('Weak Password');
        }
        // return true;
    }

    const handleSignUp = () => {
        setTimeout(() => {
            router.push('/(tabs)/home');
        }, 1000);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text variant='headlineMedium' style={{
                    fontFamily: 'SF_Pro_Display_Bold',
                    color: '#312E49',
                    marginBottom: 24
                }} > Sign up </Text>

                <View style={styles.form} >
                    <View style={styles.form_section} >
                        <Text variant='bodyMedium' style={styles.form_title}>
                            First Name
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Your First Name'
                            outlineColor='#747980'
                            textColor='#312E49'
                            placeholderTextColor='#747980'
                            defaultValue={firstName}
                            onChangeText={newFirstName => setFirstName(newFirstName)}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                    </View>

                    <View style={styles.form_section} >
                        <Text variant='bodyMedium' style={styles.form_title}>
                            Last name
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Your Last Name'
                            outlineColor='#747980'
                            textColor='#312E49'
                            placeholderTextColor='#747980'
                            defaultValue={lastName}
                            onChangeText={newLastName => setFirstName(newLastName)}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                    </View>

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
                    </View>

                    <View style={styles.additionalSection} >
                        <Text variant='bodyMedium' style={{
                            color: 'rgba(116, 121, 128, 1)'
                        }} >
                            By signing up you agree to our Terms & Condition and Privacy Policy.*
                        </Text>
                    </View>

                    <Button
                        mode='contained'
                        onPress={() => handleSignUp()}
                        style={styles.button}
                    >
                        Sign Up
                    </Button>

                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 16
            }}>
                <Text variant='bodyMedium' style={{
                    color: '#747980',
                    fontFamily: 'SF_Pro_Display_SemiBold'
                }}>
                    Already signed up ?
                </Text>
                <Pressable onPress={() => navigation.navigate("login")}>
                    <Text variant='bodyMedium' style={{
                        color: 'rgba(239, 30, 59, 0.7)',
                        fontFamily: 'SF_Pro_Display_SemiBold',
                        paddingLeft: 8
                    }}>
                        Login
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
