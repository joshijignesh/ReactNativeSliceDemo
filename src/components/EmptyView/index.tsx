import { View, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

interface EmptyViewProps { }
const EmptyView : FC<EmptyViewProps> = () => (<View style={styles.container}><Text style={styles.text}>User Data Not Foud</Text></View>)
export default EmptyView