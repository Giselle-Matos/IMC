import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ResultImc from "./ResultImc/";
import styles from './style';

export default function Form(){

const [height, setHeight] = React.useState(null); // null significa que o valor vem vazio como default
const [weight, setWeight] = React.useState(null);
const [messageImc, setMessageImc] = React.useState("Preencha o peso e altura");
const [imc, setImc] = React.useState(null);
const [textButton, setTextButton] = React.useState("Calcular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
} // toFixed serve para colocar o resultado em duas casas decimais

function validationImc(){
    //verifica se o usuario preencheu todos os campos
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null) // para quando o usuario clicar em calcular novamente o peso e altura zerarem
        setWeight(null)
        setMessageImc("Seu imc é igual a: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}

    return(
        <View style = {styles.formContext}>
            <View style = {styles.form}>
                <Text style = {styles.formLabel}>Altura</Text>
                <TextInput
                style = {styles.input}
                onChangeText = {setHeight} // conforme clica no text input vai alterando o estado da altura
                value = {height}
                placeholder = "Ex. 1.75"
                keyboardType = "numeric"/>
                <Text style = {styles.formLabel}>Peso</Text>
                <TextInput 
                style = {styles.input}
                onChangeText = {setWeight}
                value = {weight}
                placeholder = "Ex. 65"
                keyboardType = "numeric"/>
                <TouchableOpacity 
                style = {styles.buttonCalculator}
                onPress ={()=> {
                    validationImc()
                }}>
                    <Text style = {styles.textButtonCalcultor}>{textButton}</Text>
                    </TouchableOpacity>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
        </View>
        // nao esta aparecendo o imc no final. CONSERTAR!!
    );
}