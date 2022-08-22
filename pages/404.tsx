import { Box, Typography } from "@mui/material"
import { ShopLayout } from "../components/layouts"

const Custom404 = () => {
    return (
        <>
            <ShopLayout title='Pagina no encontrada' pageDescription='No hay nada que mostrar'></ShopLayout>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 20px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={75} fontWeight={200} >404 |</Typography>
                <Typography marginLeft={2} >No encontramos ninguna pagina aqui</Typography>
            </Box>
        </>
    )
}

export default Custom404