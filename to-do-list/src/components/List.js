import React from 'react';
import ListItem from './ListItem';
import 'bootstrap/dist/css/bootstrap.min.css';

class List extends React.Component{
    
    render(){
        const {todo, onDelete, onEdit, count} = this.props;
        return(
            <>
            <ul>
                {
                    todo.map((item, index) =>{
                        return <ListItem 
                        item={item.todo} 
                        key={index}
                        handleDelete={() => {onDelete(index)}}
                        handleEdit= {onEdit}
                        id={index}
                        />
                    })
                }
                
            </ul>
            <h6>You have {count} tasks </h6>
            </>
        );
    };
}

export default List;