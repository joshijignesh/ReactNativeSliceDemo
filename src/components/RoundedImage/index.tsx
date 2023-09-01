import { View, Image, StyleProp, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import { icon } from '../../theme/icons';

interface RoundedLogoProps {
    containerStyle?: StyleProp<ViewStyle> | undefined;
}

const RoundedLogo: FC<RoundedLogoProps> = ({containerStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image style={styles.img} source={icon.logo} />
        </View>
    )
}

export default RoundedLogo