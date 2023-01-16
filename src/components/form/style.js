import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        width: "100%", // define quanta largura vai ocupar
        height: "100%", // define quanta altura vai ocupar
        bottom: 0,
        backgroundColor: "#FFFFF0",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30, //arredonda as bordas
        borderTopRightRadius: 30,
        marginTop: 30, 
    },
    form: {
        width: "100%",
        height: "auto", // conforme vai adicionando elementos no
        // form vai se  adaptando e nao quebra o layout
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddinLeft: 10,
    },
    textButtonCalcultor: {
        fontSize: 20,
        color: "#ffffff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#D2691E",
        paddingTop: 14,
        paddingBottom: 14, 
        marginLeft: 12,
        marginTop: 30,
    }
})

export default styles