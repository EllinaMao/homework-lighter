import { Button } from "@/components/button";
import { FilmComponent } from "@/components/film-component";
import { Container } from "@/components/ui/container";
import { films } from "@/types/film-model";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

type Stage = "initial" | "video";
interface DropDownItem {
  label: string;
  value: number;
}

const FilmsScreen = () => {
  const [stage, setStage] = useState<Stage>("initial");
  const [value, setValue] = useState<number | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const dropDownData: DropDownItem[] = films.map((film) => ({
    label: film.title,
    value: film.id,
  }));

  const selectedFilm = films.find((f) => f.id === value);

  return (
    <Container style={styles.container}>
      {stage === "initial" && (
        <>
          <Dropdown
            style={[
              styles.dropdown,
              isFocus && {
                borderColor: "#4474b3",
              },
            ]}
            placeholderStyle={styles.placeholderText}
            selectedTextStyle={styles.selectedText}
            placeholder={!isFocus ? "Выберите фильм" : "..."}
            data={dropDownData}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <Button disabled={!value} onPress={() => setStage("video")}>
            <Text>Включить видео</Text>
          </Button>
        </>
      )}

      {stage === "video" && selectedFilm && (
        <>
          <FilmComponent film={selectedFilm} />
          <View style={{ marginTop: 20, width: "100%" }}>
            <Button
              onPress={() => {
                setStage("initial");
                setValue(null);
              }}
            >
              <Text>Вернуться к выбору фильма</Text>
            </Button>
          </View>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  dropdown: {
    height: 50,
    width: "100%",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderLeftColor: "#722b48",
    borderTopColor: "#722b48",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: "#999",
  },
  selectedText: {
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default FilmsScreen;
