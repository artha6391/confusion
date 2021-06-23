import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className = "col-md-5 m-1">
                    <Card>
                        <CardImg width = "100%" src = {dish.image} alt = {dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }


        const comm = comments.map((comment) => {
            return (
                <li key = {comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author} &nbsp , &nbsp {comment.date} 
                    </p>
                </li>
            );
        })

        return (
            <div className = "col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className = "list-unstyled">
                    {comm}
                </ul>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;

        if (dish == null) {
            return (
                <div></div>
            );
        }

        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(dish.comments);

        return (
            <div className = "row">
                {dishItem}
                {dishComments}
            </div>
        );
    } 
}

export default DishDetail;