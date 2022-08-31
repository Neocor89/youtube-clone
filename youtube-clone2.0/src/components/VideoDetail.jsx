//:: React imports
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

//:: MUI imports
import { Box, Typography, Stack } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//:: Dependencies import
import ReactPlayer from 'react-player';

//:: Local imports
import { fetchFromAPI } from './utils/fetchFromAPI';
import { Videos } from './';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const { id }= useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]));
  },[id]);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            className='react-player' controls />
          </Box>
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail