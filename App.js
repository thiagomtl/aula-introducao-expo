import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

/*import Exemplo01 from './src/exemplos/ex01';*/

// import Exemplo02 from './src/exemplos/ex02';

import AtividadeCamisa from './src/Atividades/AtividadeCamisa'

export default function App() {
  return (
    <View style={styles.container}>
      <AtividadeCamisa/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
    paddingTop: Constants.statusBarHeight,
  },
});
