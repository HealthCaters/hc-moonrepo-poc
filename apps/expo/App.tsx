import { UserAccountModel } from '@hc/shared-models/models/userAccount';
import { isEven } from '@hc/shared-utils/utils/isEven';
import { isOdd } from '@hc/shared-utils/utils/isOdd';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app! {isEven(10)} odd:
        {isOdd(10)} model: {UserAccountModel}
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
});
