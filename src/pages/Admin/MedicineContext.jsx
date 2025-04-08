import React, { createContext, useState } from 'react';
// Create a context for managing medicines
export const MedicineContext = createContext();
export const MedicineProvider = ({ children }) => {
  // Initial state for medicines
  const [medicines, setMedicines] = useState([
  { id: 1, name: "Allergan", price: 5000, image: "/Allergan.jpg" },
  { id: 2, name: "Fluoxetine", price: 8000, image: "/Fluoxetine.jpg" },
  { id: 3, name: "German", price: 1000, image: "/german.jpg" },
  { id: 4, name: "Antihistamine", price: 3500, image: "/Antihistamine.jpg" },
  { id: 5, name: "Capsules", price: 8500, image: "/capsules.jpg" },
  { id: 6, name: "US-HEALTH-MEDICINE", price: 10000, image: "/US-HEALTH-MEDICINE.jpg" },
  { id: 7, name: "Prescription Drug", price: 5500, image: "/Prescription Drug Background.jpg" },
  { id: 8, name: "Advil and ibuprofen", price: 2500, image: "/Advil and ibuprofen.jpg" },
  { id: 9, name: "Getty", price: 4000, image: "/gettyimages-458635887-612x612.jpg" },
  { id: 10, name: "Cialis tablets", price: 7000, image: "/Cialis tablets.jpg" }
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
