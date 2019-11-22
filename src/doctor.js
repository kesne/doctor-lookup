export class Doctor {
    async search(searchTerm){
        let doctors = [];

        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&practice_uid=45.5135%C2%B0%20N%2C%20122.6801%C2%B0%20W&location=45.514%2C-122.680%2C100&user_location=45.514%2C-122.680&sort=best-match-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
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
