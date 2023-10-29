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
    Searchbar,
    TextInput
} from 'react-native-paper'
import { BACKEND_URL } from "@env"

import RecipeCard from '@/components/RecipeCard';

export default function DietRecommendation() {

    const genderList = [
        {
            label: 'Male',
            value: 'Male'
        },
        {
            label: 'Female',
            value: 'Female'
        }
    ]

    const activityList = [
        {
            label: 'Little/no exercise',
            value: 'Little/no exercise'
        },
        {
            label: 'Light exercise',
            value: 'Light exercise'
        },
        {
            label: 'Moderate exercise (3-5 days/wk)',
            value: 'Moderate exercise (3-5 days/wk)'
        },
        {
            label: 'Very active (6-7 days/wk)',
            value: 'Very active (6-7 days/wk)'
        },
        {
            label: 'Extra active (very active & physical job)',
            value: 'Extra active (very active & physical job)'
        }
    ]

    const planList = [
        {
            label: 'Maintain weight',
            value: 'Maintain weight'
        },
        {
            label: 'Mild weight loss',
            value: 'Mild weight loss',
        },
        {
            label: 'Weight loss',
            value: 'Weight loss'
        },
        {
            label: 'Extreme weight loss',
            value: 'Extreme weight loss'
        }
    ]

    const [age, setAge] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [showGenderDropDown, setShowGenderDropDown] = useState(false);
    const [showActivityDropDown, setShowActivityDropDown] = useState(false);
    const [showPlanDropDown, setShowPlanDropDown] = useState(false);
    const [gender, setGender] = useState<string>("");
    const [activity, setActivity] = useState<string>("");
    const [plan, setPlan] = useState<string>("");
    const [data, setData] = useState();

    const handleRecommend = () => {
        var formdata = new FormData();
        formdata.append("age", age);
        formdata.append("height", height);
        formdata.append("weight", weight);
        formdata.append("gender", gender);
        formdata.append("activity", activity);
        formdata.append("weight_plan", plan);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const requestUri = "http://" + BACKEND_URL;

        fetch(`${requestUri}/recommend`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                setData(result)
            })
            .catch(error => console.log('error', error));
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text variant='headlineSmall' style={{
                    color: '#312E49',
                    fontFamily: 'DMSans',
                    fontWeight: 'bold',
                    paddingTop: 16,
                    alignSelf: 'center'
                }} >
                    Generate recommendation
                </Text>

                {/* Basic info row */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }} >
                    <Surface elevation={0} style={{
                        width: 80,
                        flexDirection: 'column',
                        // marginRight: 16
                    }} >
                        <Text variant='titleSmall'
                            style={{
                                color: '#312E49',
                                fontFamily: 'DMSans',
                                fontWeight: 'bold',
                                paddingTop: 16,
                                marginBottom: 8
                            }}>
                            Age
                        </Text>
                        <TextInput
                            mode='outlined'
                            keyboardType='numeric'
                            placeholder='Age'
                            outlineColor='#747980'
                            textColor='#312E49'
                            placeholderTextColor='#747980'
                            onChangeText={newAge => setAge(newAge)}
                            defaultValue={age}
                            // left={<TextInput.Icon icon={() => <Ionicon name='mail-outline' size={24} color='#747980' />} />}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                    </Surface>

                    <Surface elevation={0} style={{
                        width: 90,
                        flexDirection: 'column'
                    }} >
                        <Text variant='titleSmall'
                            style={{
                                color: '#312E49',
                                fontFamily: 'DMSans',
                                fontWeight: 'bold',
                                paddingTop: 16,
                                marginBottom: 8
                            }}>
                            Height-cm
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Height'
                            outlineColor='#747980'
                            textColor='#312E49'
                            keyboardType='numeric'
                            placeholderTextColor='#747980'
                            onChangeText={newHeight => setHeight(newHeight)}
                            defaultValue={height}
                            // left={<TextInput.Icon icon={() => <Ionicon name='mail-outline' size={24} color='#747980' />} />}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                    </Surface>

                    <Surface elevation={0} style={{
                        width: 90,
                        flexDirection: 'column'
                    }} >
                        <Text variant='titleSmall'
                            style={{
                                color: '#312E49',
                                fontFamily: 'DMSans',
                                fontWeight: 'bold',
                                paddingTop: 16,
                                marginBottom: 8
                            }}>
                            Weight-kg
                        </Text>
                        <TextInput
                            mode='outlined'
                            placeholder='Weight'
                            outlineColor='#747980'
                            textColor='#312E49'
                            keyboardType='numeric'
                            placeholderTextColor='#747980'
                            onChangeText={newWeight => setWeight(newWeight)}
                            defaultValue={weight}
                            // left={<TextInput.Icon icon={() => <Ionicon name='mail-outline' size={24} color='#747980' />} />}
                            style={{
                                backgroundColor: '#fff',
                                height: 50,
                                justifyContent: "center"
                            }}
                        />
                    </Surface>
                </View>

                <Surface elevation={0} style={{
                    // width: 80,
                    flexDirection: 'column',
                    // marginRight: 16
                }} >
                    <Text variant='titleSmall'
                        style={{
                            color: '#312E49',
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            paddingTop: 16,
                            marginBottom: 8
                        }}>
                        Gender
                    </Text>
                    <DropDown
                        placeholder={"Gender"}
                        mode={"outlined"}
                        visible={showGenderDropDown}
                        showDropDown={() => setShowGenderDropDown(true)}
                        onDismiss={() => setShowGenderDropDown(false)}
                        value={gender}
                        setValue={setGender}
                        list={genderList}
                        dropDownItemTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                        dropDownItemSelectedTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                    />
                </Surface>

                <Surface elevation={0} style={{
                    // width: 80,
                    flexDirection: 'column',
                    // marginRight: 16
                }} >
                    <Text variant='titleSmall'
                        style={{
                            color: '#312E49',
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            paddingTop: 16,
                            marginBottom: 8
                        }}>
                        Activity
                    </Text>
                    <DropDown
                        placeholder={"Activity"}
                        mode={"outlined"}
                        visible={showActivityDropDown}
                        showDropDown={() => setShowActivityDropDown(true)}
                        onDismiss={() => setShowActivityDropDown(false)}
                        value={activity}
                        setValue={setActivity}
                        list={activityList}
                        dropDownItemTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                        dropDownItemSelectedTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                    />
                </Surface>

                <Surface elevation={0} style={{
                    // width: 80,
                    flexDirection: 'column',
                    // marginRight: 16
                }} >
                    <Text variant='titleSmall'
                        style={{
                            color: '#312E49',
                            fontFamily: 'DMSans',
                            fontWeight: 'bold',
                            paddingTop: 16,
                            marginBottom: 8
                        }}>
                        Choose your weight loss plan
                    </Text>
                    <DropDown
                        placeholder={"Your Plan"}
                        mode={"outlined"}
                        visible={showPlanDropDown}
                        showDropDown={() => setShowPlanDropDown(true)}
                        onDismiss={() => setShowPlanDropDown(false)}
                        value={plan}
                        setValue={setPlan}
                        list={planList}
                        dropDownItemTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                        dropDownItemSelectedTextStyle={{
                            fontFamily: 'DMSans'
                        }}
                    />
                </Surface>
                {/* Button */}
                <Surface elevation={0} style={{
                    marginVertical: 16,
                    borderRadius: 45,
                    paddingHorizontal: 104
                }} >
                    <Button
                        mode="contained"
                        buttonColor='rgba(239, 30, 59, 0.8)'
                        onPress={handleRecommend}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                        Done
                    </Button>
                </Surface>

                {data && (
                    <Surface elevation={0}>
                        {/* Data Display */}
                        {/* BMI Calculator */}
                        <Surface elevation={0} >
                            <Text variant='titleMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    paddingTop: 16,
                                    marginBottom: 4
                                }}>
                                BMI Calculator
                            </Text>

                            <Surface elevation={0} style={{
                                flexDirection: 'row'
                            }} >
                                <Text variant='bodyMedium'
                                    style={{
                                        fontFamily: 'DMSans',
                                        color: '#72777A'
                                    }}
                                >
                                    Body Mass Index (BMI): {data.bmi} kg/m²
                                </Text>
                                <Text variant='bodyMedium'
                                    style={{
                                        fontFamily: 'DMSans',
                                        color: '#DD2F2F',
                                        marginLeft: 8
                                    }}
                                >
                                    ( {data.status} )
                                </Text>
                            </Surface>

                            <Text variant='bodyMedium'
                                style={{
                                    fontFamily: 'DMSans',
                                    color: '#72777A'
                                }}
                            >
                                Healthy BMI range: 18.5 kg/m² - 25 kg/m².
                            </Text>
                        </Surface>

                        {/* Calories Calculator */}
                        <Surface elevation={0} >
                            <Text variant='titleMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    paddingTop: 16,
                                    marginBottom: 4
                                }}>
                                Calories Calculator
                            </Text>
                            <Text variant='bodySmall'
                                style={{
                                    fontFamily: 'DMSans',
                                    color: '#72777A'
                                }}
                            >
                                The results show a number of daily calorie estimates that can be used as a guideline for how many calories to consume each day to maintain, lose, or gain weight at a chosen rate.
                            </Text>

                            <Surface elevation={0} style={{
                                flexDirection: 'row',
                                marginTop: 16,
                                justifyContent: 'space-evenly'
                            }} >
                                <Surface elevation={0} style={{
                                    alignItems: 'center',
                                    width: 160
                                }} >
                                    <Text variant='bodyLarge' style={{
                                        fontFamily: 'DMSans',
                                    }}>
                                        Maintain weight
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#72777A'
                                    }}>
                                        {Math.round(data.calories_calculator["Maintain weight"].calories_per_week / 7)} Calories/day
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#05B54B'
                                    }}>
                                        -{data.calories_calculator["Maintain weight"].loss_per_week} kg/week
                                    </Text>
                                </Surface>

                                <Surface elevation={0} style={{
                                    alignItems: 'center',
                                    width: 160
                                }} >
                                    <Text variant='bodyLarge' style={{
                                        fontFamily: 'DMSans',
                                    }}>
                                        Mild weight loss
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#72777A'
                                    }}>
                                        {Math.round(data.calories_calculator["Mild weight loss"].calories_per_week / 7)} Calories/day
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#05B54B'
                                    }}>
                                        -{data.calories_calculator["Mild weight loss"].loss_per_week} kg/week
                                    </Text>
                                </Surface>
                            </Surface>

                            <Surface elevation={0} style={{
                                flexDirection: 'row',
                                marginTop: 16,
                                justifyContent: 'space-evenly'
                            }} >
                                <Surface elevation={0} style={{
                                    alignItems: 'center',
                                    width: 160
                                }} >
                                    <Text variant='bodyLarge' style={{
                                        fontFamily: 'DMSans',
                                    }}>
                                        Weight loss
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#72777A'
                                    }}>
                                        {Math.round(data.calories_calculator["Weight loss"].calories_per_week / 7)} Calories/day
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#05B54B'
                                    }}>
                                        -{data.calories_calculator["Weight loss"].loss_per_week} kg/week
                                    </Text>
                                </Surface>

                                <Surface elevation={0} style={{
                                    alignItems: 'center',
                                    width: 160
                                }} >
                                    <Text variant='bodyLarge' style={{
                                        fontFamily: 'DMSans',
                                    }}>
                                        Extreme weight loss
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#72777A'
                                    }}>
                                        {Math.round(data.calories_calculator["Extreme weight loss"].calories_per_week / 7)} Calories/day
                                    </Text>
                                    <Text variant='bodyMedium' style={{
                                        fontFamily: 'DMSans',
                                        color: '#05B54B'
                                    }}>
                                        -{data.calories_calculator["Extreme weight loss"].loss_per_week} kg/week
                                    </Text>
                                </Surface>
                            </Surface>
                        </Surface>

                        {/* Calories Calculator */}
                        <Surface elevation={0} >
                            <Text variant='titleMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    paddingTop: 16,
                                    marginBottom: 4
                                }}>
                                Diet Recommendator
                            </Text>
                            <Text variant='bodyMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    marginBottom: 4
                                }}
                            >
                                Recommended recipes:
                            </Text>
                            <Text variant='bodyMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    marginBottom: 8
                                }}
                            >
                                BREAKFAST
                            </Text>

                            {data && data.diet.breakfast.map((item, key) => {
                                return (
                                    <RecipeCard data={item} key_c={key} key={key} />
                                )
                            })}

                            <Text variant='bodyMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    marginVertical: 8
                                }}
                            >
                                LUNCH
                            </Text>

                            {data && data.diet.lunch.map((item, key) => {
                                return (
                                    <RecipeCard data={item} key_c={key} key={key} />
                                )
                            })}

                            <Text variant='bodyMedium'
                                style={{
                                    color: '#312E49',
                                    fontFamily: 'DMSans',
                                    fontWeight: 'bold',
                                    marginVertical: 8
                                }}
                            >
                                DINNER
                            </Text>

                            {data && data.diet.dinner.map((item, key) => {
                                return (
                                    <RecipeCard data={item} key_c={key} key={key} />
                                )
                            })}

                        </Surface>
                    </Surface>
                )}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0
    },
});
