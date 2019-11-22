export class Doctor {
    async search(searchTerm){
        let doctors = [];

        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=45.512%2C%20-122.658%2C50&user_location=45.512%2C%20-122.658&sort=best-match-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            if(response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            }
            else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(`API Error: ${error}`);
        }
    }
}
