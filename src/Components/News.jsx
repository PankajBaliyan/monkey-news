import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    const { updateProgress } = props;
    updateProgress(10);

    setLoading(true);
    let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    updateProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    updateProgress(50);
    setArticles(parsedData.articles);
    setPage(1);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    updateProgress(100);
  };

  const handlePrevClick = async () => {
    let url = `http://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page - 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPage(page - 1);
        setArticles(data.articles);
        setLoading(false);
      });
  };

  const handleNextClick = async () => {
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
      // do nothing
    } else {
      document.getElementById('nextBtn').disabled = false;
      let url = `http://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setLoading(true);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPage(page + 1);
          setLoading(false);
          setArticles(data.articles);
        });
    }
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <div className="container my-3">
      <h2>NewsMonkey - Top Headlines</h2>
      {loading && <Loading />}
      <div className="row">
        {/* Control buttons  */}
        {/* {!loading && articles.length > 1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={handlePrevClick} disabled={state.page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={handleNextClick}
                            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                        >Next &rarr;</button>
                    </div>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          {articles.map((element) => {
            return (
              <div className="col-md-4 childDiv" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </InfiniteScroll>

        {/* Control buttons  */}
        {/* {!loading && articles.length > 1 && <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={handlePrevClick} disabled={page <= 1}>&larr; Previous</button>
                        <button className="btn btn-dark" id='nextBtn' onClick={handleNextClick}
                            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                        >Next &rarr;</button>
                    </div>} */}
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
