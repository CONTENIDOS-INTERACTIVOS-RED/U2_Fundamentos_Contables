export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Registro de transacciones y sus elementos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de Cuentas y Comprobantes de Contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura del plan de cuentas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Subtítulo tema',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Subtítulo tema',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Subtítulo tema',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Subtítulo tema',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Título tema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Subtítulo tema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Subtítulo tema',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vargas Moreno, M. D. L. Á. (2020). Fundamentos de contabilidad: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/151232?page=1',
    },
    {
      referencia:
        'Muñoz Orcera, R. Márquez Vigil, J. & Lazcano Benito, L. (2020). Fundamentos de contabilidad: (1 ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/218332?page=1',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/271541?page=1',
    },
    {
      referencia:
        'Antón Pérez, J. J. & Garijo de Miguel, S. (2024). Empresa y administración: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo (1.ª ed.). Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J., Guerrero López, L., & Salgado Hernández, N. (2016). Fundamentos de Administración. Grupo Editorial Éxodo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
    {
      referencia:
        'Universidad Tecnológica Nacional. (2019). Unidad N° 5 – Comprobantes y documentos comerciales. ',
      link:
        'https://sanfrancisco.utn.edu.ar/documentos/archivos/ingreso/UNIDAD%20N%C2%BA%205%20-%20SEMINARIO%20LAR.pdf',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2019). Doctrina contable pública 2019. ',
      link:
        'https://www.contaduria.gov.co/documents/20127/124398/DOCTRINA%2BCONTABLE%2BP%C3%9ABLICA%2B2019.pdf',
    },
    {
      referencia:
        'Corporación Autónoma Regional de la Frontera Nororiental (CORPONOR). (s.f.). Definición de papeles de trabajo. ',
      link:
        'https://corponor.gov.co/formatos/proevaluacion/CONTROL%20INTERNO/DEFINICION%20DE%20PAPELES%20DE%20TRABAJO.pdf',
    },
    {
      referencia:
        'Contraloría General de la Ciudad de México. (2006.). Guía para la elaboración y revisión de papeles de trabajo. ',
      link:
        'https://infocdmx.org.mx/pdfs/contraloria/guia_elab_rev_papeles_trabajo.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Bienes y derechos de los que dispone una empresa para desarrollar su actividad económica.',
    },
    {
      termino: 'Amortización',
      significado:
        'Proceso contable mediante el cual se distribuye el costo de un activo intangible a lo largo de su vida útil.',
    },
    {
      termino: 'Auditoría',
      significado:
        'Examen y evaluación de los estados financieros y las operaciones de una empresa para asegurar su exactitud y conformidad con las normativas.',
    },
    {
      termino: 'Balance general',
      significado:
        'Estado financiero que muestra la situación económica de una empresa en un momento específico, detallando sus activos, pasivos y patrimonio.',
    },
    {
      termino: 'Cédula de auditoría',
      significado:
        'Documento que recoge y organiza la evidencia obtenida durante una auditoría.',
    },
    {
      termino: 'Cuentas por cobrar',
      significado:
        'Monto que una empresa tiene derecho a recibir por la venta de bienes o la prestación de servicios.',
    },
    {
      termino: 'Cuentas por pagar',
      significado:
        'deudas u obligaciones que una empresa tiene con terceros por bienes o servicios recibidos.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Reducción del valor de un activo fijo debido al uso, desgaste o envejecimiento.',
    },
    {
      termino: 'Estado de flujos de efectivo',
      significado:
        'Estado financiero que informa sobre los flujos de entrada y salida de efectivo en un periodo determinado.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Estado financiero que muestra los ingresos, gastos y beneficios o pérdidas de una empresa durante un período específico.',
    },
    {
      termino: 'Gasto',
      significado:
        'Disminución de los recursos económicos de una empresa que resulta de su actividad productiva.',
    },
    {
      termino: 'Ingreso',
      significado:
        'Aumento de los recursos de una empresa como resultado de la venta de productos o servicios',
    },
    {
      termino: 'Libro diario',
      significado:
        'Registro contable donde se anotan las transacciones financieras de una empresa de manera cronológica.',
    },
    {
      termino: 'Libro mayor',
      significado:
        'Registro contable donde se agrupan todas las transacciones realizadas en cada cuenta específica.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Obligaciones o deudas que una empresa tiene con terceros, como préstamos o cuentas por pagar.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Es el conjunto de los bienes, derechos y obligaciones que posee una entidad.',
    },
    {
      termino: 'Provisión',
      significado:
        'Estimación contable que se hace para prever la posible obligación futura de una empresa.',
    },
    {
      termino: 'Reclasificación',
      significado:
        'Ajuste contable en el que una partida de los estados financieros se traslada de una cuenta a otra.',
    },
    {
      termino: 'Resultado operativo',
      significado:
        'Beneficio o pérdida generada por las actividades principales de la empresa, sin tener en cuenta otros ingresos o gastos no operativos.',
    },
    {
      termino: 'Saldo',
      significado:
        'Monto que queda en una cuenta después de realizar las transacciones pertinentes, ya sea en el libro mayor o en las cuentas bancarias.',
    },
  ],
}
