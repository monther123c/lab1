import React from 'react';


class HornedBeast extends React.Component{
  render(){
    return (
    <div> 
           <h2> {this.props.head} </h2>  
       


       <img src = {this.props.src} />
       
       <p>
       {this.props.dis}
        </p> 
            
    </div>
    )
  }
}

export default HornedBeast;