import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CarsList() {

 const columns = [
   {
     field: 'id',
     headerName: 'Cód.',
     width: 90
   },
   {
     field: 'brand',
     headerName: 'Marca',
     width: 180,
     renderCell: (params) => {
       const brand = params.row.brand ?? ''
       const model = params.row.model ?? ''
       return `${brand}${model ? ' - ' + model : ''}`
     }
   },
   {
     field: 'color',
     headerName: 'Cor',
     width: 150
   },
   {
     field: 'year_manufacture',
     headerName: 'Ano de fabricação',
     width: 150,
   },
   {
     field: 'imported',
     headerName: 'É importado?',
     width: 150,
    renderCell: (params) => (params.value ? 'SIM' : '')
   },
   {
     field: 'plates',
     headerName: 'Placas',
     width: 150,
   },
   {
     field: 'selling_price',
     headerName: 'Preço de venda',
     width: 150,
   },
   {
     field: 'selling_date',
     headerName: 'Data de venda',
     width: 150,
     valueFormatter: value => {
       if(value) {
         const date = new Date(value)
         return date.toLocaleDateString('pt-BR')
       }
       else return ''
     }
   }
 ];

 const [cars, setCars] = React.useState([])


 async function loadData() {
   try {
     const response = await fetch('https://api.faustocintra.com.br/v2/cars')
     const data = await response.json()
     setCars(data)
   }
   catch(error) {
     console.error(error)
     alert('ERRO: ' + error.message)
   }
 }


 React.useEffect(() => {
   loadData()
 }, [])


 return <>
   <Typography variant="h1" gutterBottom>
     Listagem de veículos
   </Typography>
    <Box sx={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={cars}
       columns={columns}
       initialState={{
         pagination: {
           paginationModel: {
             pageSize: 5,
           },
         },
       }}
       pageSizeOptions={[5]}
       checkboxSelection
       disableRowSelectionOnClick
     />
   </Box>
 </>
}