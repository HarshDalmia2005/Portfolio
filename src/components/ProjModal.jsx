import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ProjModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='border border-yellow-400'
    >
      <Modal.Header closeButton className='bg-black text-white border border-white'>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-black text-white font-bold border border-white'>
        <p>
          {props.info}
        </p>
      </Modal.Body>
      <Modal.Footer className='bg-black border border-white'>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjModal
