export class Doctor {
    constructor(firstName, lastName, title, photo, practiceName, street1, street2, city, state, zip) {
        this.name = `${firstName} ${lastName}, ${title}`;
        this.photo = photo;
        this.practiceName = practiceName;
        this.practiceAddress =
            `${street1} ${street2}
            ${city}, ${state} ${zip}`;
        this.website = website;
    }

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

const docInfo = {}
// jsonResponse.data[i].profile.first_name
// jsonResponse.data[i].profile.last_name
// jsonResponse.data[i].profile.title
//`${jsonResponse.data[i].profile.first_name} ${jsonResponse.data[i].profile.last_name}, ${}
// jsonResponse.data[i].profile.image_url
//
// jsonResponse.data[i].practices[0].name;
// jsonResponse.data[i].practices[0].visit_address.street
// jsonResponse.data[i].practices[0].visit_address.street2
// jsonResponse.data[i].practices[0].visit_address.city
// jsonResponse.data[i].practices[0].visit_address.state
// jsonResponse.data[i].practices[0].visit_address.zip
// jsonResponse.data[i].practices[0].within_search_area
//
// jsonResponse.data[i].practices[0].website;
