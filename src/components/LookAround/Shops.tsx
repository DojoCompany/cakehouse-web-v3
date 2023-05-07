import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid direction="column">
            <Grid
                container
                direction="row"
                spacing={0}
                sx={{
                    marginTop: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: '50px',
                    backgroundPosition: 'center',
                }}
            >
                <Grid item xs={3}>
                    <Card
                        sx={{
                            // justifyContent:'center',
                            maxWidth: 345,
                            height: 445,
                            '&:hover': { maxWidth: 350, height: 450 },
                        }}
                    >
                        <CardMedia
                            component="img"
                            // theme={{ height: 100 }}
                            // height="10px"
                            // image="https://i.picsum.photos/id/1042/200/300.jpg?hmac=rLBArBa4ahYhaKOp1GOxw6W77_v5daNsouqdh_bkoUs"
                            image="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
                            // src="/home/eppen/Desktop/cakes/cake2.jpg"
                            sx={{
                                maxHeight: 345,
                            }}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body1"
                                        color="text.primary"
                                        fontSize="20px"
                                    >
                                        카페 하이웨스트
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon
                                            style={{ float: 'left' }}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary">
                                서울 종로구 돈의동
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card
                        sx={{
                            // justifyContent:'center',
                            maxWidth: 345,
                            height: 445,
                            '&:hover': { maxWidth: 350, height: 450 },
                        }}
                    >
                        <CardMedia
                            component="img"
                            // theme={{ height: 100 }}
                            // height="10px"
                            image="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg" // src="/home/eppen/Desktop/cakes/cake2.jpg"
                            sx={{
                                maxHeight: 345,
                            }}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body1"
                                        color="text.primary"
                                        fontSize="20px"
                                    >
                                        알리케이크
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon
                                            style={{ float: 'left' }}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary">
                                서울 종로구 와룡동
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                spacing={0}
                sx={{
                    marginTop: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: '50px',
                    backgroundPosition: 'center',
                }}
            >
                <Grid item xs={3}>
                    <Card
                        sx={{
                            // justifyContent:'center',
                            maxWidth: 345,
                            height: 445,
                            '&:hover': { maxWidth: 350, height: 450 },
                        }}
                    >
                        <CardMedia
                            component="img"
                            // theme={{ height: 100 }}
                            // height="10px"
                            // image="https://i.picsum.photos/id/1042/200/300.jpg?hmac=rLBArBa4ahYhaKOp1GOxw6W77_v5daNsouqdh_bkoUs"
                            image="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"
                            // src="/home/eppen/Desktop/cakes/cake2.jpg"
                            sx={{
                                maxHeight: 345,
                            }}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body1"
                                        color="text.primary"
                                        fontSize="20px"
                                    >
                                        주케이크
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon
                                            style={{ float: 'left' }}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary">
                                서울 중구 충무로5가
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card
                        sx={{
                            // justifyContent:'center',
                            maxWidth: 345,
                            height: 445,
                            '&:hover': { maxWidth: 350, height: 450 },
                        }}
                    >
                        <CardMedia
                            component="img"
                            // theme={{ height: 100 }}
                            // height="10px"
                            image="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg" // src="/home/eppen/Desktop/cakes/cake2.jpg"
                            sx={{
                                maxHeight: 345,
                            }}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body1"
                                        color="text.primary"
                                        fontSize="20px"
                                    >
                                        카페 얼티밋
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon
                                            style={{ float: 'left' }}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Typography color="text.secondary">
                                서울 종로구 계동
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}
