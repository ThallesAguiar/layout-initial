import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LogoutModal = ({ show, handleClose, handleLogout }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmação de Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>Você tem certeza que deseja deslogar?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Deslogar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
