const $button = document.getElementById('button');
const $btnTranspose = document.getElementById('transpose');
const $container = document.getElementById('container');
const $container2 = document.getElementById('container2');
let $columns = 0;
let $rows = 0;

const createNewGrid = ( array, rows, columns) =>{
    $fragment = document.createDocumentFragment();
    for(let column=0; column< columns ; column++){
        for( let row=0; row < rows; row++){
            $p = document.createElement('p');
            $p.innerText = array[column][row];
            $fragment.appendChild( $p );
        }
    }
    
    $container2.appendChild( $fragment );
    $container2.style.gridTemplateColumns = `repeat(${rows}, minmax(5px,1fr) )`;
    $container2.style.gridTemplateRows = `repeat(${columns}, min-content )`;
}

const getTransposedArray = ( data ) =>{
    const rowNumber = parseInt( $rows );
    const columnNumber = parseInt( $columns );
    let step=0;
    let transposedArray= new Array( columnNumber);
    for (let i = 0; i < columnNumber ; i++) {
        transposedArray[i] = new Array( rowNumber);
    }

    for(let row=0; row < rowNumber; row++ ){
        for(let column=0; column < columnNumber; column++){
            transposedArray[column][row] = data[step];
            step = step + 1;
        }
    }
    createNewGrid(transposedArray, rowNumber, columnNumber);
    console.log( transposedArray );    
      
}

const validateCells = () =>{
    let emptyCell = [];
    let fullCell = [];

    const $cells = document.querySelectorAll('.input');
    $cells.forEach( cell =>{
        ( cell.value === '')
            ? emptyCell.push(cell)
            : fullCell.push(cell.value); 
    });
    console.log( fullCell );
    (emptyCell.length > 0)
        ? alert('Por favor complete toda la matriz')
        : getTransposedArray( fullCell );
}

$btnTranspose.addEventListener('click', (e)=>{
    e.preventDefault();
    validateCells();
});

const createGrid = ( rows, columns, arraySize ) =>{
    $fragment = document.createDocumentFragment();

    for (let i = 0; i < arraySize ; i++) {
        $input = document.createElement('input');
        $input.classList.add('input');
        $fragment.appendChild( $input );
    }
    $container.appendChild( $fragment );
    $container.style.gridTemplateColumns = `repeat(${columns}, minmax(5px,1fr) )`;
    $container.style.gridTemplateRows = `repeat(${rows}, min-content )`;
}
const showMessage = () => alert('No se puede crear una matriz con estos valores');

const validateInputs = ( rows, columns ) =>{
    const arraySize = rows * columns;

    ( arraySize === 0 ) 
        ? showMessage()
        : createGrid( rows, columns, arraySize )
}

$button.addEventListener('click',(e)=>{
    e.preventDefault();
    $container.innerHTML = '';
    $container2.innerHTML = '';
    $columns = document.getElementById('columns').value;
    $rows = document.getElementById('rows').value;
    validateInputs( $rows, $columns);
    $btnTranspose.style.display = 'inline';
});
