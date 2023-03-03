import NavbarComponents from '@/Components/Widget/NavbarComponents'
import HeadComponents from '@/Components/Widget/HeadComponents'
import { useState } from "react"
import { Container, Form, Row, ListGroup, Button, Col } from 'react-bootstrap';
import FooterComponents from '@/Components/Widget/FooterComponents';

export default function Home() {

    const [userInput, setUserInput] = useState('')
    const [TodoList, setTodoList] = useState([])
    
    const handlechange = (e) => {
        e.preventDefault();
        
        setUserInput(e.target.value)
    }
    
    const handlesubmit = (e)=> {
        e.preventDefault()
    
        if (userInput === '') {
          alert('Tulis sesuatu terlebih dahulu')
        } else {
          
          setTodoList([
              userInput,
              ...TodoList
          ])
        }
        
        setUserInput('')
    }
    
    const handleDelete = (todo) =>{
        const updatedArr = TodoList.filter(todoItem=>TodoList.indexOf(todoItem) != TodoList.indexOf(todo))
        
        setTodoList(updatedArr)
    }
  return (
    <>
      <HeadComponents />
      <NavbarComponents />

      <Container>
        <Row classname="justify-content-md-center">
          <Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="userinput">
              <Form.Control type="text" value={userInput} placeholder="Enter to-do" onChange={handlechange} />
            </Form.Group>

            <Button variant="primary" onClick={handlesubmit}>
              Submit
            </Button>
          </Form.Group>
          <ListGroup className='mt-3'>
            {
              TodoList.length>=1 ? TodoList.map((todo,idx)=>{
                return(
                  <ListGroup.Item key={idx} className='d-flex-justify-content-between align-items-md-start'>
                  <div className='ms-2 me-auto'>
                    <Row classname="justify-content-md-center">
                      <Col sm={10}>
                        {todo}
                      </Col>
                      <Col sm={2}>
                        <Button className='xs-4 md-2 d-flex-justify-content-end' variant='danger' onClick={(e)=>{
                          e.preventDefault
                          handleDelete(todo)
                        }}>Delete</Button>
                      </Col>
                    </Row>
                  </div>
                  </ListGroup.Item>
                )
              }) :'Enter a To-do Items'
            }
          </ListGroup>

        </Row>
      </Container>
      
      <FooterComponents />
    </>
  )
}
