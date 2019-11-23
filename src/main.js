import { searchBetterDoctor } from './search.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
    let doc;
    $('form#user-info').submit(function(event) {
        event.preventDefault();

        (async () => {
            doc = await searchBetterDoctor($('input#lookup').val());
            $('#doc-photo').attr('src', doc[0].photo);
            $('#doc-photo').attr('title', doc[0].name);
            $('#doc-name').text(doc[0].name);
        })();

    });


});
