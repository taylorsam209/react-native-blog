import React from "react";
import { Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "./screens/Login/Login";
import Blogs from "./screens/Blogs/Blogs";
import NewBlog from "./screens/NewBlog/NewBlog";

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
        title: "Login",
        headerTitleStyle: {
          flex: 1,
          textAlign: "center"
        }
    },
  },
  Blogs: {
    screen: Blogs,
    navigationOptions: ({ navigation }) => {
      return {
      title: "Blogs",
      headerRight: (<Button 
      title={"New"} 
      onPress={() => navigation.navigate("NewBlog")} 
        />)
      };
    },
  },
  NewBlog: {
    screen: NewBlog,
    navigationOptions: {
      title: "New Blog"
    }
  }, 
}, {
  initialRouteName: 'NewBlog'
});
