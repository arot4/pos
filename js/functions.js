//Modelo estatico para productos.
const productos = [
    ["1", "Tortillas", 20.50, "Sin descripcion"],
    ["2", "Pan", 15.50, "Sin descripcion"],
    ["3", "Leche", 15.00, "Sin descripcion"],
    ["4", "Huevos", 20.00, "Sin descripcion"],
    ["5", "Azucar", 15.50, "Sin descripcion"],
    ["6", "Sal", 15.50, "Sin descripcion"],
    ["7", "Aceite", 20.00, "Sin descripcion"],
    ["8", "Frijol", 15.00, "Sin descripcion"],
    ["9", "Arroz", 15.50, "Sin descripcion"],
    ["10", "Sopa", 20.50, "Sin descripcion"],
    ["11", "Atun", 15.00, "Sin descripcion"],
    ["12", "Cereal", 15.00, "Sin descripcion"],
    ["13", "Galletas", 20.50, "Sin descripcion"],
    ["14", "Cafe", 15.50, "Sin descripcion"],
    ["15", "Refresco", 15.00, "Sin descripcion"],
    ["16", "Agua", 20.00, "Sin descripcion"],
    ["17", "Jabon", 15.50, "Sin descripcion"],
    ["18", "Shampoo", 15.50, "Sin descripcion"],
    ["19", "Crema", 20.00, "Sin descripcion"],
    ["20", "Pasta", 15.00, "Sin descripcion"],
    ["21", "Cepillo de dientes", 15.50, "Sin descripcion"],
    ["22", "Papel higienico", 20.50, "Sin descripcion"],
    ["23", "Toallas femeninas", 15.00, "Sin descripcion"],
    ["24", "Pañales", 15.00, "Sin descripcion"],
    ["25", "Cerveza", 20.25, "Sin descripcion"],
    ["26", "Vino", 15.25, "Sin descripcion"],
    ["27", "Whisky", 15.75, "Sin descripcion"],
    ["28", "Vodka", 20.75, "Sin descripcion"],
    ["29", "Tequila", 15.15, "Sin descripcion"],
    ["30", "Ron", 15.30, "Sin descripcion"]
];

var total = 0.00;

function buscarProducto(event) {
    if (event.keyCode === 13) {
        var codigo = document.getElementById("codigo").value;  
        var cantidad = 1;

        if(codigo.indexOf("*") !== -1){
            cantidad = codigo.split("*")[0];
            codigo = codigo.split("*")[1];
        }
        for (var i = 0; i < productos.length; i++) {
            if (productos[i][0] === codigo) {
                var agregar = document.getElementById("productos");
                var row = agregar.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = cantidad;
                cell1.setAttribute("style", "text-align:center;");
                cell2.innerHTML = productos[i][1];
                cell2.setAttribute("style", "text-align:center;");
                cell3.innerHTML = productos[i][2].toFixed(2);
                cell3.setAttribute("style", "text-align:center;");

                total += parseFloat((cantidad*productos[i][2]).toFixed(2));
                document.getElementById("total").innerHTML = total.toFixed(2);

                cell4.innerHTML = (cantidad*productos[i][2]).toFixed(2);   
                cell4.setAttribute("style", "text-align:center;");
            }
        }

    }
}