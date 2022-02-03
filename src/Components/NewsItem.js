import React, { Component } from 'react';

export default class NewsItwm extends Component {
  render() {
    let {title , description , imageUrl , newsUrl} = this.props;
    return <div>
      <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}.....</h5>
    <p className="card-text">{description}.....</p>
    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary ">Read more</a>
  </div>
</div>
        
    </div>;
  }
}
