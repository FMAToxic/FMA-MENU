// Add hover effect that lights up each letter
document.querySelectorAll('.letter').forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    letter.classList.add('light-up');
  });
  letter.addEventListener('mouseleave', () => {
    letter.classList.remove('light-up');
  });
});
