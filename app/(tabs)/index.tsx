import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import styles from "./design";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const [] = useFonts({
    "SpaceMono-Regular": require("../../assets/fonts/SpaceMono-Regular.ttf"),
    Particela: require("../../assets/fonts/Particela.ttf"),
    Inter_500Medium: require("../../assets/fonts/Inter_500Medium.ttf"),
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
          <Image
            style={styles.img1}
            source={require("../../assets/images/new.png")}/>

            <View style={styles.img2}>
            <Image
            source={require("../../assets/images/text.png")}/>
            </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtbtn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
