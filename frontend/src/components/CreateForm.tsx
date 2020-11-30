import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Container, Row, Col } from 'reactstrap';
import { ButtonEvent, InputEvent } from '../@types/eventTypes';

import CreateAction from '../store/actions/articles/Create'

const CreateForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        title: '',
        content: '',
        date: '',
    })
    const handleOnChange = (e: InputEvent) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e: ButtonEvent) => {
        e.preventDefault()
        dispatch(CreateAction(form))
        setForm({
            title: '',
            content: '',
            date: '',
        })
    }
    return (
        <Container>
            <Row className="justify-content-center py-5">
                <Col xs="12" sm="10" md="5" lg="5">
                    <h3 className="text-center mb-4">Add new article</h3>
                    <Form>
                        <Input
                            type="text"
                            placeholder="Title"
                            className="mt-2"
                            id="title"
                            value={form.title}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="text"
                            placeholder="Content"
                            className="mt-2"
                            id="content"
                            value={form.content}
                            onChange={handleOnChange}
                        />
                        <Input
                            type="text"
                            placeholder="Date"
                            className="mt-2"
                            id="date"
                            value={form.date}
                            onChange={handleOnChange}
                        />
                        <Button
                            color="primary"
                            className="mt-4"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateForm
