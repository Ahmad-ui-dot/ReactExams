import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
export default function Home6() {
  const navigate = useNavigate()
  return (
    <>
    <div className='max-w-[1200px] m-auto flex justify-center p-[10px]'>
      <Button onClick={() => navigate('/product')} sx={{backgroundColor : "#287FE8", marginTop : '10px', width : '200px'}} variant="contained">Показать еще</Button> 
    </div>
    </>
  )
}
