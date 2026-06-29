
const team = window.PORTAL_TEAM || [];
const coinventors = window.COINVENTORS || [];
const portfolio = window.PORTFOLIO || [];

const $ = (id)=>document.getElementById(id);
const norm = (s)=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

function renderTeam(){
  const grid=$("teamGrid"); if(!grid) return;
  grid.innerHTML = team.map(([name, role, icon]) => `
    <article class="team-card">
      <div class="icon">${icon}</div>
      <div><h3>${name}</h3><p>${role}</p></div>
    </article>`).join("");
}

function groupByState(list){
  return list.reduce((acc,p)=>{(acc[p.state] ||= []).push(p); return acc;},{});
}
let activeState = "";
let activeCity = "all";
function renderNetwork(query=""){
  const list = coinventors.filter(p => !query || norm(`${p.name} ${p.city} ${p.state}`).includes(norm(query)));
  $("coinventorCount").textContent = `${list.length} registros`;
  const states = groupByState(list);
  const stateNames = Object.keys(states).sort((a,b)=>a.localeCompare(b,'es'));
  if(!activeState || !states[activeState]) activeState = stateNames[0] || "";
  const stateList=$("stateList");
  stateList.innerHTML = stateNames.map(s=>`<button class="state-btn ${s===activeState?'active':''}" data-state="${s}"><span>${s}</span><strong>${states[s].length}</strong></button>`).join("");
  stateList.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{activeState=btn.dataset.state; activeCity="all"; renderNetwork($("coinventorSearch").value);});
  const statePeople = (states[activeState]||[]).slice().sort((a,b)=>a.name.localeCompare(b.name,'es'));
  $("stateTitle").textContent = activeState || "Coinventores";
  const cities = [...new Set(statePeople.map(p=>p.city))].sort((a,b)=>a.localeCompare(b,'es'));
  if(activeCity!=="all" && !cities.includes(activeCity)) activeCity="all";
  $("municipalityTabs").innerHTML = `<button class="${activeCity==='all'?'active':''}" data-city="all">Todos (${statePeople.length})</button>` + cities.map(c=>`<button class="${activeCity===c?'active':''}" data-city="${c}">${c} (${statePeople.filter(p=>p.city===c).length})</button>`).join("");
  $("municipalityTabs").querySelectorAll("button").forEach(btn=>btn.onclick=()=>{activeCity=btn.dataset.city; renderNetwork($("coinventorSearch").value);});
  const shown = activeCity==="all" ? statePeople : statePeople.filter(p=>p.city===activeCity);
  $("coinventorGrid").innerHTML = shown.map(p=>`<article class="coin-card"><h3>${p.name}</h3><p>Coinventor<br>Programa de Innovación EdithAlanis™<br>📍 ${p.city}, ${p.state}</p></article>`).join("");
}

let activePortfolioFilter="all";
function renderPortfolio(){
  const q = norm($("portfolioSearch").value);
  let list = portfolio.filter(p => activePortfolioFilter==="all" || p.group===activePortfolioFilter);
  if(q) list = list.filter(p => norm(`${p.id} ${p.area} ${p.status}`).includes(q));
  $("portfolioCount").textContent = `${list.length} desarrollos`;
  $("portfolioGrid").innerHTML = list.map(p=>`<article class="portfolio-card"><h3>Desarrollo Tecnológico ${p.id}</h3><p><strong>Área tecnológica</strong><br>${p.area}</p><span class="badge">${p.badge} ${p.status}</span></article>`).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
  renderTeam();
  renderNetwork();
  renderPortfolio();
  $("coinventorSearch")?.addEventListener("input",e=>{activeState="";activeCity="all";renderNetwork(e.target.value);});
  $("portfolioSearch")?.addEventListener("input",renderPortfolio);
  document.querySelectorAll(".filters button").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activePortfolioFilter=btn.dataset.filter;renderPortfolio();});
  document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".navlinks").classList.toggle("open"));
});
