import React from 'react';
import Form from './components/Form';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  state = {
    data:[]
  };

  handleSubmit = (newVal) => {
    this.setState({data: [...this.state.data, newVal]})
  };

//Persistant Todo starts here
  componentDidUpdate(){
    localStorage.setItem('dataStore', JSON.stringify(this.state.data));
  }

  componentDidMount(){
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if(dataStore !== null){
    this.setState({data: dataStore});
  }
  }


  handleRemove = index => {
    const {data} = this.state;
    this.setState({
      data: data.filter((item, i) => {
        return i !== index
      })
    })
  }

  handleOnEdit = (editVal, index) => {
    const {data} = this.state;
    
    data.forEach((item, i) => {
      if(i === index){
        item.todo = editVal;
      }
    });
    this.setState({data: data});
  }

  render(){
    const{data} = this.state;
        console.log(data)
    return(
      <>
      <div className="app">
        <h1>To-do List</h1>
        
        <Form onSubmit={this.handleSubmit} />
        {data.length === 0 
        ? <h4>Enter Tasks to Begin</h4>
        : <List todo={data} 
          onDelete = {this.handleRemove} 
          onEdit = {this.handleOnEdit}
          count = {data.length}
        />
      }
      </div>
      <a href="https://www.saifux96.wordpress.com" className="footer">Check my UX page here</a>
      </>
        
    );
  };
}
export default App;
