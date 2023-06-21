import { ImageProps } from "react-native";

export interface Contatos {
    name: string;
    image: ImageProps["source"]
}

const Neymar = require('../assets/images/Neymar.png');
const Fallen = require('../assets/images/Fallen.png');


export const listaContatos: Contatos[] = [
    {
        name: "Neymar",
        image: Neymar
    },
    {
        name: "Fallen",
        image: Fallen
    }
]