//type rfce

import './Todo.css';
import { Input, Button, List, ListItem, ListItemText, ListItemAvatar, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo : input

        }, {merge : true});

        setOpen(false);
    }

    return (
        <>
        <Modal open={open} onClose={handleClose}>
            <div className={classes.paper}>
                <h1>Edit Your Todo.</h1>
                <Input placeholder = {props.todo.todo} value={input} onChange={event => setInput(event.target.value) }/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
            
        <List class="todo__list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Dead Line..." />
            </ListItem>
            <Button onClick={handleOpen}> Edit </Button>


            <DeleteForeverIcon onClick={(event) => {db.collection('todos').doc(props.todo.id).delete()}} />
        </List>
        </>
    )
}

export default Todo
