import firebase from 'firebase';
import { useEffect, useState } from 'react';

function App() {

  const [search, setSearch] = useState('');
  const [words, setWords] = useState([]);

  useEffect(() => {
    const db = firebase.firestore().collection('chineselanguage');
    db.onSnapshot((snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWords(data.sort((a, b) => Number(a.id) - Number(b.id)));
      console.log('data', data)
    })
  }, []);

  const filteredData = words.filter((word) => {
    const meaning = word['ความหมาย']
    const vocab = word['คำศัพท์']
    const sentence = word['ตัวอย่างประโยค']
    const pinin = word['พินอิน']
    return meaning.indexOf(search) >= 0 || vocab.indexOf(search) >= 0 || sentence.indexOf(search) >= 0 || pinin.indexOf(search) >= 0
  })

  return (
    <div className="p-10 flex justify-center bg-blue-50 h-screen">

      <div className="max-w-2xl w-full bg-white p-4 border rounded shadow-sm">

        <h1 class="text-center mb-4 font-bold text-2xl">Chinese Language</h1>

        <div class="mb-4 border rounded px-2 py-1 flex space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="focus:outline-none" placeholder="ค้นหาคำศัพท์" onChange={e => setSearch(e.target.value)} />
        </div>

        <table>
          <thead>
            <tr>
              <th className="border p-2" width="10%">#</th>
              <th className="border p-2" width="30%">ความหมาย</th>
              <th className="border p-2" width="20%">คำศัพท์</th>
              <th className="border p-2" width="30%">ตัวอย่างประโยค</th>
              <th className="border p-2" width="10%">พินอิน</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((word, index) => (
              <tr key={index}>
                <td className="border p-2" width="10%">{index + 1}</td>
                <td className="border p-2" width="30%">{word['ความหมาย']}</td>
                <td className="border p-2" width="20%">{word['คำศัพท์']}</td>
                <td className="border p-2" width="30%">{word['ตัวอย่างประโยค']}</td>
                <td className="border p-2" width="10%">{word['พินอิน']}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default App;
