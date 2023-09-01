import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    outerContainer: {marginBottom: 16,  width:'80%',},
    container: {
        width:'100%',
        borderBottomWidth: 1,
        flexDirection:'row',
        borderBottomColor: 'gray',
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        flex:1,
    },
    icon: {
        marginEnd: 8
    },
    inputError: {
        borderColor:colors.danger
    },
    error:{
        color:colors.danger
    }
})

export default styles