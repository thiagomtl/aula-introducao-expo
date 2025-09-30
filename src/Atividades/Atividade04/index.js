import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [primeiroNome, setPrimeiroNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');

    function handleExibeNomeCompleto() {
        setNomeCompleto(`${primeiroNome} ${sobrenome}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 04</Text>

            <TextInput
                value={primeiroNome}
                onChangeText={setPrimeiroNome}
                placeholder='Primeiro nome'
                style={styles.input}
            />

            <TextInput
                value={sobrenome}
                onChangeText={setSobrenome}
                placeholder='Sobrenome'
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={handleExibeNomeCompleto}
            >
                <Text style={styles.txtBotao}>Exibir Nome Completo</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>{nomeCompleto}</Text>
        </View>
    );
}