import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(selectedDish) {
    return (
      <div>
        <Card>
          <CardImg top src={selectedDish.image} alt={selectedDish.name} />
          <CardBody>
            <CardTitle className="font-weight-bold">
              {selectedDish.name}
            </CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(selectedDish) {
    if (selectedDish.comments && selectedDish.comments.length > 0) {
        const comment = selectedDish.comments?.map((comment) => {
        return (
            <div key={comment.id}>
            <div className="pt-3">{comment.comment}</div>
            <div className="pt-3">
                -- {comment.author}, {new Date(comment.date).toDateString()}
            </div>
            </div>
        );
        });
        return (
        <div>
            <h4>Comments</h4>
            <div>{comment}</div>
        </div>
        );
    } else return <div></div>;
  }

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.selectedDish)}
            </div>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}
export default DishDetail;