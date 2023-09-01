import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import styles from './styles'
import { icon } from '../../theme/icons'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'
import { User } from '../../services/modules/users/types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { addFavourite } from '../../redux/slice/userSlice'
import { colors } from '../../theme/colors'
interface UserCardProps {
    user: User
    isFavourit?: boolean
}

const UserCard: FC<UserCardProps> = ({ user, isFavourit = false }) => {
    const dispatch = useDispatch();

    const [favourite, setFavourite] = useState(isFavourit)
    const handleFavourite = () => {
        if (favourite) {
            return
        }

        setFavourite(true)
        dispatch(addFavourite(user));
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={user?.picture?.thumbnail ? { uri: user?.picture?.thumbnail } : icon.logo} />
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{user?.name?.title + " " ?? ""}{user?.name?.first + " " ?? ""}{user?.name?.last + " " ?? ""}</Text>
                <Text style={styles.location}><Icon name='location-pin' size={15} /> {user?.location?.city + " " ?? ""}{user?.location?.state + " " ?? ""}</Text>
            </View>

            <TouchableOpacity onPress={handleFavourite}>
                <Icon name={favourite ? 'star' : 'star-outline'} color={colors.prmiary} size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default UserCard