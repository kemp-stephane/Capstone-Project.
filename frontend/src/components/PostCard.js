import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Actions from './Actions';
import { AuthContext } from '../App';

export default function PostCard(props) {
  const {user, _id, title, content, image} = props.post;
  const {auth} = React.useContext(AuthContext)
  return (
    <Card sx={{ width: "100%", boxShadow: "0 0 15px rgb(0, 0, 0, 0.2)", borderRadius: "4px" }} id={_id}>

      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={user}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         <b><u>{title}</u></b>

         <br/> {content}
        </Typography>
      </CardContent>
      {
          auth._id === user._id && <Actions id={_id}/>
        }
    </Card>
  );
}