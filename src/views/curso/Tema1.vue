<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Plan de Cuentas y Comprobantes de Contabilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Cuando se piensa en contabilidad, se debe imaginar un sistema que registra el pasado, analiza el presente y proyecta el futuro de una organización. Esta disciplina, considerada el "lenguaje de los negocios", es fundamental para garantizar que las decisiones empresariales se basen en información confiable y oportuna. Desde 2019, la contabilidad ha evolucionado para responder a los desafíos de un entorno globalizado, exigiendo mayor transparencia y adaptación a normativas internacionales (Vargas Moreno, 2020).
        p(data-aos="fade-left") La contabilidad no es un concepto único, sino un conjunto de sistemas interrelacionados que incluyen la contabilidad financiera, administrativa, fiscal y de costos. Cada una de estas ramas cumple una función específica en el ámbito empresarial, como facilitar la rendición de cuentas a terceros o apoyar la gestión interna (Muñoz Orcera, Márquez Vigil & Lazcano Benito, 2020). Este enfoque permite una visión integral, clave para la administración estratégica de las organizaciones.
        p(data-aos="fade-left") Dominar los fundamentos de la contabilidad y su clasificación es esencial para interpretar el entorno financiero de cualquier empresa y tomar decisiones que promuevan su sostenibilidad y competitividad en el mercado.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Estructura del plan de cuentas
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El plan de cuentas es una herramienta fundamental en la contabilidad, ya que organiza y clasifica todas las cuentas utilizadas para registrar las transacciones financieras de una entidad. Su correcta estructuración es esencial para garantizar la precisión y coherencia de la información financiera, facilitando la toma de decisiones estratégicas y operativas en las organizaciones.
        h2(data-aos="fade-left") Estructura general del plan de cuentas
        p(data-aos="fade-left") En Colombia, el Plan Único de Cuentas (PUC) está compuesto por clases, grupos, cuentas y subcuentas que permiten una clasificación detallada de los elementos del activo, pasivo, patrimonio, ingresos y gastos. Esta estructura facilita la elaboración de estados financieros claros y precisos, fundamentales para la gestión empresarial.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Plan único de cuentas (PUC). 

    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th.bg-color-3 Clase
            th.bg-color-3 Grupo
            th.bg-color-3 Cuenta
            th.bg-color-3 Subcuenta
        tbody
          tr
            td.text-bold 2 - Activos
            td 1 - Obligaciones Financieras
            td 10 - Proveedores Nacionales
            td 1050 - Proveedores Nacionales Corto Plazo
          tr
            td.text-bold 3 - Patrimonio
            td 4 - Capital Social
            td 105 - Capital Suscrito y Pagado
            td 1050 - Capital Social Pagado
          tr
            td.text-bold 4 - Ingresos
            td 4 - Ingresos Operacionales
            td 410 - Ventas de Mercancías
            td 41050 - Ventas de Mercancías
          tr
            td.text-bold 5 - Costos
            td 51 - Costos de Ventas
            td 105 - Costo de Mercancías Vendidas
            td 51050 - Costo de Mercancías Vendidas
          tr
            td.text-bold 6 - Gastos
            td 61 - Costos de Producción y Operación
            td 610 - Materias Primas
            td 61050 - Materias Primas Nacionales
          tr
            td.text-bold 7 - Gastos no Operacionales
            td 71 - Costos de Distribución
            td 7105 - Transporte de Productos Vendidos
            td 710505 - Transporte Nacional de Productos Vendidos
    
    h2(data-aos="fade-left") Ejemplo práctico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-5.p-4(data-aos="fade-left")
          p Consideremos una empresa que realiza una venta de productos por un valor de $10,000 en efectivo. El registro contable correspondiente sería:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Débito:</b> Caja o Bancos (Activo) $10,000
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Crédito:</b> Ingresos por ventas (Ingresos) $10,000
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 Este registro refleja el aumento en el activo (efectivo recibido) y el reconocimiento del ingreso por la venta realizada. La comprensión y aplicación adecuada del Plan de Cuentas son competencias clave para los profesionales en administración de empresas. Estas herramientas permiten una gestión financiera eficiente, contribuyendo al éxito y sostenibilidad de las organizaciones.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Uso y función de los comprobantes de contabilidad
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-4 Los comprobantes de contabilidad son documentos clave en la gestión financiera, ya que permiten registrar y respaldar las transacciones económicas de una empresa, garantizando precisión y transparencia en los registros.
        h2(data-aos="fade-left") Definición y función
        p(data-aos="fade-left") Para llevar un control financiero adecuado, es fundamental contar con comprobantes que documenten cada operación. Estos permiten verificar y respaldar las transacciones realizadas dentro de la empresa.

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Función contable:</b> sirven como base para registrar operaciones en los libros contables y elaborar estados financieros precisos.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Función jurídica:</b> actúan como prueba escrita de hechos económicos, siendo clave en auditorías y procesos legales.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 <b>Función de control:</b> permiten identificar a las partes involucradas en una transacción, facilitando la asignación de responsabilidades y el seguimiento financiero.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Tipos de comprobantes de contabilidad
    p.mb-5 Cada tipo de comprobante cumple un rol específico dentro de la contabilidad empresarial, asegurando un registro detallado y ordenado de las transacciones.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="4.5%" y="32.7%" numero="+")
                h5 Comprobante de ingreso
                p Registra los ingresos de la empresa, como ventas, cobros y aportaciones de capital.
    
              .bg-color-white.box-shadow.p-3(x="65.2%" y="4.7%" numero="+")
                h5 Comprobante de gasto
                p Documenta los egresos, como pagos a proveedores, sueldos y costos operativos.
    
              .bg-color-white.box-shadow.p-3(x="36.2%" y="95.5%" numero="+")
                h5 Comprobante de devolución
                p Registra devoluciones de ventas o compras, permitiendo ajustar los registros.
    
              .bg-color-white.box-shadow.p-3(x="95.5%" y="62.5%" numero="+")
                h5 Comprobante de nota bancaria
                p Registra transacciones realizadas mediante cheques o transferencias bancarias.

    h2(data-aos="fade-left") Ejemplos prácticos
    p.mb-5 Para entender mejor la utilidad de estos comprobantes, se presentan algunos casos donde su uso es imprescindible.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Venta de productos:</b> una empresa vende productos por $1,000. El comprobante de contabilidad incluirá detalles como el nombre del cliente, cantidad vendida, precio unitario y total de la venta.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Pago a proveedor:</b> se realiza un pago de $500 por la compra de materia prima. El comprobante documentará la fecha, el proveedor y el monto pagado.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 <b>Devolución de producto:</b> un cliente devuelve un artículo por $200. Se genera un comprobante que ajusta los registros contables.

    h2(data-aos="fade-left") Ejemplo de comprobante
    p.mb-5 A continuación, se presenta un ejemplo de cómo se estructura un comprobante de ingreso para documentar una transacción.

    .row
      .col-lg-7
        .titulo-figura.mb-4
          h5 Tabla 2.
          span Ejemplo de comprobante de ingreso 

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-3 Campo
                th.bg-color-3 Detalle
              tr
                td.text-bold Tipo de comprobante
                td Comprobante de Ingreso
              tr
                td.text-bold Fecha
                td 15 de marzo de 2025
              tr
                td.text-bold Descripción
                td Venta de productos a cliente X
              tr
                td.text-bold Cuenta débito
                td Caja o Bancos (Activo) - $5,000
              tr
                td.text-bold Cuenta crédito
                td Ingresos por Ventas (Ingresos) - $5,000
      .col-lg-5
        .bg-color-7.p-5(data-aos="fade-left")
          p.mb-0 El uso adecuado de estos documentos contables es esencial para garantizar la transparencia y eficiencia en la gestión financiera de cualquier organización.
        figure
          img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.contaduria.gov.co/plan-general-de-contabilidad-publica " target="_blank" rel="noopener noreferrer") Contaduría General de la Nación. (2007). Plan general de contabilidad pública. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://actualicese.com/archivo/comprobantes-de-contabilidad-sabe-cuales-son/?srsltid=AfmBOop9TNqQGIMtIelW2zI4K2TqDVD6BYw6ItXkXaJNGX7JEA3depy-&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer") Actualícese. (2013). Comprobantes de contabilidad: ¿sabe cuáles son?  
 

            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lDLVtJ_xqno " target="_blank" rel="noopener noreferrer") Córdoba S. (2020, octubre 8). Generalidades del módulo contable. Cordoba software. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
