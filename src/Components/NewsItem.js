import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div className="col-12 col-md-3">
                <div className="card h-100" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "./image.jpeg" :imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body justify-content-between">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>

        )
    }
}
