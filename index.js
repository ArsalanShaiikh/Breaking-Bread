const video= document.getElementById("interactiveVideo");

video.addEventListener('click', () =>{
    if(video.paused){
        video.play();
    }

    else{
        video.pause();
    }
});

function filterMenu(category) {
    // Hide all menu categories
    document.querySelectorAll('.menu-category').forEach(function(categoryElement) {
      categoryElement.style.display = 'none';
    });
  
    // Show the selected category
    document.getElementById(category).style.display = 'block';
  }
  
  // Initialize the menu to show 'all' by default
  document.addEventListener('DOMContentLoaded', function() {
    filterMenu('all');
  });
  

  