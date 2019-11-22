import { searchBetterDoctor } from './search.js';
import $ from 'jquery';

$(document).ready(function() {
    $('form#user-info').submit(function(event) {
        event.preventDefault();
        searchBetterDoctor($('input#lookup').val());
    });
});
