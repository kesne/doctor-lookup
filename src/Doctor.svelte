<style>
  #doc-photo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  #doc-photo img {
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    border-radius: 50%;
    border: 2px solid rgb(75, 153, 191);
  }

  #doc-details {
    padding: 1rem;
    overflow: auto;
  }
  #doc-name,
  #doc-field,
  #doc-takes-new,
  #practice-address1,
  #practice-address2,
  #practice-number,
  #practice-web {
    text-align: center;
    margin: 0;
  }
  #doc-name {
    font-size: 1.75rem;
  }
  #doc-field {
    font-size: 1rem;
    font-style: italic;
  }
  #doc-takes-new,
  #practice-address1,
  #practice-number,
  #practice-web {
    margin-top: 10px;
  }

  #doc-bio {
    grid-area: 2 / 1 / 3 / 3;
    overflow: auto;
  }
</style>

<script>
  export let doctor;
</script>

<div id="doc-photo">
  <img src={doctor.photo} alt="Doctor Photo" />
</div>

<div id="doc-details">
  <h3 id="doc-name">{doctor.getFullName(true)}</h3>
  <h4 id="doc-field">{doctor.field}</h4>
  <p id="doc-takes-new">Doctor {doctor.getFullName()} {doctor.takesNewPatients ? 'takes' : 'does NOT take'} new patients.</p>
  <p id="practice-address1">{doctor.addressLine1}</p>
  <p id="practice-address2">{doctor.addressLine2}</p>
  <p id="practice-number">{doctor.phoneNumber}</p>
  <p id="practice-web">{doctor.website}</p>
</div>

<div id="doc-bio">
  <p>{doctor.bio}</p>
</div>
