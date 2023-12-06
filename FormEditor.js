// src/components/FormEditor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormEditor = () => {
  const [form, setForm] = useState({ title: '', questions: [] });

  useEffect(() => {

    function submitForm() {
        const formData = new FormData(document.getElementById('formData'));
    
         fetch('http://your-backend-url/saveFormData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Form data saved:', data);
           })
        .catch(error => {
          console.error('Error saving form data:', error);
        });
      }


    axios.get(`http://localhost:3001/forms/:formId`)
      .then(response => setForm(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddQuestion = () => {


    const formId = 'your-form-identifier'; 
      fetch(`http://your-backend-url/getFormData/${formId}`)
        .then(response => response.json())
        .then(data => displayForm(data))
        .catch(error => console.error('Error loading form data:', error));
  
      function displayForm(formData) {
        const formContainer = document.getElementById('formContainer');
  

        formData.questions.forEach(question => {
          const questionElement = document.createElement('div');
          questionElement.classList.add('form-question');
  
          if (question.type === 'text') {
            questionElement.innerHTML = `
              <label>${question.label}</label>
              <input type="text" name="${question.name}" required>
            `;
          } else if (question.type === 'radio') {
            
          }
          
          formContainer.appendChild(questionElement);
        });
      }
  
      function submitForm() {
           }
    // Implement logic to add a new question to the form state

  };

  const handleSaveForm = () => {

    function previewForm() {


        const formData = new FormData(document.getElementById('previewForm'));
        const serializedFormData = new URLSearchParams(formData).toString();
  
         const previewLink = `http://your-backend-url/preview?${serializedFormData}`;
   document.getElementById('previewLink').value = previewLink;
       document.getElementById('previewLinkContainer').style.display = 'block';
      }

  };

  return (
    <div>
      <h1>{form.title}</h1>
      {form.questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
           </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSaveForm}>Save Form</button>
    </div>
  );
};

export default FormEditor;