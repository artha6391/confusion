import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
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

    const DishDetail = (props) => {
        const dish = props.dish;

        if (dish == null) {
            return (
                <div></div>
            );
        }

        return (
            <div className = "row">
                <RenderDish dish = {props.dish} />
                <RenderComments comments = {props.dish.comments} />
            </div>
        );
    } 

export default DishDetail;