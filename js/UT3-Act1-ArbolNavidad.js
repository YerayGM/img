let listaAbonados = [
  { nombreClub: "Real Madrid", cantidadVendidaAbonos: 61000, imagen: "RealMadrid.jpg" },
  { nombreClub: "AtletideMadrid", cantidadVendidaAbonos: 60000, imagen: "ATMadrid.jpg" },
  { nombreClub: "RBetis", cantidadVendidaAbonos: 50741, imagen: "Beti.jpg" },
  { nombreClub: "AthleticBilbao", cantidadVendidaAbonos: 43649, imagen: "Bilbao.jpg" },
  { nombreClub: "ValenciaCF", cantidadVendidaAbonos: 38500, imagen: "Valencia.jpg" },
  { nombreClub: "SevillaFC", cantidadVendidaAbonos: 38000, imagen: "Sevilla.jpg" },
  { nombreClub: "RSociedad", cantidadVendidaAbonos: 37836, imagen: "RSociedad.jpg" },
  { nombreClub: "RCDepor", cantidadVendidaAbonos: 28732, imagen: "Depor.jpg" },
  { nombreClub: "MalagaCF", cantidadVendidaAbonos: 26550, imagen: "MalagaCF.jpg" },
  { nombreClub: "UDLPalmas", cantidadVendidaAbonos: 25000, imagen: "UDPalmas.jpg" },
  { nombreClub: "RZaragoza", cantidadVendidaAbonos: 24304, imagen: "RealZaragoza.jpg" },
  { nombreClub: "Espanyol", cantidadVendidaAbonos: 24302, imagen: "Espanyol.jpg" },
  { nombreClub: "RValladolid", cantidadVendidaAbonos: 23728, imagen: "RealValladolid.jpg" },
  { nombreClub: "Celta de Vigo", cantidadVendidaAbonos: 23000, imagen: "Celta.jpg" },
  { nombreClub: "ROviedo", cantidadVendidaAbonos: 22500, imagen: "RealOviedo.jpg" },
  { nombreClub: "", cantidadVendidaAbonos: 1, imagen: "Logo.jpg" },
  { nombreClub: "", cantidadVendidaAbonos: 0, imagen: "Logo2.jpg" }
];

function dibujaArbolNavidad(base) {
  const contenedorArbol = document.getElementById('contenedorArbol');
  contenedorArbol.innerHTML = '';
  const arbolDiv = document.createElement('div');
  arbolDiv.className = 'arbol-navidad';
  let nivel = 0;
  let cantidadElementos = 1;
  let index = 0;
  while (index < listaAbonados.length) {
    const fila = document.createElement('div');
    fila.className = 'fila-nivel';
    for (let i = 0; i < cantidadElementos; i++) {
      if (index >= listaAbonados.length) break;
      const abonado = listaAbonados[index];
      const elemento = document.createElement('div');
      elemento.className = 'elemento-arbol';
      const img = document.createElement('img');
      img.src = `../img/${abonado.imagen}`;
      img.alt = abonado.nombreClub;
      const texto = document.createElement('p');
      texto.textContent = abonado.nombreClub;
      elemento.appendChild(img);
      elemento.appendChild(texto);
      fila.appendChild(elemento);
      index++;
    }
    arbolDiv.appendChild(fila);
    nivel++;
    cantidadElementos = Math.min(cantidadElementos + 1, base);
  }
  contenedorArbol.appendChild(arbolDiv);
}

document.getElementById('mostrarArbol').addEventListener('click', function () {
  this.style.display = 'none';
  dibujaArbolNavidad(5);
});
