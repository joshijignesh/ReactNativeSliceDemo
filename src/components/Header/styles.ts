import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        justifyContent:'center',
        alignItems:'center',
        elevation: 4,
        flexDirection:'row',
        paddingVertical: 16,
    },
    img:{
        height: 30,
        width: 30,
    },
    icon: {
        position:'absolute',
        marginEnd:20,
        right:0
    }
    
})

export default styles