import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function FooterComponents() {
  return (
    <>
        <Card className=' position-absolute bottom-0 start-50 translate-middle-x' fixed='bottom'>
            <Card.Body>
            <Col className='align-self-center'>
                <footer className="">
                Created By Github : yusufva
                </footer>
            </Col>
            </Card.Body>
        </Card>
    </>
  )
}
