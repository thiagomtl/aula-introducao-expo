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
            borderWidth: RFPercentage(1),
            borderColor: 'darkslategray',
            width: '80%',
            padding: RFPercentage(1.5),
            borderRadius: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },
        botao:{
            backgroundColor: 'darkslategray',
            width: '70%',
            borderRadius: RFPercentage(2),
            padding: RFPercentage(1),
            alignItems: 'center',
            justifyContent: 'center',
            margin: RFPercentage(2),
        },
        txtBotao:{
            color: '#fafafa',
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
        }
    }
);

export default styles;