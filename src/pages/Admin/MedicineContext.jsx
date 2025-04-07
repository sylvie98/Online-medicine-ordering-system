import React, { createContext, useState } from 'react';

// Create a context for managing medicines
export const MedicineContext = createContext();

// Provider component to wrap the app and provide state to all components
export const MedicineProvider = ({ children }) => {
  // Initial state for medicines
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', price: '500' },
    { id: 2, name: 'Ibuprofen', price: '1000' },
  ]);

  // Function to add a new medicine
  const addMedicine = (newMedicine) => {
    setMedicines([...medicines, { id: medicines.length + 1, ...newMedicine }]);
  };

  // Function to update an existing medicine
  const updateMedicine = (id, updatedMedicine) => {
    setMedicines((prevMedicines) =>
      prevMedicines.map((med) =>
        med.id === parseInt(id) ? { ...med, ...updatedMedicine } : med
      )
    );
  };

  // Function to delete a medicine
  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, updateMedicine, deleteMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};
