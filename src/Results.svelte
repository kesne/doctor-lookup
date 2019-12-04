<script>
    import { createEventDispatcher } from 'svelte';

    export let results;
    const dispatch = createEventDispatcher();

    function handleSelect(doctor) {
        dispatch('select', {
			doctor
		});
    }
</script>

<style>
  #other-results {
    grid-area: 3 / 1 / 3 / 3;
  }
</style>

<table id="other-results">
  <tr>
    <th>Name</th>
    <th>Field</th>
    <th>Location</th>
  </tr>
  {#each results as doctor}
    <tr on:click={() => handleSelect(doctor)}>
      <td>{doctor.getFullName(true)}</td>
      <td>{doctor.field}</td>
      <td>{doctor.addressLine2}</td>
    </tr>
  {/each}
</table>
