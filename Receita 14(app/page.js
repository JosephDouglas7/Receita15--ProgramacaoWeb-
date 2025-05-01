import Link from 'next/link' 

export default function Home(){ 
    return( 
        <div> 
           <div> 
              <h1>Viva Santana!</h1>  
              <Link href="/novarota">Rota1</Link> <br/><br/>
              <a href="/novarota">Rota 1, jeito antigo</a>
           </div>
       </div>
    )
}

// app/rota1/layout.jsx
export const metadata = { 
    title: 'Rota 1', 
    description: 'Página da Rota 1',
};

export default function Rota1Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link> | <Link href="/rota2">Rota 2</Link> | <Link href="/rota3">Rota 3</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}

// app/rota2/layout.jsx
export const metadata = { 
    title: 'Rota 2', 
    description: 'Página da Rota 2',
};

export default function Rota2Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link> | <Link href="/rota1">Rota 1</Link> | <Link href="/rota3">Rota 3</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}

// app/rota3/layout.jsx
export const metadata = { 
    title: 'Rota 3', 
    description: 'Página da Rota 3',
};

export default function Rota3Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <nav>
                        <Link href="/">Home</Link> | <Link href="/rota1">Rota 1</Link> | <Link href="/rota2">Rota 2</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}

