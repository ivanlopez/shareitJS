(function( $ ) {
    $.fn.shareIt = function(options) {

        var defaults = { 
            share : "facebook",
            img : "",
            title: "",
            description: "",
            link: ""
            };

        var options = $.extend(defaults, options);

        return this.each(function() { 
            
            var ShareTo = options.share;
            var shareLink = "";
           
            switch(ShareTo)
            {
            case "facebook":
              shareLink = "http://www.facebook.com/sharer.php?s=100&p[url]="+options.link+"&p[images][0]="+options.img+"&p[title]="+options.title+"&p[summary]="+options.description;
            break;
            case "twitter":
                shareLink = "https://twitter.com/share?url="+options.link+"&text="+options.title;
            break;
            case "pinterest":
                shareLink = "http://pinterest.com/pin/create/button/?url="+options.link+"&media="+options.img+"&description="+options.title;
            break; 
            default:
              shareLink = "http://www.facebook.com/sharer.php?s=100&p[url]="+options.link+"&p[images][0]="+options.img+"&p[title]="+options.title+"&p[summary]="+options.description;
            }

            $(this).attr('href', shareLink).attr('target', "_blank");

        });  

    };
})( jQuery );