import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Campointeiro from '../../../componentes/Campointeiro';
import estilos from './estilos';
import Botao from '../../../componentes/Botao';

export default function Items({ nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, steTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculartotal(novaQuantidade);
    }

    const calculartotal = (novaQuantidade) => {
        steTotal(novaQuantidade * preco);
    }

    return <>
        <View style={estilos.informacao}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </View>
        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text styles={estilos.descricao}>
                        Quantidade:
                    </Text>
                    <Campointeiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                </View>
                <View style={estilos.valor}>
                    <Text styles={estilos.descricao}>
                        preço:
                    </Text>
                    <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)}</Text>
                </View>
            </View>
            <Botao valor="remover" acao={() => { }} />
        </View>
        <View style={estilos.divisor} />
    </>
}