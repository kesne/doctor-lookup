import { searchBetterDoctor } from './search.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
    $('#doctor-info').hide();

    $('form#user-info').submit(function(event) {
        event.preventDefault();
        searchAndDeploy($('input:radio[name=search-type]:checked').val(), $('input#search-text').val());
    });
});

async function searchAndDeploy(queryType, queryText) {
    const docs = await searchBetterDoctor(queryType, queryText);

    $('#error').remove();
    $('#other-results').hide();
    $('#doctor-info').hide();
    if (docs instanceof Error) {
        $('#user-info').after(`<div id='error'><p>Oh no! There was an issue in trying to fetch that info! Error message:</p><p>${docs}</p></div>`);
    } else if (docs.length === 0) {
        $('#user-info').after(`<div id='error'><p>Uh oh! No doctors match that query. Try again?</p></div>`);
    } else {
        populateResults(docs);
        displayDoctor(docs[0]);
        $('#other-results').show();
        $('#doctor-info').show();
    }
}

function displayDoctor(doc) {
    $('#doc-photo img').attr('src', doc.photo);
    $('#doc-photo img').attr('title', doc.name);
    $('#doc-name').text(doc.getFullName(true));
    $('#doc-field').text(doc.field);
    $('#doc-takes-new').text(`Doctor ${doc.getFullName()} ${(doc.takesNewPatients) ? 'takes' : 'does NOT take'} new patients.`);
    $('#practice-address1').text(doc.addressLine1);
    $('#practice-address2').text(doc.addressLine2);
    $('#practice-number').text(doc.phoneNumber);
    $('#practice-web').text(doc.website);
    $('#doc-bio p').text(doc.bio);
}

function populateResults(docs) {
    $('#other-results').html('');
    $('#other-results').append('<tr><th>Name</th><th>Field</th><th>Location</th></tr>');
    docs.forEach((doc, index) => {
        $('#other-results').append(`<tr data-index='${index}'><td>${doc.getFullName(true)}</td><td>${doc.field}</th><td>${doc.addressLine2}</td></tr>`);
    });
    $('tr').click(function() {
        const clickedItem = docs[$(this).attr('data-index')];
        displayDoctor(clickedItem);
    });
}
