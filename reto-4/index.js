function decode(message) {
    const stack = []; // Pila para manejar los paréntesis anidados
    let current = ''; // Variable para almacenar el mensaje actual que estamos construyendo
  
    for (let char of message) {
      if (char === '(') {
        // Empujamos el contenido actual a la pila y empezamos una nueva cadena
        stack.push(current);
        current = '';
      } else if (char === ')') {
        // Cuando encontramos un cierre de paréntesis, invertimos la cadena actual
        current = current.split('').reverse().join('');
        // Combinamos con el contenido anterior que estaba en la pila
        current = stack.pop() + current;
        // console.log(stack)
      } else {
        // Si no es un paréntesis, simplemente agregamos el carácter a la cadena actual
        current += char;
      }
    }
  
    return current;
  }
  
  // Ejemplos de uso:
  const a = decode('hola (odnum)');
//   console.log(a); // hola mundo
  
  const b = decode('(olleh) (dlrow)!');
//   console.log(b); // hello world!
  
  const c = decode('sa(u(cla)atn)s');
//   console.log(c); // santaclaus
  