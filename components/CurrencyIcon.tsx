import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function CurrencyIcon(props) {
    const {name, size} = props
    let currency_symbol = ''
    switch(name){
        case 'usd': currency_symbol = '$'
        case 'euro': currency_symbol = ''
    }

    return (
        <View style={styles.root}>
            <Text></Text>
        </View>
    )
}

const styles = 

export default CurrencyIcon
