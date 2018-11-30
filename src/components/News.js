import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    Image,
    View
  } from 'react-native'

import * as actions from '../actions';

class News extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    renderFeature() {
        return this.props.news.map(newsItem => {
            return (
                <View>
                    <Image source={newsItem.urlToImage} key={newsItem.urlToImage}/>
                    <Text key={newsItem.title}>{newsItem.title}</Text>
                    <Text key={newsItem.content}>{newsItem.content}</Text>
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