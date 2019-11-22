import { Doctor } from './doctor.js';
import $ from 'jquery';

$(document).ready(function() {
    let doc = new Doctor;
    doc.search();
    console.log(process.env.API_KEY);
});
