import './tabela.css'
import { Icon } from '@iconify/react';
import {
  Table
} from 'reactstrap';
function Tabela() {
  return (
      <div className="tabela">
        <div className="w-100 bg-cyber-primary" style={{height: '100px', marginTop: '-100px'}}>
        </div>
      <div className="container containerTabela p-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='tabela-titulo'>Lista</h1>
            <button className='tabelaAdicionar col-5 col-md-3 d-flex align-items-center justify-content-center'>
              <Icon className="me-2" icon="carbon:add" style={{fontSize:'20px'}} />
              Adicionar
            </button>
          </div>
        <div class="table-responsive"> 
          <Table>
            <thead className='bg-cyber-primary color-cyber-white'>
              <tr>
                <th className='col-3'>Nome</th>
                <th>Ano</th>
                <th>Velocidade Km/h</th>
                <th>Nota Economia</th>
                <th>Nota Usuário</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mustang</td>
                <td>2015</td>
                <td>180 km/h</td>
                <td>9/10</td>
                <td>8/10</td>
                <td className='d-flex'>
                  <Icon className="me-4 pointer" icon="akar-icons:trash-can" style={{ fontSize: '20px' }} />
                  <Icon className="pointer" icon="clarity:edit-line" style={{fontSize:'20px'}} />
                </td>
              </tr>
              <tr>
                <td>Mustang</td>
                <td>2015</td>
                <td>180 km/h</td>
                <td>9/10</td>
                <td>8/10</td>
                <td className='d-flex'>
                  <Icon className="me-4 pointer" icon="akar-icons:trash-can" style={{ fontSize: '20px' }} />
                  <Icon className="pointer" icon="clarity:edit-line" style={{ fontSize: '20px' }} />
                </td>
              </tr>
              <tr>
                <td>Mustang</td>
                <td>2015</td>
                <td>180 km/h</td>
                <td>9/10</td>
                <td>8/10</td>
                <td className='d-flex'>
                  <Icon className="me-4 pointer" icon="akar-icons:trash-can" style={{ fontSize: '20px' }} />
                  <Icon className="pointer" icon="clarity:edit-line" style={{ fontSize: '20px' }} />
                </td>
              </tr>                            
            </tbody>
          </Table>
        </div>
        </div>       
      </div>
  );
}

export default Tabela