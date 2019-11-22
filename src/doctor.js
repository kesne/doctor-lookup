export class Doctor {
    async search(searchTerm){
        let doctors = [];
        console.log(process.env.API_KEY);
        return;

        try {
            const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=nausea&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
            console.log(response);
            if(response.ok) {
                const jsonResponse = await response.json();
                doctors = jsonResponse; //parse json here
            }
            else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(`API Error: ${error}`);
        }
    }
}
