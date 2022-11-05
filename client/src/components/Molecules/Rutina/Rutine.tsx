import React from 'react'
import estilo from "./Estilo.module.css"
import img from "../../../assets/IMG/maxresdefault.jpg"
import img2 from "../../../assets/IMG/fondo-ejercicios.png"
function Rutine() {
  return (
    <div >
        <div className={estilo.bg}>
            <img src={img} alt="Imagen no encontrada" />
        </div>

        <div className={estilo.grid}>
          <div className={estilo.bg2}>
              <img src={img2} alt="Fonto de perfil no encontrada"/>
          </div>

          <div>
              <table>
                  <tr>
                    <th colSpan={4}>Estadisca</th>
                  </tr>

                  <tr>
                    <th>Nombre</th>
                    <td colSpan={3}>Pablo</td>
                  </tr>
                  <tr>
                    <th>Telefono</th>
                    <td colSpan={3}>376426598</td>
                  </tr>
                  <tr>
                    <th>Correo</th>
                    <td colSpan={3}>pepita@hotmail.com</td>
                  </tr>
                  <tr>
                    <th>Presion cardiaca</th>
                    <td colSpan={3}>120</td>
                  </tr>
                  <tr>
                    <th>Altura</th>
                    <td colSpan={3}>190</td>
                  </tr>

                  <tr>
                    <th>Peso</th>
                    <td colSpan={3}>85</td>
                  </tr>

                  <tr>
                    <th>Presion</th>
                    <td>Alta</td>
                    <td>Media</td>
                    <td>Baja</td>
                  </tr>
                  <tr>
                    <th >Rutina</th>
                    <td colSpan={3}>Bajar de peso</td>
                  </tr>
                  <tr>
                    <th colSpan={4}>Asiste</th>
                   
                  </tr>
                  <tr>
                    <th>Sede</th>
                    <td colSpan={3}>Vital gym</td>
                  </tr>
              </table>
          </div>
        </div>
    </div>
  )


}

export default Rutine;
