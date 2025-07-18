import { useState,useCallback, useEffect , useRef } from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [Password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    } 
    setPassword(pass);
     //yhan pe usecallback me hum optimization dekh rh h
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();// majorly helpful in optimization
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

   useEffect(() => {
    passwordGenerator() // yahan pe hum dekh rhe h ki in dependencies me kisi me ched-chad ho to dubara run kar do 
   },[length,numberAllowed,charAllowed,passwordGenerator]) 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md 
      rounded-lg- px-4 py-3 my-8 text-orange-500 bg-gray-800">
       <h1 className='text-white text-center my-3'>Password generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text' 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly  
          ref={passwordRef}
          />

          <button 
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3
            py-0.5 shrink-0'>Copy</button>

        </div> 
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-x-1'>
            <input 
             type='range'
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={ (e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>          
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                  setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label> 
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                  setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
