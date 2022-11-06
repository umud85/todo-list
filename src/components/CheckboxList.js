import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from '../styles/CheckboxList.module.css';
import Checkbox from '@mui/material/Checkbox';
import { PropaneRounded } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CheckboxList(props) {
  const handleCheckbox = (index) => {
    const newTodos = props.todos.map((todo, ind) => {
      if (ind === index) {
        todo.done = !todo.done;
      }
      return todo;
    })
    props.setTodos(newTodos)
  }
  const deleteTodo = (index) => {
    const newTodos = props.todos.filter((todo, ind) => ind !== index);
    props.setTodos(newTodos);
  }
  return <List>
    {
      props.todos.map((todo, index) => {
        if (!todo.done) {
          return <ListItem
            key={todo.value + index}
            className={styles.myListItem}
            disablePadding
          >
            <ListItemButton>
              <Checkbox onChange={() => handleCheckbox(index)} />
              <ListItemText classes={{primary:styles.listText}} primary={todo.value} />
              <DeleteIcon onClick={()=> deleteTodo(index)} />
            </ListItemButton>
          </ListItem>
        } else {
          return <ListItem
            key={todo.value + index}
            className={styles.myListItem}
            disablePadding
            disabled
          >
            <ListItemButton>
              <Checkbox onChange={() => handleCheckbox(index)} />
              <ListItemText classes={{primary:styles.listText}} primary={todo.value} />
              <DeleteIcon onClick={()=> deleteTodo(index)} />
            </ListItemButton>
          </ListItem>
        }
    })
    }
  </List>
}