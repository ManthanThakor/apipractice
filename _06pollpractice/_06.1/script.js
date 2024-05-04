document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedPlatform = document.querySelector('input[name="platform"]:checked');
    if (selectedPlatform) {
      var platform = selectedPlatform.value;
      var voteCountElement = document.getElementById(platform + 'Votes');
      var currentCount = parseInt(voteCountElement.textContent);
      voteCountElement.textContent = currentCount + 1;
      alert('Thank you for voting for ' + platform + '!');
      selectedPlatform.checked = false;
    } else {
      alert('Please select a platform before voting.');
    }
  });
  