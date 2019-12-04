import { Doctor } from './doctor.js';

export async function searchBetterDoctor(queryType, queryText) {
    try {
        const response = await fetch(
            `https://api.betterdoctor.com/2016-03-01/doctors?${queryType}=${queryText}&location=45.512%2C%20-122.658%2C50&user_location=45.512%2C%20-122.658&sort=best-match-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`,
        );

        if (response.ok) {
            const jsonResponse = await response.json();
            return cullSearchData(jsonResponse.data);
        } else throw new Error(response.status);
    } catch (error) {
        console.error(`BetterDoctor API: ${error}`);
        return error;
    }
}

function cullSearchData(searchData) {
    if (searchData.length === 0) return [];
    return searchData.map(searchResult => {
        return new Doctor(searchResult);
    });
}
