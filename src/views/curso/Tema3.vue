<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Transacciones Contables y Ciclos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        .bg-color-11.px-4.py-5(data-aos="fade-left")
          p.mb-5 Las transacciones contables registran todas las operaciones financieras de una empresa en un período determinado. Son esenciales para la elaboración de los estados financieros, ya que reflejan la actividad económica de la entidad. Cada transacción afecta al menos dos cuentas contables, siguiendo el principio de la partida doble, donde cada débito tiene un crédito correspondiente.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-4
        .bg-color-2.px-4.py-5(data-aos="fade-left")
          p.mb-0 El proceso contable se organiza dentro del <b>ciclo contable</b>, que abarca desde el reconocimiento de las transacciones hasta la preparación de los estados financieros. Este ciclo garantiza información precisa y actualizada, facilitando la toma de decisiones y el cumplimiento de normativas. Comprender estos procesos es clave para interpretar la situación financiera de una empresa y asegurar la transparencia en la información contable. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Definición y clasificación de transacciones contables

    p.mb-4 Las transacciones contables son eventos económicos que impactan la situación financiera de una empresa y se registran en los libros contables. Cada transacción implica un intercambio de valor entre dos partes y sigue el sistema de partida doble.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.order-2.order-lg-1
              h5 Transacciones Simples
              p Afectan solo dos cuentas contables. Ejemplo: cobro de una venta al contado, donde se debita la cuenta de caja y se acredita la cuenta de ingresos por ventas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-2.order-lg-1
              h5 Transacciones Compuestas
              p Involucran más de dos cuentas contables en un solo asiento. Ejemplo: compra de mercadería a crédito con descuento, donde se debita compras, se acredita proveedores y se acredita descuentos obtenidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-2.order-lg-1
              h5 Transacciones de Ajuste
              p Se realizan al final del período contable para actualizar las cuentas y reflejar la situación real de la empresa. No implican un intercambio real de bienes o servicios, sino que aplican el principio del devengo.
    
    p.mb-4 Ejemplos prácticos de registro de transacciones contables: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.svg", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Compra de inventario a crédito")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Débito:</b> Inventario $1,000 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Crédito:</b> Cuentas por pagar $1,000
    
          .div(titulo="Venta de productos al contado")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Débito:</b> Efectivo $500 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Crédito:</b> Ventas $500
    
          .div(titulo="Pago de gastos operativos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Débito:</b> Gastos de suministros (Electricidad) $200 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 <b>Crédito:</b> Banco $200
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p Registrar correctamente estas operaciones garantiza la precisión de los estados financieros y el cumplimiento de normativas contables.
    
    .bg-full-width.bg-color-10.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El ciclo contable y su impacto en los estados financieros
            p.mb-4(data-aos="fade-right") Se invita a leer: <b>El ciclo contable y su impacto en los estados financieros.</b> El ciclo contable es un proceso fundamental en la gestión financiera de cualquier empresa, ya que permite registrar, clasificar y resumir todas las transacciones económicas de manera estructurada. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El ciclo contable y su impacto en los estados financieros.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.unab.edu.co/bitstream/handle/20.500.12749/23575/2019_Tesis_Miguel_Alberto_Pinto_Camacho.pdf?sequence=1" target="_blank" rel="noopener noreferrer") Universidad Nacional Abierta y a Distancia (UNAD). (2019). Manual de Procedimientos para el Ciclo Contable. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.unir.net/revista/empresa/ciclo-contable/" target="_blank" rel="noopener noreferrer") UNIR. (2019). ¿Qué es el ciclo contable y cuáles son sus etapas?.   

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=txWlMtc72dE   " target="_blank" rel="noopener noreferrer") Accounting I. (2023, octubre 21). Pasos del ciclo contable. Accounting Instruction, Help, & How To (Financial & Managerial). [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
