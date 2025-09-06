import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius:10,
    },
    titulo: {
        fontSize: RFPercentage(3),
        color: 'red',
        fontWeight: 'bold',
        borderWidth: 5,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width:'100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 40,
    },
    imagem: {
        height: RFPercentage(1.0),
        width: RFPercentage(2.8),
        resizeMode: 'stretch',
    },
});

export default styles;