import React from 'react' 6.9k (gzipped; 2.7k)
import './common-section.css'
import {Container,Row,Col} from 'reactstrap'; 124.3k (gzipped: 33.1k)
const CommonSection=({title}) {
    return (
        <section className='common-section'>
            <Container>
                <Row>
                    <col>
                        <h1>{title}</h1>
                    </col>
                </Row>
            </Container>
        </section>
    )
}
export default CommonSection
