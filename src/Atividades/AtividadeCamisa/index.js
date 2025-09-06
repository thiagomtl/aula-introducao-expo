import { View, Text, Image } from 'react-native';

import styles from './styles';

import img from '../../../assets/SaoPaulo.png'
import img1 from '../../../assets/SaoPauloBranca.png'
import img2 from '../../../assets/saopaulolistrada.jpg'
import img3 from '../../../assets/saopaulomandrake.jpg'

import Card from './card';

function Exemplo02 (){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Loja Oficial do São Paulo</Text>
            
            <Card
                imagem={img1}
                nome={'Camisa do São Paulo Branca'}
                descricao={'Camisa 1 do São Paulo'}
                valor={'R$450,00'}> 
            </Card>

            <Card
                imagem={img}
                nome={'Camisa do São Paulo Preta'}
                descricao={'Camisa 2 do São Paulo'}
                valor={'R$350,00'}> 
            </Card>

             <Card
                imagem={img2}
                nome={'Camisa do São Paulo Listrada'}
                descricao={'Camisa 3 do São Paulo'}
                valor={'R$320,00'}> 
            </Card>

             <Card
                imagem={img3}
                nome={'Camisa do São Paulo Mandrake'}
                descricao={'Camisa Mandrake Torcedor do São Paulo'}
                valor={'R$700,00'}> 
            </Card>
        </View>
    );
}

export default Exemplo02;