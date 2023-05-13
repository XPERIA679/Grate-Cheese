import React from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const InputRegister = ({label, iconName, password, onFocus = () => 
    {}, ...props }) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);

    return (
                 <View style={styles.inputContainer}>
        {/* <Text>{label}</Text> */}

        <View style={styles.input}>
            <Icon name={iconName} style={styles.icon} />
        <TextInput onFocus={() => {
            onFocus();
            setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
         style={styles.textInput} 
        secureTextEntry={hidePassword}
        {...props}
         />

        {
            password && (
            <Icon onPress={()=> setHidePassword(!hidePassword)}
            name={hidePassword ? "eye" : "eye-slash"} style={styles.iconEye} />
            )
        }
        </View>

</View>

    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
        top: 85,
      },
    input: {
        backgroundColor: "white",
        height: 55,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.75,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        borderColor: 'transparent',
        borderWidth: 1,
        shadowColor: '#46443F',
      elevation: 10,
    },
    icon: {
        fontSize: 25,
        color: "#deaf01",
    },
    iconEye: {
        fontSize: 20,
        color: "#967601",
    },
    textInput: {
        color: "black",
        flex: 1,
        marginLeft: 10,
    },
  });

export default InputRegister;