import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Atividade05() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [total, setTotal] = useState('');

    function somar() {
        const resultado = (parseFloat(num1) || 0) + (parseFloat(num2) || 0);
        setTotal(resultado.toString());
    }
    function subtrair() {
        const resultado = (parseFloat(num1) || 0) - (parseFloat(num2) || 0);
        setTotal(resultado.toString());
    }
    function dividir() {
        const resultado = (parseFloat(num1) || 0) / (parseFloat(num2) || 0);
        setTotal(resultado.toString());
    }
    function multiplicar() {
        const resultado = (parseFloat(num1) || 0) * (parseFloat(num2) || 0);
        setTotal(resultado.toString());
    }
    function limpar() {
        setNum1('');
        setNum2('');
        setTotal('');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Atividade 05</Text>

            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.textLabel}> 1º Numero </Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º Numero </Text>
            <TextInput
                style={styles.txtEntrada}
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
            />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total</Text>
            <TextInput
                style={styles.txtEntrada}
                editable={false}
                value={total}
            />

            <TouchableOpacity style={styles.botao}
                onPress={somar}>
                <Text style={styles.textBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={subtrair}>
                <Text style={styles.textBotao}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={dividir}>
                <Text style={styles.textBotao}>/</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={multiplicar}>
                <Text style={styles.textBotao}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
                onPress={limpar}>
                <Text style={styles.textBotao}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
};