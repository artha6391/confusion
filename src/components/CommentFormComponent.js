import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button, Col, Row, Label } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return(
            <React.Fragment>
                <Button outline className = "text-primary bg-light" onClick = {this.toggleModal}>
                    <span className = "fa fa-comments fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {this.handleSubmit}>
                            <Row className = "form-group">
                                <Label htmlFor = "author" md = {12}>
                                    Your Name
                                </Label>
                                <Col md = {12}>
                                    <Control.text model = ".author" className = "form-control"
                                        name = "author" id = "author"
                                    />
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor = "rating" md = {12}>
                                    Rating
                                </Label>
                                <Col md = {12}>
                                    <Control.select model = ".rating" className = "form-control"
                                        name = "rating" id = "rating"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor = "comment" md = {12}>
                                    Comment
                                </Label>
                                <Col md = {12}>
                                    <Control.textarea model = ".comment"
                                        id = "comment" name = "comment"
                                        rows = "6" 
                                        className = "form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Col>
                                    <Button type = "submit" color = "primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CommentForm;