import React, { useState } from 'react'

const App = () => {
  const [tittle, settittle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])

  function submithandler(e){
    e.preventDefault();

    if(!tittle || !detail) return;

    const copytask = [...task];
    copytask.push({ tittle, detail });

    settask(copytask);
    setdetail('')
    settittle('')
  }

  const deletenode =(idx)=>{
    const copytask = [...task];
    copytask.splice(idx,1)
    settask(copytask)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-slate-900 p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        📝 Notes App
      </h1>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Form Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <form 
            onSubmit={submithandler}
            className="w-full max-w-sm bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-bold mb-3 text-gray-700">
              Add Note
            </h2>

            <input 
              value={tittle}
              className='w-full p-3 mb-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500'
              type='text' 
              placeholder='Enter title...'
              onChange={(e)=> settittle(e.target.value)}
            />

            <textarea 
              className='w-full h-32 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500'
              placeholder='Write details...'
              value={detail}
              onChange={(e)=> setdetail(e.target.value)}
            />

            <button className='w-full bg-cyan-600 hover:bg-cyan-700 transition text-white py-2 mt-4 rounded-lg font-semibold'>
              ➕ Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Notes
          </h2>

          <div className="flex flex-wrap gap-4 max-h-[70vh] overflow-y-auto pr-2">

            {task.length === 0 && (
              <p className="text-gray-300">No notes yet...</p>
            )}

            {task.map((elem, idx) => (
              <div 
                key={idx} 
                className="w-48 h-48 bg-yellow-200 text-black rounded-xl p-3 shadow-md flex flex-col justify-between hover:scale-105 transition"
              >
                <div>
                  <h3 className="font-bold text-lg truncate">
                    {elem.tittle}
                  </h3>

                  <p className="text-sm mt-2 overflow-hidden line-clamp-4">
                    {elem.detail}
                  </p>
                </div>

                <button 
                  className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg text-sm mt-2'
                  onClick={() => deletenode(idx)}
                >
                  🗑 Delete
                </button>
              </div>   
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default App