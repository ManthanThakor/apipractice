document.getElementById('voteBtn').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="game"]:checked');
    if (selectedOption) {
      alert('You voted for: ' + selectedOption.value);
    } else {
      alert('Please select an option before voting.');
    }
  });