import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppStorage } from '../storage/app-storage';
import { PerfectScrollbarComponent } from 'angular2-perfect-scrollbar';

@Component({
    styleUrls: ['./final.scss'],
    encapsulation: ViewEncapsulation.None
})

export class Final {

    carpetaMostrada: string = 'pa';
    state: any;
    keyPropuestas: any;
    resultados = RESULTADOS;
    config: any;

    @ViewChild(PerfectScrollbarComponent)
    private perfectScrollbar;

    constructor(private router: Router) {
        this.state = AppStorage.getState();
        this.keyPropuestas = Object.keys(this.state.propuestas);
        this.config = {
            wheelSpeed: 1,
            wheelPropagation: true,
            maxScrollbarLength: 10
        };
    }

    go(where) {
        this.router.navigate([where]);
    }

    restart() {
        let state = AppStorage.getState();
        for (let key in state.propuestas) {
            state.propuestas[key] = null;
        }
        AppStorage.setState(state);
        this.go('desk');
    }

    moverCarpeta(offset: number) {
        let ix = this.keyPropuestas.indexOf(this.carpetaMostrada);
        ix = ix + offset;
        if (ix >= this.keyPropuestas.length) {
            this.carpetaMostrada = this.keyPropuestas[0];
        } else if (ix <= 0) {
            this.carpetaMostrada = this.keyPropuestas[this.keyPropuestas.length - 1];
        } else {
            this.carpetaMostrada = this.keyPropuestas[ix];
        }
    }

    siguienteCarpeta() {
        this.moverCarpeta(1);
    }

    anteriorCarpeta() {
        this.moverCarpeta(-1);
    }

    mostrarCarpeta(id: string) {
        this.carpetaMostrada = id;
    }

    volver() {
        this.go('/resumen');
    }

    scrollDown() {
        this.perfectScrollbar.elementRef.nativeElement.scrollTop += 30;
    }

