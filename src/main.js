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
    
    $('#doc-photo').attr('src', doctors[0].photo);
    $('#doc-photo').attr('title', doctors[0].name);
    $('#doc-name').text(doctors[0].name);
    console.log(doctors);
}
