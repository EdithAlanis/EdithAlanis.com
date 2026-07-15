
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
toggle?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const TEAM=[
["Dra. María Elvia Edith Alanis Pérez","Fundadora","💡"],
["Dra. Elsy Susana Edith Baltazar Alaniz","Cofundadora","🤝"],
["Lic. Daniel Alejandro Baltazar Alaniz","Cofundador","🤝"],
["Lic. Lisbeth Andalón Álvarez","Colaboradora Experta","🔬"],
["Lic. Apolonio Navarro Paredes","Colaborador de Desarrollos","⚙️"],
["Dra. Rocío Calderón García","Colaboradora Experta","🔬"],
["Dr. Lucio Guzmán Mares","Colaborador de Vinculación","🌐"],
["Dra. María Soledad Castellanos Villarruel","Colaboradora de Revisión Ortográfica","✒️"],
["Dr. Carlos Vázquez Cid de León","Colaborador de Vinculación Nacional","🇲🇽"],
["Dr. Adán Yáñez Larios","Colaborador Internacional","🌎"],
["Dr. Sergio Roberto Dávalos García","Colaborador Tecnológico","💡"],
["Dra. Marlene Alejandra Pérez Villalpando","Colaboradora Revisora","📘"],
["Dra. Martha Alicia González Palacios","Colaboradora de Vinculación Académica","🎓"],
["Ing. Jesús Alejandro Baltazar Ruiz","Colaborador Gráfico","🎨"],
["Ing. Lorenzo Baltazar Montes","Colaborador de Vinculación Académica","🎓"],
["Lic. Minerva Alanis Mijares","Coordinadora de Vinculación de Nuevo León","🏛️"]
];
const COINVENTORS=[{"name": "Alanis Pérez Jezrael Abraham", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Aguilar Molina Yehoshua", "city": "San Pedro Tlaquepaque", "state": "Jalisco"}, {"name": "Alanis Mijares Antonia Leticia", "city": "San Nicolás de la Garza", "state": "Nuevo León"}, {"name": "Alanis Mijares Jesús", "city": "García", "state": "Nuevo León"}, {"name": "Alanis Mijares Minerva", "city": "San Nicolás de los Garza", "state": "Nuevo León"}, {"name": "Alanis Pérez José Eduardo", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Alanis Pérez María Elvia Edith", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Alaniz Casillas Christian Eduardo", "city": "Zapopan", "state": "Jalisco"}, {"name": "Alaniz Partida Ignacio Ricardo", "city": "Zapopan", "state": "Jalisco"}, {"name": "Alaniz Pérez Ignacio Ricardo", "city": "Zapopan", "state": "Jalisco"}, {"name": "Alaniz Pérez María Ivett Janett", "city": "Zapopan", "state": "Jalisco"}, {"name": "Andalón Álvarez Lisbeth", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Aragón Ríos Elba Karina", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Baltazar Alaniz Daniel Alejandro", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Baltazar Alaniz Elsy Susana Edith", "city": "Tlajomulco de Zúñiga", "state": "Jalisco"}, {"name": "Baltazar Montes Lorenzo", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Bautista González Jorge Gregorio", "city": "Zapopan", "state": "Jalisco"}, {"name": "Bayardo González Rubén Alberto", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Becerra González Rubén Armando", "city": "Jamay", "state": "Jalisco"}, {"name": "Calderón García Rocío", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Carazo Luna José Alfredo", "city": "Huajuapan de León", "state": "Oaxaca"}, {"name": "Carrión Castillo Luz Ovillada", "city": "Cosoleacaque", "state": "Veracruz"}, {"name": "Ma. Soledad Castellanos Villarruel", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Castillo Medina Diana Iztacihuatl", "city": "Zapopan", "state": "Jalisco"}, {"name": "Chama Mora Héctor Adán", "city": "Fortín", "state": "Veracruz"}, {"name": "Claustro Bobadilla Javier", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Cortés Camacho Araceli", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Cruz Alanis Ariana Leticia", "city": "San Nicolás de la Garza", "state": "Nuevo León"}, {"name": "Cruz del Ángel Jesús Adrián", "city": "San Nicolás de la Garza", "state": "Nuevo León"}, {"name": "Dávalos García Sergio Roberto", "city": "Zapopan", "state": "Jalisco"}, {"name": "Dávila Torres José Ignacio", "city": "Orizaba", "state": "Veracruz"}, {"name": "Delgadillo Preciado Zaira América", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Domínguez García Rodolfo Omar", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Durán Padilla José Arturo", "city": "Zapopan", "state": "Jalisco"}, {"name": "Escutia Gutiérrez Raymundo", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Gazpar Castellanos José Luis", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Gómez Contreras Flor Alejandra", "city": "Guadalajara", "state": "Jalisco"}, {"name": "González Fajardo Alma Delia", "city": "San Gabriel", "state": "Jalisco"}, {"name": "Gutiérrez Gómez Alejandra", "city": "Zapopan", "state": "Jalisco"}, {"name": "Guzmán Castellanos Karen Berenice", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Guzmán Mares Lucio", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Guzmán Villarruel Jesús Fernando", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Hernández Abreu Karina Esther", "city": "Villahermosa", "state": "Tabasco"}, {"name": "Hernández Cortés Rigoberto", "city": "Ixtaczoquitlán", "state": "Veracruz"}, {"name": "Hernández García Anabella", "city": "Ocotlán", "state": "Jalisco"}, {"name": "Hernández Landeros Edgar Miguel Raúl", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Hernández Méndez Arturo", "city": "Huajuapan de León", "state": "Oaxaca"}, {"name": "Hernández Santa María José Guadalupe", "city": "Zapopan", "state": "Jalisco"}, {"name": "Iñiguez Carrillo Adriana Lorena", "city": "Zapotlán el Grande", "state": "Jalisco"}, {"name": "Jiménez Torres Jorge Alfredo", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Kristyan Felype Luis Navarro", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Lehmann Mendoza José Miguel", "city": "Villahermosa", "state": "Tabasco"}, {"name": "Lino Gamiño Juan Alfredo", "city": "Colima", "state": "Colima"}, {"name": "López Alvarado Miguel Ángel", "city": "Comalcalco", "state": "Tabasco"}, {"name": "López Chávez Gilberto", "city": "Guanajuato", "state": "Guanajuato"}, {"name": "Lozoya Arandia Jorge", "city": "Zapopan", "state": "Jalisco"}, {"name": "Luna Rizo Marisol", "city": "Zapopan", "state": "Jalisco"}, {"name": "Maciel Ruelas Estefany Teresa", "city": "Villa Corona", "state": "Jalisco"}, {"name": "Manzo Palomera Olga Rocío", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Montalvo Núñez Jorge Antonio", "city": "Zapopan", "state": "Jalisco"}, {"name": "Montesinos González Salvador", "city": "Huajuapan de León", "state": "Oaxaca"}, {"name": "Morán Martínez Francisco", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Nápoles Salas Luz Elena", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Ortiz Cruz Fabiola", "city": "Minatitlán", "state": "Veracruz"}, {"name": "Ortiz Palafox Karla Haydeee", "city": "Zapopan", "state": "Jalisco"}, {"name": "Pérez Villalpando Marlene Alejandra", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Ramírez Castillo Eric Amin", "city": "Oaxaca de Juárez", "state": "Oaxaca"}, {"name": "Ramírez Torres Miguel Ángel", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Rivas Paz Mariana", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Rivera Alaniz Chamir Darinka", "city": "Zapopan", "state": "Jalisco"}, {"name": "Rivera Alaniz Xiomara Hatzydy", "city": "Zapopan", "state": "Jalisco"}, {"name": "Robles González Vania Shuhua", "city": "Coyoacán", "state": "Ciudad de México"}, {"name": "Rodríguez Nieves Blanca", "city": "Zapopan", "state": "Jalisco"}, {"name": "Salas Coronado Raúl", "city": "Huajuapan de León", "state": "Oaxaca"}, {"name": "Solorio González Carolina", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Soto Chávez Alicia", "city": "Minatitlán", "state": "Veracruz"}, {"name": "Trujillo Mata Armin", "city": "Camerino Z. Mendoza", "state": "Veracruz"}, {"name": "Vargas Lares Oscar Alejandro", "city": "Zapopan", "state": "Jalisco"}, {"name": "Vázquez Arango María de Lourdes", "city": "Oaxaca de Juárez", "state": "Oaxaca"}, {"name": "Vázquez Cid de León Carlos", "city": "Huajuapan de León", "state": "Oaxaca"}, {"name": "Villegas Alcantar Benjamín", "city": "Tepatitlán de Morelos", "state": "Jalisco"}, {"name": "Yáñez Larios Adán", "city": "Guadalajara", "state": "Jalisco"}, {"name": "Zepeda Valle Gustavo", "city": "Zacatecas", "state": "Zacatecas"}];

const escapeHtml=(value)=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));

