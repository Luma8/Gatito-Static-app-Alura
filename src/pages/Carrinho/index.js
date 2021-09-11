import React from 'react';
import {  FlatList } from 'react-native';
import Items from './Items';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/Campointeiro/StatusCarrinho';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 35.9,
        descricao: "NÃO DE BANHO NO SEU GATO MAS SE PRECISAR NOS DAMOS!!!",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 49.9,
        descricao: "Uma dose da vacina v4",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina V3",
        preco: 35.9,
        descricao: "Uma dose da vacina v3",
        quantidade: 1
    }

];



export default function Carrinho(){
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

    return(
        <TelaPadrao>
            <StatusCarrinho  total={total}/> 
         <FlatList 
            data={servicos}
            removeClippedSubviews={false}
            renderItem={({item}) =>  <Items {...item} />}
            keyExtractor={({id}) => String(id)}
        />
        </TelaPadrao>
    );
}