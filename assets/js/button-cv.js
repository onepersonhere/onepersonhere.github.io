(function() {
  // Load the script
  const script = document.createElement("script");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
  script.type = 'text/javascript';
  script.addEventListener('load', () => {
    console.log(`jQuery ${$.fn.jquery} has been loaded successfully!`);
    
    var counter = 0
    $("#button-cv").on("click", function(){
        window.alert(++counter)
    })
  });
  document.head.appendChild(script);
})();