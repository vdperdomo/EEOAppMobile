import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

const ConfirmationModal = (props) => {
    return (
        <View style={ styles.centeredView }>
            <Modal
                animationType="fade"
                transparent={ true }
                visible={ props.visible }
            >
                <View style={ styles.centeredView }>
                    <View style={ styles.modalView }>
                        <Text style={ styles.modalTitle }>{ props.title }</Text>
                        <Text style={ styles.modalText }>{ props.content }</Text>
                        <View style={ styles.modalFooter }>
                            <TouchableHighlight
                                style={ { ...styles.button, backgroundColor: "#ddd" } }
                                onPress={ () => props.cancel(false) }
                            >
                                <Text style={ styles.textStyle }>CANCEL</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={ { ...styles.button, backgroundColor: "#e64f19" } }
                                onPress={ () => props.confirm(false) }
                            >
                                <Text style={ styles.textStyle }>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 15,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "left"
    },
    modalText: {
        fontSize: 18,
        marginBottom: 30,
    },
    modalFooter: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    button: {
        borderRadius: 2,
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        marginLeft: 10
    },
});

export default ConfirmationModal;
