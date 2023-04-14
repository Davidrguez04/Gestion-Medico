/**
 * La finalidad del ejercicio es generar un proyecto web que nos permita gestionar las citas de un centro médico. 
Para esta gestión de citas, se trabajará con 5 ámbitos de información:
Cita médica
Usuario
Centro médico
Consulta del centro médico en la que se lleva a cabo la cita(habitáculo)
Médico
Las citas deben poder listarse en base al usuario y borrarse en base al identificador de la cita médica.
La fecha de la cita médica debe guardarse tipos de datos fechas.

La cantidad de información a guardar, queda a vuestro criterio: pensar en la aplicación del SAS.
*/

class Citas{
	constructor(tipo){
		this.tipo=tipo;
	}
	pedirTipo(){
		var citasMedicas=prompt("Indique el tipo de ambito de la cita:\n\n1.-Medicina de familia.\n 2.-Pediatria.\n 3.-Enfermeria\n 4.-Odontologia.");
		Number(citasMedicas);
		do{
			if(citasMedicas<1||citasMedicas>4){
			alert("**ERROR** El dato introducido no corresponde con el ambito de la cita medica.\nIntroduzca numeros para continuar con las opciones elegidas.");
			var citasMedicas=prompt("Vuelva a introducir el tipo de ambito de la cita:\n\n1.-Medicina de familia.\n 2.-Pediatria.\n 3.-Enfermeria\n 4.-Odontologia.");
			}
		}while(citasMedicas<1||citasMedicas>4);
		
	}
	
}

class CentroMedico{
	constructor(centro){
		this.centro=centro;
	}
	pedirCentro(){
		var centroMedico=prompt("En que centro medico quiere obtener la cita medica:\n\n1.-Sevilla\n2.-Madrid Centro\n3.-Cadiz.");
		Number(centroMedico);
		do{
			if(centroMedico<1||centroMedico>3){
			alert("**ERROR** El dato introducido no corresponde con el centro medico.\nIntroduzca numeros para continuar con las opciones elegidas.");
			var centroMedico=prompt("Vuelve a introducir en que centro médico quiere la cita:\n\n1.-Sevilla\n2.-Madrid Centro\n3.-Cadiz.");
		}
		}while(centroMedico<1||centroMedico>3);
		
		
	}
}
class ConsultaMedico{
	contructor(consulta){
		this.consulta=consulta;
	}
	pedirConsulta(){
		var tipoConsulta=prompt("Que consulta (habitaculo) le gustaria acceder:\n\n1A \n2A\n 3A");
		
		do{
			if(tipoConsulta<1||tipoConsulta>3){
			alert("**ERROR** El dato introducido no corresponde con el habitaculo medico.\nIntroduzca numeros para continuar con las opciones elegidas.");
			var tipoConsulta=prompt("Vuelva a introducir el habitaculo al que le gustaria acceder:\n\n1A \n2A\n 3A");
			}
		}while(tipoConsulta<1||tipoConsulta>3);
	}
}

class Medico{
	constructor(medico){
		this.medico=medico;
	}
	pedirMedico(){
		var medicoNombre=prompt("Con que medico queria una cita medica:\n\n 1.-Dr.David\n2.-Dr.Jose Julio\n3.-Dr.Mario ");
		do{
		    if(medicoNombre<1||medicoNombre>3){
			alert("**ERROR** El dato introducido no corresponde con el medico.\nIntroduzca numeros para continuar con las opciones elegidas.");
			var medicoNombre=prompt("Vuelva a introducir el medico queria una cita medica:\n\n 1.-Dr.David\n2.-Dr.Jose Julio\n3.-Dr.Mario ");
			}
		}while(medicoNombre<1||medicoNombre>3);
	}
}

class Datos{
	constructor(citas,medico,consulta,centro){
		this.citas=citas;
		this.medico=medico;
		this.consulta=consulta;
		this.centro=centro;
	}
	mostrarDatos(){
		alert(Medico.medicoNombre);
	}
}

let cit= new Citas();
let cent=new CentroMedico();
let con=new ConsultaMedico();
let med=new Medico();
let dat=new Datos();
//Solicitamos el tipo de la cita
cit.pedirTipo();

// Solicitar el nombre del usuario
const nombreUsuario = prompt('Ingrese su nombre completo:');

//Solicitamos el centro médico
cent.pedirCentro();

//Solicitamos el habitáculo(consulta)
con.pedirConsulta();




//Pedimos el medico para la cita Medica
med.pedirMedico();

dat.mostrarDatos();

alert("Gracias por usar nuestro programa correctamente "+nombreUsuario+".");





