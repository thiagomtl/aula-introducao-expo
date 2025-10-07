import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#C51162',
    },
    txtSaida: {
        margin: 6,
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        marginVertical: 4,
    },
    txtEntrada: {
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 15,
        borderColor: '#E91E63',
        height: 40,
        color: 'black',
        borderRadius: 10,
        marginTop: 10,
    },
    botao: {
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
    },
    textBotao: {
        color: '#FF80AB',
        fontSize: RFPercentage(3),
        textAlign: 'center',
    },
    textLabel: {
        fontSize: RFPercentage(1),
        fontWeight: 'bold',
        color: '#0a0909ff',
        marginBottom: 4
    },
    paragraph: {
        margin: 24,
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }, 
});
export default styles;