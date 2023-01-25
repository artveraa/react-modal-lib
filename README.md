# react-modal


1 - ```npm i artvera-react-modal```

2 - ```import {Modal} from "artvera-react-modal";```

3 - use :
```
const [showModal, setShowModal] = useState(false);

<Modal onClose={() => setShowModal(false)} show={showModal}>
  <p>
    Employee Created!
  </p>
</Modal>
```
