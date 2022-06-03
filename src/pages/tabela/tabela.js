import { useState } from "react";
import './tabela.css'
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { useSelector } from "react-redux";
function Tabela() {
  const [modal, setModal] = useState(false);
  const mustang = useSelector(state => state.mustang.mustangs);

 function toggle(){
    setModal(!modal)
}

  return (
      <div className="tabela">
        <div className="w-100 bg-cyber-primary" style={{height: '100px', marginTop: '-100px'}}>
        </div>
      <div className="container containerTabela p-5">
          <div className='d-flex justify-content-between align-items-center'>
          <h1 className='tabela-titulo'>Lista
</h1>
          <button className='tabelaAdicionar col-5 col-md-3 d-flex align-items-center justify-content-center' onClick={toggle}>
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
                {
                  mustang.map(mustang => (
                    <tr key={mustang.id}>
                      <td>{mustang.nome}</td>
                      <td>{mustang.ano}</td>
                      <td>{mustang.velocidade}</td>
                      <td>{mustang.notaEconomia}</td>
                      <td>{mustang.notaUsuario}</td>
                      <td className='d-flex'>
                      </td>
                    </tr>
                  ))
                }                         
              </tbody>
            </Table>
          </div>


        <Modal
          toggle={toggle}
          isOpen={modal}
        >
          <ModalHeader toggle={toggle}>
            <span>Adicionar Novo</span>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-5">
                <img src="/static/Rectangle15.png" alt="Mustang" className="img-fluid" />
                <input type="file" className="inputfile"/>
                  <label>Selecionar Imagem</label>
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