import './App.css';
import Forms from 'components/Forms';

function App() {
  
  const addForm = (form) => {         //ERROR in [eslint] src\components\App\index.jsx Line 7:5:  'setForms' is not defined  no-undef
    setForms([...Forms,form])
  }
  return (
    <div>
      <Forms addForm={addForm} />
      
    </div>
  );
}

export default App;
