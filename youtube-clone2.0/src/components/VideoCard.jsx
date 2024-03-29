import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card sx={{ width: { xs: '300px', sm: '358px', md: '350px' }, boxShadow: 'none', borderRadius: '0' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { //: CardMedia and image match
              xs: '300px', sm: '358px', md: '350px'
            }, height: 150
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>

        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>

        </Link>
      </CardContent>
    </Card>
  )
}
export default VideoCard