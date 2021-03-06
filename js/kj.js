
if(document.getElementsByClassName('fh5co-cover')[0].getAttribute('style').includes("SarahTest") && window.innerWidth<500) {
document.getElementsByClassName ('fh5co-cover')[0].setAttribute('style', style="background-image:url(static/Bryllup/images/SarahTest2.jpg);")
}

if(!!document.getElementById('Bryllupsugen') && !!document.getElementById('Bryllupdagen')){
document.getElementById('Bryllupsugen').style.color = "rgb(241,83,152)"
document.getElementById('Bryllupsugen').style.fontWeight = "bold" 
document.getElementById('Bryllupsdagen').style.color = "rgb(241,83,152)"
document.getElementById('Bryllupsdagen').style.fontWeight = "bold" 
document.getElementById('Bryllupsugen_div').style.backgroundColor = "rgba(255, 255, 255, 0.8)";
document.getElementById('Bryllupsdagen_div').style.backgroundColor = "rgba(255, 255, 255, 0.8)";
}

if(!!document.getElementsByClassName('Bryllupsdagen')[0] && !document.getElementsByClassName('Bryllupsugen')[0]) {
for (i=0;i<8;i++) {

    document.getElementsByClassName('Bryllupsdagen')[i].style.color = 'black';
    document.getElementsByClassName('Bryllupsdagen_2')[i].style.color = 'black';
    document.getElementsByClassName('Bryllupsdagen_2')[i].style.fontWeight = 'bold';
    document.getElementsByClassName('Bryllupsugen')[i].style.color = 'black';
    document.getElementsByClassName('Bryllupsugen_2')[i].style.color = 'black';
    document.getElementsByClassName('Bryllupsugen_2')[i].style.fontWeight = 'bold';
}
}
document.getElementById('hearIcon').style.height = '50px'
//document.getElementById('arrowUp').style.marginTop = '10px'
//document.getElementById('arrowUp').style.height = '30px'

setInterval(function() {
if(window.innerWidth < 500) {
    document.getElementsByClassName('simply-section simply-seconds-section')[0].style.display = 'none'

}
}, 100)
