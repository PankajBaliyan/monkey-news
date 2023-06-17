import { Component } from 'react';
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : 'https://www.livemint.com/lm-img/img/2023/06/04/600x338/With-covid-cases-settling-down--the-National-Centr_1685896944514.jpg'
            }
            className="card-img-top"
            alt="..."
            style={{ height: '160px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title newsTitle">{title} </h5>
            <p className="card-text newsDescription">{description}</p>
            <span className="position-absolute top-0 start-0 badge bg-danger">
              {source}
              <span className="visually-hidden">News Source</span>
            </span>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
