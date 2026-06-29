const data={
  jalisco:{title:'Jalisco',municipalities:{
    'Zapopan':['Alaniz Casillas Christian Eduardo','Alaniz Partida Ignacio Ricardo','Alaniz Pérez Ignacio Ricardo','Alaniz Pérez María Ivett Janett','Montalvo Núñez Jorge Antonio','Hernández Santa María José Guadalupe'],
    'Guadalajara':['Escutia Gutiérrez Raymundo','Delgadillo Preciado Zaira América'],
    'Tlajomulco de Zúñiga':['Alanis Pérez Jezrael Abraham','Alanis Pérez José Eduardo','Alanis Pérez María Elvia Edith'],
    'Ocotlán':['Aragón Ríos Elba Karina']
  }},
  nuevoleon:{title:'Nuevo León',municipalities:{
    'San Nicolás de los Garza':['Alanis Mijares Antonia Leticia','Alanis Mijares Minerva'],
    'García':['Alanis Mijares Jesús']
  }},
  veracruz:{title:'Veracruz',municipalities:{
    'Minatitlán':['Soto Chávez Alicia'],
    'Cosoleacaque':['Carrión Castillo Luz Ovillada']
  }}
};
const nav=document.querySelector('.nav');document.querySelector('.menu-btn').addEventListener('click',()=>nav.classList.toggle('open'));
const stateTitle=document.getElementById('stateTitle'), municipalities=document.getElementById('municipalities'), coinventors=document.getElementById('coinventors');
function renderState(key){document.querySelectorAll('.state-btn').forEach(b=>b.classList.toggle('active',b.dataset.state===key));const st=data[key];stateTitle.textContent=st.title;municipalities.innerHTML='';Object.keys(st.municipalities).forEach((m,i)=>{const btn=document.createElement('button');btn.className='muni-btn'+(i===0?' active':'');btn.textContent=`${m} (${st.municipalities[m].length})`;btn.onclick=()=>renderMunicipality(key,m,btn);municipalities.appendChild(btn);if(i===0)renderCards(st.title,m,st.municipalities[m]);});}
function renderMunicipality(key,m,btn){document.querySelectorAll('.muni-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderCards(data[key].title,m,data[key].municipalities[m]);}
function renderCards(state,muni,names){coinventors.innerHTML=names.map(n=>`<article class="coin-card"><h4>${n}</h4><p>Coinventor</p><p>Programa de Innovación EdithAlanis™</p><p>📍 ${muni}, ${state}</p></article>`).join('');}
document.querySelectorAll('.state-btn').forEach(btn=>btn.addEventListener('click',()=>renderState(btn.dataset.state)));renderState('jalisco');

// Bloque de visitantes: listo para conectar un servicio externo real.
// Recomendado: ClustrMaps o Flag Counter para mostrar visitas y ubicación pública.
document.getElementById('visitorPreview').textContent='Visitantes';
