    //= require jquery
    //= require jquery_ujs
    //= require turbolinks
    //= require_tree .
    //= require materialize-sprockets
    //= require materialize/extras/nouislider


    //parallax initializer
    $(document).ready(function(){
      $('.parallax').parallax();
    });

    $(function(){
        $('a[data-reload="true"').on('click', function(e) {
            window.location = $(e.target).attr('href');
               window.location.reload(true);
        });
    });
