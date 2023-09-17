import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import MessagesScreen from '../../containers/MessagesScreen';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
        <MessagesScreen />
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
