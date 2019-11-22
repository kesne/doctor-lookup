export class Doctor {
  async search(searchTerm){
      let doctors = [];
      try {
          const response = await fetch(``);
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
