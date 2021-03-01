import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1E252B"
  },
  hero: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Creative Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
          </Typography>

        <Grid container spacing={3}>
          {/* CARD 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1611093791822-15086535830b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Photo Studio
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam pariatur id doloribus est deleniti et quaerat facere molestiae voluptas!
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MH
                    xwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Michelle
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      22 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* CARD 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Graffiti
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor laudantium delectus ducimus nesciunt veritatis hic dolores perspiciatis doloribus molestiae?
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxz
                    ZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Nick
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      23 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* CARD 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1593697972646-2f348871bd56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Song Writing
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores omnis debitis quia ab dicta rerum esse in. Dolor, numquam.
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB
                    8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Nick
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      24 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* CARD 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Camera Gears
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias id beatae minus cum quam nesciunt, repellendus numquam provident rerum necessitatibus.
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixid=MXwxMjA3fDB8MH
                    xwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Daren
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      25 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* CARD 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1517570544249-a47a3b5d8a8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Typography
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni voluptatum provident, aut exercitationem labore! Nam ipsum voluptatum rem itaque?
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1596502059330-be10388e3ba0?ixlib=rb-1.2.1&ixid
                    =MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Bram
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      26 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>

          {/* CARD 6 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Interior Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque hic in, laboriosam architecto beatae numquam doloribus aut a quis autem?
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar
                    src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid
                    =MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Ray
                     </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      27 February 2021
                     </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderOutlinedIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />

        </Box>
      </Container>
    </div >
  )
}

export default App;

