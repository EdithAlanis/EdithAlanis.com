const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

$('.menu-toggle')?.addEventListener('click', e=>{
  const nav=$('.nav'); nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

const team = [
  ['Elsy Susana Edith Baltazar Alaniz',['Cofundadora','Coinventora','Colaboradora']],
  ['Daniel Alejandro Baltazar Alaniz',['Cofundador','Coinventor','Colaborador']],
  ['Lisbeth Andalón Álvarez',['Colaboradora','Experta']],
  ['Apolinar Navarro Paredes',['Colaborador','Desarrollo']],
  ['Lucio Guzmán Mares',['Colaborador','Vinculación']],
  ['María Soledad Castellanos Villarruel',['Colaboradora','Ortografía']],
  ['Carlos Vázquez Cid de León',['Colaborador','Vinculación Nacional']],
  ['Adán Yáñez Larios',['Colaborador','Internacional']],
  ['Sergio Roberto Dávalos García',['Colaborador','Tecnológico']],
  ['Martha Alicia González Palacios',['Colaboradora','Académica']]
];
$('#teamGrid').innerHTML = team.map(([name,roles])=>`<article class="team-card"><h3>${name}</h3>${roles.map(r=>`<span class="role">${r}</span>`).join('')}</article>`).join('');

const coinventores = [
['Alanis Pérez Jezrael Abraham','Tlajomulco de Zúñiga','Jalisco'],['Aguilar Molina Yehoshua','San Pedro Tlaquepaque','Jalisco'],['Alanis Mijares Antonia Leticia','San Nicolás de la Garza','Nuevo León'],['Alanis Mijares Jesús','García','Nuevo León'],['Alanis Mijares Minerva','San Nicolás de los Garza','Nuevo León'],['Alanis Pérez José Eduardo','Tlajomulco de Zúñiga','Jalisco'],['Alanis Pérez María Elvia Edith','Tlajomulco de Zúñiga','Jalisco'],['Alaniz Casillas Christian Eduardo','Zapopan','Jalisco'],['Alaniz Partida Ignacio Ricardo','Zapopan','Jalisco'],['Alaniz Pérez Ignacio Ricardo','Zapopan','Jalisco'],['Alaniz Pérez María Ivett Janett','Zapopan','Jalisco'],['Andalón Álvarez Lisbeth','Tlajomulco de Zúñiga','Jalisco'],['Aragón Ríos Elba Karina','Ocotlán','Jalisco'],['Baltazar Alaniz Daniel Alejandro','Tlajomulco de Zúñiga','Jalisco'],['Baltazar Alaniz Elsy Susana Edith','Tlajomulco de Zúñiga','Jalisco'],['Baltazar Montes Lorenzo','Guadalajara','Jalisco'],['Bautista González Jorge Gregorio','Zapopan','Jalisco'],['Bayardo González Rubén Alberto','Guadalajara','Jalisco'],['Becerra González Rubén Armando','Jamay','Jalisco'],['Calderón García Rocío','Guadalajara','Jalisco'],['Carazo Luna José Alfredo','Huajuapan de León','Oaxaca'],['Carrión Castillo Luz Ovillada','Cosoleacaque','Veracruz'],['Castellanos Villarruel Soledad','Ocotlán','Jalisco'],['Castillo Medina Diana Iztacihuatl','Zapopan','Jalisco'],['Chama Mora Héctor Adán','Fortín','Veracruz'],['Claustro Bobadilla Javier','Guadalajara','Jalisco'],['Cortés Camacho Araceli','Guadalajara','Jalisco'],['Cruz Alanis Ariana Leticia','San Nicolás de la Garza','Nuevo León'],['Cruz del Ángel Jesús Adrián','San Nicolás de la Garza','Nuevo León'],['Dávalos García Sergio Roberto','Zapopan','Jalisco'],['Dávila Torres José Ignacio','Orizaba','Veracruz'],['Delgadillo Preciado Zaira América','Guadalajara','Jalisco'],['Domínguez García Rodolfo Omar','Guadalajara','Jalisco'],['Durán Padilla José Arturo','Zapopan','Jalisco'],['Escutia Gutiérrez Raymundo','Guadalajara','Jalisco'],['Gazpar Castellanos José Luis','Ocotlán','Jalisco'],['Gómez Contreras Flor Alejandra','Guadalajara','Jalisco'],['González Fajardo Alma Delia','San Gabriel','Jalisco'],['Gutiérrez Gómez Alejandra','Zapopan','Jalisco'],['Guzmán Castellanos Karen Berenice','Ocotlán','Jalisco'],['Guzmán Mares Lucio','Ocotlán','Jalisco'],['Guzmán Villarruel Jesús Fernando','Ocotlán','Jalisco'],['Hernández Abreu Karina Esther','Villahermosa','Tabasco'],['Hernández Cortés Rigoberto','Izhuatlancillo','Veracruz'],['Hernández García Anabella','Ocotlán','Jalisco'],['Hernández Landeros Edgar Miguel Raúl','Guadalajara','Jalisco'],['Hernández Méndez Arturo','Huajuapan de León','Oaxaca'],['Hernández Santa María José Guadalupe','Zapopan','Jalisco'],['Iñiguez Carrillo Adriana Lorena','Zapotlán el Grande','Jalisco'],['Jiménez Torres Jorge Alfredo','Guadalajara','Jalisco'],['Kristyan Felype Luis Navarro','Guadalajara','Jalisco'],['Lehmann Mendoza José Miguel','Villahermosa','Tabasco'],['Lino Gamiño Juan Alfredo','Colima','Colima'],['López Alvarado Miguel Ángel','Comalcalco','Tabasco'],['López Chávez Gilberto','Guanajuato','Guanajuato'],['Lozoya Arandia Jorge','Zapopan','Jalisco'],['Luna Rizo Marisol','Zapopan','Jalisco'],['Maciel Ruelas Estefany Teresa','Villa Corona','Jalisco'],['Manzo Palomera Olga Rocío','Guadalajara','Jalisco'],['Montalvo Núñez Jorge Antonio','Zapopan','Jalisco'],['Montesinos González Salvador','Huajuapan de León','Oaxaca'],['Morán Martínez Francisco','Guadalajara','Jalisco'],['Nápoles Salas Luz Elena','Guadalajara','Jalisco'],['Ortiz Cruz Fabiola','Minatitlán','Veracruz'],['Ortiz Palafox Karla Haydeee','Zapopan','Jalisco'],['Pérez Villalpando Marlene Alejandra','Guadalajara','Jalisco'],['Ramírez Castillo Eric Amin','Oaxaca de Juárez','Oaxaca'],['Ramírez Torres Miguel Ángel','Guadalajara','Jalisco'],['Rivas Paz Mariana','Guadalajara','Jalisco'],['Rivera Alaniz Chamir Darinka','Zapopan','Jalisco'],['Rivera Alaniz Xiomara Hatzydy','Zapopan','Jalisco'],['Robles González Vania Shuhua','Coyoacán','Ciudad de México'],['Rodríguez Nieves Blanca','Zapopan','Jalisco'],['Salas Coronado Raúl','Huajuapan de León','Oaxaca'],['Solorio González Carolina','Guadalajara','Jalisco'],['Soto Chávez Alicia','Minatitlán','Veracruz'],['Trujillo Mata Amin','Camerino Z. Mendoza','Veracruz'],['Vargas Lares Oscar Alejandro','Zapopan','Jalisco'],['Vázquez Arango María de Lourdes','Oaxaca de Juárez','Oaxaca'],['Vázquez Cid de León Carlos','Huajuapan de León','Oaxaca'],['Villegas Alcantar Benjamín','Tepatitlán de Morelos','Jalisco'],['Yáñez Larios Adán','Guadalajara','Jalisco'],['Zepeda Valle Gustavo','Zacatecas','Zacatecas']
];

function normalize(str){return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function groupCoinventores(list){
  const states={};
  list.forEach(([name,mun,state])=>{states[state]??={}; states[state][mun]??=[]; states[state][mun].push(name);});
  Object.values(states).forEach(muns=>Object.values(muns).forEach(arr=>arr.sort((a,b)=>a.localeCompare(b,'es'))));
  return Object.fromEntries(Object.entries(states).sort(([a],[b])=>a.localeCompare(b,'es')));
}
function renderNetwork(filter=''){
  const q=normalize(filter.trim());
  const filtered=coinventores.filter(([n,m,e])=>!q || normalize(`${n} ${m} ${e}`).includes(q));
  const states=groupCoinventores(filtered);
  const municipios=new Set(filtered.map(x=>`${x[1]}|${x[2]}`));
  $('#redSummary').innerHTML=`<article><b>${filtered.length}</b><span>Coinventores visibles</span></article><article><b>${Object.keys(states).length}</b><span>Estados</span></article><article><b>${municipios.size}</b><span>Municipios</span></article><article><b>${coinventores.length}</b><span>Registros auditados</span></article>`;
  $('#network').innerHTML = Object.entries(states).map(([state,muns])=>{
    const total=Object.values(muns).flat().length;
    return `<details class="state-card" ${q?'open':''}><summary><span>${state}</span><span>${total}</span></summary>${Object.entries(muns).sort(([a],[b])=>a.localeCompare(b,'es')).map(([mun,names])=>`<div class="municipio"><h4>${mun} (${names.length})</h4><div class="people">${names.map(n=>`<div class="person-card"><strong>${n}</strong><small>Coinventor · ${mun}, ${state}</small></div>`).join('')}</div></div>`).join('')}</details>`;
  }).join('') || '<p class="note">No se encontraron coincidencias.</p>';
}
renderNetwork();
$('#coinventorSearch').addEventListener('input',e=>renderNetwork(e.target.value));
$('#clearCoinventorSearch').addEventListener('click',()=>{$('#coinventorSearch').value='';renderNetwork();});

const areasBase=['Electrónica','Biotecnología','Medicina regenerativa','Sistemas bioelectrocarbonosos','Infraestructura universal','Energía y continuidad','Evaluación funcional biomédica','Salud e infraestructura sanitaria','Educación e infraestructura educativa','Cultura e infraestructura cultural','Logística universal','Infraestructura habitacional','Arquitectura biosférica universal','Manufactura avanzada','Medio ambiente','Agricultura tecnológica','Interoperabilidad biomédica','Gestión estratégica universal'];
function areaFor(n){
  if(n===1) return 'Electrónica'; if(n===2) return 'Biotecnología'; if(n<=7) return ['Medicina regenerativa','Sistemas bioelectrocarbonosos','Energía y continuidad','Infraestructura universal','Evaluación funcional biomédica'][n-3];
  if(n>=350&&n<=360) return 'Medicina regenerativa y evaluación oncológica'; if(n===371) return 'Energía y continuidad';
  if(n>=114&&n<=120) return ['Infraestructura educativa','Infraestructura sanitaria','Infraestructura cultural','Infraestructura logística','Infraestructura habitacional','Infraestructura estratégica','Gestión universal'][n-114];
  return areasBase[n % areasBase.length];
}
function statusFor(n){ if(n<=7) return 'Patente otorgada'; if(n<=113) return 'Solicitud presentada'; if((n>=350&&n<=360)||n===371) return 'Revisión institucional'; return 'En preparación'; }
const portfolio = Array.from({length:461},(_,i)=>{const n=i+1; return {n,id:String(n).padStart(4,'0'),area:areaFor(n),status:statusFor(n)}});
const uniqueAreas=[...new Set(portfolio.map(d=>d.area))].sort((a,b)=>a.localeCompare(b,'es'));
$('#areaFilter').insertAdjacentHTML('beforeend', uniqueAreas.map(a=>`<option value="${a}">${a}</option>`).join(''));
let shown=48;
function classForStatus(s){return s.includes('otorgada')?'otorgada':s.includes('presentada')?'presentada':s.includes('Revisión')?'revision':'preparacion';}
function renderPortfolio(){
  const q=normalize($('#portfolioSearch').value); const st=$('#statusFilter').value; const ar=$('#areaFilter').value;
  const filtered=portfolio.filter(d=>(st==='todos'||d.status===st)&&(ar==='todas'||d.area===ar)&&(!q||normalize(`${d.id} ${d.area} ${d.status}`).includes(q)));
  $('#portfolioGrid').innerHTML=filtered.slice(0,shown).map(d=>`<article class="dev-card"><div class="dev-id">Desarrollo Tecnológico ${d.id}</div><p><strong>Área tecnológica:</strong><br>${d.area}</p><span class="status ${classForStatus(d.status)}">${d.status}</span></article>`).join('');
  $('#loadMorePortfolio').style.display=filtered.length>shown?'flex':'none';
}
['input','change'].forEach(ev=>{ $('#portfolioSearch').addEventListener(ev,()=>{shown=48;renderPortfolio();}); $('#statusFilter').addEventListener(ev,()=>{shown=48;renderPortfolio();}); $('#areaFilter').addEventListener(ev,()=>{shown=48;renderPortfolio();});});
$('#loadMorePortfolio').addEventListener('click',()=>{shown+=48;renderPortfolio();});
renderPortfolio();

const areaCards = ['Medicina regenerativa','Sistemas bioelectrocarbonosos','Biotecnología','Electrónica','Infraestructura universal','Energía y continuidad','Salud e infraestructura sanitaria','Educación e infraestructura educativa','Cultura e infraestructura cultural','Logística universal','Arquitectura biosférica universal','Manufactura avanzada'];
$('#areasGrid').innerHTML = areaCards.map(a=>`<article class="area-card"><div class="area-art"><h3>${a}</h3></div><p>Línea tecnológica del Programa de Innovación EdithAlanis™ organizada para exploración institucional sin revelar información reservada.</p></article>`).join('');
