import { View, Text, Image } from 'react-native';
import styles from './styles';

function Card({ nome, descricao, valor, imagem }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerimg}>
                <Image source={imagem} style={styles.imagem}/>
            </View>

            <View style={styles.containertexto}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.texto}>{descricao}</Text>
                <Text style={styles.titulo}>{valor}</Text>
            </View>
        </View>

    )
}

export default Card;