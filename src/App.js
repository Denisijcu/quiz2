import React, { Component } from 'react';

import './App.css';



const VisitorScore = (props) => (
    <h1>Visitor:  {props.score}</h1>
);



class App extends Component {
  constructor(props){
   super(props);
   this.state = {
      visitor : 0,
      reset: false
   }

   this.handleVisitor = this.handleVisitor.bind(this);
   this.handleReset = this.handleReset.bind(this);
   this.handleConfirmed = this.handleConfirmed.bind(this);
   this.handleCancel = this.handleCancel.bind(this);
  } 
  

  componentDidMount(){
      fetch('https://brightonmuseums.org.uk/brighton/wp-content/uploads/sites/6/2018/01/PhilpotExhibitionBrightonMuseum_0817.jpg')
       .then(response => response.blob())
       .then(blog =>{
            let imagen =   document.getElementById('imagen');
            imagen.src = URL.createObjectURL(blog) ;
       })
       .catch()
        {
            console.log('error');
       };
  }

  co
  

  handleVisitor(){
    this.setState({visitor: this.state.visitor+1, reset: false})
    console.log('Visitor',this.state.visitor);
  }

  handleReset(){
    this.setState({
        reset: true,
    });

    console.log('Reset');
  }

  handleConfirmed(){
    this.setState({
        visitor: 0,
        reset: false
    }); 
  }

  handleCancel(){
    this.setState({
        reset: false
    }); 
  }





  render() {
    return (
      <div className="Gallery" style={style}>
       <img id="imagen" src="" alt="no found"  />
       <VisitorScore score={this.state.visitor}/>
         
         <h1>Art Gallery</h1>
         
         <h2>Welcome </h2>

         <button onClick={this.handleVisitor}> Sign In Here </button>

        { !this.state.reset && this.state.visitor > 0 ? <button onClick={this.handleReset}> Reset </button>: ''}

        { this.state.reset && this.state.visitor > 0 ? 


        <div className="reset"> 
    
        <h5> Are you sure want to reset ?</h5>
 
        <button onClick={this.handleConfirmed}>Ok</button>
        <button onClick={this.handleCancel}>Cancel</button>
      
       </div>
       : ''}


      </div>
    );
  }

  
}
const style = {
    minWidth: '100vw',
    minHeight: '100vw',
    textAlign: 'Center'
      
}

export default App;
