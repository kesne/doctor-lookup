import { Doctor } from './doctor.js';
import $ from 'jquery';

$(document).ready(function() {
    $('form#user-info').submit(function(event) {
        event.preventDefault();
        let doc = new Doctor;
        doc.search($('input#lookup').val());
    });
});
