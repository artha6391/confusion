import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className = "col-md-5 m-1">
                    <Card>
                        <CardImg width = "100%" src = {baseUrl + dish.image} alt = {dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    function RenderComments({comments, postComment, dishId}) {
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
                        -- {comment.author}, {comment.date} 
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
                <CommentForm comments = {comments} 
                    dishId = {dishId} postComment = {postComment}
                />
            </div>
        );
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return (
                <div className = "container">
                    <div className = "row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (props.errMess) {
            return (
                <div className = "container">
                    <div className = "row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        } else if (props.dish == null) {
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
                    <RenderComments comments = {props.comments} 
                        postComment = {props.postComment} 
                        dishId = {props.dish.id}
                    />
                </div>
            </div>
        );
    } 

export default DishDetail;