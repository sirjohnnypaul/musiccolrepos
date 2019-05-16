import axios from 'axios';
import { NEWS_API_URL, NEWS_API_KEY } from '../constants/urls';

export const newsService = {
    getTopHeadlines,
    getEverything,
};

function getTopHeadlines() {
    return axios({
        url: `${NEWS_API_URL}top-headlines?sources=mtv-news,mtv-news-uk&apiKey=${NEWS_API_KEY}`
     })
     .then(res => {
        return res.data;
     });
}

function getEverything(bandName) {
    return axios({
        url:`${NEWS_API_URL}everything?q=${bandName}&from=2018-12-26&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`
     })
     .then(res => {
        return res.data;
     });
}