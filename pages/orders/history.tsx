import { Chip, Grid, Link, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import NextLink from 'next/link'


import { ShopLayout } from '../../components/layouts'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'pagada',
        description: 'Muestra informacion si esta pagada la orde o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='pagada' variant='outlined' />
                    : <Chip color='error' label='No pagada' variant='outlined' />

            )
        }
    },
    {
        field: 'orden',
        headerName: 'ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        }
    }
];

const rows = [
    { id: 1, paid: true, fullname: 'Jorge Gutierrez' },
    { id: 2, paid: false, fullname: 'David Lopez' },
    { id: 3, paid: true, fullname: 'Juan Garrido' },
    { id: 4, paid: false, fullname: 'Belinda Huerta' },
    { id: 5, paid: true, fullname: 'Roberto Lopez' },
    { id: 6, paid: false, fullname: 'Raul Guzman' },
]

const HistoryPage = () => {
    return (
        <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
            <Typography variant='h1' component='h1' >Historial de ordenes</Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage