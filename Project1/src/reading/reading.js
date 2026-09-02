document.getElementById("discordimg").onclick = function(){
    window.alert("Discord Soon")
}
fetch('https://cdn.jsdelivr.net/gh/aidenwithaone/project-freeman-resources@refs/heads/main/version.txt').then(r=>r.text()).then(v=>document.getElementById('version').textContent=v)