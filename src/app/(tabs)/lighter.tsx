import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
/**
 * 
 * flash
Optional • Type: FlashMode • Default: 'off'
Camera flash mode. Use one of FlashMode values. When on, the flash on your device will turn on when taking a picture. When off, it won't. Setting it to auto will fire flash if required. 
(оказывается это только когда фотографируешь, а второе бул значение это как раз тык фонариком)

enableTorch
Optional • Type: boolean • Default: false
A boolean to enable or disable the torch.
 */

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isTorchOn, setIsTorchOn] = useState(false);
  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function turnLighterOn() {
    setIsTorchOn((prev) => !prev);
  }
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} enableTorch={isTorchOn} />

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Фонарик: {isTorchOn ? "Включен" : "Выключен"}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={turnLighterOn}>
          <Text style={styles.text}>
            {isTorchOn ? "Turn off lighter" : "Turn on lighter"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  statusContainer: {
    position: "absolute",
    top: 64,
    width: "100%",
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
