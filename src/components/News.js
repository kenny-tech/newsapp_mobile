import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    View,
    StyleSheet
  } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


import * as actions from '../actions';

class News extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    renderFeature() {
        return this.props.news.map(newsItem => {
            return (
                <View style={styles.container}>
                    <Text key={newsItem.title}>{newsItem.title}</Text>
                </View>
            )
        })
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
            <View>
                {this.renderFeature()}
            </View>
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
  