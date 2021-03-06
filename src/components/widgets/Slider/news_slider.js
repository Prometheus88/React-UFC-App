import React, {Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_templates';

class NewsSlider extends Component{

  state = {
    news: []
  }

  componentWillMount(){
    console.log('did mount')
    axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      .then( response => {
        this.setState({
          news:response.data
        })
      })
  }
  render(){
    console.log(this.state.news)
    return(
      <div>
        <SliderTemplate data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    )
  }
}


export default NewsSlider;
