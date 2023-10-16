export const callAPI = async (callMethod: string, url: string, config?: {}) => {
    const defaultConfig = {
        method: 'GET' && callMethod,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        ...config
    }
    return await fetch('https://dummyjson.com/'+url, defaultConfig)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error)=>console.dir(error));
}
