# Ejercicio sesión 6

En esta aplicación tienes un componente `CreateUser` con varios formularios. Llévate cada formulario a un componente y haz que `CreateUser` sea un componente de alto nivel que los contenga. El usuario debería poder ir navegando entre los formularios con un botón de "Siguiente" y "Anterior".

Crea un slice de Redux para manejar el estado de los formularios y utiliza `useSelector` y `useDispatch` para manejar el estado y las acciones.

Mientras el usuario rellena los datos, tienen que ir viéndose en la ficha de la derecha

## Pistas para crear un slice:

- Antes de crear un slice debes decidir qué forma van a tener los datos en el estado.
- Crea un valor para el estado inicial
- El objeto que le pases a `createSlice` sólo debe tener las propiedades `name`, `initialState` y `reducers`.
- Un reducer es una función que recibe el estado actual y una acción. Recuerda tipar el payload de la acción.
- Utiliza las devtools de Redux para ver cómo cambia el estado.
