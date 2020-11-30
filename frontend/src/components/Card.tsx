import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Button, Container, Row, Col
} from 'reactstrap';

import GetAction from '../store/actions/articles/Get'
import DeleteAction from '../store/actions/articles/Delete'
import { StoreTypes } from '../store/types/storeTypes';

const CardComponent = () => {
    const dispatch = useDispatch()
    const stateArticles = useSelector((state: StoreTypes) => state.articles)
    const fetchAPI = () => {
        dispatch(GetAction())
    }
    const handleDelete = (id: number) => {
        dispatch(DeleteAction(id))
    }
    const mapList = stateArticles.map(article => {
        return (
            <Col className="py-2 px-2" key={article.id} xs="12" sm="6" md="4" lg="3">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{article.title}</CardTitle>
                        <CardText>{article.content}</CardText>
                        <CardText>
                            <small>{article.date}</small>
                        </CardText>
                        <Button
                            className="mr-2"
                            onClick={() => handleDelete(article.id)}
                            color="danger">Delete</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    })
    let showCard
    if (stateArticles.length >= 1) {
        showCard = mapList
    } else {
        showCard = (
            <Card>
                <CardBody>
                    <CardTitle tag="h5">You have no articles.</CardTitle>
                    <CardSubtitle className="text-center">Create a new article.</CardSubtitle>
                    <Button color="link">
                        <Link to="/create">Move to Create Page</Link>
                    </Button>
                </CardBody>
            </Card>
        )
    }
    useEffect(() => fetchAPI(), [])
    return (
        <Container>
            <Row className="py-5 justify-content-center">
                {showCard}
            </Row>
        </Container>
    )
}

export default CardComponent
