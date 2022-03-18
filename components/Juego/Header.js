import react, {useState} from "react";
import {StyleSheet,View, Text} from "react-native";
import colors from "./constants/colors";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> 
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.COLOR_SECONDARY,
    },
    headerTitle:{
        fontSize: 18,
        color: colors.COLOR_PRIMARY,
    }
});
export default Header;