import { View, Text, TextInput, TextInputProps } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { colors } from '../../theme/colors'

interface InputViewProps {
    inputProps?: TextInputProps,
    onChangeText?: (text: string) => void
    placeholder?: string | undefined
    iconName?: string | undefined
    error?: string,
    value: string
}
const InputView: FC<InputViewProps> = ({ inputProps, iconName, placeholder, onChangeText, value, error }) => {
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.container, error ? styles.inputError : {}]}>
                {iconName && <Icon name={iconName} size={30} color={error ? colors.danger : colors.disabled}  style={styles.icon}/>}
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    style={styles.input}
                    {...inputProps} />
            </View>
            {error && <Text style={styles.error}>{error ?? 'Error'}</Text>}
        </View>

    )
}

export default InputView