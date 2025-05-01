import link from 'next/link' 

export default function Home(){ 
    return( 
        <div> 
           <div> 
              <h1> 
                Viva Santana! 
              </h1>  
              <link href="/novarota">Rota1</link> <br/><br/>
              <a href="novarota">Rota 1,jeito antigo</a>
           </div>
       </div>
    )
}
