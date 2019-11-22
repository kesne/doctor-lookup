export class Doctor {
  async search(searchTerm){
        let doctors;

        const response = await fetch(``);

        if(response.ok) {
            const jsonResponse = await response.json();
            doctors = jsonResponse;
        }
        else {
            console.error(response.status);
        }

}
