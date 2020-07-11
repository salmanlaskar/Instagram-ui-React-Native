import React, { Component } from 'react'
import { Text,View, StyleSheet, FlatList,SafeAreaView,ActivityIndicator,Image, Button } from 'react-native'
import {getPosts} from './../api/GetFeedApi';

class Feed extends Component {
  state = { DATA: null, isRefreshing: false }
  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await getPosts();
      //console.log(posts);
      this.setState({ DATA: posts, isRefreshing: false })
    } catch (e) {
      console.error(e)
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.fetchPosts()
  }
  render() {
    if(this.state.DATA!=null){
      //console.log(this.state.DATA.Length);
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.DATA}
              renderItem={({item}) => 
              <view style={{flex:1,flexDirection:'row'}}>
              <Image style={{width:200,height:300}}source={{uri:item.postPhoto}} />
              <view style={{flex:1,justifyContent:'center'}}>
              <Text >{item.postTitle}</Text>
              </view>
              </view>
            }
            />
          </View>
        );}
    else {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8
  }
});
  export default Feed;