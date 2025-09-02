import { View, Text, Image } from 'react-native';

import styles from './styles';

import card from './card';

function Exemplo02 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Image source={img} style={styles.imagem} />

            <Mensagem titulo={'Camisa Branca e Preta'}>Você não clicou corretamente!</Mensagem>
            <Mensagem titulo={'Sucesso'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'Aviso'}>O tempo acabou!</Mensagem>
        </View>
    );
}

export default Exemplo02;