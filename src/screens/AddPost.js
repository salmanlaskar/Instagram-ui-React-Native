import React, { Component } from 'react'
import { Image, View,Text, Button, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {uploadPost} from './../api/AddPostApi'

class AddPost extends Component {
  state = {
    image: null,
    title: ''
  }
  onChangeTitle = title => {
    this.setState({ title })
  }
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  selectImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      } catch (E) {
        console.log(E);
      }
  }

  onSubmit = async () => {
    try {
      const post = {
        photo: this.state.image,
        title: this.state.title
      }
      uploadPost(post)
      this.setState({
        image: null,
        title: '',
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 60 }}>
        <View>
          {this.state.image ? (
            <Image
              source={this.state.image}
              style={{ width: '100%', height: 300 }}
            />
          ) : (
            <Button
              onPress={this.selectImage}
              title="Add an image"/>
          )}
        </View>
        <View style={{ marginTop: 80, alignItems: 'center' }}>
          <Text category='h4'>Post Details</Text>
          <TextInput
            placeholder='Enter title of the post'
            style={{ height: 30, borderColor: 'gray', borderWidth: 1 }}
            value={this.state.title}
            onChangeText={title => this.onChangeTitle(title)}
          />
          <Button status='success' title='Add Post' onPress={this.onSubmit}/>
        </View>
      </View>
    )
  }
}
export default AddPost;