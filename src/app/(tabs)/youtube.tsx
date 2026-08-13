import { Film, films } from "@/types/film-model";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SimpleYouTube() {
  const router = useRouter();

  const openVideo = (item: Film) => {
    router.push({
      pathname: "/youtube-modal",
      params: {
        title: item.title,
        film_url: item.film_url,
      },
    });
  };

  const renderVideoCard = ({ item }: { item: Film }) => {
    const thumbnailUrl = `https://picsum.photos/seed/${item.id}/800/450`;
    const mockDate = "13.08.2026";

    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => openVideo(item)}
      >
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <Text style={styles.date}>{mockDate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderVideoCard}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  listContent: { padding: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  thumbnail: { width: "100%", height: 200, backgroundColor: "#000" },
  cardTextContainer: { padding: 12 },
  title: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 4 },
  description: { fontSize: 14, color: "#555", marginBottom: 8 },
  date: { fontSize: 12, color: "#888" },
});
