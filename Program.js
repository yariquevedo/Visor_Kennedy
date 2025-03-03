var map = L.map('map').setView([4.622059760042157, -74.17094971036362], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon(){
    let myData = await fetch('britalia.geojson');
    let myPolygon = await myData.json();

    L.geoJSON(myPolygon,
        {
            style:{
                color:'blue'
            }
        }
    ).addTo(map);
}

loadPolygon();

let btnTrees= document.getElementById("btnTrees");

btnTrees.addEventListener('click',
    async ()=>{
        let response= await fetch("arboles_britalia.geojson");
        let datos= await response.json();
        //Agregar la capa al mapa
        L.geoJSON(
            datos,
            {
                pointToLayer: (feature, latlong)=>{                    
                    return L.circleMarker(latlong,{
                        radius:5,
                        fillColor:'green',
                        weight:1,
                        opacity:1,
                        fillOpacity: 0.5,
                    })
                }
            }
        ).addTo(map);
    }
)

let btnDistance= document.getElementById("btnDistance");

btnDistance.addEventListener('click',
    async ()=>{
        let response= await fetch("arboles_britalia.geojson");
        let datos= await response.json();
        let trees= datos.features.map((myElement, index)=>({
            id: index+1,
            coordinates: myElement.geometry.coordinates
        }));        

        let distances=[];
        trees.forEach( (treeA)=>{trees.forEach(

            
                (treeB)=>{
                    if(treeA.id != treeB.id){
                        let distance = turf.distance( 
                            turf.point(treeA.coordinates),
                            turf.point(treeB.coordinates),
                        );
                        distances.push(
                            [
                                `Árbol ${treeA.id}`,
                                `Árbol ${treeB.id}`,
                                distance.toFixed(3)                            
                            ]
                        )
                }
            }
            )
        }
        )
        generatePDF(distances, trees.lenght);
    }
)
function generatePDF(distances, totalTrees){
    let { jsPDF } = window.jspdf;
    let documentPDF= new jsPDF();   
    
    documentPDF.text("REPORTE DE ÁRBOLES EN EL BARRIO GRAN BRITALIA", 10,10);

    documentPDF.autoTable(
        {
            head: [['Árbol 1', 'Árbol 2', 'Distance']],
            body: distances
        }
    );
    documentPDF.save("britalia.pdf")
}
