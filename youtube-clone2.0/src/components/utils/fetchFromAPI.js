import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'faffeb8e25msh4d37636911571bdp13207ejsn93a9824fc23a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};