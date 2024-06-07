import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  // states to hold the data
  const[principle, setPrinciple] =useState(0)
  const[rate, setRate] =useState(0)
  const[year, setYear] =useState(0)
  const[intrest, setIntrest] =useState(0)

  //  contitional rendering
  const [isPrinciple, setIsPrinciple] =useState(true)
  const [isRate, setIsRate] =useState(true)
  const [isYear, setIsYear] =useState(true)

  const validate = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));

    if(!!value.match(/^[0-9]*$/)){
      if (name=='principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if (name=='principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }

  const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0) 
    setIsPrinciple(true)
    setIsYear(true)
    setIsRate(true)
  }
  // console.log(principle);
  // console.log(year);
  // console.log(rate);

  const calculate =()=>{
    setIntrest((principle*rate*year)/100)
  }

  return (
    <>
      <div className="row main">
        <div className="col-md-3"></div>
        <div className="col-md-6 px-5 py-5 d-flex align-items-center justify-content-center">
          <div className='w-100 bg-light rounded-3'>
            <h1 className='pt-4 text-center fs-2'>Simple Intrest App</h1>
            <p className='text-center'>Calculate your simple intr  est easily</p>
            <div className='flex-column mt-4 bg-warning py-2 mx-5 rounded-2 shadow d-flex align-items-center justify-content-center'>
              <h1 className='fs-1 fw-bolder mt-2'>₹ {intrest}</h1>
              <p>Total Simple Intrest</p>
            </div>
            <form className='mt-4 mx-5'>
              <div className="mb-3">
                <TextField id="outlined-basic" value={principle || ''} label="₹ Prnciple amount" name='principle' variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
                {!isPrinciple &&
                  <p className='text-danger'>! Invalid Input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" value={rate || ""} label="Rate of intrest(p.a) %" name='rate' variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
              {!isRate &&
                <p className='text-danger'>! Invalid Input</p>}
              </div>
              <div className="mb-3">
              <TextField id="outlined-basic" value={year || ''} label="Year(yr)" name='year' variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
              {!isYear &&
                <p className='text-danger'>! Invalid Input</p>}
              </div>
              <div className='d-flex justify-content-between mb-4'>
                <Button variant="contained"color="success" style={{width:'140px', height:'60px'}} className='me-3' disabled={isPrinciple && isRate && isYear ? false:true} onClick={calculate}>Calculate</Button>
                <Button variant="outlined" color="error" style={{width:'140px', height:'60px'}} onClick={handleReset} >Reset</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  )
}

export default App
