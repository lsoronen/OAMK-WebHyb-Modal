import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal...</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>Show modal message</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {

  },
  modalText: {
    marginTop: 15,
    textAlign: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
