function performOperation(){
const t=document.getElementById("text").value,r=document.getElementById("result"),op=document.getElementById("operation").value;
if(!t.trim()){r.innerHTML='<span style="color:#fb7185">⚠ Please enter a string or paragraph.</span>';return}
if(op==="reverse"){
const rev=[...t].reverse().join("");
r.innerHTML=`<b>Original</b><br>${safe(t)}<br><br><b>Reversed</b><br>${safe(rev)}`;
}else{
const v=t.match(/[aeiou]/gi)||[];
r.innerHTML=`<b>Vowels Found</b><br>${v.join(" • ")||"None"}<br><span class="stat">Total Vowels: ${v.length}</span>`;
}}
function safe(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}