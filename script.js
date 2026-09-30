const area = document.getElementById('area');
const material = document.getElementById('material');
const floors = document.getElementById('floors');
const priceOut = document.getElementById('priceOut');
 
function calc() {
  const a = parseFloat(area.value) || 0;
  if (a <= 0) { priceOut.textContent = 'Введите площадь дома'; return; }
 
  const base = a * material.value * floors.value;
  const money = n => (Math.round(n / 10000) * 10000).toLocaleString('ru-RU') + ' ₽';
  priceOut.textContent = `от ${money(base * 0.9)} до ${money(base * 1.1)}`;
}
[area, material, floors].forEach(el => el.addEventListener('input', calc));
calc();
 
document.querySelectorAll('.lead-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('.lead-status').textContent = 'Заявка отправлена. Перезвоним в течение 15 минут.';
    form.reset();
    calc();
  });
});