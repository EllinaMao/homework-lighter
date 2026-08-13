import { useLocalSearchParams, useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useRef, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VideoModalScreen() {
  const { title, film_url } = useLocalSearchParams();
  const router = useRouter();
  const videoViewRef = useRef<any>(null);

  const [windowDims, setWindowDims] = useState(Dimensions.get("window"));

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setWindowDims(window);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  const isLandscape = windowDims.width > windowDims.height;

  const player = useVideoPlayer(film_url as string, (player) => {
    player.loop = false;
    player.play();
  });

  const closeModal = () => {
    player.pause();
    router.back();
  };

  return (
    <SafeAreaView style={styles.modalContainer}>
      {!isLandscape && (
        <View style={styles.modalHeader}>
          <Button title="Закрыть" onPress={closeModal} />
          <Text style={styles.modalTitle} numberOfLines={1}>
            {title}
          </Text>
        </View>
      )}

      <View style={styles.videoContainer}>
        <VideoView
          ref={videoViewRef}
          style={{
            width: windowDims.width,
            height: isLandscape ? windowDims.height : 300,
          }}
          player={player}
          allowsPictureInPicture
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#111",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
