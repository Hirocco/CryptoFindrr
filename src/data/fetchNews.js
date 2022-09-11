const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d4a2a9607mshc7387216f31ee65p1a31e6jsnc8ae1191b21f',
		'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
	}
};

const getNews = async() =>{
return await fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
	    .then(res => res.json());
}
export default getNews;