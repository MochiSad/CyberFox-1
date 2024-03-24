import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import IndicadoTela from "../components/indicadorTela/IndicadorTela";

// ficar atentento que pode aparecer erro nessa importacao 
import ModulosCurso from "../components/modulosCurso/ModulosCurso";
import IniciarCurso from "../components/botaoInicarCurso/InicarCurso";


const Modulos = () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
            source={require("../assets/BackgroundHomePage.png")}
            style={styles.backgroundImage}
        >
        
        <IndicadoTela nomeTela ="Modulos"></IndicadoTela>

        {/* ficar atento aqui tambem que o erro pode vir daqui desse modulos */}
        <ModulosCurso tituloModulo = "Modulo 1" nomeCurso= "Introdução a Cibersegurança">
            <IniciarCurso icon="unlock"></IniciarCurso>
        </ModulosCurso>
        
        <ModulosCurso tituloModulo = "Modulo 2" nomeCurso= "Tipos de ataquees">
                <IniciarCurso icon="lock"></IniciarCurso>
        </ModulosCurso>
        
        </ImageBackground>
        </SafeAreaView>
    );
};

    const styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            flexDirection: "column",
            alignItems: "center",
          },
    })
 


export default Modulos;