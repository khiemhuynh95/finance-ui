import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../assets/colors'
import Avatar from '../assets/images/avatar.svg'

const Header = (props) => {
    const {style} = props
    return(
        <View style={[style,styles.root]}>
            <View style={styles.textWrapper}>
                <Text style={styles.name}>DeMarcus Nelson</Text>
                <Text style={styles.date}>Jul 20, 14:02</Text>
            </View>
            <View style={styles.avatar}>
                <Avatar/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.appBackground,
        flexDirection: 'row',
        alignItems: 'center',
        
        width: '100%',
        justifyContent: 'space-between'
    },
    textWrapper: {
        left: 24
    },
    name: {
        fontWeight: '900',
        fontSize: 18,
        lineHeight: 19,
        letterSpacing: -0.18,
        marginBottom: 7,
        color: colors.text.dark
    },
    date: {
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 13,
        letterSpacing: -0.12,
        color: colors.text.light
    },
    avatar: {
      right: 24
    }
})

export default Header