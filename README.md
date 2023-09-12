# pt_listaTareas_120923

Crea una aplicación React que permita a los usuarios agregar y ver una lista de tareas. Debe cumplir con los siguientes requisitos:

La aplicación debe tener un formulario donde los usuarios puedan ingresar el nombre de una tarea y un botón para agregarla a la lista.

Debe haber una lista de tareas que muestre todas las tareas agregadas por los usuarios. Cada tarea debe mostrar su nombre y un botón para eliminarla.

Utiliza un estado (useState) para gestionar el formulario y la lista de tareas. El estado inicial debe ser un objeto con una propiedad "tareas" que es un arreglo vacío.

Cuando un usuario agrega una tarea, esta debe ser agregada al arreglo de tareas en el estado.

Cuando un usuario elimina una tarea, esta debe ser eliminada del arreglo de tareas en el estado.

Utiliza localStorage para persistir la lista de tareas. Cuando la página se recargue, las tareas previamente agregadas deben seguir apareciendo en la lista.

Asegúrate de que el formulario no permita agregar tareas vacías (sin nombre).

Estiliza la aplicación de forma básica para que sea agradable a la vista.

Puntos extra (opcional):

Agrega validación para evitar agregar tareas duplicadas.
Implementa edición de tareas.
Mejora el diseño de la aplicación utilizando CSS o una librería de diseño como Material-UI.