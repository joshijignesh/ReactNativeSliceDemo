import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginBottom: 8,
        backgroundColor: colors.white,
        borderRadius: 4,
        paddingHorizontal: 8,
        alignItems:'center',
        elevation: 4,
        flexDirection:'row',
        paddingVertical: 16,
    },
    img:{
        height: 45,
        width: 45,
        borderRadius: 45
    },
    body: {
        position:'absolute',
        marginEnd:20,
        right:0
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
    },
    location: {
        fontSize: 14,
    },
    nameContainer: {
        flex:1,
        marginStart: 16
    }
    
})

export default styles