const teamGrid=document.getElementById('teamGrid');
if(teamGrid){
  teamGrid.innerHTML=TEAM.map(([name,role,icon])=>`
    <article class="team-card">
      <div class="team-icon">${escapeHtml(icon)}</div>
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(role)}</p>
    </article>`).join('');
}

const stateList=document.getElementById('stateList');
const stateTitle=document.getElementById('stateTitle');
const municipalityTabs=document.getElementById('municipalityTabs');
const coinventorGrid=document.getElementById('coinventorGrid');
const coinventorSearch=document.getElementById('coinventorSearch');
const coinventorCount=document.getElementById('coinventorCount');

const normalizeText=(text)=>String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

function renderCoinventorCards(items){
  if(!coinventorGrid) return;
  coinventorGrid.innerHTML=items.length?items.map(item=>`
    <article class="coinventor-card">
      <h4>${escapeHtml(item.name)}</h4>
      <p>Coinventor</p>
      <span>📍 ${escapeHtml(item.city)}, ${escapeHtml(item.state)}</span>
    </article>`).join(''):'<p class="empty-result">No se encontraron coincidencias.</p>';
  if(coinventorCount) coinventorCount.textContent=`${items.length} coinventor${items.length===1?'':'es'}`;
}

function renderState(state){
  document.querySelectorAll('.state-button').forEach(btn=>btn.classList.toggle('active',btn.dataset.state===state));
  const stateItems=COINVENTORS.filter(item=>item.state===state);
  if(stateTitle) stateTitle.textContent=state;
  const cities=[...new Set(stateItems.map(item=>item.city))].sort((a,b)=>a.localeCompare(b,'es'));
  if(municipalityTabs){
    municipalityTabs.innerHTML='';
    const all=document.createElement('button');
    all.textContent=`Todos (${stateItems.length})`;
    all.className='municipality-button active';
    all.addEventListener('click',()=>{
      document.querySelectorAll('.municipality-button').forEach(b=>b.classList.remove('active'));
      all.classList.add('active');
      renderCoinventorCards(stateItems);
    });
    municipalityTabs.appendChild(all);
    cities.forEach(city=>{
      const cityItems=stateItems.filter(item=>item.city===city);
      const btn=document.createElement('button');
      btn.className='municipality-button';
      btn.textContent=`${city} (${cityItems.length})`;
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.municipality-button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        renderCoinventorCards(cityItems);
      });
      municipalityTabs.appendChild(btn);
    });
  }
  renderCoinventorCards(stateItems);
}

