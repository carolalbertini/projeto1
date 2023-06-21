import { StatusBar } from 'expo-status-bar';
import React, {
    Image,
    Keyboard,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

import { styles } from './styles';

import FotoPerfil from '../../assets/images/FotoPerfil.jpg';
import Logo from '../../assets/images/Logo.png';

export function Login () {
  return (
 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='#FFFBFB' translucent={false}/>
        <Image 
        source={Logo}
        style={styles.logo} 
        />
        <View style={styles.boxInfo}>
            <Image
            style={styles.fotoPerfil}
            source={FotoPerfil}
            />
            <View >
                <Text style={styles.nomeUsuario}> Ana Carolina Conceição Albertini </Text>
                <Text style={styles.emailUsuario}> carolallbertini@hotmail.com </Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.alterar}>Alterar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}> Senha </Text>
            <TextInput 
            style={styles.input} 
            secureTextEntry={true}
            /> 
        </View>
        <View style={styles.forgotContainer}>
            <TouchableOpacity>
                <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

 