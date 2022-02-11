import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ListItem,
  List,
} from '@mui/material';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


function Component({post}) {
  const {
    author,
    description,
    lastUpdate,
    location = null,
    image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGxHfMnnGIe8IQihn8Ul6cVeD8JelKD0HPA&usqp=CAU',
    price,
    publicationDate,
    status,
    title,
  } = post;

  return (
    <Badge status={status}>
      <Card>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5" p={2}>
                {title}
                <Typography variant="body2" color="text.secondary">
                  {`published ${publicationDate} ${location || ''}`}
                </Typography>
              </Typography>
              {price ? (
                <Typography variant="h4" p={2}>
                  {price} pln
                </Typography>
              ) : null}
            </Box>
            <CardContent sx={{flexGrow: 1}}>{description}</CardContent>
            <List>
              <ListItem>
                <Typography variant="caption">Contact: {author.email}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="caption">Last Update: {lastUpdate}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <CardMedia component="img" src={image} alt="PostContent image example" />
          </Grid>
        </Grid>
      </Card>
    </Badge>
  );
}

Component.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {Component as PostContent};
