import React from 'react';
import { Card, Button } from 'react-bootstrap';
import superbroly from '../../superbroly.jpg';

function Tarjeta4() {
    return (
        <div className="Tarjeta4">
            <Card style={{ width: '22rem' }} className="mt-4 mx-4">
                <img src={superbroly} width="100%" height="400" />
                <Card.Body>
                    <Card.Title>Super Saiyan Broly</Card.Title>
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

export default Tarjeta4;