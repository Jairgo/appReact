import {Text, View } from 'react-native';

function Ejemplo01() {
  return (
    <View>
      <Text>Hola mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    estilo: {
        flex:1,
        marginTop:20,
        paddingTop:20,
        backgroundColor:'red',
    },
    estiloTexto: {
        color:'white',
    }
});

export default Ejemplo01;