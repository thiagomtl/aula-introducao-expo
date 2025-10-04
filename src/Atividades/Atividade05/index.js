import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Atividade05() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(0);

    function somar() {
        const resultado = parseFloat(num1) + parseFloat(num2);
        setTotal(resultado.toString());
    }

    return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>Atividade 05</Text>

                <Text style={styles.txtSaida}>Calculadora básica</Text>

                <Text style={styles.textLabel}> 1º Numero </Text>
                <TextInput style={styles.txtEntrada}/>

                <Text style={styles.txtSaida}> + </Text>

                <Text style={styles.textLabel}> 2º Numero </Text>
                <TextInput style={styles.txtEntrada}/>

                <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

                <Text style={styles.textLabel}> Total</Text>
                <TextInput style={styles.txtEntrada}/>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>+</Text>
                </TouchableOpacity>

            </View>
    );
};
