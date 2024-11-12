import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  img1: {
    height: 444,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  img2: {
    alignItems: "center",
    padding: 50,
  },
  btn: {
    width: "90%",
    backgroundColor: "#0D6EFD",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  txtbtn: {
    fontSize: 16,
    color: "white",
    fontWeight: "semibold",
  },
  safe: {
    backgroundColor: "#85CBED",
    flex: 1,
  },
  textinput: {
    width: 200,
    height: 50,
    backgroundColor: "green",
    borderRadius: 10,
    textAlign: "center",
  },
});
