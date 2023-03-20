import React from 'react';
import { Card, Button } from 'react-bootstrap';
import goku from '../../goku.jpg';

function Tarjeta2() {
    return (
        <div className="Tarjeta2">
            <Card style={{ width: '22rem' }} className="mt-4 mx-4">
                <img src={goku} width="100%" height="400" />
                <Card.Body>
                    <Card.Title>Goku God</Card.Title>
                    <Card.Text>
                    Ki +3 and ATK & DEF +150%; randomly changes Ki Spheres of a certain Type to Rainbow Ki Spheres; ATK & DEF +7% in addition per Ki Sphere obtained; plus an additional ATK & DEF +77% with 2 or more Rainbow Ki Spheres obtained; damage received -77% when there is a "Movie Bosses" or "Pure Saiyans" Category enemy
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

export default Tarjeta2;