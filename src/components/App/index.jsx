import './App.css';
import Forms from 'components/Forms';

function App() {
  const [oldPurchases, useState] = useState([
    {
      id:1,
      category:'productForm',
      date:'11/12/2023',
      cash:'300',
    },
    {
      id:2,
      category:'cloth',
      date:'05/04/2023',
      cash:'1500',
    },
    {
      id:3,
      category:'health',
      date:'27/09/2023',
      cash:'865',
    },
    {
      id:4,
      category:'leisure',
      date:'01/01/2023',
      cash:'7000',
    }

  ])

  const addPurchases = (OldPurchases) => {
    OldPurchases([...oldPurchases,Forms])
  }
  
  return (
    <div>
      <Forms  />
      
    </div>
  );
}

export default App;
