var ca = document.querySelector("#ca")
var newM = document.querySelector("#newM")
var a = document.querySelector(".a")
var cancel1 = document.querySelector("#cancel1")
var ok1 = document.querySelector("#ok1")
var cancel2 = document.querySelector("#cancel2")
var ok2 = document.querySelector("#ok2")
var nam = document.querySelector("#name")
var description1 = document.querySelector("#description")
var missions = document.querySelector("#missions")
var noM = document.querySelector("#noM")
var b = document.querySelector(".b")
var missionND = document.querySelector("#missionND")
var search = document.querySelector("#search")
var ls = localStorage


if(localStorage.length > 0){
  ca.style.pointerEvents= "auto"
  ca.style.backgroundColor = "#B9B0B2"
  noM.style.display = "none"
  for(let i=0;i<ls.length;i++){
  missions.innerHTML += `<div class='mission'><p>${ls.key(i)}</p></div><span class='canc'>X</span>`
  }
}else{
  noM.style.display = ""
}
newM.onclick = () => {
  a.style.display = "block"
}
ca.onclick = () => {
  localStorage.clear()
  ca.style.backgroundColor = "rgba(185,176,162,.2)"
  ca.style.pointerEvents = "none"
  noM.style.display = ""
  missions.innerHTML = "<span id='noM'>NO MISSION</span>"
}
search.oninput = () => {
  missions.innerHTML = ""
  for(let i=0;i<ls.length;i++){
    if(ls.key(i).toUpperCase().includes(search.value.toUpperCase()) && search.value !== "" && search.value !== /\s+/g){
      missions.innerHTML += `<div class='mission'><p>${ls.key(i)}</p></div><span class='canc'>X</span>`
    }
  }
}
ok1.onclick = () => {
  if(nam.value === ""){
    alert("please enter a name of mission")
  }else{
    ca.style.backgroundColor = "#B9B0B2"
    ca.style.pointerEvents= "auto"
    noM.style.display = "none"
    localStorage.setItem(nam.value,description1.value)
    missions.innerHTML += `<div class='mission'><p>${nam.value}</p></div><span class='canc'>X</span>`
    nam.value = ""
    description1.value = ""
    a.style.display = "none"
  }
}
var mission = document.getElementsByClassName("mission")
var can = document.getElementsByClassName("canc")
cancel1.onclick = () => {
  a.style.display = "none"
}
for(let i=0;i<mission.length;i++)
{
  can[i].onclick = () => {
    ls.removeItem(ls.key(i))
  }
  mission[i].onclick = () => {
    b.style.display = "block"
    missionND.innerHTML = `<h2>${ls.key(i)}</h2><p>${ls.getItem(ls.key(i))}</p>`
  }
}
ok2.onclick = () => {
  b.style.display = "none"
}
cancel2.onclick = () => {
  b.style.display = "none"
}