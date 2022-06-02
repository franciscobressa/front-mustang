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
              Mustang
            </CardTitle>
            <CardText className='footer-card-text'>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.            </CardText>
            <Button>
              Ver Carros
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>      
  )
}

export default Footer;