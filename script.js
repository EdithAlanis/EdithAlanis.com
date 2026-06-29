const networkData = {
  jalisco: {
    name: 'Jalisco', summary: 'Municipios y coinventores registrados en Jalisco.',
    municipios: [
      { name: 'Zapopan', people: ['Alaniz Casillas Christian Eduardo','Alaniz Partida Ignacio Ricardo','Alaniz Pérez Ignacio Ricardo','Alaniz Pérez Maria Ivett Janett','Montalvo Núñez Jorge Antonio','Hernández Santa María José Guadalupe'] },
      { name: 'Tlajomulco de Zúñiga', people: ['Alanis Pérez Jezrael Abraham','Alanis Pérez José Eduardo','Alanis Pérez María Elvia Edith','Andalón Álvarez Lisbeth'] },
      { name: 'Guadalajara', people: ['Escutia Gutiérrez Raymundo','Delgadillo Preciado Zaira América'] },
      { name: 'Ocotlán', people: ['Aragón Ríos Elba Karina'] }
    ]
  },
  nuevoleon: {
    name: 'Nuevo León', summary: 'Coinventores registrados en municipios de Nuevo León.',
    municipios: [
      { name: 'San Nicolás de los Garza', people: ['Alanis Mijares Antonia Leticia','Alanis Mijares Minerva'] },
      { name: 'García', people: ['Alanis Mijares Jesús'] }
    ]
  },
  veracruz: {
    name: 'Veracruz', summary: 'Coinventores registrados en el estado de Veracruz.',
    municipios: [
      { name: 'Minatitlán', people: ['Soto Chávez Alicia'] },
      { name: 'Cosoleacaque', people: ['Carrión Castillo Luz Ovillada'] }
    ]
  },
  otros: {
    name: 'Otras entidades', summary: 'La red continuará ampliándose con nuevos estados, municipios e investigadores mexicanos invitados a participar.',
    municipios: [
      { name: 'Registro nacional en crecimiento', people: ['Coinventores registrados por entidad federativa','Investigadores mexicanos invitados a integrarse','Colaboradores especializados por área tecnológica'] }
    ]
  }
};

function renderState(key){
  const data = networkData[key] || networkData.jalisco;
  document.getElementById('stateName').textContent = data.name;
  document.getElementById('stateSummary').textContent = data.summary;
  const box = document.getElementById('municipios');
  box.innerHTML = data.municipios.map((m, i) => `
    <article class="municipio-card ${i === 0 ? 'open' : ''}">
      <button class="municipio-title" type="button"><span>${m.name}</span><span>${m.people.length} coinventores</span></button>
      <div class="coinventores">
        ${m.people.map(p => `<div class="coin-card"><b>${p}</b><small>Coinventor · Programa de Innovación EdithAlanis™ · ${m.name}, ${data.name}</small></div>`).join('')}
      </div>
    </article>`).join('');
  box.querySelectorAll('.municipio-title').forEach(btn => btn.addEventListener('click', () => btn.closest('.municipio-card').classList.toggle('open')));
}

document.querySelectorAll('.state-btn').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderState(btn.dataset.state);
}));
renderState('jalisco');

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
