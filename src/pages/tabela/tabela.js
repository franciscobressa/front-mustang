import { useState } from "react";
import './tabela.css'
import { Icon } from '@iconify/react';
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
function Tabela() {
  const [modal, setModal] = useState(false);

 function toggle(){
    setModal(!modal)
}

  return (
      <div className="tabela">
        <div className="w-100 bg-cyber-primary" style={{height: '100px', marginTop: '-100px'}}>
        </div>
      <div className="container containerTabela p-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='tabela-titulo'>Lista</h1>
          <button className='tabelaAdicionar col-5 col-md-3 d-flex align-items-center justify-content-center' onClick={toggle}>
              <Icon className="me-2" icon="carbon:add" style={{fontSize:'20px'}} />
              Adicionar
            </button>
          </div>
          <div className="table-responsive"> 
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
                    <Icon className="pointer" icon="clarity:edit-line" onClick={toggle} style={{fontSize:'20px'}} />
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
                    <Icon className="pointer" icon="clarity:edit-line" onClick={toggle} style={{ fontSize: '20px' }} />
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
                    <Icon className="pointer" icon="clarity:edit-line" onClick={toggle} style={{ fontSize: '20px' }} />
                  </td>
                </tr>                            
              </tbody>
            </Table>
          </div>


        <Modal
          toggle={toggle}
          isOpen={modal}
        >
          <ModalHeader toggle={toggle} close={<Icon icon="carbon:close" style={{ fontSize: '20px' }} onClick={toggle} />}>
            <span>Adicionar Novo</span>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-5">
                <img src="/static/Rectangle15.png" alt="Mustang" className="img-fluid" />
                <input type="file" name="file" id="file" class="inputfile"/>
                  <label for="file">Selecionar Imagem</label>
              </div>
              <div className="col-7">
                <div className="form-group col-12">
                  <label>Nome</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-12">
                  <label>Ano</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-12">
                  <label>Velocidade Máxima Km/h</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-12">
                  <label>Nota economia</label>
                  <input type="text" className="form-control" />
                </div>     
                <div className="form-group col-12">
                  <label>Nota usuários</label>
                  <input type="text" className="form-control" />
                </div>       
                <div className="form-group col-12">
                  <label>Link produto</label>
                  <input type="text" className="form-control" />
                </div>                                                                      
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-end mt-3">
                <span className="me-3 pointer cancelarModalButton" onClick={toggle}>Cancelar</span>
                <button className='modalAdicionar d-flex align-items-center justify-content-center' onClick={toggle}>
                  <Icon className="me-2" icon="carbon:add" style={{ fontSize: '20px' }} />
                  Adicionar Novo
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
        </div>       
      </div>
  );
}

export default Tabela