import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material"
import { tablaGeneral } from "../../Helpers/data"

export const TablaGeneralApp = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Posición</TableCell>
            <TableCell>Equipo</TableCell>
            <TableCell>Partidos Jugados</TableCell>
            <TableCell>Partidos Ganados</TableCell>
            <TableCell>Partidos Empatados</TableCell>
            <TableCell>Partidos Perdidos</TableCell>
            <TableCell>Goles</TableCell>
            <TableCell>Goles</TableCell>
            <TableCell>Diferencia</TableCell>
            <TableCell>Puntos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablaGeneral.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align='center'>{index + 1}</TableCell>
              <TableCell align='center'>{row.equipo}</TableCell>
              <TableCell align='center'>{row.pj}</TableCell>
              <TableCell align='center'>{row.pg}</TableCell>
              <TableCell align='center'>{row.pe}</TableCell>
              <TableCell align='center'>{row.pp}</TableCell>
              <TableCell align='center'>{row.gf}</TableCell>
              <TableCell align='center'>{row.gc}</TableCell>
              <TableCell align='center'>{row.gf - row.gc}</TableCell>
              <TableCell align='center'>{row.puntos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
