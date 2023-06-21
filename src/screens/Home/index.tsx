import { StatusBar } from 'expo-status-bar';

import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import Card from '../../assets/images/Card.png';
import FotoPerfil from '../../assets/images/FotoPerfil.jpg';
import Latidos from '../../assets/images/Latidos.jpeg';
import Medico from '../../assets/images/Medico.png';
import { styles } from './styles';


export function Home() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView
            stickyHeaderIndices={[1]}
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            >
            <StatusBar backgroundColor='#fcf8f8' translucent={false} />
            <View>
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialIcons style={styles.iconMenu} name='menu' size={26} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={FotoPerfil}
                        style={styles.fotoPerfil}
                    />
                </TouchableOpacity>
            </View>
            </View>

            <Text style={styles.atividadesRecentes}>Atividades recentes</Text>
            <View style={styles.containerCard}>
                <Image 
                source={Card}
                />
                <View style={styles.textoCard}>
                    <Text style={styles.negrito}>Mantenha o controle</Text>
                    <Text>As novas transações aparecerão aqui</Text>
                </View>
            </View>
            <Text style={styles.mostrarTudo}>Mostrar tudo</Text>

            <Text style={styles.enviarNovamente}>Enviar novamente</Text>
            <ScrollView 
            overScrollMode='never'
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            >
                <View style={styles.containerContatos}>
                    <TouchableOpacity>
                        <View >
                            <Image 
                            source={require('../../assets/images/Fallen.png')}
                            style={styles.imagem}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Fallen</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Image 
                            source={require('../../assets/images/Neymar.png')}
                            style={styles.imagem}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Neymar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Image 
                            source={require('../../assets/images/Marta.png')}
                            style={styles.imagem}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Marta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Image 
                            source={require('../../assets/images/Rafaella.png')}
                            style={styles.imagem}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Rafaella Ballerini</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Text style={styles.abreviacao}>LO</Text>
                        </View>
                        <View>
                            <Text style={styles.texto}>Ludmila Oki</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <MaterialIcons style={styles.btnBuscar} name="search" size={70} color="black" />
                        </View>
                        <View>
                            <Text style={styles.texto}>Pesquisar</Text>
                        </View>
                    </TouchableOpacity>
                    
                    
                </View>
            </ScrollView>
            
            <Text style={styles.negrito}>Contribua</Text>
            <ScrollView
            overScrollMode='never'
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            >
                <View style={styles.containerCardMedico}>
                    <View style={styles.containerImgMedico}>
                        <Image 
                        source={Medico}
                        style={styles.imgMedico}
                        />
                    </View>
                    <Text style={styles.textoCard2}>Médicos Sem Fronteira</Text>
                </View>
                <View style={styles.containerCardLatido}>
                    <View style={styles.containerImgMedico}>
                        <Image 
                        source={Latidos}
                        style={styles.imgMedico}
                        />
                    </View>
                    <Text style={styles.textoCard2}>Latidos e Miados</Text>
                </View>
            </ScrollView>
           
             
            <View style={styles.containerFooter}>
                <View style={styles.tipoPgto}>
                    <TouchableOpacity>
                        <Text style={styles.textoTipoPgto}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textoTipoPgto}>Solicitar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconsFooter}>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <MaterialIcons  name="home" size={30} color="#051EC7" />
                        <Text style={styles.textIcons}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <MaterialIcons name="attach-money" size={30} color="#051EC7" />
                        <Text style={styles.textIcons}>Pagamentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <MaterialIcons name="account-balance-wallet" size={30} color="#051EC7" />
                        <Text style={styles.textIcons}>Carteira</Text>
                    </TouchableOpacity>
                </View>
            </View>
                          
        </ScrollView>
        </SafeAreaView>
    );
}