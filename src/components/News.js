import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class News extends Component {

    componentWillMount() {
        this.props.fetchNews();
    }

    renderFeature() {
        return this.props.news.map(newsItem => {
            return (
                <div class="card">
                    <img class="card-img-top" src={newsItem.urlToImage} alt={newsItem.title} style={{ width: '100%' }} />
                    <div class="card-body">
                    <h4 class="card-title">{newsItem.title}</h4>
                    <p class="card-text">{newsItem.content}</p>
                    <p align="center"><a href={newsItem.url} target="_blank">Read More</a></p>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.news) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1 align="center">News</h1>
                <ul>
                    {this.renderFeature()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { news: state.news.newsItems }
}

export default connect(mapStateToProps, actions)(News);