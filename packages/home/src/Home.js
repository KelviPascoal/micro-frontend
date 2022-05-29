import React from 'react';
import { Button } from 'reactstrap';

function Home() {
    return (
        <>
                <h1 className="display-3">Olá Module Federation</h1>
                <hr className="my-2" />
                <p>Este componente é de outro App!</p>
                <p className="lead">
                    <Button color="primary">Botão</Button>
                </p>

        </>
    )
}

export default Home;