if(stateList){
  const states=[...new Set(COINVENTORS.map(item=>item.state))].sort((a,b)=>a.localeCompare(b,'es'));
  states.forEach((state,index)=>{
    const total=COINVENTORS.filter(item=>item.state===state).length;
    const btn=document.createElement('button');
    btn.className='state-button'+(index===0?' active':'');
    btn.dataset.state=state;
    btn.innerHTML=`<span>${escapeHtml(state)}</span><strong>${total}</strong>`;
    btn.addEventListener('click',()=>renderState(state));
    stateList.appendChild(btn);
  });
  if(states.length) renderState(states[0]);
}

coinventorSearch?.addEventListener('input',event=>{
  const query=normalizeText(event.target.value.trim());
  if(!query){
    const active=document.querySelector('.state-button.active');
    if(active) renderState(active.dataset.state);
    return;
  }
  const results=COINVENTORS.filter(item=>normalizeText(`${item.name} ${item.city} ${item.state}`).includes(query));
  if(stateTitle) stateTitle.textContent='Resultados de búsqueda';
  if(municipalityTabs) municipalityTabs.innerHTML='';
  document.querySelectorAll('.state-button').forEach(btn=>btn.classList.remove('active'));
  renderCoinventorCards(results);
});


async function loadVisitors(){
  const number=document.getElementById('visitorNumber');
  const globeContainer=document.getElementById('visitorGlobe');

  try{
    const counterResponse=await fetch('https://countapi.mileshilliard.com/api/v1/hit/edithalanis.com/portal-visits',{cache:'no-store'});
    if(!counterResponse.ok) throw new Error('contador no disponible');
    const counterData=await counterResponse.json();
    const value=counterData.value ?? counterData.count ?? counterData;
    number.textContent=new Intl.NumberFormat('es-MX').format(Number(value));
  }catch(error){
    const localKey='edithalanis_local_visits';
    const value=Number(localStorage.getItem(localKey)||0)+1;
    localStorage.setItem(localKey,String(value));
    number.textContent=new Intl.NumberFormat('es-MX').format(value);
    number.title='Conteo local de respaldo';
  }

  if(!globeContainer || typeof Globe!=='function'){
    if(globeContainer) globeContainer.innerHTML='<div class="globe-fallback">🌎</div>';
    return;
  }

  const globe=Globe()(globeContainer)
    .width(Math.min(globeContainer.clientWidth || 520, 620))
    .height(390)
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true)
    .atmosphereAltitude(0.18)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .pointsData([])
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude(0.04)
    .pointRadius(0.38)
    .pointColor(()=> '#f3c85f')
    .pointLabel(()=> 'Visitante');

  globe.controls().autoRotate=true;
  globe.controls().autoRotateSpeed=0.7;
  globe.controls().enableZoom=false;

  try{
    const locationResponse=await fetch('https://ipapi.co/json/',{cache:'no-store'});
    if(!locationResponse.ok) throw new Error('ubicación no disponible');
    const data=await locationResponse.json();
    const lat=Number(data.latitude);
    const lng=Number(data.longitude);

    if(Number.isFinite(lat) && Number.isFinite(lng)){
      const storedKey='edithalanis_globe_points';
      let points=[];
      try{
        points=JSON.parse(localStorage.getItem(storedKey)||'[]');
        if(!Array.isArray(points)) points=[];
      }catch{
        points=[];
      }

      const rounded={lat:Math.round(lat*2)/2,lng:Math.round(lng*2)/2};
      const exists=points.some(p=>Math.abs(p.lat-rounded.lat)<0.2 && Math.abs(p.lng-rounded.lng)<0.2);
      if(!exists) points.push(rounded);
      points=points.slice(-120);
      localStorage.setItem(storedKey,JSON.stringify(points));

      globe.pointsData(points);
      globe.pointOfView({lat:rounded.lat,lng:rounded.lng,altitude:1.8},1200);
    }
  }catch(error){
    // El globo permanece visible aunque no se pueda obtener la ubicación aproximada.
  }

  const resize=()=>{
    globe.width(Math.min(globeContainer.clientWidth || 520,620));
  };
  window.addEventListener('resize',resize,{passive:true});
}
loadVisitors();


