import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Constants from 'expo-constants';

/*import Exemplo01 from './src/exemplos/ex01';*/

// import Exemplo02 from './src/exemplos/ex02';

// import AtividadeCamisa from './src/Atividades/AtividadeCamisa'

import Exemplo03 from './src/exemplos/ex03';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
    paddingTop: Constants.statusBarHeight,
  },
});
