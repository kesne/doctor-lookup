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
}
