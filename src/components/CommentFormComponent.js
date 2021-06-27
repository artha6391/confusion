import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button, Col, Row, Label } from 'reactstrap';

const required = (val) => val && val;

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
        alert("Your submission is: " + JSON.stringify(values));
    }

    render() {
        return(
            <React.Fragment>
                <Button outline onClick = {this.toggleModal}>
                    <span className = "fa fa-comments fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {(values) => this.handleSubmit(values)}>
                            <Row className = "form-group">
                                <Label htmlFor = "name" md = {12}>
                                    Your Name
                                </Label>
                                <Col md = {12}>
                                    <Control.text model = ".name" className = "form-control"
                                        name = "name" id = "name"
                                        validators = {{
                                            required
                                        }}
                                    />
                                    <Errors className = "text-danger"
                                        model = ".errorname"
                                        show = "touched"
                                        messages = {{
                                            required: "Required"
                                        }}
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
                                        validators = {{
                                            required
                                        }}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors className = "text-danger"
                                        model = ".author" 
                                        show = "touched"
                                        messages = {{
                                            required: "Required"
                                        }}
                                    />
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
                                        validators = {{
                                            required
                                        }}
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