import {Text, View, TextInput, StyleSheet} from 'react-native';

function Ejemplo02() {
  return (
    <View style={{padding:50}}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <TextInput 
                placeholder="Ingresa tu nombre" 
                style={{
                    width: '80%',
                    borderColor:'red',
                    borderWidth:2,
                }} 
            />

            <Button title="Enviar" />
        </View>
    </View>
  );
}

export default Ejemplo02;