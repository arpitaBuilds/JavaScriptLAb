function performOperation(){
const text=document.getElementById("inputText").value.trim(),op=document.getElementById("operation").value,r=document.getElementById("result");
if(!text){r.innerHTML='<span class="bad">⚠ Enter some text first.</span>';return}
if(op==="email"){
const p=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
r.innerHTML=p.test(text)?'<span class="good">✓ Valid email address</span>':'<span class="bad">✕ Invalid email address</span>';
}else if(op==="extract"){
const e=text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g)||[],n=text.match(/\b\d+(?:\.\d+)?\b/g)||[];
r.innerHTML=`<b>Regex Extraction</b><br><span class="pill">Emails: ${e.join(", ")||"None"}</span><span class="pill">Numbers: ${n.join(", ")||"None"}</span>`;
}else if(op==="vowel"){
const v=text.match(/[aeiou]/gi)||[];r.innerHTML=`<b>Vowels:</b> ${v.join(" • ")||"None"}<br><span class="pill">Total: ${v.length}</span>`;
}else if(op==="analysis"){
const w=text.match(/\b[\w']+\b/g)||[],v=text.match(/[aeiou]/gi)||[],d=text.match(/\d/g)||[];
r.innerHTML=`<b>Text Statistics</b><br><span class="pill">Characters: ${text.length}</span><span class="pill">Words: ${w.length}</span><span class="pill">Vowels: ${v.length}</span><span class="pill">Digits: ${d.length}</span>`;
}else if(op==="reverse"){
r.innerHTML=`<b>Reversed:</b><br>${safe([...text].reverse().join(""))}`;
}else{
const c=text.toLowerCase().replace(/[^a-z0-9]/g,""),rev=[...c].reverse().join("");
r.innerHTML=c===rev?'<span class="good">✓ Yes — palindrome</span>':'<span class="bad">✕ No — not a palindrome</span>';
}}
function safe(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}