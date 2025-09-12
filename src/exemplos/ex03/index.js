import { useState } from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1);
    }

    function handleDecrementar() {
        setNumero(numero - 1);
    }

    function handleLimpar() {
        setNumero(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <Button
                onPress={() => { alert('Alguém tocou no botão!') }}
                title='Alerta'
                color='#777'
                accessibilityLabel='Botão de alerta'
            />
        

            <View style={styles.containerbotao}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleIncrementar()}
                >
                    <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>
                <Text style={styles.txt}>{numero}</Text>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleDecrementar()}
                >
                    <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>

                
            </View>
            <TouchableOpacity
                    style={styles.botao2}
                    onPress={() => handleLimpar()}
                >
                    <Text style={styles.txtBotao}>Limpar</Text>
                </TouchableOpacity>
        </View>
        
    );
}