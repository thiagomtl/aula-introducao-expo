import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            // justifyContent:'space-evenly',
        },
        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: 'darkslategray',
            margin: RFPercentage(5),
        },
        txt: {
            fontSize: RFPercentage(2.5),
        },
        input: {
            height: 80,
            textAlign: 'center',
            width: '50%',
            fontSize: 50,
            marginTop: 24,
            color: 'lightgray',
        },
        botao:{
            backgroundColor: '#89FFA5',
        },
        txtBotao:{
            alignSelf: 'center',
            padding: 30,
            fontSize: 25,
            color: '#6DC4A4',
            fontWeight: 'bold',
        },
        entradaImc:{
            flexDirection: 'row',
            flex: 1,
        },
        resultado:{
            alignSelf: 'center',
            color: 'lightgray',
            fontSize: 65,
            padding: 15,
    },
});

export default styles;