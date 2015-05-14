test("check h1#hello (inside iFrame) is 'Hello World!'", function() {
    // assign the iframe object to a variable called iframe
    var iframe= document.getElementById('iframe');
    // extract the contents (DOM) of the iframe and assign it to the variable target
    var target= iframe.contentDocument || iframe.contentWindow.document;
    // check that the contents of the #hello element is 'Hello World!''
    var initial= target.getElementById('heading').innerHTML;

    equal(initial, 'The JMNR Blog', 'it works!');

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
      var hello = target.getElementById('hello').innerHTML;
      // console.log('>>> '+hello)
      equal(hello, 'Hello FAC5!', 'as expected'); 
      done();
      $('#iframe').attr('src','page1.html');
    }, 200); // wait for the page to load before running the test
  });
}, 2000); // wait two seconds before running the second test!




// button with link
test("check image shows up", function() {
    // assign the iframe object to a variable called iframe
    var iframe= document.getElementById('iframe');
    // extract the contents (DOM) of the iframe and assign it to the variable target
    var target= iframe.contentDocument || iframe.contentWindow.document;
    // check that the contents of the #hello element is 'Hello World!''
    var initial= target.getElementById('giraffe').src;

    equal(initial, 'http://metalinjection.junipconcepts.netdna-cdn.com/wp-content/uploads/2014/08/Giraffe-Tongue-Orchestra.jpg?6b2bdb', 'it works!');

})

test("css page loads up", function() {
    // assign the iframe object to a variable called iframe
    var iframe= document.getElementById('iframe');
    // extract the contents (DOM) of the iframe and assign it to the variable target
    var target= iframe.contentDocument || iframe.contentWindow.document;
    // check that the contents of the #hello element is 'Hello World!''
    var initial= target.getElementsByTagName('head').getAttribute("href");
	equal(initial, "./main.css");
});

// test("image shows up correctly in mobile view", function() {
//     // assign the iframe object to a variable called iframe
//     var iframe= document.getElementById('iframe');
//     // extract the contents (DOM) of the iframe and assign it to the variable target
//     var target= iframe.contentDocument || iframe.contentWindow.document;
//     // check that the contents of the #hello element is 'Hello World!''
//     var initial= target.getElementById('giraffe').getAttribute("background-size")

//     equal(initial, "cover");
// });



