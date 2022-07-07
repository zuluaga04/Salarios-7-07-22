let nombre, h_trabajadas, s_semanal, extra, total
let formulario1 = document.getElementById("form1")
let formulario2 = document.getElementById("form2")

formulario1.addEventListener("submit", (e) => {
    console.log("Formulario recibido")
    e.preventDefault();
    ReadData();
})

function ReadData() {
    nombre = document.getElementById("nombre").value
    h_trabajadas = document.getElementById("horas").value
    ValidateData(nombre, h_trabajadas);
}

function ValidateData(nombre, h_trabajadas) {

    if (isNaN(h_trabajadas) == false && nombre.length > 0 && h_trabajadas.length > 0) {


        Operation(h_trabajadas, s_semanal, extra, total);
        swal({ title: document.getElementById("nombre").value, text: "Listo pute", icon: "success", })


    }
    else {
        swal("Error", "Lo dejaste vacio pute!", "error");
    }
}


function Operation(h_trabajadas, s_semanal, extra, total) {

    if (h_trabajadas < 40) {
        s_semanal = (h_trabajadas * 8000)
        extra = 0
        total = s_semanal

    }

    else {
        s_semanal = ((h_trabajadas - (h_trabajadas - 40)) * 8000)
        extra = (((h_trabajadas - 40) * 12000))
        total = extra + s_semanal
    }

    document.getElementById("S_semanal").value = s_semanal
    document.getElementById("Extra").value = extra
    document.getElementById("Total").value = total

}