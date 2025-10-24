import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

// Componente principal da atividade IMC
export default function Atividade06() {

    // estados que guardam texto dos inputs e resultados
    const [massa, setMassa] = useState('');         // massa em kg (string)
    const [altura, setAltura] = useState('');       // altura em metros (string)
    const [resultado, setResultado] = useState(null); // valor numérico do IMC
    const [categoria, setCategoria] = useState(''); // texto da categoria (ex: "Peso normal")

    // Função que executa o cálculo do IMC e define a categoria
    function Calcular() {
        // converte strings para número, aceita vírgula ou ponto como separador decimal
        const m = parseFloat(String(massa).replace(',', '.'));
        const h = parseFloat(String(altura).replace(',', '.'));

        // validação: massa/altura válidas e altura > 0
        if (isNaN(m) || isNaN(h) || h <= 0) {
            setResultado(null); // limpa resultado quando inválido
            setCategoria('Informe massa e altura válidas.');
            return;
        }

        // calcula IMC: massa / (altura * altura)
        const valor = m / (h * h);
        setResultado(valor); // armazena valor para mostrar na tela

        // determina a categoria conforme faixas de IMC
        let cat = '';
        if (valor < 18.5) {
            cat = 'Abaixo do peso';
        } else if (valor >= 18.5 && valor < 24.9) {
            // entre 18,5 e 24,9
            cat = 'Peso normal';
        } else if (valor >= 25 && valor < 29.9) {
            // entre 25 e 29,9
            cat = 'Sobrepeso';
        } else if (valor >= 30 && valor < 34.9) {
            // entre 30 e 34,9
            cat = 'Obesidade grau 1';
        } else if (valor >= 35 && valor < 39.9) {
            // entre 35 e 39,9
            cat = 'Obesidade grau 2';
        } else { // valor >= 40
            cat = 'Obesidade grau 3';
        }
        setCategoria(cat); // armazena a categoria para exibir
    }

    // JSX: estrutura visual do componente
    return (
        <View style={styles.container}>
            {/* título da tela */}
            <Text style={styles.paragraph}>Atividade 06</Text>

            {/* área com os dois inputs lado a lado */}
            <View style={styles.entradaImc}>
                {/* input para massa (string), ligado ao estado `massa` */}
                <TextInput
                    placeholder='Massa'
                    placeholderTextColor={'lightgray'}
                    keyboardType='numeric'
                    style={styles.input}
                    value={massa}
                    onChangeText={setMassa} // atualiza estado quando usuário digita
                />

                {/* input para altura (string), ligado ao estado `altura` */}
                <TextInput
                    placeholder='Altura'
                    placeholderTextColor={'lightgray'}
                    keyboardType='numeric'
                    style={styles.input}
                    value={altura}
                    onChangeText={setAltura}
                />
            </View>

            {/* wrapper para posicionar o botão na tela */}
            <View style={styles.botaoWrapper}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => Calcular()} // chama a função de cálculo ao pressionar
                >
                    <Text style={styles.txtBotao}>Calcular</Text>
                </TouchableOpacity>
            </View>

            {/* exibe o resultado numérico com 2 casas decimais (se existir) */}
            <Text style={styles.txt}>{resultado !== null ? resultado.toFixed(2) : ''}</Text>

            {/* exibe a categoria determinada */}
            <Text style={styles.resultado}>{categoria}</Text>
        </View>
    );
}