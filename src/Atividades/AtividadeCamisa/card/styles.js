import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: RFPercentage(0.6),
        width: '90%',
        maxHeight: RFPercentage(20), 
        padding: 8,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: RFPercentage(1),
        flexDirection: 'row',
    },
    containertexto:{
        width: '70%',
    },
    
    containerimg:{
        width: '30%',
    },

    titulo: {
        fontSize: RFPercentage(2),
        color:'#121212',
        fontWeight: 'bold',
        marginBottom: RFPercentage(1),
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: '#121212',
    }, 
    imagem: {
        height: RFPercentage(10),
        width: RFPercentage(10),
        resizeMode: 'stretch',
    },
   
})

export default styles;