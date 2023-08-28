import { View, Text, StyleSheet, Image } from "react-native";

const PostCard = ({ data }) => {
  return (
    data.length > 0 &&
    data.map((item) => (
      <View style={s.item} key={item.id}>
        <Image source={{ uri: item.uri }} style={s.itemImg} />
        <Text style={s.itemTitle}>{item.title}</Text>
        <View style={s.itemDataWrapper}>
            {parseInt(item.comments) !== 0 ? (
          <View style={s.itemComments}>
              
                <Image source={require("../img/comments.png")} />
                <Text style={s.dataCount}>{item.comments}</Text>
              </View>
            ) : (
              <View style={s.itemComments}>
                <Image source={require("../img/comments_empty.png")} />
                <Text style={s.dataCount}>{item.comments}</Text>
                </View>
            )}
          
          <View style={s.itemLikes}>
            <Image source={require("../img/thumbs-up.png")} />
            <Text style={s.dataCount}>{item.likes}</Text>
          </View>
          <View style={s.itemPlace}>
            <Image source={require("../img/map-pin.png")} />
            <Text style={s.dataCountPlace}>{item.place}</Text>
          </View>
        </View>
      </View>
    ))
  );
};

const s = StyleSheet.create({
  itemImg: {
    height: 240,
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#212121",
  },
  itemDataWrapper: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 32,
  },
  itemComments: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemLikes: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  itemPlace: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  dataCount: {
    marginLeft: 6,
  },
  dataCountPlace: {
    marginLeft: 4,
    textDecorationLine: "underline",
  },
});

export default PostCard;
