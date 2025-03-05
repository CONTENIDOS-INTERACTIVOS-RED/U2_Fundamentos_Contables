<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Libros de contabilidad: Libro Diario y Libro Mayor'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-3.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 Los libros de contabilidad son herramientas fundamentales para el registro y seguimiento de las transacciones financieras de una empresa. Entre ellos, el Libro Diario y el Libro Mayor desempeñan roles esenciales en la organización y análisis de la información contable.
              .col-lg-3(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema4/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.order-lg-2
    
        AcordionA(tipo="b")
          .div(titulo="Libro Diario")
            p Registro cronológico de todas las transacciones financieras de la empresa, detallando cuentas afectadas y montos. Cada asiento incluye fecha, descripción y valores debitados y acreditados. Es obligatorio para sociedades mercantiles según el Código de Comercio, Título I, Capítulo 1, Artículos 48-60, y debe conservarse por al menos seis años.
    
          .div(titulo="Libro Mayor")
            p Agrupa las operaciones por cuentas específicas, permitiendo registrar transacciones de forma individual. Facilita el control financiero, la detección de discrepancias y el análisis detallado de cada cuenta. Aunque no es obligatorio en todos los países, su uso es recomendable para mantener una contabilidad organizada.
    
    h2(data-aos="fade-left") Relación entre el Libro Diario y el Libro Mayor
    p.mb-5 Ambos libros están interrelacionados: las transacciones registradas en el <b>Libro Diario</b> se transfieren al <b>Libro Mayor</b>, donde se clasifican según sus cuentas correspondientes. Este proceso facilita la elaboración de estados financieros y contribuye a la exactitud y transparencia de la información contable.
    

    .titulo-figura.mb-4
      h5 Tabla 8.
      span Comparación entre el Libro Diario y el Libro Mayor 

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th.bg-color-3 Característica
                th.bg-color-3 Libro Diario
                th.bg-color-3 Libro Mayor
            tbody
              tr
                td.text-bold Propósito
                td Registro cronológico de transacciones.
                td Organización de transacciones por cuentas específicas.
              tr
                td.text-bold Estructura
                td Fecha, descripción, débitos y créditos.
                td Cuenta, fecha, descripción, saldo acumulado.
              tr
                td.text-bold Uso
                td Anotar todas las operaciones en orden temporal.
                td Analizar cada cuenta de forma detallada.
              tr
                td.text-bold Relevancia
                td Base para otros libros contables.
                td Facilita la preparación de estados financieros.
        div.bg-color-7.p-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El correcto uso del <b>Libro Diario</b> y el <b>Libro Mayor</b> es fundamental para la elaboración de estados financieros precisos. Permiten a los gerentes y otras partes interesadas tomar decisiones informadas basadas en datos financieros confiables. Además, contribuyen a la detección de errores y fraudes, asegurando la integridad de la información contable.   

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Función y estructura del Libro Diario  

    p.mb-5 El <b>Libro Diario</b> es una herramienta esencial en la contabilidad de cualquier empresa, ya que registra todas las transacciones en orden cronológico, proporcionando una base sólida para la elaboración de estados financieros. 

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Fecha:</b> indica el momento en que se realiza la transacción.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Descripción:</b> proporciona una breve explicación de la operación contable.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Cuentas afectadas:</b> señala las cuentas que participan en la transacción.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Débito:</b> registra el monto cargado a la cuenta correspondiente.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Crédito:</b> muestra el monto abonado en la cuenta afectada.
              .col-lg-5.order-2.order-lg-1(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Estructura, uso y registros en el Libro Mayor 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        
        p El <b>Libro Mayor</b> es un componente clave en la contabilidad, ya que permite consolidar y clasificar todas las transacciones financieras de la empresa. Su función principal es organizar las operaciones registradas en el Libro Diario, facilitando un análisis detallado de cada cuenta específica.
        h2(data-aos="fade-left") Estructura del Libro Mayor
        p.mb-5 Cada cuenta dentro del Libro Mayor se organiza de la siguiente manera:
        .bg-color-5.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Número de Cuenta:</b> código identificador de la cuenta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Nombre de la Cuenta:</b> ejemplo: "Caja", "Cuentas por Cobrar", "Ventas".
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Fecha:</b> Momento en que se registra la transacción.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Descripción:</b> breve explicación de la operación contable.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Débito:</b> monto cargado en la cuenta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Crédito:</b> monto abonado en la cuenta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Saldo:</b> resultado acumulado después de cada transacción.
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 El Libro Diario y el Libro Mayor cumplen funciones distintas dentro del proceso contable. Mientras que el primero registra las transacciones en orden cronológico, el segundo las organiza por cuentas específicas. La siguiente tabla muestra sus diferencias clave.

    .titulo-figura.mb-4
      h5 Tabla 9.
      span Comparación entre Libro Diario y Libro Mayor en términos de estructura 

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th.bg-color-3 Elemento
                th.bg-color-3 Libro Diario
                th.bg-color-3 Libro Mayor
            tbody
              tr
                td.text-bold Registro
                td Cronológico
                td Agrupado por cuenta
              tr
                td.text-bold Propósito
                td Capturar todas las transacciones
                td Permitir el análisis detallado por cuenta
              tr
                td.text-bold Formato
                td Fecha, descripción, débito, crédito
                td Cuenta, fecha, saldo
    
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Cuando una empresa realiza una transacción, debe registrarla en el Libro Diario, asegurando un seguimiento cronológico de las operaciones. A continuación, se presenta un ejemplo de asiento contable para la venta de mercancías a crédito.

    .titulo-figura.mb-4
      h5 Tabla 10.
      span Asiento contable en el Libro Diario 

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones 
          table
            thead
              tr
                th.bg-color-3 Fecha
                th.bg-color-3 Descripción
                th.bg-color-3 Libro Mayor
                th.bg-color-3 Débito
                th.bg-color-3 Crédito
            tbody
              tr
                td.text-bold 15/03/2025
                td Venta de mercancías a crédito
                td Clientes
                td $1,000
                td -
              tr
                td.text-bold 15/03/2025
                td Venta de mercancías a crédito
                td IVA por Pagar
                td 190
                td -
              tr
                td.text-bold 15/03/2025
                td Venta de mercancías a crédito
                td Ventas
                td -
                td $1,000
              tr
                td.text-bold 15/03/2025
                td Venta de mercancías a crédito
                td IVA por Pagar
                td -
                td $190
        div.bg-color-2.p-4
          p.mb-0 Una vez registrada esta transacción en el Libro Diario, se traslada al Libro Mayor, donde se refleja en cada cuenta específica.  
    
    p.mb-4 El <b>Libro Mayor</b> clasifica las transacciones por cuenta, permitiendo un control detallado del saldo de cada una. A continuación, se muestra cómo se trasladan los registros del <b>Libro Diario</b> a sus cuentas correspondientes en el <b>Libro Mayor</b>.

    .titulo-figura.mb-4
      h5 Tabla 11.
      span Registro en el Libro Mayor 
    .row.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-3 Cuenta
                th.bg-color-3 Débito
                th.bg-color-3 Crédito
                th.bg-color-3 Saldo
              tr
                td.text-bold Clientes
                td $1,000
                td -
                td $1,000
              tr
                td.text-bold IVA por Pagar
                td $190
                td $190
                td $0
              tr
                td.text-bold Ventas
                td -
                td $1,000
                td $1,000
             
        .bg-color-12.p-4(data-aos="fade-left")
          p.mb-0 Este proceso permite un control detallado de cada cuenta, asegurando la precisión y confiabilidad de los estados financieros.
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 El <b>Libro Diario</b> y el <b>Libro Mayor</b> son herramientas esenciales para la contabilidad empresarial. Su correcta utilización permite registrar, clasificar y analizar las transacciones financieras, facilitando la elaboración de estados financieros y garantizando la transparencia en la gestión contable.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-10.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Papeles de trabajo
            p.mb-4(data-aos="fade-right") Los <b>papeles de trabajo</b> son una herramienta clave en el ámbito contable y de auditoría, permitiendo registrar, analizar y verificar las transacciones financieras de una entidad. A través de estos documentos, se respalda la exactitud de los estados financieros y se facilita la toma de decisiones basada en información confiable.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Papeles de trabajo.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/7.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://getquipu.com/blog/libro-mayor-diario-contabilidad/" target="_blank" rel="noopener noreferrer") Dobaño Roger. (2024). Libro mayor: qué es y cómo hacerlo.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ilerna.es/blog/libro-diario-y-libro-mayor" target="_blank" rel="noopener noreferrer") ILERNA. (2023). Libro diario y libro mayor: qué son y diferencias.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hX4cH1pozkM    " target="_blank" rel="noopener noreferrer") Contabilidad y Finanzas. (2018, mayo 25). El libro diario. Contabilidad y finanzas Online. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '1.	¿Cuál es la función principal del libro diario en la contabilidad? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mostrar el resultado final del ejercicio contable',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Registrar cronológicamente todas las transacciones de la empresa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Resumir los balances y estados financieros',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Guardar los comprobantes de pago',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'El plan de cuentas en una empresa es: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un informe del flujo de efectivo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Una lista organizada de todas las cuentas utilizadas para registrar las operaciones contables',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un documento emitido por el banco',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un resumen de las ganancias anuales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes afirmaciones es verdadera sobre los papeles de trabajo? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No son necesarios para la elaboración de los estados financieros',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Son documentos auxiliares que respaldan y verifican la información contable',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Se utilizan solo para ajustar cuentas bancarias',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Su uso es exclusivo de los auditores externos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'Los asientos contables de ajustes permiten: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Eliminar cuentas innecesarias del libro diario',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Actualizar los saldos para reflejar la situación financiera real al cierre del periodo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evitar el uso del libro mayor',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Realizar correcciones de inventario al final del ejercicio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'El ciclo contable finaliza con: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La emisión del balance general',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El cierre de los libros y la preparación de los estados financieros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El registro de asientos iniciales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El cálculo del costo de ventas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
