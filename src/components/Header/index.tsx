import { View, Image } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { icon } from '../../theme/icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../theme/colors'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'
interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={icon.logo} />
            <Icon name={'power'} size={30} color={colors.prmiary} onPress={handleLogout} style={styles.icon} />
        </View>
    )
}

export default Header