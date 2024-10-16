let selectedOperation = ''; // Biến lưu phép tính đã chọn

    function getValueA() {
      return document.getElementById('valueA').value;
    }

    function getValueB() {
      return document.getElementById('valueB').value;
    }

    function setResult(result) {
      document.getElementById('result').value = result;
    }

    function showNotification(message) {
      document.getElementById('notification').textContent = message;
    }

    function clearNotification() {
      document.getElementById('notification').textContent = '';
    }

    function selectOperation(operation) {
      selectedOperation = operation;
     
      document.getElementById('add').style.backgroundColor = '';
      document.getElementById('sub').style.backgroundColor = '';
      document.getElementById('mul').style.backgroundColor = '';
      document.getElementById('div').style.backgroundColor = '';
      document.getElementById(operation).style.backgroundColor = 'lightblue';
      clearNotification(); 
    }

    function validateInput(value) {
      return !isNaN(value) && value !== ''; 
    }

    function calculate() {
      let a = getValueA();
      let b = getValueB();

      
      clearNotification();

     
      if (!validateInput(a) || !validateInput(b)) {
        showNotification("Vui lòng nhập số hợp lệ cho cả hai trường.");
        return;
      }

      a = parseFloat(a);
      b = parseFloat(b);
      let result = 0;

      
      if (selectedOperation === '') {
        showNotification("Vui lòng chọn phép toán.");
        return;
      }

      
      switch (selectedOperation) {
        case 'add':
          result = a + b;
          break;
        case 'sub':
          result = a - b;
          break;
        case 'mul':
          result = a * b;
          break;
        case 'div':
          result = a / b;
          break;
      }
      
      setResult(result);
    }