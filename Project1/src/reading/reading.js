document.getElementById("discordimg").onclick = function(){
    window.alert("Discord Soon")
}
fetch('https://cdn.jsdelivr.net/gh/aidenwithaone/project-freeman-resources@refs/heads/main/version.txt').then(r=>r.text()).then(v=>document.getElementById('version').textContent=v)

window.alert("I may need more people to work on this project. if anyone knows HTML/CSS, Make a Form telling such.")