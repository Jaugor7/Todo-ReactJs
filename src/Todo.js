//type rfce

import './Todo.css';
import { Avatar,Button, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import React from 'react'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List class="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Dead Line..." />
            </ListItem>
            <DeleteForeverIcon onClick={(event) => {db.collection('todos').doc(props.todo.id).delete()}} />
        </List>
    )
}

export default Todo
