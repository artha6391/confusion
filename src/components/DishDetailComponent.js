import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

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
                        -- {comment.author} &nbsp {comment.date} 
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
                <CommentForm comments = {comments} />
            </div>
        );
    }

    const DishDetail = (props) => {

        if (props.dish == null) {
            return (
                <div></div>
            );
        }

        return (
            <div className = "container">
                <div className = "row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = "/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>    
                    </Breadcrumb>
                    <div className = "col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.comments} />
                </div>
            </div>
        );
    } 

export default DishDetail;