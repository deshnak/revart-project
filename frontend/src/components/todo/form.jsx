
import { useContext, useState  } from "react";
import _ from "lodash";

import { Button, Input} from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
import * as Semantic from "semantic-ui-react";

import MainContext from "../../contexts/main";

// import Input from "../form/input";
// import Button from "../form/button";
import apiService from "../../services/api.service";


const Form = () => {

  const [ error, setError ] = useState(false);
  const {
    todo,
    setTodo,
    setTodos,
    update,
    setUpdate
  } = useContext(MainContext);

  const checkInput = () => {
    if (_.isNil(todo) || _.isEmpty(todo)) setError(true);
    setTimeout(() => setError(false), 2000);
  };

  const getTodos = async() => {
    const response = await apiService.getTodo();
    setTodos(response.data);
  };

  const addTodo = async() => {
    checkInput();
    if (!error && !_.isNil(todo) && !_.isEmpty(todo)) await apiService.addTodo(todo);
    await getTodos();
  };

  const updateTodo = async() => {
    checkInput();
    if (!error && !_.isNil(todo) && !_.isEmpty(todo)) await apiService.updateTodo(update, { content: todo });
    await getTodos();
  };

  const setTodoValue = (value) => {
    if (_.isEmpty(value)) {
      setUpdate(null);
      setTodo(null);
    }
    setTodo(value);
  };

  return <Semantic.Form>
    <Semantic.Form.Group>
      <Input
          placeholder="Enter your new todo item..."
          onChange={(e) => setTodoValue(e.target.value)}
        value={_.isNil(todo) ? "" : todo }
        error={error}/>
      {
        _.isNil(update) ?
          // <Button text="Add" type="primary" color="blue" onClick={() => addTodo()}/> :
          <Button  onClick={() => addTodo()} type="primary">Add</Button> :
          <Button danger onClick={() => updateTodo()}>Update</Button>
      }
    </Semantic.Form.Group>
  </Semantic.Form>;
};

export default Form;
