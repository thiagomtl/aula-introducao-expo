import { use, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade06() {

    const [massa, setMassa] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [categoria, setCategoria] = useState('');

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);

        let cat = '';
        if (valor < 18.5) {
            cat = 'Abaixo do peso';
        } else if (valor < 25) {
            cat = 'Peso normal';
        } else if (valor < 30) {
            cat = 'Sobrepeso';
        } else if (valor < 35) {
            cat = 'Obesidade grau 1';
        } else if (valor < 40) {
            cat = 'Obesidade grau 2';
        } else {
            cat = 'Obesidade grau 3';
        }
        setCategoria(cat);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Atividade 06</Text>
            <View style={styles.entradaImc}>

                <TextInput
                    placeholder='Massa'
                    placeholderTextColor={'lightgray'}
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={(entrada) => setMassa(parseFloat(entrada))}
                />

                <TextInput
                    placeholder='Altura'
                    placeholderTextColor={'lightgray'}
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={(entrada) => setAltura(parseFloat(entrada))}
                />
            </View>
            <View style={styles.botaoWrapper}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => Calcular()}
                >
                    <Text style={styles.txtBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.txt}>{resultado !== null ? resultado.toFixed(2) : ''}</Text>
            <Text style={styles.resultado}>{categoria}</Text>
        </View>
    );
}