    scrollUp() {
        this.perfectScrollbar.elementRef.nativeElement.scrollTop -= 30;
    }
}
const RESULTADOS = {
    'pa': {
        '1': {
            texto: `<strong>Objetivo</strong>: Trabajo con adolescentes  en ámbitos comunitarios<br>
<strong>Estrategia</strong>: Talleres sobre prevención del consumo de drogas<br>
<strong>Ámbito de incidencia</strong>: Organizaciones religiosas, organizaciones barriales<br>
<br>
La organización tiene experiencia en esta clase de talleres con adolescentes. Si el esfuerzo se concentra en lograr que los gobiernos locales declaren esta iniciativa de interés municipal, se puede lograr una llegada interesante a las asociaciones barriales. Además, lograr la adhesión de las organizaciones religiosas es clave.<br>
Los costos financieros son altos, sobre todo en términos de transporte por la gran cantidad de recursos humanos voluntarios y profesionales. Sin embargo, no hay necesidad de recaudar fondos especiales ni de efectuar investigaciones adicionales al know how con el que ya cuenta la organización y sus expertos.<br>
Si bien el proyecto puede desarrollarse de forma sustentable, los problemas pueden provenir de las dificultades para lograr una difusión acorde a la convocatoria esperada y un cronograma viable con las distintas organizaciones barriales.<br>
El abordaje de los contextos es importante cuando nos proponemos trabajar la problemática de las adicciones en los adolescentes. Fundamentalmente, los talleres deben hacer hincapié en valores como la alegría, la amistad, el encuentro y los deportes.  La notoriedad pública de la iniciativa en los barrios está asegurada.`,
            impacto: 'medio',
            presupuesto: 'medio',
            factibilidad: 'alto',
            oportunidad: 'alto'
        },
        '2': {
            texto: `<strong>Objetivo</strong>: Información a diputados y asesores parlamentarios<br>
<strong>Estrategia</strong>: Capacitación online sobre la importancia de la perspectiva de la reducción de la oferta<br>
<strong>Ámbito de incidencia</strong>: comisión de adicciones de la Cámara de Diputados<br>
<br>
La organización no tiene experiencia en entornos virtuales. Sin embargo, la acción puede ser interesante por la flexibilidad que permitiría a personas altamente ocupadas como los legisladores.<br>
Los costos financieros son altos, sobre todo en términos de desarrollo de la plataforma virtual. Además, puede haber necesidad de cooperar con otras organizaciones de modo de investigar y adquirir competencias en el diseño y el manejo de un curso online.<br>
El proyecto puede no ser sustentable porque, más allá de intentar planificar un cronograma, los imprevistos pueden surgir fácilmente en un campo no explorado anteriormente por la organización.<br>
La notoriedad pública de la iniciativa es limitada, por la tónica específicamente parlamentaria que asume.<br>
La perspectiva de la acción propuesta, enfocada en la oferta, es necesaria, pues está asociada con el delito que hay que combatir.  Sin embargo, puede no resultar de interés de una gran parte de los legisladores que probablemente accedieron a fundamentos sobre la prevención con enfoque en la demanda.`,
            impacto: 'medio',
            presupuesto: 'alto',
            factibilidad: 'bajo',
            oportunidad: 'medio'
        },
        '3': {
            texto: `<strong>Objetivo</strong>: Difusión de mensajes al público que asiste a discotecas  <br>
<strong>Estrategia</strong>: Distribución de folletería e instalación de carteles sobre los peligros del uso y dependencia del alcohol y las drogas en locales de entretenimiento<br>
<strong>Ámbito de incidencia</strong>: Cámara Empresaria de Discotecas Porteñas<br>
<br>
La organización no tiene experiencia en esta clase de iniciativa. Sin embargo, el afán por llegar en forma directa al público más vulnerable al consumo de drogas sintéticas es apremiante.<br>
Se puede intentar la cooperación de alguna gráfica que desee imprimir los mensajes en el marco de una gestión socialmente responsable.<br>
No hay necesidad de recaudar fondos especiales ni de recurrir a personal remunerado. Los voluntarios pueden llegar a intervenir para idear los mensajes de una forma creativa y colocar las piezas en los sitios donde resulte indicado.<br>
La aprobación de la iniciativa puede conducirse a través de la Cámara, confiando en la cooperación de los empresarios. Esto puede dificultarse por la posible resistencia de algunos sectores cuyos intereses se contraponen con los hábitos saludables en los lugares de entretenimiento.<br>
Los obstáculos para establecer un cronograma pueden relacionarse a la poca experiencia de la organización en una tarea de difusión como la que se plantea. Más allá de esto, el impacto público puede tener una magnitud considerable en los medios.`,
            impacto: 'alto',
            presupuesto: 'medio',
            factibilidad: 'medio',
            oportunidad: 'alto'
        }
    },
    'pld': {
        '1': {
            texto: `<strong>Objetivo</strong>: Control real de la UIF (Unidad de Información Financiera)<br>
<strong>Estrategia</strong>: Investigación sobre el tiempo del procesamiento de los ROS (Reporte de Operaciones Sospechosas) <br>
<strong>Ámbito de incidencia</strong>: UIF (Unidad de Información Financiera)<br>
<br>
La organización no tiene experiencia en esta clase de investigaciones. Tendrá que hacer uso de su fuerte en acciones de lobby sobre una serie de stakeholders para lograr la influencia necesaria y acceder a los datos de la Unidad de Información Financiera (UIF).<br>
Los costos financieros son altos dado que, a pesar de que entre unos pocos profesionales y voluntarios de la organización se pueden distribuir las tareas de procesamiento cuantitativo y cualitativo de los datos, se deberá adquirir un software que proporcione las herramientas básicas de análisis estadístico. Por otra parte, los datos a procesar son muchos, por la enorme cantidad de operaciones sospechosas reportadas por los bancos sobre las cuales efectuar el seguimiento. Sin embargo, el acceso a la información necesaria puede significar grandes dificultades para la organización.<br>
La notoriedad es limitada, dada la poca información que circula sobre las investigaciones de la unidad antilavado, pero puede servirle al organismo para recuperar la confianza pública, dado que ya hay otras ONGs y medios preocupados por difundir cuestiones relacionadas a la eficiencia de la UIF.<br>
Es posible elaborar un cronograma viable y un procesamiento sustentable de los datos aunque la capacitación sobre el software requiere la intervención de otros actores que pueden ocasionar desajustes.<br>
Si se lograra realizar un análisis exhaustivo y creíble de esta problemática el impacto en los medios puede ser alto.`,
            impacto: 'medio',
            presupuesto: 'alto',
            factibilidad: 'bajo',
            oportunidad: 'alto'
        },
        '2': {
            texto: `<strong>Objetivo</strong>: Unificación de proyectos sobre lavado de activos<br>
<strong>Estrategia</strong>: Revisión de proyectos de ley elaborados por el Ministerio de Justicia<br>
<strong>Ámbito de incidencia</strong>: Comisión Unicameral de Seguridad Interior y Narcotráfico <br>
<br>
<br>
La organización tiene experiencia en esta clase de análisis legislativo. Tiene acceso a las comisiones legislativas y cuenta con profesionales que pueden conducir el proceso.<br>
Puede haber necesidad de cooperar con otras organizaciones de modo de aprovechar análisis legislativos previos que sirvan a la revisión en curso.<br>
Los costos financieros son bajos y no hay necesidad de reclutar voluntarios para intervenir en la revisión ni realizar acciones de fundraising. Los cuerpos profesionalizados de la organización cuentan con los recursos y las herramientas necesarias.<br>
Es probable que los legisladores artífices de los proyectos estén de acuerdo con la revisión, aunque deberá asegurarse que todas las perspectivas sean respetadas.<br>
De todas maneras, los proyectos que se presentan están disponibles más allá del acuerdo de los legisladores, que no siempre están dispuestos a estas revisiones.<br>
El proyecto puede ser sustentable y contar con un cronograma viable.<br>
La notoriedad pública de la iniciativa es importante por la vigencia de la demanda en torno a leyes que vengan a resolver cuestiones y problemáticas que la sociedad enfrenta de manera cotidiana.`,
            impacto: 'medio',
            presupuesto: 'bajo',
            factibilidad: 'alto',
            oportunidad: 'alto'
        },
        '3': {
            texto: `<strong>Objetivo</strong>: Revisión sobre los recursos y herramientas disponibles a jueces y fiscales  para abordar la narcocriminalidad<br>
<strong>Estrategia</strong>: Investigación cualitativa sobre procesos judiciales en materia de lavado de activos<br>
<strong>Ámbito de incidencia</strong>: Procuraduría de Criminalidad Económica y Lavado de Activos (PROCELAC)<br>
<br>
La organización no tiene experiencia en esta clase de investigaciones en el poder judicial. Tendrá que hacer uso de sus recursos de lobby sobre una serie de stakeholders para lograr la influencia necesaria y acceder a los datos de la Procuraduría del Ministerio Público.<br>
Los costos financieros son altos dado que, a pesar de que los profesionales de la organización se pueden distribuir las tareas de procesamiento cualitativo de los datos, se debe reclutar voluntarios para conducir una serie de entrevistas con jueces y fiscales.<br>
Si bien es posible emprender un proceso sustentable, los entrevistados pueden estar altamente comprometidos en sus agendas, por lo que puede resultar dificultoso establecer un cronograma viable.<br>
Más allá del posicionamiento del tema del lavado de activos en las encuestas sobre el narcotráfico, la notoriedad pública de la iniciativa es limitada, por la naturaleza jurídica de la misma.`,
            impacto: 'bajo',
            presupuesto: 'alto',
            factibilidad: 'medio',
            oportunidad: 'alto'
        }
    },
    'ps': {
        '1': {
            texto: `<strong>Objetivo</strong>: Contacto con legisladores<br>
<strong>Estrategia</strong>: Mesa de debate sobre legislación vigente de narcomenudeo<br>
<strong>Ámbito de incidencia</strong>: Comisión Unicameral de Seguridad Interior y Narcotráfico<br> 
<br>
La organización tiene experiencia en esta clase de jornadas. Por otra parte, la temática del narcomenudeo se presta a interesantes debates, por lo que se podrá captar el interés de los legisladores con facilidad.<br><br>
Los costos financieros son bajos, pues se puede aprovechar el auditorio de la organización como sede de la mesa de debate. O incluso, si la Comisión Unicameral adhiere, el ámbito más apropiado para realizar el encuentro sería el edificio anexo al Congreso, pudiendo requerirse la cooperación de OPRENAR.<br>
Los voluntarios de la organización pueden trabajar invitando a los legisladores a participar como oradores.<br>
La atareada agenda de diputados y senadores puede ser un escollo para disponer una fecha para el evento.<br>
La presentación del tema debe ser atractiva. Se deben generar incentivos poderosos para la participación e idear mecanismos para favorecer la participación. Se puede fundamentar la importancia de la asistencia al evento en la implicancia que tiene actualmente este flagelo en la seguridad.<br>
La notoriedad pública posible es limitada, aunque los esfuerzos de esta iniciativa por instalar el debate pueden devenir en futuros proyectos legislativos que trabajen en función de combatir el narcomenudeo. Además, como es un tema complejo y que requiere múltiples visiones, su abordaje debe exceder el ámbito legislativo en el futuro.`,
            impacto: 'medio',
            presupuesto: 'medio',
            factibilidad: 'medio',
            oportunidad: 'alto'
        },
        '2': {
            texto: `<strong>Objetivo</strong>: Trabajo con asesores legislativos<br>
<strong>Estrategia</strong>: Encuesta de percepciones sobre la inteligencia criminal<br>
<strong>Ámbito de incidencia</strong>: Instituto de Capacitación Parlamentaria de la Cámara de Diputados<br>
<br>
La organización no tiene experiencia en la realización de encuestas. Sin embargo, cuenta con profesionales que pueden conducir el proceso.<br>
Puede haber necesidad de cooperar con otras organizaciones de modo de adquirir competencias en el procesamiento de los datos. También resulta altamente necesaria la investigación con expertos sobre las tareas de inteligencia criminal.<br>
El proyecto puede ser sustentable porque el cuestionario puede distribuirse en línea, sin existir costos de impresión.<br>
La notoriedad pública de la iniciativa es limitada, por la tónica específicamente parlamentaria que asume. Sin embargo, el debate sobre el rol de la inteligencia criminal puede interesar a públicos amplios y esta iniciativa tiene el potencial de importarse a otros ámbitos.`,
            impacto: 'bajo',
            presupuesto: 'medio',
            factibilidad: 'medio',
            oportunidad: 'alto'
        },
        '3': {
            texto: `<strong>Objetivo</strong>: Concientización en barrios <br>
<strong>Estrategia</strong>: Asesoramiento de consejos barriales de participación ciudadana<br>
<strong>Ámbito de incidencia</strong>: Gobiernos locales<br>
<br>
<br>
La organización tiene experiencia en esta clase de jornadas. Sin embargo, puede ser dificultoso abarcar un número significativo de municipios interesados en gestionar consejos ciudadanos.<br>
Los costos financieros son altos, sobre todo en concepto de transporte de los asesores. Sin embargo, no hay necesidad de recaudar fondos especiales ni de reclutar personal más allá de los cuerpos profesionales con los que ya cuenta la organización.<br>
Va en la línea de fomentar el involucramiento de todas las instancias del Estado y de la sociedad en su conjunto. Este es un gran tema, dado que trabaja en dirección a evitar que todo lo relacionado con la lucha contra las drogas recaiga en el Estado, en particular en lo referente a la prevención.<br>
Si bien el proyecto puede pensarse de una forma sustentable, los problemas pueden provenir de las dificultades para armar un cronograma viable con los distintos municipios. La notoriedad pública de la iniciativa está asegurada por la oportunidad que representa para los gobiernos locales poder acercarse a los vecinos. A su vez, el debate sobre la participación ciudadana puede obtener cierta repercusión en los medios.`,
            impacto: 'medio',
            presupuesto: 'alto',
            factibilidad: 'bajo',
            oportunidad: 'alto'
        }
    },
    'pe': {
        '1': {
            texto: `<strong>Objetivo</strong>:  Implementación de lo indicado por la Ley 26586 respecto a contenidos curriculares<br>
<strong>Estrategia</strong>: Organización de talleres sobre prevención de adicciones para las familias<br>
<strong>Ámbito de incidencia</strong>: Dirección Provincial de Educación Superior de la Provincia de Buenos Aires <br>
<br>
La organización tiene experiencia en esta clase de capacitaciones. Sin embargo, puede ser dificultoso abarcar una significativa cantidad de profesorados.<br>
Este proyecto plantea un debate sobre responsabilidades. Por ley, es el Ministerio de Educación a través del Instituto Nacional de Formación Docente el responsable de la capacitación, pero como eso no está ocurriendo (y, parcialmente, SEDRONAR ha asumido esta función) puede ser oportuno que una ONG aborde el tema.<br>
Puede necesitarse una  gran cantidad de recursos humanos para impartir la capacitación. Sin embargo, no hay necesidad de recaudar fondos especiales ni de efectuar investigaciones adicionales al know how con el que ya cuenta la organización.<br>
Si bien el proyecto puede pensarse de una forma sustentable, los problemas pueden provenir de las dificultades para armar un cronograma viable con los distintos profesorados. La notoriedad pública de la iniciativa a corto plazo es limitada, aunque, a largo plazo, busca tener repercusiones en el desempeño profesional de los profesores.`,
            impacto: 'alto',
            presupuesto: 'medio',
            factibilidad: 'alto',
            oportunidad: 'alto'
        },
        '2': {
            texto: `<strong>Objetivo</strong>: Sensibiliizar a los docentes sobre la necesidad de prevenir el consumo de drogas <br>
<strong>Estrategia</strong>: Proyección de videos en institutos de formación docente el día 26 de junio (Día Internacional de la Lucha contra las drogas)<br>
<strong>Ámbito de incidencia</strong>: Instituto Nacional de Formación Docente<br>
<br>
La organización no tiene experiencia en evaluación de producciones multimediales.<br>
Los costos financieros son altos, sobre todo para asegurar los premios y la difusión de los videos. Además, puede haber necesidad de solicitar la cooperación de algún equipo externo de modo de procesar las entregas y evaluar los videos que concursen.<br>
El proyecto puede no ser sustentable porque, más allá de intentar planificar un cronograma, los imprevistos pueden surgir fácilmente para coordinar las agendas y solicitudes de las  personas que integran el jurado del concurso.<br>
La notoriedad pública de la iniciativa es importante. Para difundir el video ganador el día 26 de junio, se necesita asegurar la gestión del espacio con los canales de televisión y otros medios interesados en la transmisión.<br>
La perspectiva de los videos puede convertirse en una buena forma de generar empatía entre los profesores y los contextos familiares de sus futuros alumnos. También es una buena oportunidad para lograr que el 26 de junio, Día mundial de la Lucha contra las Drogas, tome la relevancia que merece.`,
            impacto: 'medio',
            presupuesto: 'alto',
            factibilidad: 'medio',
            oportunidad: 'alto'
        },
        '3': {
            texto: `<strong>Objetivo</strong>: Comunicación con adolescentes en ámbitos escolares<br>
<strong>Estrategia</strong>: Distribución de cuadernillos sobre la cultura de las drogas haciendo énfasis en el consumo problemático<br>
<strong>Ámbito de incidencia</strong>: Asociación de Entidades Educativas Privadas Argentinas<br>
<br>
La organización no tiene experiencia en esta clase de iniciativas. Sin embargo, el afán por abordar a los adolescentes en el ámbito escolar es apremiante, dada la “intriga” que el consumo de drogas parece generar, según las estadísticas.<br>
Sería deseable contactar y lograr la cooperación de una empresa gráfica o imprenta que desee imprimir los mensajes en el marco de una gestión socialmente responsable. De lo contrario, los costos serían altos.<br>
No hay necesidad de recaudar fondos especiales ni de recurrir a personal remunerado. Los asesores profesionales de la organización pueden intervenir para idear los mensajes de una forma certera y los voluntarios pueden distribuir las piezas en las escuelas. Esto último conllevaría algunos gastos logísticos.<br>
La aprobación de la iniciativa puede conducirse a través de la Asociación de Entidades Educativas Privadas Argentinas, confiando en la cooperación de los colegios que se encuentran allí agrupados. El impacto en los jóvenes y en sus familias puede tener una magnitud considerable.<br>
El planteo de la “reducción de daños” no es necesariamente incorrecto, aunque puede serlo si se lo utiliza como una forma de minimizar los daños sin intenciones de influir sobre el consumo. También hay que tener en cuenta que no siempre da resultados satisfactorios la distribución de cuadernillos a jóvenes sin un trabajo conceptual previo guiado por docentes.`,
            impacto: 'alto',
            presupuesto: 'medio',
            factibilidad: 'alto',
            oportunidad: 'medio'
        }
    },
    'fpj': {
        '1': {
            texto: `<strong>Objetivo</strong>: Capacitación de funcionarios y empleados de tribunales y fiscalías<br>
<strong>Estrategia</strong>: Escenarios online sobre mecanismos de producción y transporte de estupefacientes y nuevas drogas<br>
<strong>Ámbito de incidencia</strong>: Procuraduría de Narcocriminalidad del Ministerio Público Fiscal<br>
<br>
La organización no tiene experiencia en esta clase de capacitaciones online. Sin embargo, puede ser interesante la experiencia por la flexibilidad que permitiría a funcionarios y empleados de tribunales y fiscalías.<br>
La organización tendrá que hacer uso de sus recursos de lobby sobre una serie de stakeholders para lograr la influencia necesaria y acceder a los decisores de la Procuraduría del Ministerio Público.<br>
Los costos financieros son altos, sobre todo por el desarrollo del escenario multimedia. Además, puede haber necesidad de solicitar la cooperación de otras organizaciones de modo de investigar y adquirir competencias en el diseño y el manejo de un producto de esta naturaleza.<br>
El proyecto puede no ser sustentable porque, más allá de intentar planificar un cronograma, los imprevistos pueden surgir fácilmente en un campo no explorado anteriormente por la organización.<br>
La notoriedad pública de la iniciativa es limitada, aunque se puede volver a emplear este escenario en otros ámbitos. Por otra parte, el desafío es conseguir una convocatoria verdaderamente satisfactoria. La dificultad es recurrente en torno a la disponibilidad de los funcionarios para una capacitación (más allá del interés específico sobre el tema, en particular si la propuesta está en el área de competencia específica de cada legislador).<br>
La perspectiva del escenario puede no resultar de interés de una parte del Poder Judicial que no comprenda los cambios vigentes en materia de producción y transporte de drogas.`,
            impacto: 'bajo',
            presupuesto: 'alto',
            factibilidad: 'bajo',
            oportunidad: 'alto'
        },
        '2': {
            texto: `<strong>Objetivo</strong>: Capacitación de jueces<br>
<strong>Estrategia</strong>: Seminario Corrupción y Narcotráfico<br>
<strong>Ámbito de incidencia</strong>: Escuela Judicial de la República Argentina<br>
<br>
La organización tiene experiencia en esta clase de jornadas. Sin embargo, puede ser dificultoso abarcar un número significativo de jueces con disponibilidad para asistir al seminario.<br>
Los costos financieros son bajos, puesto que se aprovecharía el auditorio de la organización como sede del evento, y se prepararía la agenda en base a la preparación de los cuerpos profesionales con los que cuenta la organización. Sin embargo, no hay necesidad de recaudar fondos especiales ni de reclutar personal más allá del personal con los que ya cuenta la organización. Los voluntarios pueden encargarse de la convocatoria telefónica y por correo electrónico de los jueces.<br>
Si bien el proyecto puede pensarse de una forma sustentable, los problemas pueden originarse en las dificultades para coordinar una fecha que resulte conveniente a una masa considerable de asistentes. La notoriedad pública de la iniciativa es limitada por la naturaleza jurídica de la misma. Sin embargo, el tema de la corrupción  está instalado como tema de discusión pública, por lo que imaginar una estrategia atractiva puede colaborar con la realización y la difusión del evento.`,
            impacto: 'bajo',
            presupuesto: 'medio',
            factibilidad: 'bajo',
            oportunidad: 'alto'
        },
        '3': {
            texto: `<strong>Objetivo</strong>: Entrenamiento de fuerzas de seguridad<br>
<strong>Estrategia</strong>: Cooperación con organismos del exterior<br>
para intercambiar experiencias de entrenamiento<br>
<strong>Ámbito de incidencia</strong>:  Centro de Coordinación de Capacitación<br>
Policial para el MERCOSUR (CCCP)<br>
<br>
La organización tiene cierta experiencia en esta clase de iniciativas de cooperación internacional.<br>
Los costos financieros son bajos, la organización puede utilizar su know how en materia de cooperación. No hay necesidad de sumar voluntarios, aunque sí, tal vez, un profesional con conocimientos específicos sobre fuerzas policiales que fortalezca la perspectiva de la organización.<br>
La visibilidad de la iniciativa puede multiplicarse por los países cuyas experiencias se intercambian con las del caso nacional. Se puede elaborar un cronograma viable y con objetivos sustentables. El mayor costo puede vincularse a la coordinación de los viajes para tratar estos temas delicados con otros organismos del exterior.<br>
La iniciativa puede lograr una buena repercusión en lo que respecta a la formación de fuerzas de seguridad.`,
            impacto: 'medio',
            presupuesto: 'alto',
            factibilidad: 'medio',
            oportunidad: 'alto'
        }
    }
};
