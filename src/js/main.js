document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  const devourMe = document.querySelectorAll('.devourMe');

  if (devourMe) {
    devourMe.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newlyDevoured = e.target.getAttribute('data-devoured');
        const isDevoured = {
          devoured: newlyDevoured,
        };
        updateStatus(id, isDevoured);
      });
    });
  }

  // CREATE
  const createCatBtn = document.getElementById('add-patty');

  if (createCatBtn) {
    createCatBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      if (document.getElementById('ap').value.length > 255) {
        let userInput = document.getElementById('ap').value;
        let maxLength = 255;
        let trimmedValue = userInput.substring(0, maxLength);
        let newPatty = {
          name: trimmedValue.trim(),
          devoured: document.getElementById('devoured')
        };
        addPatty(newPatty);
      } else {
        let newPatty = {
          name: document.getElementById('ap').value.trim(),
          devoured: document.getElementById('devoured')
        };
        addPatty(newPatty);
      }
    });
  }


  // DELETE
  const deletePatty = document.querySelectorAll('.delete-patty');
  deletePatty.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      delPatty(id);
    });
  });

  // Abstracted API Call Functionality

  const addPatty = (newPatty) => {
    fetch('/api/patties', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPatty),
    }).then(() => {
      document.getElementById('ap').value = '';
      location.reload();
    });
  }

  const updateStatus = (id, isDevoured) => {
    fetch(`/api/patties/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(isDevoured),
    }).then((response) => {
      if (response.ok) {
        location.reload('/');
      } else {
        console.error(`Something went wrong!`);
      }
    });
  }

  const delPatty = (id) => {
    fetch(`/api/patties/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      location.reload();
    });
  }
});