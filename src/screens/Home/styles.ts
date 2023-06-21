import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFBFB',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10
    },
    negrito: {
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#FFFBFB',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        marginBottom: 20
    },
    iconMenu: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5
    },
    fotoPerfil: {
        width: 35,
        height: 35,
        borderRadius: 50, 
        justifyContent: 'space-between'
    },
    enviarNovamente: {
        marginBottom: 20,
        marginRight:215,
        justifyContent: 'flex-start',
        fontWeight: 'bold',
    },
    containerContatos: {
        marginTop: 20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imagem: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight:25
    },
    texto: {
        // textAlign: 'center',
        paddingLeft: 20,
        paddingTop: 10

    },
    btnBuscar: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D2A93',
        padding: 5,
        color: 'white',
        borderRadius: 50,
        marginRight:25
    }, 
    abreviacao: {
        fontSize: 40,
        backgroundColor: '#499D00',
        padding: 13,
        color: 'white',
        borderRadius: 50,
        marginRight: 30 
    },
    atividadesRecentes: {
        marginBottom: 10
    },
    containerCard: {
        flexDirection: 'row',
        paddingHorizontal: 10

    },
    textoCard: {
        marginTop: 20
    },
    mostrarTudo: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#1B83FE',
        textAlign: 'center',
        marginBottom: 30
    },
    containerCardMedico: {
        marginTop: 10,
        width: 300,
        height: 170,
        backgroundColor: '#C73194',
        borderRadius: 10,
        marginRight: 20
    },
    containerCardLatido: {
        marginTop: 10,
        width: 300,
        height: 170,
        backgroundColor: '#D9C145',
        borderRadius: 10,
        marginRight: 20
    },
    containerImgMedico: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        margin: 20,
        borderRadius: 50,
    },
    imgMedico: {
        width: 30,
        height: 15
        
    },
    textoCard2: {
        color: 'white',
        marginTop: 30,
        paddingHorizontal: 20,
        fontSize: 20
    },
    containerFooter: {
        backgroundColor: 'white'
    },
    tipoPgto: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop:5,
        marginBottom: 10
    },
    textoTipoPgto: {
        color: '#05227A',
        fontWeight: 'bold',
        backgroundColor: '#FED03D',
        paddingHorizontal: 50,
        paddingVertical:10,
        borderRadius: 20,
        fontSize: 18
    },
    iconsFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textIcons: {
        color: '#05227A',
        fontWeight: 'bold',
        fontSize: 11
    }

 })