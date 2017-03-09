import React from 'react';
import img from '../images/c.jpg'



let data = ['白菜','萝卜','青椒','土豆','猪肉','鱼肉','鸭肉']
class EatWhat extends React.Component{
  constructor(){
    super();
    this.state={
      start: false,
      data,
      text: '',
      text1: "吃屎吧!",
      imgsrc: "none"
    }
  }
  select(){
    let result=this.state.data[Math.floor(Math.random()*this.state.data.length)]
    this.setState({text:result})
  }
  handleClick(){
    // this.setState({start:!this.state.start})
    if (this.state.start) {
      //清除计时器
      clearInterval(this.interval);
      //false
      this.setState({start:false});
      this.setState({text: this.state.text1});
      this.setState({imgsrc: "block"})
    }else{
      //计时器
      this.interval=setInterval(()=>this.select(),300);
      //true
      this.setState({start:true})
      this.setState({imgsrc: "none"})
    }
  }
  render(){
    let styles = {
      imgsty: {
        display: this.state.imgsrc
      }
    }
    return(
      <div className="main">
        <div>
          <p>今天吃什么：<span>{this.state.text}</span></p>
          <button onClick={this.handleClick.bind(this)}>{this.state.start?'停止':'开始'}</button>
        </div>
        <img src={img} style={styles.imgsty}/>
      </div>
    )
  }
}

export default EatWhat;
