import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const maxLength = 50; // Максимальная длина записи

  const addTask = () => {
    if (newTask.length <= maxLength) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    } else {
      alert(`Запись не должна превышать ${maxLength} символов.`);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(newTasks);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Todo List</h1>
          <Form>
            <Form.Group controlId="formNewTask">
              <Form.Control
                type="text"
                placeholder="Enter new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={addTask}>
              Add Task
            </Button>
          </Form>
          <ListGroup className="mt-4">
            {tasks.map((task, index) => (
              <ListGroup.Item
                key={index}
                variant={task.completed ? 'success' : ''}
                onClick={() => toggleTask(index)}
                style={{ cursor: 'pointer' }}
              >
                {task.text}
                <Button
                  variant="danger"
                  className="float-right"
                  size="sm"
                  onClick={(e) => { e.stopPropagation(); deleteTask(index); }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
