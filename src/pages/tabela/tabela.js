import { useState, useEffect } from "react"
import "./tabela.css"
import { Table, Modal, ModalHeader, ModalBody } from "reactstrap"
import { useSelector, useDispatch } from "react-redux"
import { addMustang, removeMustang, updateMustang } from "../../redux/mustangSlice"

function Tabela() {
    const mustangStore = useSelector(state => state.mustang)

    const [limit, setLimit] = useState(5)

    const mustang = mustangStore.slice(0, limit)

    const [modal, setModal] = useState(false)
    const [modalImagem, setModalImagem] = useState(false)
    const [image, setImage] = useState("")
    const [nome, setNome] = useState()
    const [ano, setAno] = useState()
    const [velocidade, setVelocidade] = useState()
    const [economia, setEconomia] = useState()
    const [nota, setNota] = useState()
    const [link, setLink] = useState()
    const [id, setId] = useState()
    const [indexSelected, setIndexSelected] = useState()
    const [loading, setLoading] = useState(false)

    function resetFields () {
        setNome("")
        setAno("")
        setVelocidade("")
        setEconomia("")
        setNota("")
        setLink("")
        setImage("")
        setId("")
        setIndexSelected("")
    }

    function handleNome (e) {
        setNome(e.target.value) 
    }

    function handleAno (e) {
        setAno(e.target.value)
    }

    function handleVelocidade (e) {
        setVelocidade(e.target.value)
    }

    function handleEconomia (e) {
        setEconomia(e.target.value)
    }

    function handleNota (e) {
        setNota(e.target.value)
    }

    function handleLink (e) {
        setLink(e.target.value)
    }

    function handleSetImage (link) {
        setImage(link)
        toggleImagem()
    }

    function toggle() {
        setModal(!modal)
        if(modal) {
            resetFields()
        }
    }

    function nextPage() {
        setLimit(limit + 1)
    }
    
    function toggleImagem() {
        setModalImagem(!modalImagem)
    }

    function handleSelectedMustang(mustang, index) {
        setNome(mustang.nome)
        setAno(mustang.ano)
        setVelocidade(mustang.velocidade)
        setEconomia(mustang.notaEconomia)
        setNota(mustang.notaUsuario)
        setLink(mustang.link)
        setImage(mustang.image)
        setId(mustang.id)
        setIndexSelected(index)
        toggle()
    }

    const dispatch = useDispatch()

    function addNewMustang(event) {
        event.preventDefault()
        dispatch(addMustang({
            nome,
            ano,
            velocidade,
            notaEconomia: economia,
            notaUsuario: nota,
            link,
            image
        }))
        toggle()
    }

    function handleRemoveMustang(id) {
        dispatch(removeMustang(id))
    }

    function handleUpdateMustang() {
        dispatch(updateMustang({
            id,
            nome,
            ano,
            velocidade,
            notaEconomia: economia,
            notaUsuario: nota,
            link,
            image,
            indexSelected
        }))
        toggle()
    }

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)) {
                if(limit < mustangStore.length) {
                    setLoading(true)                
                    setTimeout(() => {
                        nextPage()
                        setLoading(false)                
                    }, 500)
                }
            }
        });

        intersectionObserver.observe(document.querySelector('#sentinela'));
        return () => intersectionObserver.disconnect()
    })

    return (
        <div className="tabela">
            <div
                className="w-100 bg-cyber-primary"
                style={{ height: "100px", marginTop: "-100px" }}
            ></div>
            <div className="container containerTabela p-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="tabela-titulo">Lista</h1>
                    <button
                        className="tabelaAdicionar col-5 col-md-3 d-flex align-items-center justify-content-center"
                        onClick={toggle}
                    >
                        <span
                            className="iconify me-2"
                            data-icon="carbon:add"
                            style={{ fontSize: "20px" }}
                        ></span>
                        Adicionar
                    </button>
                </div>
                <div className="table-responsive">
                    <Table>
                        <thead className="bg-cyber-primary color-cyber-white">
                            <tr>
                                <th className="col-3">Nome</th>
                                <th>Ano</th>
                                <th>Velocidade Km/h</th>
                                <th>Nota Economia</th>
                                <th>Nota Usuário</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {mustang.map((mustang, index) => (
                                <tr key={mustang.id}>
                                    <td>{mustang.nome}</td>
                                    <td>{mustang.ano}</td>
                                    <td>{mustang.velocidade}</td>
                                    <td>{mustang.notaEconomia}</td>
                                    <td>{mustang.notaUsuario}</td>
                                    <td className="d-flex">
                                        <div
                                            onClick={() =>
                                                handleRemoveMustang(index)
                                            }
                                        >
                                            <span
                                                className="iconify me-4 pointer"
                                                data-icon="akar-icons:trash-can"
                                                style={{ fontSize: "20px" }}
                                            ></span>
                                        </div>
                                        <div
                                            onClick={() =>
                                                handleSelectedMustang(
                                                    mustang,
                                                    index
                                                )
                                            }
                                        >
                                            <span
                                                className="iconify me-4 pointer"
                                                data-icon="clarity:edit-line"
                                                style={{ fontSize: "20px" }}
                                            ></span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr id="sentinela">
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <Modal toggle={toggle} isOpen={modal}>
                    <ModalHeader toggle={toggle}>
                        <span>Adicionar Novo</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-5">
                                <img
                                    src={image}
                                    alt="Nenhuma imagem selecionada"
                                    className="img-fluid"
                                />
                                <button onClick={toggleImagem}>
                                    Adicionar/Alterar imagem
                                </button>
                            </div>
                            <div className="col-7">
                                <div className="form-group col-12">
                                    <label>Nome</label>
                                    <input
                                        value={nome}
                                        type="text"
                                        className="form-control"
                                        onChange={handleNome}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label>Ano</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={ano}
                                        onChange={handleAno}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label>Velocidade Máxima Km/h</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={velocidade}
                                        onChange={handleVelocidade}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label>Nota economia</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={economia}
                                        onChange={handleEconomia}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label>Nota usuários</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nota}
                                        onChange={handleNota}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label>Link produto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={link}
                                        onChange={handleLink}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-end mt-3">
                                <span
                                    className="me-3 pointer cancelarModalButton"
                                    onClick={toggle}
                                >
                                    Cancelar
                                </span>
                                {!id && (
                                    <button
                                        className="modalAdicionar d-flex align-items-center justify-content-center"
                                        onClick={addNewMustang}
                                    >
                                        <span
                                            className="iconify me-2"
                                            data-icon="carbon:add"
                                            style={{ fontSize: "20px" }}
                                        ></span>
                                        Adicionar Novo
                                    </button>
                                )}
                                {id && (
                                    <button
                                        className="modalAdicionar d-flex align-items-center justify-content-center"
                                        onClick={() =>
                                            handleUpdateMustang(indexSelected)
                                        }
                                    >
                                        <span
                                            className="iconify me-2"
                                            data-icon="clarity:edit-line"
                                            style={{ fontSize: "20px" }}
                                        ></span>
                                        Alterar
                                    </button>
                                )}
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <Modal isOpen={modalImagem} toggle={toggleImagem}>
                    <ModalHeader toggle={toggleImagem}>
                        <span>Adicionar Imagem</span>
                    </ModalHeader>
                    <ModalBody>
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image11.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image11.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image12.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image12.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image13.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image13.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image14.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image14.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image15.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image15.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image16.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image16.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image17.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image17.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image18.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image18.png"
                        />
                        <img
                            onClick={() =>
                                handleSetImage("../../static/image19.png")
                            }
                            className="selectImage"
                            height="80px"
                            alt="mustang"
                            src="../../static/image19.png"
                        />
                    </ModalBody>
                </Modal>
            </div>
            {loading && <div id="loader"></div>}
        </div>
    )
}

export default Tabela
