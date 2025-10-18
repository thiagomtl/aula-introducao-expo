import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';


/*import Exemplo01 from './src/exemplos/ex01';*/
// import Exemplo02 from './src/exemplos/ex02';
// import Exemplo03 from './src/exemplos/ex03';
// import AtividadeCamisa from './src/Atividades/AtividadeCamisa'
//import Exemplo04 from './src/exemplos/ex04';
//import Atividade4 from './src/Atividades/Atividade4';
//import Atividade04 from './src/Atividades/Atividade04';
//import Atividade05 from './src/Atividades/Atividade05';
//import Atividade005 from './src/Atividades/atv05/index.js';
import Atividade06 from './src/Atividades/Atividade06';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade06/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f37ab0ff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:8,
    paddingTop: Constants.statusBarHeight,
  },
});
