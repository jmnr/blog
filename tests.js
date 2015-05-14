test("check h1#hello (inside iFrame) is 'Hello World!'", function() {
    var iframe= document.getElementById('iframe');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var initial= target.getElementById('heading').innerHTML;

    equal(initial, "16 WEEKS. 4 CODERS. ONE BLOG.");

})

setTimeout(function() { // this is only here so you can see the page change!
test("click on a link in the iframe to change page", function(assert){
    var done = assert.async();  // done is actually a function that we will call later to confirm the test has finished
    var iframe = document.getElementById('iframe');
    var target = iframe.contentDocument || iframe.contentWindow.document;
    target.getElementById('clickme').click(); // invoking a mock click event in the browser

    // wait for the next page to load
    setTimeout(function() {
      var iframe = document.getElementById('iframe');
      var target = iframe.contentDocument || iframe.contentWindow.document;
      var hello = target.getElementById('title').innerHTML;
      equal(hello,'Title of Blog Post'); 
      done();
      $('#iframe').attr('src', 'http://wallcrawler.github.io/jmnr-blog/');
    }, 200); 
  });
}, 2000); 


test("check that hero image shows up", function() {
    var iframe= document.getElementById('iframe');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var elem1 = target.getElementById("hero");
    var style = window.getComputedStyle(elem1, null);
    equal(style.backgroundImage, "url(https://dl.dropboxusercontent.com/u/297682547/hero-image.png)")
  })

test("check that an image shows up", function() {
    var iframe= document.getElementById('iframe');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var initial= target.getElementById('socials').src;

    equal(initial, 'http://www.iconsdb.com/icons/preview/white/github-6-xxl.png', 'it works!')

})

// test("css page loads up", function() {
//     // assign the iframe object to a variable called iframe
//     var iframe= document.getElementById('iframe');
//     // extract the contents (DOM) of the iframe and assign it to the variable target
//     var target= iframe.contentDocument || iframe.contentWindow.document;
//     // check that the contents of the #hello element is 'Hello World!''
    
//     var initial= target.getElementsByTagName('head').getAttribute("href");
// 	equal(initial, "./main.css");
// });

// test("check that fonts we selected show up", function() {
//     var iframe= document.getElementById('iframe');
//     var target= iframe.contentDocument || iframe.contentWindow.document;
//     var elem1 = target.getElementsByTagName("h1");
//     var style = window.getComputedStyle(elem1, null);
//     equal(style.getPropertyValue('font-family'), 'Source Sans Pro')
//   })






