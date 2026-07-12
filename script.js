const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.navlinks');
menuButton?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

document.querySelectorAll('.tab').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab)?.classList.add('active');
  });
});

const techFamilies=[
['Integración Biosférica','Interconexión de ecosistemas, infraestructura y redes regenerativas.','Disponible para transferencia tecnológica'],
['Energía Regenerativa','Flujos energéticos limpios, continuidad y recuperación funcional.','Disponible para transferencia tecnológica'],
['Producción Biosférica','Producción inteligente, sostenible y distribuida.','Disponible para transferencia tecnológica'],
['Recuperación Circular','Ciclos de recuperación, reutilización y reintegración de recursos.','Disponible para transferencia tecnológica'],
['Distribución Biosférica','Redes logísticas y distribución coordinada de recursos.','Disponible para transferencia tecnológica'],
['Gestión Hídrica','Administración, conservación y circulación inteligente del agua.','Disponible para transferencia tecnológica'],
['Conservación Biosférica','Protección y mantenimiento de ecosistemas y recursos estratégicos.','Disponible para transferencia tecnológica'],
['Protección Biosférica','Sistemas de vigilancia, resiliencia y protección ambiental.','Disponible para transferencia tecnológica'],
['Regeneración Territorial','Restauración de territorios mediante infraestructura regenerativa.','Disponible para transferencia tecnológica'],
['Expansión Biosférica','Crecimiento de redes biosféricas hacia nuevos entornos.','Disponible para transferencia tecnológica'],
['Familia Estratégica 580–592','Adaptación climática y resiliencia frente a sequías.','En preparación para protección intelectual'],
['Familia Estratégica 593–605','Gestión integral de inundaciones.','En preparación para protección intelectual'],
['Familia Estratégica 606–618','Prevención y control de incendios forestales.','En preparación para protección intelectual'],
['Familia Estratégica 619–631','Infraestructura y resiliencia costera.','En preparación para protección intelectual'],
['Familia Estratégica 632–644','Protección frente a fenómenos meteorológicos extremos.','En preparación para protección intelectual']
];
const grid=document.getElementById('techGrid');
if(grid){grid.innerHTML=techFamilies.map(([name,area,status])=>`<article class="tech-card"><div class="concept-art" role="img" aria-label="Representación conceptual de ${name}"></div><div class="card-body"><span class="status">${status}</span><h3>${name}</h3><p><strong>Área tecnológica:</strong> ${area}</p><div class="meta"><span>13 solicitudes</span><span>$1,300,000 MXN</span></div><p class="small">Estos recursos se utilizarán para financiar otras solicitudes de patente en trámite.</p><a class="btn primary" href="mailto:contacto@edithalanis.com?subject=${encodeURIComponent('Solicitar información sobre '+name)}">Solicitar información</a></div></article>`).join('');}
