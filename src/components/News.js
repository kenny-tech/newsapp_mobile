import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    Linking,
    TouchableOpacity
  } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import * as actions from '../actions';

class News extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    render() {
        if (!this.props.news) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <Container>
            <Header />
                <Content>
                {
                        this.props.news.map(newsItem => {
                        return (<List>
                            <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: newsItem.urlToImage }} />
                            </Left>
                            <Body>
                                <Text>{newsItem.title}</Text>
                                <Text note numberOfLines={1}>{newsItem.description}</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={() => Linking.openURL(newsItem.url)}>
                                    <Button transparent>
                                        <Text onPress={() => Linking.openURL(newsItem.url)}>View</Text>
                                    </Button>
                                </TouchableOpacity>
                            </Right>
                            </ListItem>
                        </List>)
                    })
                }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { news: state.news.newsItems }
}

export default connect(mapStateToProps, actions)(News);

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    newsImage: {
      width: "100%",
      height: 200
    }
  });
  