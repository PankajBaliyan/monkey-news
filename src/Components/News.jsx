import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
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

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState(
            {
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            }
        )
    };

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Loading />}
                <div className="row">
                    {/* Control buttons  */}
                    {/* {!this.state.loading && this.state.articles.length > 1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={this.handleNextClick}
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        >Next &rarr;</button>
                    </div>} */}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loading />}
                    >
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 childDiv" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name}/>
                            </div>
                        })}
                    </InfiniteScroll>

                    {/* Control buttons  */}
                    {/* {!this.state.loading && this.state.articles.length > 1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={this.handleNextClick}
                            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        >Next &rarr;</button>
                    </div>} */}
                </div>
            </div>
        )
    }
}

export default News