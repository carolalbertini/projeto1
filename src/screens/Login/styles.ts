import { Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, // vai tentar usar 100% da tela
        backgroundColor: '#FFFBFB',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    
    logo: {
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%',
    },
    boxInfo: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 30,
    }, 
    fotoPerfil: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginRight: 10,
    },
    nomeUsuario: {
        fontSize: 14,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    emailUsuario: {
        fontSize: 16,
        lineHeight: 23
    },
    alterar: {
        fontSize: 14,
        marginLeft: 30,
        fontWeight: '600',
        alignItems: 'flex-end',
        lineHeight: 60,
        color: '#0C77BD'
    },
    passwordContainer: {
        width: '90%',
        borderWidth: 1.5,
        borderColor: '#0C77BD',
        borderRadius: 7,
        padding: Platform.OS === 'ios' ? 9 : 7,
        marginBottom: 15
    },
    passwordText: {
        color: '#696969'
    },
    input: {
        color: '#333',
        fontSize: 18,
    },
    forgotContainer: {
        width: '90%',
        alignItems: 'flex-start'
    },
    forgotText: {
        fontWeight: 'bold',
        marginLeft: 12,
        color: '#162c90'
    },
    loginButton: {
        marginTop: '10%',
        backgroundColor: '#162C90',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})