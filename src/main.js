import { searchBetterDoctor } from './search.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
    $('form#user-info').submit(function(event) {
        event.preventDefault();

        searchAndDeploy($('input:radio[name=search-type]:checked').val(), $('input#search-text').val());

    });


});

async function searchAndDeploy(queryType, queryText) {
    const doctors = await searchBetterDoctor(queryType, queryText);
    console.log(doctors);

    $('#doc-photo img').attr('src', doctors[0].photo);
    $('#doc-photo img').attr('title', doctors[0].name);
    $('#doc-name').text(doctors[0].getFullName(true));
    $('#doc-field').text(doctors[0].field);
    $('#doc-takes-new').text(`Doctor ${doctors[0].lastName} ${(doctors[0].takesNewPatients) ? 'takes' : 'does NOT take'} new patients.`);
    $('#practice-address1').text(doctors[0].addressLine1);
    $('#practice-address2').text(doctors[0].addressLine2);
    $('#practice-number').text(doctors[0].phoneNumber);
    $('#practice-web').text(doctors[0].website);

    $('#doc-bio p').text(doctors[0].bio);
}
