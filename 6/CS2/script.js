function analyzeText(){
const t=document.getElementById("text").value.trim(),o=document.getElementById("output");
if(!t){o.innerHTML='<div class="section">⚠ Please enter student information.</div>';return}
const name=(t.match(/(?:i am|my name is|name is)\s+([A-Za-z]+(?:\s+[A-Za-z]+){0,3})/i)||[])[1]||"Not Found";
const roll=(t.match(/(?:roll(?:\s*number)?|roll no\.?)\s*(?:is|:)?\s*([A-Za-z0-9-]+)/i)||[])[1]||"Not Found";
const email=(t.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/i)||[])[0]||"Not Found";
const phone=(t.match(/(?:\+91[\s-]?)?[6-9]\d{9}\b/)||[])[0]||"Not Found";
const dept=(t.match(/(Computer Science|Information Technology|Mechanical Engineering|Civil Engineering|Electrical Engineering|Data Science)/i)||[])[0]||"Not Found";
const emailOK=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
const phoneOK=phone.replace(/\D/g,"").length===10;
const words=t.match(/\b[\w'-]+\b/g)||[], chars=t.replace(/\s/g,"").length;
const replaced=t.replace(/Computer Science/gi,"Artificial Intelligence & Data Science");
o.innerHTML=`<div class="grid">
${box("Student Name",name)}${box("Roll Number",roll)}${box("Email",email)}${box("Email Status",emailOK?"✓ Valid":"✕ Invalid")}
${box("Phone",phone)}${box("Phone Status",phoneOK?"✓ Valid":"✕ Invalid")}${box("Department",dept)}${box("Total Words",words.length)}${box("Characters",chars)}</div>
<div class="section"><h3>Lowercase Transformation</h3>${safe(t.toLowerCase())}</div>
<div class="section"><h3>Department Transformation</h3>${safe(replaced)}</div>`}
function box(a,b){return `<div class="item"><span>${a}</span><strong>${safe(b)}</strong></div>`}
function safe(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}