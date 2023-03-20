import React from 'react';
import { Card, Button } from 'react-bootstrap';
import broly from '../../broly.jpg';

function Tarjeta() {
    return (
        <div className="Tarjeta">
            <Card style={{ width: '22rem' }} className="mt-4 mx-4">
                <img src={broly} width="100%" height="400" />
                <Card.Body>
                    <Card.Title>Broly</Card.Title>
                    <Card.Text>
                    Ki +1 at start of every turn; Ki +3, ATK & DEF +70%; plus an additional DEF +20% with each attack performed (up to 80%); plus an additional ATK +20% with each attack received (up to 80%); plus an additional Ki +1 and ATK +30% & DEF +70% per existing enemy; Transforms into Super Saiyan Broly when conditions are met
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

export default Tarjeta;