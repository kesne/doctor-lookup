<script>
  import Doctor from "./Doctor.svelte";
  import Results from "./Results.svelte";
  import { searchBetterDoctor } from "./search.js";

  let searchText = "";
  let searchType = "query";

  let selectedDoctor;
  let searchResults;

  function handleSubmit() {
    searchResults = searchBetterDoctor(searchType, searchText);
  }

  function handleSelect(event) {
    selectedDoctor = event.detail.doctor;
  }
</script>

<style>
  #header {
    text-align: center;
    width: 20%;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;

    background-color: rgb(108, 178, 212, 0.4);
    border: 3px solid rgb(75, 153, 191);
    border-radius: 50px;
  }
  #main-disp {
    min-width: 80%;
    max-width: 80%;
    height: 30rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;

    border-radius: 50px;

    margin-left: auto;
    margin-right: auto;
  }

  #user-info {
    grid-column: 1;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3rem 3rem 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 1rem;

    background-color: rgb(108, 178, 212, 0.4);
    border: 3px solid rgb(75, 153, 191);
    border-radius: 50px;
  }

  #doctor-info {
    grid-column: 2;

    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 15rem);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 1rem;

    background-color: rgb(108, 178, 212, 0.4);
    border: 3px solid rgb(75, 153, 191);
    border-radius: 50px;
  }
</style>

<h1 id="header">Doctor Lookup!</h1>
<div id="main-disp">

  <form id="user-info" class="box" on:submit|preventDefault={handleSubmit}>
    <label>
      <input
        type="radio"
        name="search-type"
        value="query"
        bind:group={searchType} />
      Search by Ailment
    </label>
    <label>
      <input
        type="radio"
        name="search-type"
        value="name"
        bind:group={searchType} />
      Search by Doctor
    </label>
    <div id="search-field">
      <label for="lookup">
        What's ailing you?
        <input
          type="text"
          name="lookup"
          id="search-text"
          bind:value={searchText} />
      </label>
      <button type="submit" name="button">Submit</button>
    </div>

    {#if searchResults}
      {#await searchResults}
        <p>Searching...</p>
      {:then results}
        <Results {results} on:select={handleSelect} />
      {/await}
    {/if}
  </form>

  <div id="doctor-info" class="box">
    {#if selectedDoctor}
      <Doctor doctor={selectedDoctor} />
    {/if}
  </div>

</div>
