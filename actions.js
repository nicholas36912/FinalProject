import axios from 'axios';

export const SET_QUOTES = 'SET_QUOTES';

export const setQuotes = (quotes) => ({
  type: SET_QUOTES,
  payload: quotes,
});

export const fetchQuotes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const quotes = response.data;
      dispatch(setQuotes(quotes));
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };
};

const NEWS_API_KEY = 'cef95975c14f4769bec134f58c095de9';

// Action types for news
export const SET_NEWS = 'SET_NEWS';

// Action creators for news
export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news,
});

export const fetchNews = () => {
    return async (dispatch) => {
      try {
        const NEWS_API_KEY = '7615c029afba4da8bdaf298d6e2041b6';
        const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=d2ce882ef20f4f69b2cea2557415a765&sentiment=1`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const newsData = await response.json();
        console.log('News data:', newsData); // Log the entire response for inspection

        const articles = newsData.news.map((article) => ({
            title: article.title,
            text: article.text, // or use article.description if available
          }));
        dispatch(setNews(newsData.news));
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  };
