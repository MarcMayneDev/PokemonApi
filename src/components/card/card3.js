import React from 'react';
import { Card, Button } from 'react-bootstrap';
import vegeta from '../../vegeta.jpg';

function Tarjeta3() {
    return (
        <div className="Tarjeta3">
            <Card style={{ width: '22rem' }} className="mt-4 mx-4">
                <img src={vegeta} width="100%" height="400" />
                <Card.Body>
                    <Card.Title>Vegeta God</Card.Title>
                    <Card.Text>
                    Ki +3 and ATK & DEF +150%; high chance of guarding all attacks; plus an additional ATK & DEF +77% for 3 turns after receiving an attack; medium chance of launching an additional Super Attack; great chance of stunning the attacked enemy when there is a "Movie Bosses" or "Pure Saiyans" Category enemy
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="primary">
                            Ver
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta3;