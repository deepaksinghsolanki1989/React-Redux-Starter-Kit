import {create} from 'apisauce';

const api = create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// export const getPagesAsync = async () => {
// 	let response = {data: null, error: ''};

// 	await api
// 		.get('/pages')
// 		.then(apiResponse => {
// 			if (apiResponse.ok) {
// 				response.data = apiResponse.data;
// 			} else {
// 				response.error =
// 					'Unable to get records. Please try again letter.';
// 			}
// 		})
// 		.catch(error => console.log('error => ', error));

// 	return response;
// };