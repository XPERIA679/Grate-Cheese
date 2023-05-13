import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const ButtonRegister = ({title, onPress = () => {}}) => {
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.button} 
        activeOpacity={0.7}>
            <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fbc601',
        width: '100%',
        padding: 15,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
    title: {
        color: 'white',
        fontWeight: '800',
        fontSize: 17,
        letterSpacing: 0.7,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 20,
      },
})

export default ButtonRegister;