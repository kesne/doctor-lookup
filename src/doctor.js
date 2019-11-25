export class Doctor {
    constructor(firstName, lastName, title, field, bio, photo, takesNewPatients, practiceName, street1, street2, city, state, zip, isWithinRange, website, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.field = field;
        this.bio = bio;
        this.photo = photo;

        this.takesNewPatients = takesNewPatients;
        this.practiceName = practiceName;
        this.practiceAddress = (
            `${street1}${(street2) ? ` ${street2}` : ''}\n${city}, ${state} ${zip}`);
        this.practiceCity = city;
        this.practiceState = state;

        this.isWithinRange = isWithinRange;
        this.website = website;
        this.phoneNumber = phoneNumber;
    }

    getFullName(includeTitle) {
        return `${this.firstName} ${this.lastName}${(includeTitle && this.title) ? `, ${this.title}` : ''}`;
    }
}
