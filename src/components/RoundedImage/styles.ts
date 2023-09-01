import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',
    },
    img: {
        margin: 10,
        width: 50,
        height: 50,
    }
})

export default styles