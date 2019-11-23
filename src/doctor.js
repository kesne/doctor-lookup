export class Doctor {
    constructor(firstName, lastName, title, photo, takesNewPatients, practiceName, street1, street2, city, state, zip, isWithinRange, website) {
        this.name = `${firstName} ${lastName}, ${title}`;
        this.photo = photo;
        this.takesNewPatients = takesNewPatients;
        this.practiceName = practiceName;
        this.practiceAddress =
            `${street1} | ${street2}
            ${city}, ${state} ${zip}`;
        this.isWithinRange = isWithinRange;
        this.website = website;
    }
}
