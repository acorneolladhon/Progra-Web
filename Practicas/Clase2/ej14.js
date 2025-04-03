// Declara una variable que almacene un número como string (por ejemplo, "123"). 
// Convierte este string a un número usando parseInt o Number y demuestra que ahora 
// puedes realizar operaciones matemáticas con él.

let num = "123"
console.log(num+100)  //aca deberia imprimir 123100 ya que los concatena

function convertirStrNum(){
    num=Number(num)
    return (num+100) 
}

console.log(convertirStrNum())  // deberia imprimir  (123+100) =223
