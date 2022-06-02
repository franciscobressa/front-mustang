import './footer.css'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Card className='footer-card'>
          <CardBody className='footer-card-body'>
            <CardTitle className='footer-card-title' tag="h5">
              <span className='d-none d-md-block'>
                Mustang
              </span>
              <span className='d-md-none'>
                O que são
              </span>
            </CardTitle>
            <CardText className='footer-card-text'>
              <span className='d-none d-md-block'>O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.</span>
              <span className='d-md-none'>
                A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
              </span>
            </CardText>
            <Button className='col-8 col-md-3'>
              Ver Carros
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>      
  )
}

export default Footer;