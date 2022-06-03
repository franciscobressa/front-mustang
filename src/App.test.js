import { render, screen } from '@testing-library/react';
import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import Content from '../src/components/content/content.js';

describe('Header', () => {
  test('should render the Header', () => {
    render(<Header />);
  });
  test('should have nav-links', () => {
    render(<Header />);
    const Home = screen.getAllByText('Home');
    expect(Home).toHaveLength(1);
    const About = screen.getAllByText('Sobre');
    expect(About).toHaveLength(1);
    const Table = screen.getAllByText('Tabela');
    expect(Table).toHaveLength(1);
    const Contact = screen.getAllByText('Fale Conosco');
    expect(Contact).toHaveLength(1);
    const Login = screen.getAllByText('Entrar');
    expect(Login).toHaveLength(1);
  });
  test('should open navbar', () => {
    render(<Header />);
    const openNav = screen.getByTestId('openNav');
    openNav.click();
    render(<Header />);
    const mySidebar = screen.getByTestId('mySidebar');
    expect(mySidebar).toBeInTheDocument();
  });
  test('should close navbar', () => {
    render(<Header />);
    const openNav = screen.getByTestId('openNav');
    openNav.click();
    render(<Header />);    
    const mySidebar = screen.getByTestId('mySidebar');
    expect(mySidebar).toBeInTheDocument();
    const closeNav = screen.getByTestId('closeNav');
    closeNav.click();
    render(<Header />);
    expect(screen.getByTestId('mySidebar').style.width).toBe('0px');
  });
});

describe('Content', () => {
  test('should render the Content', () => {
    render(<Content />);
  });
});

describe('Footer', () => {
  test('should render the Footer', () => {
    render(<Footer />);
  });
});

