const $button = document.getElementById('button');
const $container = document.getElementById('container');


const showMessage = () => alert('No se puede crear una matriz con estos valores');


const createGrid = ( rows, columns, arraySize ) =>{
    $fragment = document.createDocumentFragment();

    for (let i = 0; i < arraySize ; i++) {
        $input = document.createElement('input');
        $fragment.appendChild( $input );
    }
    $container.appendChild( $fragment );
    $container.style.gridTemplateColumns = `repeat(${columns}, minmax(5px,1fr) )`;
    $container.style.gridTemplateRows = `repeat(${rows}, min-content )`;
}

const validateInputs = ( rows, columns ) =>{
    const arraySize = rows * columns;
    ( arraySize === 0 ) 
        ? showMessage()
        : createGrid( rows, columns, arraySize )
}


$button.addEventListener('click',(e)=>{
    e.preventDefault();
    $container.innerHTML = '';
    const $columns = document.getElementById('columns').value;
    const $rows = document.getElementById('rows').value;
    validateInputs( $rows, $columns);
});
