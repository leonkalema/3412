// Show specific scenario
function showScenario(scenario) {
  // Reset all paths and labels
  document.querySelectorAll('.movement-path').forEach(path => {
    path.style.display = 'none';
  });
  document.querySelectorAll('.movement-label').forEach(label => {
    label.style.display = 'none';
  });
  
  // Remove active class from all scenarios
  document.querySelectorAll('.scenario').forEach(s => {
    s.classList.remove('active');
  });
  
  // Add active class to selected scenario
  document.querySelector(`.scenario[onclick="showScenario('${scenario}')"]`).classList.add('active');
  
  // Hide all content sections
  document.getElementById('defensive-content').style.display = 'none';
  document.getElementById('pressing-content').style.display = 'none';
  document.getElementById('supporting-content').style.display = 'none';
  
  // Show relevant paths based on scenario
  if (scenario === 'defensive') {
    document.getElementById('path-defensive-1').style.display = 'block';
    document.getElementById('path-defensive-2').style.display = 'block';
    document.getElementById('path-defensive-3').style.display = 'block';
    document.getElementById('label-defensive-1').style.display = 'block';
    document.getElementById('label-defensive-2').style.display = 'block';
    document.getElementById('label-defensive-3').style.display = 'block';
    document.getElementById('defensive-content').style.display = 'block';
    document.getElementById('scenario-title').textContent = 'Defensive Shield';
    document.getElementById('scenario-description').textContent = 'The LCM provides crucial defensive coverage, protecting spaces in front of the back three and screening passing lanes.';
  } 
  else if (scenario === 'pressing') {
    document.getElementById('path-pressing-1').style.display = 'block';
    document.getElementById('path-pressing-2').style.display = 'block';
    document.getElementById('label-pressing-1').style.display = 'block';
    document.getElementById('label-pressing-2').style.display = 'block';
    document.getElementById('pressing-content').style.display = 'block';
    document.getElementById('scenario-title').textContent = 'Pressing Triggers';
    document.getElementById('scenario-description').textContent = 'The LCM uses specific triggers to initiate pressing actions, working with teammates to win back possession effectively.';
  }
  else if (scenario === 'supporting') {
    document.getElementById('path-supporting-1').style.display = 'block';
    document.getElementById('path-supporting-2').style.display = 'block';
    document.getElementById('label-supporting-1').style.display = 'block';
    document.getElementById('label-supporting-2').style.display = 'block';
    document.getElementById('supporting-content').style.display = 'block';
    document.getElementById('scenario-title').textContent = 'Build-up & Attack';
    document.getElementById('scenario-description').textContent = 'The LCM serves as a crucial link in build-up play, connecting defense to attack while maintaining defensive balance.';
  }
}

// Tab functionality
function activateTab(tabId) {
  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  // Activate selected tab
  document.querySelector(`.tab[onclick="activateTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Create Wide Support SVG paths
function createWideSupportPaths() {
  // Create first wide support path (defensive cover)
  const wideSupportPath1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  wideSupportPath1.setAttribute("id", "path-wide-support-1");
  wideSupportPath1.setAttribute("class", "movement-path");
  wideSupportPath1.setAttribute("width", "400");
  wideSupportPath1.setAttribute("height", "600");
  wideSupportPath1.setAttribute("style", "display:none; position:absolute; top:0; left:0;");
  
  // Create defs with arrowhead
  const defs1 = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker1 = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker1.setAttribute("id", "arrowhead-wide-1");
  marker1.setAttribute("markerWidth", "10");
  marker1.setAttribute("markerHeight", "7");
  marker1.setAttribute("refX", "0");
  marker1.setAttribute("refY", "3.5");
  marker1.setAttribute("orient", "auto");
  
  const polygon1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon1.setAttribute("points", "0 0, 10 3.5, 0 7");
  polygon1.setAttribute("fill", "#20B2AA");
  
  marker1.appendChild(polygon1);
  defs1.appendChild(marker1);
  wideSupportPath1.appendChild(defs1);
  
  // Create the path
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M 140,360 C 120,370 90,380 40,380");
  path1.setAttribute("stroke", "#20B2AA");
  path1.setAttribute("stroke-width", "3");
  path1.setAttribute("fill", "none");
  path1.setAttribute("stroke-dasharray", "5,5");
  path1.setAttribute("marker-end", "url(#arrowhead-wide-1)");
  
  // Create animations
  const animate1a = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  animate1a.setAttribute("attributeName", "stroke-width");
  animate1a.setAttribute("values", "3;5;3");
  animate1a.setAttribute("dur", "1.5s");
  animate1a.setAttribute("repeatCount", "indefinite");
  
  const animate1b = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  animate1b.setAttribute("attributeName", "stroke-opacity");
  animate1b.setAttribute("values", "0.6;1;0.6");
  animate1b.setAttribute("dur", "1.5s");
  animate1b.setAttribute("repeatCount", "indefinite");
  
  path1.appendChild(animate1a);
  path1.appendChild(animate1b);
  wideSupportPath1.appendChild(path1);
  
  // Add the first path to the DOM
  document.getElementById('pitch').appendChild(wideSupportPath1);
  
  // Create second wide support path (overlap)
  const wideSupportPath2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  wideSupportPath2.setAttribute("id", "path-wide-support-2");
  wideSupportPath2.setAttribute("class", "movement-path");
  wideSupportPath2.setAttribute("width", "400");
  wideSupportPath2.setAttribute("height", "600");
  wideSupportPath2.setAttribute("style", "display:none; position:absolute; top:0; left:0;");
  
  // Create defs with arrowhead
  const defs2 = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker2 = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  marker2.setAttribute("id", "arrowhead-wide-2");
  marker2.setAttribute("markerWidth", "10");
  marker2.setAttribute("markerHeight", "7");
  marker2.setAttribute("refX", "0");
  marker2.setAttribute("refY", "3.5");
  marker2.setAttribute("orient", "auto");
  
  const polygon2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon2.setAttribute("points", "0 0, 10 3.5, 0 7");
  polygon2.setAttribute("fill", "#00CED1");
  
  marker2.appendChild(polygon2);
  defs2.appendChild(marker2);
  wideSupportPath2.appendChild(defs2);
  
  // Create the path
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M 140,360 C 100,330 60,320 40,250");
  path2.setAttribute("stroke", "#00CED1");
  path2.setAttribute("stroke-width", "3");
  path2.setAttribute("fill", "none");
  path2.setAttribute("stroke-dasharray", "5,5");
  path2.setAttribute("marker-end", "url(#arrowhead-wide-2)");
  
  // Create animations
  const animate2a = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  animate2a.setAttribute("attributeName", "stroke-width");
  animate2a.setAttribute("values", "3;5;3");
  animate2a.setAttribute("dur", "1.5s");
  animate2a.setAttribute("repeatCount", "indefinite");
  animate2a.setAttribute("begin", "0.3s");
  
  const animate2b = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  animate2b.setAttribute("attributeName", "stroke-opacity");
  animate2b.setAttribute("values", "0.6;1;0.6");
  animate2b.setAttribute("dur", "1.5s");
  animate2b.setAttribute("repeatCount", "indefinite");
  animate2b.setAttribute("begin", "0.3s");
  
  path2.appendChild(animate2a);
  path2.appendChild(animate2b);
  wideSupportPath2.appendChild(path2);
  
  // Add the second path to the DOM
  document.getElementById('pitch').appendChild(wideSupportPath2);
}

// Initialize with defensive scenario selected by default
window.onload = function() {
  showScenario('defensive');
};