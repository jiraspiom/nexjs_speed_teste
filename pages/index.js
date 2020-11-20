import { useState, useEffect } from 'react';

function Home() {
  return (
    <div>
      <div> HOME PRINCIPAL NEXTJS</div>

      <Contador />
      <Ovo />

      <div>
        Teste finalizado.
        </div>
    </div>

  )
}

export default Home

/* 
export default function Home() {
     return <div>Home2</div>
 }
 */

function Contador() {
  const [contador, setContador] = useState(1);

  function incrementarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div> contador {contador}</div>
      <button onClick={incrementarContador}> Incrementar contador</button>
    </div>
  )
}

function Ovo() {
  useEffect(() => {
    console.log(`
      ╲╭━━━━╮╲╲╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
      ╲┃╭╮╭╮┃╲╲|..welcome to console!....|
      ┗┫┏━━┓┣┛╲╰┳╮ .....  ...............|
      ╲┃╰━━╯┃━━━╯╰━━━━━━━━━━━━━━━━━━━━━━━╯
      ╲╰┳━━┳╯╲╲╲╲╲╲╲
      `);
  }, []);

  return (
    <div> testado</div>

  )

}