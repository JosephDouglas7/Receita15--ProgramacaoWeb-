import Link from 'next/link'



export default function Home(){

    return (

        <div>           

            <div>

                <h1>

                    Bem vindo!

                </h1>

                <Link href="/novarota">Nova Rota</Link> <br/><br/>

                <a href="/novarota">Nova Rota, jeito antigo</a>

            </div>

        </div>       

    )

} 
