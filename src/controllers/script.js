import Alumno from "../models/Contact.js"
import BST from "../models/tree/BST.js"

let btn = document.getElementById("agenda-btn")
let btn1 = document.getElementById("buscar-btn")
let btnMin = document.getElementById("min-btn")
let btnMax = document.getElementById("max-btn")
let btnPrev = document.getElementById("prev-btn")
let btnNext = document.getElementById("next-btn")
let btnSearchAll = document.getElementById("search-all")

let index = 0;
const bst = new BST


btn.addEventListener("click",()=>{
    let name = document.getElementById("firstName").value
    let matricula = parseInt(document.getElementById("lastName").value)
    let grupo = document.getElementById("phoneNumber").value
    let alumno = new Alumno (name,matricula,grupo)
    if (!matricula || !name || !grupo ) {
        swal("Algun campo esta incompleto")
    } else {
        if ((bst.add(alumno)))
        swal("Agregado correctamente")
        else
        swal("Error al agregar")
    displayAlumnos();
    }
})

btn1.addEventListener("click", () => {
    let lastName = parseInt(document.getElementById("lastNameSearch").value);
    bst.search(lastName, (callback) => { 
       if (callback != null){swal(callback.name + " " + callback.matricula + ": " + callback.grupo);
       } else {
        swal("Estudiante no encontrado")
       }
    });
});

btnMin.addEventListener("click",()=>{
    let node = bst.min()
    if (node != null){
        swal("Mínimo: " + node.value.name + " " + node.value.matricula + ": " + node.value.grupo)
    } else {
        swal("Árbol vacío")
    }
})

btnMax.addEventListener("click",()=>{
    let node = bst.max()
    if (node != null){
        swal("Máximo: " + node.value.name + " " + node.value.matricula + ": " + node.value.grupo)
    } else {
        swal("Árbol vacío")
    }
})

btnPrev.addEventListener("click", () => {
    if (index > 0) {
        index--;
        displayAlumnos();
    }
});

btnNext.addEventListener("click", () => {
    index++;
    displayAlumnos();
});

btnSearchAll.addEventListener("click", () => {
    let allNodes = []; 
    bst.getAllNodes((node) => {
        allNodes.push(node.name + " " + node.matricula + ": " + node.grupo);
    });

    let allNodesString = allNodes.join("\n");
    if (allNodes.length > 0){
    swal({
        title: "Alumnos registrados",
        text: allNodesString,
        icon: "info",
        button: "Cerrar"
    }); } else {
        swal ({
            title : "Error",
            text: "Ningun estudiante ha sido registrado",
            icon: "error",
            button: "Cerrar"
        })
    }
});


function displayAlumnos() {
    for (let i = 0; i < 3; i++) {
        let alumnoDiv = document.getElementById(`contact-${i+1}`);
        let node = bst.getNodeByIndex(index + i);
        if (node !== null) {
            alumnoDiv.textContent = node.value.name + " " + node.value.matricula + ": " + node.value.grupo;
        } else {
            alumnoDiv.textContent = "";
        }
    }
}

displayAlumnos();
