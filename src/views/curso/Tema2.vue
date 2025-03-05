<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Asientos contables y de ajustes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4  En los últimos años, los asientos contables y de ajuste han cobrado una importancia fundamental en la contabilidad moderna. Su correcta aplicación permite reflejar con precisión las transacciones económicas y garantizar que los estados financieros sean un reflejo fiel de la realidad de una empresa.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/1.png")
            .col-lg-7
              h5 Asientos contables
              p Registros que documentan cada transacción económica en el momento en que ocurre, incluyendo ingresos, gastos, activos y pasivos. Son la base para la elaboración de estados financieros y actualmente se enfatiza en su exactitud y verificación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7
              h5 Asientos de ajuste
              p Se realizan al final de un período contable para corregir y actualizar los registros, asegurando que los ingresos y gastos se reconozcan en el período correspondiente. Siguen el principio del devengo y su importancia ha sido reforzada por normativas recientes.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La precisión en estos registros es crucial para la toma de decisiones estratégicas y la planificación financiera. Permiten a la gerencia e inversionistas obtener una visión clara de la situación económica de la empresa, facilitando la identificación de oportunidades y riesgos.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Objetivos y características fundamentales

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        p.mb-4 El <b>Plan de Cuentas</b> y los <b>Comprobantes de Contabilidad</b> son herramientas clave en la organización y registro de transacciones financieras. Conocer sus objetivos y características es esencial para una gestión contable eficiente y conforme a la normativa vigente.
        h2(data-aos="fade-left") Objetivos del Plan de Cuentas
        p(data-aos="fade-left") El Plan de Cuentas proporciona una estructura ordenada para el registro de todas las operaciones financieras, facilitando la generación de estados financieros precisos y el análisis de la situación económica de la empresa. Sus principales objetivos son:
        
    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
            div.tarjeta.bg-color-8.p-4.text-center.text-white.h-100
              p.mb-0 Estructurar de manera sistemática las cuentas contables.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
            div.tarjeta.bg-color-9.p-4.text-center.h-100
              p.mb-0 Facilitar la transparencia y comparabilidad de la información financiera.
          .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
            div.tarjeta.bg-color-3.p-4.text-center.h-100
              p.mb-0 Garantizar el cumplimiento de normativas contables y fiscales.

        p.mb-4 Las características fundamentales del plan de cuentas son: 
    
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Estructura sistemática
              p.mb-0.text-center Organiza las cuentas de forma lógica y jerárquica.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Flexibilidad
              p.mb-0.text-center Permite modificaciones y adaptaciones según las necesidades de la empresa.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Claridad y precisión
              p.mb-0.text-center Cada cuenta debe reflejar de forma exacta el tipo de transacción que registra.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center Codificación adecuada
              p.mb-0.text-center Utiliza códigos que facilitan la identificación y clasificación de cuentas.
    
    h2(data-aos="fade-left") Objetivos de los comprobantes de contabilidad
    p Los comprobantes de contabilidad documentan y respaldan cada transacción financiera, garantizando la transparencia y legalidad de los registros. Además, facilitan auditorías y controles internos al verificar la exactitud de la información.
    p.mb-5 Las características fundamentales de los comprobantes de contabilidad son: 

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Legalida" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Legalida
            p Cumplen con los requisitos fiscales y contables vigentes.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Autenticidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Autenticidad
            p Reflejan fielmente la transacción realizada.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Complejidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Complejidad
            p Contienen detalles como fecha, monto y cuentas afectadas.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Conservación" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.align-content-center
            h4 Conservación
            p Deben ser archivados conforme a la normativa para futuras auditorías.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/12.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Ejemplo de comprobante de ingreso

    .row.mb-5
      .col-lg-8
        p Para ilustrar su aplicación, se presenta el siguiente ejemplo de comprobante de ingreso generado por una venta en efectivo:
        .titulo-figura.mb-4
          h5 Tabla 3.
          span Ejemplo de comprobante de ingreso 

        .tabla-a.color-acento-botones
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
                td Caja o Bancos (Activo) - $10,000
              tr
                td.text-bold Cuenta crédito
                td Ingresos por Ventas (Ingresos) - $10,000
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este comprobante respalda la transacción y permite su correcta integración en los registros contables.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Procedimiento para realizar ajustes contables

    p.mb-4 Los ajustes contables son modificaciones esenciales en los registros financieros de una empresa, realizadas al final de un período contable, para reflejar con precisión la situación económica y financiera de la entidad. Estos ajustes aseguran que los estados financieros presenten una imagen fiel de la realidad, cumpliendo con los principios contables generalmente aceptados y las normativas vigentes. Pasos para realizar ajustes contables:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Ejemplos prácticos de ajustes contables

    p.mb-4 Los ajustes contables permiten reflejar con precisión la situación financiera de una empresa, asegurando que los ingresos y gastos se reconozcan en el período correspondiente. A continuación, se presentan algunos ejemplos prácticos de su aplicación.

    .row.mb-5
      .col-lg-6.mb-3
        h3.mb-5(data-aos="fade-left") Ejemplo 1: ajuste por gasto de seguro
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Cuando una empresa paga por adelantado un seguro anual, es necesario registrar mensualmente el gasto correspondiente para reflejar con precisión el período transcurrido.
        .titulo-figura.mb-4
          h5 Tabla 4.
          span Cálculo y asiento de ajuste por gasto de seguro 
        .pst
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th.bg-color-3 Concepto
                  th.bg-color-3 Detalle
                tr
                  td.text-bold Situación
                  td Pago de un seguro anual de $12,000 (del 1 de enero al 31 de diciembre).
                tr
                  td.text-bold Cálculo del gasto trimestral
                  td $12,000 ÷ 4 trimestres = $3,000 por trimestre.
                tr
                  td.text-bold Asiento de ajuste al 31 de marzo
                  td 
                    p.mb-0 <b>Débito:</b> Gasto de Seguros $3,000 
                    p.mb-0 <b>Crédito:</b> Seguro Pagado por Anticipado $3,000
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este ajuste permite reflejar el gasto de seguro correspondiente al primer trimestre y reducir el activo de seguro pagado por anticipado.
      .col-lg-6
        h3(data-aos="fade-left") Ejemplo 2: ajuste de provisión para cuentas incobrables
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p Las empresas deben estimar el porcentaje de cuentas por cobrar que no se recuperarán, registrando una provisión adecuada.
        .titulo-figura.mb-4
          h5 Tabla 5.
          span Cálculo y asiento de ajuste por provisión de cuentas incobrables
        .pst
          .tabla-a.color-acento-botones
            table.pst
              thead
                tr
                  th.bg-color-3 Concepto
                  th.bg-color-3 Detalle
                tr
                  td.text-bold Situación
                  td La empresa tiene cuentas por cobrar de $50,000 al 31 de diciembre.
                tr
                  td.text-bold Cálculo de la provisión
                  td $50,000 * 2 % = $1,000 (provisión estimada).
                tr
                  td.text-bold Asiento de ajuste al 31 de diciembre
                  td 
                    p.mb-0 <b>Débito:</b> Gasto por provisión de cuentas incobrables $1,000  
                    p.mb-0 <b>Crédito:</b> Provisión para cuentas incobrables $1,000

        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este ajuste refleja la estimación de cuentas incobrables, ajustando el valor realizable de las cuentas por cobrar.

    .row.mb-5.justify-content-center.bg-h85-2
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-6.mb-3
        h3(data-aos="fade-left") Ejemplo 3: ajuste por depreciación de activos fijos
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La depreciación permite distribuir el costo de un activo a lo largo de su vida útil, asegurando que los estados financieros reflejen su desgaste.
        .titulo-figura.mb-4
          h5 Tabla 6.
          span Cálculo y asiento de ajuste por depreciación de activos fijos 
        .pst
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th.bg-color-3 Concepto
                  th.bg-color-3 Detalle
                tr
                  td.text-bold Situación
                  td Un vehículo adquirido por $20,000 con una vida útil de 5 años y un valor residual de $2,000.
                tr
                  td.text-bold Cálculo de la depreciación anual
                  td ($20,000 - $2,000) ÷ 5 años = $3,600 por año.
                tr
                  td.text-bold Asiento de ajuste al 31 de diciembre
                  td 
                    p.mb-0 <b>Débito:</b> Gasto por depreciación $3,600  
                    p.mb-0 <b>Crédito:</b> Depreciación acumulada $3,600

        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este ajuste refleja la depreciación del vehículo durante el año y ajusta el valor del activo en el balance general.
      .col-lg-6
        h3(data-aos="fade-left") Ejemplo 4: ajuste por ingreso devengado
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p Los ingresos deben registrarse en el período en el que se generan, incluso si el cobro aún no se ha realizado.
        .titulo-figura.mb-4
          h5 Tabla 7.
          span Cálculo y asiento de ajuste por ingreso devengado
        .pst
          .tabla-a.color-acento-botones
            table.pst
              thead
                tr
                  th.bg-color-3 Concepto
                  th.bg-color-3 Detalle
                tr
                  td.text-bold Situación
                  td Una empresa presta un servicio de consultoría por $10,000, que será cobrado el mes siguiente.
                tr
                  td.text-bold Cálculo del ingreso devengado
                  td Se debe reconocer el ingreso de $10,000 porque el servicio ya fue prestado.
                tr
                  td.text-bold Asiento de ajuste al 31 de diciembre
                  td 
                    p.mb-0 <b>Débito:</b> Cuentas por cobrar $10,000   
                    p.mb-0 <b>Crédito:</b> Ingresos por servicios $10,000

        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este ajuste permite reconocer el ingreso en el mes en que se prestó el servicio, cumpliendo con el principio del devengo.
    
    p Estos ajustes contables son esenciales para garantizar la precisión y confiabilidad de los estados financieros, facilitando la toma de decisiones y el cumplimiento de las normativas contables y fiscales.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://contabilidadfinanzas.com/contabilidad-financiera/ajustes-contables/" target="_blank" rel="noopener noreferrer") Contabilidad y Finanzas. (2023). Ajustes Contables: Guía Fundamental Paso a Paso. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://contabilidadfinanzas.com/contabilidad-financiera/ajustes-contables/" target="_blank" rel="noopener noreferrer") Contabilidad y Finanzas. (2023). Ajustes Contables: Guía Fundamental Paso a Paso. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fs3LCEE5Nok  " target="_blank" rel="noopener noreferrer") Cano M. (2017, octubre 30). Asientos de ajuste. Maria Cano Virtual. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
