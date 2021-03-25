import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../assets/colors'

function MyWalletItem(props) {
    const {style, currency} = props
    return (
        <View style={[style, styles.root]}>
            <View style={styles.textWrapper}>
                <Text style={styles.amount}>{currency.amount}</Text>
                <Text style={styles.currency_name}>{currency.name}</Text>
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
    amount: {
        fontWeight: '900',
        fontSize: 18,
        lineHeight: 19,
        letterSpacing: -0.18,
        marginBottom: 7,
        color: colors.text.dark
    },
    currency_name: {
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

export default MyWalletItem
