import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true })
        let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            page: 1,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    page: this.state.page - 1,
                    articles: data.articles,
                    loading: false
                })
            })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            document.getElementById('nextBtn').disabled = false
            let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        page: this.state.page + 1,
                        articles: data.articles,
                        loading: false
                    })
                })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row" id='parentDiv'>
                    {!this.state.loading && this.state.articles.length>1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={this.handleNextClick}
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        >Next &rarr;</button>
                    </div>}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 childDiv" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                    {!this.state.loading && this.state.articles.length>1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={this.handleNextClick}
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        >Next &rarr;</button>
                    </div>}
                </div>
            </div>
        )
    }
}

export default News