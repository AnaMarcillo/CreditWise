import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';

const Header = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className='flex flex-v-center flex-space-between'>
      <div className='header-profile flex flex-1'>
        <Link to='/profile'>
          <div className='profile-photo' style={{ backgroundImage: 'url("images/profile.jpg")' }} />
        </Link>
      </div>
      <div className='header-center'>
        {/* Eliminamos la barra de búsqueda */}
      </div>
      <div className='header-buttons' style={styles.headerButtons}>
        {/* CTA Button to Start Prediction */}
        <div className="cta-container">
          <Link to="/savings" className="cta-button" style={styles.headerButton}>
            Get Started
          </Link> {/* Link to Savings Page */}
        </div>

        {/* Button to Add Page (Prediction Form) */}
        <div className="cta-container">
          <Link to="/add" className="cta-button" style={styles.headerButton}>
            Prediction Form Page
          </Link> {/* Link to Add.tsx */}
        </div>
      </div>
    </header>
  );
};

// Estilos en línea usando CSSProperties
const styles: { [key: string]: CSSProperties } = {
  headerButtons: {
    display: 'flex',
    gap: '20px', // Añade espacio entre los botones
  },
  headerButton: {
    padding: '10px 20px', // Ajusta el tamaño del botón
    backgroundColor: '#007bff', // Color de fondo azul
    color: 'white', // Color del texto
    border: 'none', // Elimina el borde
    borderRadius: '5px', // Bordes ligeramente redondeados
    textAlign: 'center' as 'center', // Especificamos el valor correcto para textAlign
    textDecoration: 'none', // Elimina el subrayado del enlace
    fontSize: '16px', // Tamaño del texto
    fontWeight: 'bold', // Texto en negrita
    cursor: 'pointer', // Cambia el cursor cuando se pasa por encima
  },
};

export default Header;
