import { config } from 'APIService/config';

export const call = (api, method, request) => {
    const requestOptions = {
        method: method,
        redirect: 'follow'
    };

    let requestURL = "";
    let parameter = "";

    if(api == '/videos'){
        parameter = "&part=snippet&chart=mostPopular&maxResults=5&key=AIzaSyCtcejghzwTBfNUQgvRNplhsmRCIWjR1x0";    
    }else if(api == '/search'){
        parameter = `&part=snippet&maxResults=5&q=${request.searchValue}&type=${request.type}`;
    }

    requestURL= `${config.baseURL}${api}?key=${config.privateKey}${parameter}`;

    return fetch(requestURL, requestOptions)
        .then(response => response.json())
        .then(result => { console.log(result.items); return result.items; })
        .then((response) => response.map(item => {return {...item, id: item.id.videoId}}))
        .catch(error => console.log('error', error));
}