import axios from 'axios';

// As ações tão aqui
export const FETCH_HORARIOS_SUCCESS = 'FETCH_HORARIOS_SUCCESS';
export const FETCH_HORARIOS_FAILURE = 'FETCH_HORARIOS_FAILURE';
export const ADD_HORARIO_SUCCESS = 'ADD_HORARIO_SUCCESS';
export const ADD_HORARIO_FAILURE = 'ADD_HORARIO_FAILURE';
export const UPDATE_HORARIO_SUCCESS = 'UPDATE_HORARIO_SUCCESS';
export const UPDATE_HORARIO_FAILURE = 'UPDATE_HORARIO_FAILURE';
export const DELETE_HORARIO_SUCCESS = 'DELETE_HORARIO_SUCCESS';
export const DELETE_HORARIO_FAILURE = 'DELETE_HORARIO_FAILURE';

// Read
export const fetchCarrosSuccess = (carros) => ({
  type: FETCH_CARROS_SUCCESS,
  payload: carros,
});

export const fetchCarrosFailure = (error) => ({
  type: FETCH_CARROS_FAILURE,
  payload: error,
});

export const fetchCarros = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/carros')
      .then((response) => {
        dispatch(fetchCarrosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCarrosFailure(error));
      });
  };
};

// Create
export const addCarroSuccess = (carro) => ({
  type: ADD_CARRO_SUCCESS,
  payload: carro,
});

export const addCarroFailure = (error) => ({
  type: ADD_CARRO_FAILURE,
  payload: error,
});

export const addCarro = (carro) => {
  return (dispatch) => {
    axios.post('http://localhost:8000/carros', carro)
      .then((response) => {
        dispatch(addCarroSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addCarroFailure(error));
      });
  };
};

// Update
export const updateCarroSuccess = (carro) => ({
  type: UPDATE_CARRO_SUCCESS,
  payload: carro,
});

export const updateCarroFailure = (error) => ({
  type: UPDATE_CARRO_FAILURE,
  payload: error,
});

export const updateCarro = (carro) => {
  return (dispatch) => {
    axios.put(`http://localhost:8000/carros/${carro.id}`, carro)
      .then((response) => {
        dispatch(updateCarroSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateCarroFailure(error));
      });
  };
};

// Delete
export const deleteCarroSuccess = (carroId) => ({
  type: DELETE_CARRO_SUCCESS,
  payload: carroId,
});

export const deleteCarroFailure = (error) => ({
  type: DELETE_CARRO_FAILURE,
  payload: error,
});

export const deleteCarro = (carroId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8000/carros/${carroId}`)
      .then(() => {
        dispatch(deleteCarroSuccess(carroId));
      })
      .catch((error) => {
        dispatch(deleteCarroFailure(error));
      });

  }

}