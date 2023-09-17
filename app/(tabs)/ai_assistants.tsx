import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import AssistantsScreen from '../../containers/AssistantsScreen';

export default function AI_Assistants_Screen() {
  return (
    <View style={styles.container}>
        <AssistantsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
