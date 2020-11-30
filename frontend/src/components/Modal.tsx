import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import { ButtonEvent, InputEvent } from '../@types/eventTypes';

import PatchAction from '../store/actions/articles/Patch'
import { PatchArticleInterface } from '../store/types/articles/formTypes';

const ModalComponent = ({ article }: { article: PatchArticleInterface }) => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [form, setForm] = useState({
        title: article.title,
        content: article.content,
        date: article.date,
    })
    const toggle = () => setModal(!modal);
    const close = (e: ButtonEvent) => {
        e.preventDefault()
        setModal(!modal)
    }
    const handleOnChange = (e: InputEvent) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const PatchArticle = (e: ButtonEvent) => {
        e.preventDefault()
        const formData: PatchArticleInterface = {
            id: article.id,
            title: form.title,
            content: form.content,
            date: form.date,
        }
        dispatch(PatchAction(formData))
        setForm({
            title: '',
            content: '',
            date: ''
        })
        setModal(!modal)
    }
    return (
        <>
            <Button color="info" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Article</ModalHeader>
                <ModalBody>
                    <Form className="px-2 py-2">
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
                            type="date"
                            placeholder="Date"
                            className="mt-2"
                            id="date"
                            value={form.date}
                            onChange={handleOnChange}
                        />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={PatchArticle}>Update</Button>{' '}
                    <Button color="info" onClick={close}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalComponent
