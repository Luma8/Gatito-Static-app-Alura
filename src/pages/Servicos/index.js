import React from 'react';
import { FlatList } from 'react-native';
import Items from './Items';
import TelaPadrao from '../../componentes/TelaPadrao';

const servicos = [
    {
        id: 1, 
        nome: "Banho",
        preco: 35.9,
        descricao: "NÃO DE BANHO NO SEU GATO MAS SE PRECISAR NOS DAMOS!!!"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 49.9,
        descricao: "Uma dose da vacina v4"
    },
    {
        id: 3,
        nome: "Vacina V3",
        preco: 35.9,
        descricao: "Uma dose da vacina v3"
    }

];



export default function Servicos(){
    return(
        <TelaPadrao>
            <FlatList 
                data={servicos}
                removeClippedSubviews={false}
                renderItem={({item}) =>  <Items {...item} />}
                keyExtractor={({id}) => String(id)}
            />
        </TelaPadrao>
    );
}