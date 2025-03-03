function ProjectModal(props) {
  return (
    <Modal closeIcon open={open} trigger={<Button>Show Modal</Button>} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
      <Header icon="archive" content="Archive Old Messages" />
      <ModalContent>
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </ModalContent>
      <ModalActions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default ProjectModal;
