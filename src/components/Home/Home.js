
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import Item10 from '../../images/item10.jpg'
import Item11 from '../../images/item11.jpg'
import Item12 from '../../images/item12.jpg'
import Item13 from '../../images/item13.jpg'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

class EnhancedTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 },
        { id: 7, title: 'Running', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 100, img: Item7 },
        { id: 8, title: 'Sports', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item8 },
        { id: 9, title: 'Casual', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item9 },
        { id: 10, title: 'Sports', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 130, img: Item10 },
        { id: 11, title: 'Jogger', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 140, img: Item11 },
        { id: 12, title: 'Winter', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 150, img: Item12 },
        { id: 13, title: 'Formal', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item13 }


      ],
      page: 0,
      totalpages: 0,
      rowsPerPage: 2,
      columnsPerpage: 3,
      startIndex: 0
    };
  }

  componentDidMount() {
    this.setState({ totalpages: Math.ceil(this.state.items.length / (this.state.rowsPerPage * this.state.columnsPerpage)) });
    // alert(this.state.totalpages)

  }

  GoToNextPage = () => {
    let currentPage = this.state.page + 1;
    this.setState({ page: currentPage, startIndex: currentPage * (this.state.rowsPerPage * this.state.columnsPerpage) });
  };

  GoToPreviousPage = () => {
    let currentPage = this.state.page - 1;
    this.setState({ page: currentPage, startIndex: currentPage * (this.state.rowsPerPage * this.state.columnsPerpage) });
  };


  createTable = () => {

    let table = []
    let row = 1
    // Outer loop to create parent
    for (let index = this.state.startIndex; index < this.state.items.length && row <= this.state.rowsPerPage; index = index + this.state.columnsPerpage) {
      let children = []
      row = row + 1
      //Inner loop to create children
      for (let col = 0; col < this.state.columnsPerpage; col++) {
        if (index + col < this.state.items.length) {
          children.push(
            <td component="th" scope="row" padding="none" style={{ border: 'none' }}>
              <Card style={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 250 }}
                    image={this.state.items[index + col].img}
                    title={this.state.items[index + col].title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.state.items[index + col].title}
                    </Typography>
                    <Typography component="p">
                      {this.state.items[index + col].desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Order
                  </Button>
                  <Button size="small" color="primary">
                    View More
                        </Button>
                </CardActions>
              </Card>
            </td>
          )
        }
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  render() {
    const { classes } = this.props;
    const { items, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);
    return (
      <div>
        <div>
          <MDBContainer>
             <h4 className="mt-5 mb-2"><b>HOURS DEAL</b></h4>
            <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide"   style={{ height: 250 }}/>
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide"  style={{ height: 250 }} />
                    <MDBMask overlay="black-strong" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide"  style={{ height: 250 }} />
                    <MDBMask overlay="black-slight" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item"  style={{ height: 250 }}/>
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3 col-md-3"></div>
          <div className="col-sm-2 col-md-2">
            <label class="radio-inline"><input type="radio" name="optradio" checked />Store &nbsp; &nbsp; &nbsp;</label>
            <label class="radio-inline"><input type="radio" name="optradio" />Category   </label>
          </div>
          <div className="col-sm-3 col-md-3">
            <input type="text" class="form-control" id="search" placeholder="Search" />
          </div>
          <div className="col-sm-4 col-md-4">
            <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToNextPage} disabled={this.state.page == this.state.totalpages - 1}>
              Search
          </Button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-5 col-md-5"></div>
          <div className="col-sm-7 col-md-7">
            <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToPreviousPage} disabled={this.state.page == 0} >
              Previous
                </Button>&nbsp;&nbsp;
                <Button variant="contained" color="primary" className={classes.button} onClick={this.GoToNextPage} disabled={this.state.page == this.state.totalpages - 1}>
              Next
                </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-2"></div>
          <div className="col-sm-8 col-md-8">
            <table className={classes.table} aria-labelledby="tableTitle">
              <tbody>
                {this.createTable()}
              </tbody>
            </table>
          </div>
          <div className="col-sm-2 col-md-2"></div>
        </div>
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);