document.getElementById("discordimg").onclick = function(){
    window.alert("Discord Soon")
}
fetch('https://api.ixl-grade10.org/version.txt').then(r=>r.text()).then(v=>document.getElementById('version').textContent=v)