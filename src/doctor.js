export class Doctor {
    constructor({ profile, specialties, practices }) {
        const practice = practices[practices.length - 1];

        this.firstName = profile.first_name;
        this.lastName = profile.last_name;
        this.title = profile.title;
        this.field = specialties.length > 0 ? specialties[0].actor : 'Unknown';
        this.bio = profile.bio;
        this.photo = profile.image_url;
        this.takesNewPatients = practice.accepts_new_patients;
        this.practiceName = practice.name;
        this.addressLine1 = `${practice.visit_address.street}${
            practice.visit_address.street2 ? ` ${practice.visit_address.street2}` : ''
        }`;
        this.addressLine2 = `${practice.visit_address.city}, ${practice.visit_address.state} ${practice.visit_address.zip}`;
        this.isWithinRange = practice.within_search_area;
        this.website = practice.website ? practice.website : 'Website not available.';
        this.phoneNumber = practice.phones[0].number;
    }

    getFullName(includeTitle) {
        return `${this.firstName} ${this.lastName}${
            includeTitle && this.title ? `, ${this.title}` : ''
        }`;
    }
}
