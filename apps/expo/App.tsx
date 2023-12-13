import { UserAccountModel } from '@hc/shared/models/userAccount';
import { isEven } from '@hc/shared/utils/isEven';
import { isOdd } from '@hc/shared/utils/isOdd';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app! even:{' '}
        {isEven(10) ? 'true' : 'false'} odd:
        {isOdd(10) ? 'true' : 'false'} model: {UserAccountModel}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otro: {},
});
