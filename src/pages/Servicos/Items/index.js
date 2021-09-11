import React, { useState } from 'react';
import { TouchableOpacity,Text, TextInput, View } from 'react-native';
import Campointeiro from '../../../componentes/Campointeiro';
import estilos from './estilos';
import Botao from '../../../componentes/Botao';


export default function Items({nome, preco, descricao}){
    const [ quantidade, setQuantidade ] = useState(1);
    const [total, steTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculartotal(novaQuantidade);
    }

    const calculartotal = (novaQuantidade) =>{
        steTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () => {
       setExpandir(!expandir);
       atualizaQuantidadeTotal(1); 
    }
 
    return <>
    <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
        <Text style={estilos.nome}>{ nome }</Text>
        <Text style={estilos.descricao}>{ descricao }</Text>
        <Text style={estilos.preco}>{ 
            Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'  
            }).format(preco)
        }</Text>
    </TouchableOpacity>
    {expandir &&
    <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text styles={estilos.descricao}>
                    Quantidade:
                </Text>
                <Campointeiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
            </View>
            <View style={estilos.valor}>
                <Text styles={estilos.descricao}>
                    preço:
                </Text>
                <Text style={estilos.preco}>{   Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'  
            }).format(total)}</Text>
            </View>
        </View>
        <Botao valor="Adicionar" acao={() => {s}}/>
    </View>
    }
    <View style={estilos.divisor}/>
    </>

}