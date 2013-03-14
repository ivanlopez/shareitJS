# shareIt.js
[shareIt.js](https://github.com/ivanlopez/shareitJS) is a jQuery plugin that offers a quick and easy way to genreate share URL's for facebook, Twitter, and Pinterest. It uses minimal HTML markup as all that is required is an link tag.

To start using, you need two basic things:

### 1. Markup

The markup is a simple a creating link tags.

    <a href="" id="facebook"> ... Link text/image ... </a>
    <a href="" id="twitter"> ... Link text/image ... </a>
    <a href="" id="pinterest"> ... Link text/image ... </a>

### 2. JavaScript

<pre>
 $('#facebook').shareIt( 
                  share : "facebook", // needs to be set to facebook, twitter, or pinterest
                  img : "", // absolute image path
                  title: "", // title of shared item
                  description: "", // description of shared item
                  link: "" // link to shared item
                  );
</pre>

### Credits
- Released under [MIT License](http://www.opensource.org/licenses/mit-license.php)
