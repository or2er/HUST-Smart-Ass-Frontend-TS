import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function PopupTextInput({ isVisible, onSave, onCancel }) {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    const handleSave = () => {
      onSave(text);
      setText('');
      onCancel();
    };
    const handleCancel = () => {
        
    }
  
    return (
        <Modal isVisible={isVisible}>
        <View style = {{backgroundColor: 'white', padding: 15, marginBottom: 0, 
        borderRadius: 15,
        }}>
          <TextInput
            value={text}
            onChangeText={(newText) => setText(newText)}
            placeholder="Some tasks"
            style = {{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: 'bold'
            }}
          />
          <TextInput
            value={text2}
            onChangeText={(newText2) => setText2(newText2)}
            placeholder="Description"
            style = {{
                fontSize: 15,
                marginBottom: 10
            }}
          />
          <View>
          <View style = {{
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <Pressable onPress={handleSave} style={{
            marginRight: 8
          }}> 
          <Text style = {{
            fontFamily: 'DMSans',
            fontWeight: 'bold',
            fontSize: 15
          }}>
            Save
            </Text>
          </Pressable>
          
          </View>
          </View>
        </View>
      </Modal>
  
    );
  };
  