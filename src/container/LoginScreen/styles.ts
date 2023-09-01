import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayDark,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    innterContainer: {
        backgroundColor: colors.white,
        width: '80%',
        marginVertical: '20%',
        flex: 1,
        borderRadius: 5,
        elevation: 4,
        alignItems: 'center'
    },
    logo: {
        top: -25
    },
    title: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '700'
    },
    body: {
        justifyContent:'center',
        flex:1,
    },
    button: {
        marginTop: 32
    }
})
export default styles