// Ventana de inscripción al Grupo Nacional de Coinventores
const joinModal=document.getElementById('joinModal');
const openJoinModal=document.getElementById('openJoinModal');
const openJoinModalContact=document.getElementById('openJoinModalContact');
const closeJoinModal=document.getElementById('closeJoinModal');
const joinForm=document.getElementById('joinForm');

function showJoinModal(){
  if(!joinModal) return;
  joinModal.classList.add('open');
  joinModal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  window.setTimeout(()=>document.getElementById('joinName')?.focus(),50);
}
function hideJoinModal(){
  if(!joinModal) return;
  joinModal.classList.remove('open');
  joinModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
openJoinModal?.addEventListener('click',showJoinModal);
openJoinModalContact?.addEventListener('click',showJoinModal);
closeJoinModal?.addEventListener('click',hideJoinModal);
joinModal?.addEventListener('click',event=>{
  if(event.target===joinModal) hideJoinModal();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && joinModal?.classList.contains('open')) hideJoinModal();
});
joinForm?.addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.getElementById('joinName')?.value.trim();
  const email=document.getElementById('joinEmail')?.value.trim();
  const phone=document.getElementById('joinPhone')?.value.trim();
  const collaboration=document.getElementById('joinType')?.value.trim();
  if(!name || !email || !phone || !collaboration) return;

  const message=[
    'Hola, deseo integrarme al Grupo Nacional de Coinventores.',
    '',
    `Nombre: ${name}`,
    `Correo electrónico: ${email}`,
    `Teléfono: ${phone}`,
    `Colaboración que pretendo realizar: ${collaboration}`,
    '',
    'Solicito información sobre los documentos requeridos: INE por ambos lados, comprobante de domicilio y CURP.'
  ].join('\n');

  const whatsappUrl=`https://wa.me/523331191167?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl,'_blank','noopener');
});
