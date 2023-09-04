import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

const OnePostScreen = ({ route }) => {
  const myId = "12345";
  const comments = route.params.data.commentsArr;
  return (
    <View style={s.container}>
      <ScrollView>
        <Image source={{ uri: route.params.data.uri }} style={s.img} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={s.commentsListWrapper}>
            {comments.length > 0 &&
              comments.map((item) => (
                <View
                  key={item.id}
                  style={item.authorId === myId ? s.myComment : s.otherComment}
                >
                  <Image
                    source={{ uri: item.authorAvatar }}
                    style={{ width: 28, height: 28, borderRadius: 28 }}
                  />
                  <View
                    style={
                      item.authorId === myId
                        ? s.commentItemDataMy
                        : s.commentItemDataOther
                    }
                  >
                    <Text>{item.text}</Text>
                    <Text>{item.date}</Text>
                  </View>
                </View>
              ))}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={s.addCommentWrapper}>
          <TextInput
            placeholder="Коментувати..."
            style={s.input}
            placeholderTextColor={"#BDBDBD"}
          />
          <Image source={require("../../../img/Send.png")} style={s.send} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: "#fff",
  },
  img: {
    marginHorizontal: 16,
    marginTop: 32,
    height: 240,
    borderRadius: 8,
  },
  addCommentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 30,
  },
  input: {
    width: Dimensions.get("window").width - 80,
    padding: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  send: {
    marginRight: 8,
  },
  commentsListWrapper: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  myComment: {
    flexDirection: "row-reverse",
  },
  otherComment: {
    flexDirection: "row",
  },
  commentItemDataMy: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
    marginRight: 16,
    marginBottom: 24,
    padding: 16,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  commentItemDataOther: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
    marginLeft: 16,
    marginBottom: 24,
    padding: 16,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default OnePostScreen;
