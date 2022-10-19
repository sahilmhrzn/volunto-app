import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchFilterModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <View style={styles.modalView}>
                        <Text >Search Filter!</Text>
                        <TouchableOpacity>
                            <Ionicons name='close'
                                onPress={() => setModalVisible(!modalVisible)}
                                color='red'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Ionicons name='md-options'
                onPress={() => setModalVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default SearchFilterModal;