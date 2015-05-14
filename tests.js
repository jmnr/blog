test("check h1#hello (inside iFrame) is 'Hello World!'", function() {
    var iframe= document.getElementById('iframe');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var initial= target.getElementById('heading').innerHTML;

    equal(initial, "4 Coders. 16 weeks. 1 blog.", 'it works!');

})

//     setTimeout(function() { // this is only here so you can see the page change!
//   test("click on a link in the iframe to change page", function(assert){
//     var done = assert.async();  // done is actually a function that we will call later to confirm the test has finished
//     var iframe = document.getElementById('iframe');
//     var target = iframe.contentDocument || iframe.contentWindow.document;
//     target.getElementById('clickme').click(); // invoking a mock click event in the browser

//     // wait for the next page to load
//     setTimeout(function() {
//       var iframe = document.getElementById('iframe');
//       var target = iframe.contentDocument || iframe.contentWindow.document;
//       var hello = target.getElementById('hello').innerHTML;
//       // console.log('>>> '+hello)
//       equal(hello, 'Hello FAC5!', 'as expected'); 
//       done();
//       $('#iframe').attr('src','page1.html');
//     }, 200); // wait for the page to load before running the test
//   });
// }, 2000); // wait two seconds before running the second test!




test("check image shows up", function() {
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
//     equal(style.fontFamily, 'Source Sans Pro')
//   })


test("check that hero image shows up", function() {
    var iframe= document.getElementById('iframe');
    var target= iframe.contentDocument || iframe.contentWindow.document;
    var elem1 = target.getElementById("hero");
    var style = window.getComputedStyle(elem1, null);
    equal(style.backgroundImage, "url(https://dl.dropboxusercontent.com/u/297682547/hero-image.png)")
  })




