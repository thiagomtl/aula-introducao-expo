import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'black',
            // borderWidth: 10,
            gap: RFPercentage(2),
        },
        containerbotao: {
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: RFPercentage(5),
        },
        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#777',
        },
        txt: {
            fontSize: RFPercentage(2.5),
            color: 'black',
            fontWeight: 'bold',
        },
        botao: {
            backgroundColor: '#777',
            width: '10%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems: 'center',
        },
        botao2: {
            backgroundColor: '#777',
            width: '40%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems: 'center',
        },
        txtBotao: {
            color: '#ff0',
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
        }
    }
);

export default styles;