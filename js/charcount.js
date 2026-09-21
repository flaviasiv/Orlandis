// Live "N of MAX max characters" counter for textareas with a maxlength
document.querySelectorAll('textarea[maxlength]').forEach(function (area) {
  var counter = document.querySelector('[data-count-for="' + area.id + '"]');
  if (!counter) return;
  var max = area.maxLength;
  function update() {
    counter.textContent = area.value.length + ' of ' + max + ' max characters';
  }
  area.addEventListener('input', update);
  update();
});
