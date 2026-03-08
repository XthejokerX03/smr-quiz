// ============================================
// PREGUNTAS COMPLETAS PARA SEGUNDO AÑO
// ============================================

// SISTEMAS OPERATIVOS EN RED
questions.sistemasred_facil = [
  {
    q:
      "¿Qué servicio de directorio de Microsoft gestiona usuarios y recursos en red?",
    a: ["active directory"],
    points: 10
  },
  {
    q: "¿Qué protocolo se usa para transferir archivos en redes Windows?",
    a: ["smb", "cifs"],
    points: 10
  },
  {
    q: "¿Qué herramienta de Windows administra usuarios y grupos?",
    a: ["active directory users and computers"],
    points: 10
  },
  {
    q: "¿Qué servicio asigna direcciones IP automáticamente en Windows Server?",
    a: ["dhcp"],
    points: 10
  },
  {
    q: "¿Qué comando comprueba conectividad con otro equipo?",
    a: ["ping"],
    points: 10
  },
  {
    q: "¿Qué sistema de archivos permite permisos avanzados en Windows Server?",
    a: ["ntfs"],
    points: 10
  },
  {
    q: "¿Qué servicio resuelve nombres de dominio a direcciones IP?",
    a: ["dns"],
    points: 10
  },
  {
    q: "¿Qué tipo de servidor almacena perfiles de usuarios móviles?",
    a: ["servidor de perfiles moviles"],
    points: 10
  },
  {
    q: "¿Qué tecnología permite acceder a escritorios remotos?",
    a: ["remote desktop services"],
    points: 10
  },
  {
    q: "¿Qué herramienta monitoriza eventos del sistema?",
    a: ["visor de eventos"],
    points: 10
  }
];

questions.sistemasred_medio = [
  {
    q: "¿Qué es un controlador de dominio en Active Directory?",
    a: ["servidor que autentica usuarios"],
    points: 15
  },
  {
    q: "¿Qué es un bosque en Active Directory?",
    a: ["coleccion de arboles de dominio"],
    points: 15
  },
  {
    q: "¿Qué protocolo autentica usuarios en dominio?",
    a: ["kerberos"],
    points: 15
  },
  {
    q: "¿Qué son las GPO en Windows Server?",
    a: ["group policy objects"],
    points: 15
  },
  {
    q: "¿Qué servicio sincroniza hora en red?",
    a: ["windows time service"],
    points: 15
  },
  {
    q: "¿Qué herramienta crea y gestiona unidades organizativas?",
    a: ["active directory users and computers"],
    points: 15
  },
  {
    q: "¿Qué es la replicación en Active Directory?",
    a: ["sincronizacion entre controladores"],
    points: 15
  },
  {
    q: "¿Qué comando administra Active Directory desde línea de comandos?",
    a: ["dsquery"],
    points: 15
  },
  {
    q: "¿Qué servicio permite acceso web a carpetas compartidas?",
    a: ["webdav"],
    points: 15
  },
  {
    q: "¿Qué herramienta configura seguridad de red?",
    a: ["windows defender firewall"],
    points: 15
  }
];

questions.sistemasred_dificil = [
  {
    q: "¿Qué comando diagnostica problemas de DNS?",
    a: ["nslookup"],
    points: 20
  },
  {
    q: "¿Qué es FSMO en Active Directory?",
    a: ["flexible single master operations"],
    points: 20
  },
  {
    q: "¿Qué roles FSMO existen?",
    a: [
      "schema master",
      "domain naming master",
      "rid master",
      "pdc emulator",
      "infrastructure master"
    ],
    points: 20
  },
  {
    q: "¿Qué herramienta migra usuarios entre dominios?",
    a: ["active directory migration tool"],
    points: 20
  },
  {
    q: "¿Qué es un sitio en Active Directory?",
    a: ["agrupacion de redes por ubicacion"],
    points: 20
  },
  {
    q: "¿Qué protocolo gestiona certificados digitales?",
    a: ["pkix"],
    points: 20
  },
  {
    q: "¿Qué servicio proporciona certificados en Windows?",
    a: ["active directory certificate services"],
    points: 20
  },
  {
    q: "¿Qué herramienta monitoriza rendimiento de servidores?",
    a: ["performance monitor"],
    points: 20
  },
  {
    q: "¿Qué es DFS en Windows Server?",
    a: ["distributed file system"],
    points: 20
  },
  {
    q: "¿Qué comando fuerza sincronización de GPO?",
    a: ["gpupdate /force"],
    points: 20
  }
];

// SEGURIDAD INFORMÁTICA
questions.seguridad_facil = [
  {
    q: "¿Qué es un firewall?",
    a: ["sistema que controla trafico de red"],
    points: 10
  },
  { q: "¿Qué es malware?", a: ["software malicioso"], points: 10 },
  { q: "¿Qué es phishing?", a: ["suplantacion de identidad"], points: 10 },
  {
    q: "¿Qué es un antivirus?",
    a: ["programa que detecta malware"],
    points: 10
  },
  {
    q: "¿Qué es una contraseña segura?",
    a: ["clave dificil de adivinar"],
    points: 10
  },
  {
    q: "¿Qué es el cifrado de datos?",
    a: ["proteccion de informacion"],
    points: 10
  },
  { q: "¿Qué es una VPN?", a: ["red privada virtual"], points: 10 },
  {
    q: "¿Qué es autenticación de dos factores?",
    a: ["doble verificacion de identidad"],
    points: 10
  },
  {
    q: "¿Qué son las actualizaciones de seguridad?",
    a: ["parches para vulnerabilidades"],
    points: 10
  },
  { q: "¿Qué es un backup?", a: ["copia de seguridad"], points: 10 }
];

questions.seguridad_medio = [
  {
    q: "¿Qué es un ataque DDoS?",
    a: ["denegacion de servicio distribuida"],
    points: 15
  },
  { q: "¿Qué es SQL injection?", a: ["inyeccion de codigo sql"], points: 15 },
  { q: "¿Qué es XSS?", a: ["cross-site scripting"], points: 15 },
  { q: "¿Qué es un IDS?", a: ["sistema de deteccion de intrusos"], points: 15 },
  {
    q: "¿Qué es un IPS?",
    a: ["sistema de prevencion de intrusos"],
    points: 15
  },
  {
    q: "¿Qué es criptografía asimétrica?",
    a: ["clave publica y privada"],
    points: 15
  },
  {
    q: "¿Qué es un certificado digital?",
    a: ["credencial electronica"],
    points: 15
  },
  { q: "¿Qué es pentesting?", a: ["pruebas de penetracion"], points: 15 },
  { q: "¿Qué es hardening?", a: ["fortalecimiento de sistemas"], points: 15 },
  { q: "¿Qué es un honey pot?", a: ["trampa para atacantes"], points: 15 }
];

questions.seguridad_dificil = [
  {
    q: "¿Qué es un ataque Man-in-the-Middle?",
    a: ["intercepcion de comunicaciones"],
    points: 20
  },
  {
    q: "¿Qué es OWASP?",
    a: ["open web application security project"],
    points: 20
  },
  {
    q: "¿Qué es un hash en criptografía?",
    a: ["funcion matematica irreversible"],
    points: 20
  },
  { q: "¿Qué algoritmo de cifrado es simétrico?", a: ["aes"], points: 20 },
  {
    q: "¿Qué es un token de seguridad?",
    a: ["dispositivo de autenticacion"],
    points: 20
  },
  {
    q: "¿Qué es la norma ISO 27001?",
    a: ["estandar de seguridad de la informacion"],
    points: 20
  },
  {
    q: "¿Qué es un SIEM?",
    a: ["sistema de gestion de eventos de seguridad"],
    points: 20
  },
  {
    q: "¿Qué es la autenticación biométrica?",
    a: ["uso de caracteristicas biologicas"],
    points: 20
  },
  {
    q: "¿Qué es el principio de menor privilegio?",
    a: ["solo permisos necesarios"],
    points: 20
  },
  {
    q: "¿Qué herramienta analiza paquetes de red?",
    a: ["wireshark"],
    points: 20
  }
];

// SERVICIOS EN RED
questions.servicios_facil = [
  {
    q: "¿Qué servicio web sirve páginas HTML?",
    a: ["iis", "apache", "nginx"],
    points: 10
  },
  { q: "¿Qué protocolo envía correos electrónicos?", a: ["smtp"], points: 10 },
  {
    q: "¿Qué protocolo recibe correos electrónicos?",
    a: ["pop3", "imap"],
    points: 10
  },
  { q: "¿Qué servicio comparte archivos en red?", a: ["ftp"], points: 10 },
  {
    q: "¿Qué es un servidor proxy?",
    a: ["intermediario entre cliente y servidor"],
    points: 10
  },
  {
    q: "¿Qué es DHCP?",
    a: ["protocolo configuracion dinamica de host"],
    points: 10
  },
  { q: "¿Qué es DNS?", a: ["sistema de nombres de dominio"], points: 10 },
  {
    q: "¿Qué servicio permite acceso remoto a equipos?",
    a: ["ssh", "telnet"],
    points: 10
  },
  {
    q: "¿Qué es un servidor de impresión?",
    a: ["gestiona colas de impresion"],
    points: 10
  },
  { q: "¿Qué es NTP?", a: ["protocolo de tiempo de red"], points: 10 }
];

questions.servicios_medio = [
  { q: "¿Qué puerto usa HTTP?", a: ["80"], points: 15 },
  { q: "¿Qué puerto usa HTTPS?", a: ["443"], points: 15 },
  { q: "¿Qué puerto usa FTP?", a: ["21"], points: 15 },
  { q: "¿Qué puerto usa SSH?", a: ["22"], points: 15 },
  { q: "¿Qué puerto usa SMTP?", a: ["25"], points: 15 },
  {
    q: "¿Qué es un servidor de aplicaciones?",
    a: ["ejecuta aplicaciones empresariales"],
    points: 15
  },
  {
    q: "¿Qué es un balanceador de carga?",
    a: ["distribuye trafico entre servidores"],
    points: 15
  },
  {
    q: "¿Qué es un clúster de servidores?",
    a: ["conjunto de servidores trabajando juntos"],
    points: 15
  },
  {
    q: "¿Qué es virtual hosting?",
    a: ["multiple sitios web en un servidor"],
    points: 15
  },
  { q: "¿Qué es SNMP?", a: ["protocolo simple de gestion de red"], points: 15 }
];

questions.servicios_dificil = [
  {
    q: "¿Qué es un servidor de terminales?",
    a: ["proporciona escritorios virtuales"],
    points: 20
  },
  {
    q: "¿Qué es un sistema de alta disponibilidad?",
    a: ["servicio continuo sin interrupcion"],
    points: 20
  },
  {
    q: "¿Qué es failover?",
    a: ["cambio automatico a sistema redundante"],
    points: 20
  },
  {
    q: "¿Qué es un servidor de virtualización?",
    a: ["ejecuta multiples maquinas virtuales"],
    points: 20
  },
  {
    q: "¿Qué es Hyper-V?",
    a: ["sistema de virtualizacion de microsoft"],
    points: 20
  },
  {
    q: "¿Qué es vSphere?",
    a: ["plataforma de virtualizacion de vmware"],
    points: 20
  },
  {
    q: "¿Qué es un contenedor Docker?",
    a: ["entorno aislado para aplicaciones"],
    points: 20
  },
  { q: "¿Qué es Kubernetes?", a: ["orquestador de contenedores"], points: 20 },
  {
    q: "¿Qué es un servidor de bases de datos?",
    a: ["gestiona bases de datos relacionales"],
    points: 20
  },
  {
    q: "¿Qué es un servidor de correo exchange?",
    a: ["servidor de correo de microsoft"],
    points: 20
  }
];

// APLICACIONES WEB
questions.web_facil = [
  { q: "¿Qué es HTML?", a: ["lenguaje de marcado de hipertexto"], points: 10 },
  { q: "¿Qué es CSS?", a: ["hojas de estilo en cascada"], points: 10 },
  { q: "¿Qué es JavaScript?", a: ["lenguaje de programacion web"], points: 10 },
  {
    q: "¿Qué es un navegador web?",
    a: ["programa para ver paginas web"],
    points: 10
  },
  {
    q: "¿Qué es un servidor web?",
    a: ["sirve contenido web a clientes"],
    points: 10
  },
  {
    q: "¿Qué es una URL?",
    a: ["localizador uniforme de recursos"],
    points: 10
  },
  {
    q: "¿Qué es HTTP?",
    a: ["protocolo de transferencia de hipertexto"],
    points: 10
  },
  { q: "¿Qué es HTTPS?", a: ["http seguro con cifrado"], points: 10 },
  {
    q: "¿Qué es un formulario web?",
    a: ["interfaz para entrada de datos"],
    points: 10
  },
  {
    q: "¿Qué es una cookie?",
    a: ["dato almacenado en el navegador"],
    points: 10
  }
];

questions.web_medio = [
  {
    q: "¿Qué es PHP?",
    a: ["lenguaje de programacion web del lado servidor"],
    points: 15
  },
  {
    q: "¿Qué es MySQL?",
    a: ["sistema de gestion de bases de datos"],
    points: 15
  },
  { q: "¿Qué es Apache?", a: ["servidor web open source"], points: 15 },
  {
    q: "¿Qué es un framework web?",
    a: ["conjunto de herramientas para desarrollo web"],
    points: 15
  },
  {
    q: "¿Qué es responsive design?",
    a: ["diseno que se adapta a dispositivos"],
    points: 15
  },
  { q: "¿Qué es jQuery?", a: ["biblioteca de javascript"], points: 15 },
  {
    q: "¿Qué es Bootstrap?",
    a: ["framework css para diseno responsive"],
    points: 15
  },
  {
    q: "¿Qué es AJAX?",
    a: ["tecnica para actualizar paginas sin recargar"],
    points: 15
  },
  { q: "¿Qué es JSON?", a: ["formato de intercambio de datos"], points: 15 },
  {
    q: "¿Qué es un servidor de aplicaciones web?",
    a: ["ejecuta logicas de negocio web"],
    points: 15
  }
];

questions.web_dificil = [
  {
    q: "¿Qué es Node.js?",
    a: ["entorno de ejecucion javascript servidor"],
    points: 20
  },
  {
    q: "¿Qué es React?",
    a: ["biblioteca javascript para interfaces"],
    points: 20
  },
  {
    q: "¿Qué es Angular?",
    a: ["framework javascript para aplicaciones web"],
    points: 20
  },
  { q: "¿Qué es Vue.js?", a: ["framework javascript progresivo"], points: 20 },
  {
    q: "¿Qué es una API REST?",
    a: ["interfaz de programacion de aplicaciones"],
    points: 20
  },
  { q: "¿Qué es GraphQL?", a: ["lenguaje de consulta para apis"], points: 20 },
  {
    q: "¿Qué es WebSocket?",
    a: ["protocolo de comunicacion bidireccional"],
    points: 20
  },
  { q: "¿Qué es un PWA?", a: ["aplicacion web progresiva"], points: 20 },
  {
    q: "¿Qué es un servidor de caché?",
    a: ["almacena contenido para rapido acceso"],
    points: 20
  },
  { q: "¿Qué es un CDN?", a: ["red de distribucion de contenido"], points: 20 }
];

// EMPLEABILIDAD II
questions.empleabilidad2_facil = [
  {
    q: "¿Qué es un currículum vitae?",
    a: ["documento que resume experiencia laboral"],
    points: 10
  },
  {
    q: "¿Qué es una carta de presentación?",
    a: ["documento que acompaña al cv"],
    points: 10
  },
  { q: "¿Qué es LinkedIn?", a: ["red social profesional"], points: 10 },
  {
    q: "¿Qué es una entrevista de trabajo?",
    a: ["conversacion para evaluar candidato"],
    points: 10
  },
  {
    q: "¿Qué son habilidades blandas?",
    a: ["competencias interpersonales"],
    points: 10
  },
  {
    q: "¿Qué es networking profesional?",
    a: ["construccion de red de contactos"],
    points: 10
  },
  {
    q: "¿Qué es un contrato laboral?",
    a: ["acuerdo entre empleador y empleado"],
    points: 10
  },
  { q: "¿Qué es nómina?", a: ["documento de pago de salarios"], points: 10 },
  {
    q: "¿Qué es trabajo en equipo?",
    a: ["colaboracion entre personas"],
    points: 10
  },
  {
    q: "¿Qué es comunicación efectiva?",
    a: ["transmision clara de ideas"],
    points: 10
  }
];

questions.empleabilidad2_medio = [
  {
    q: "¿Qué es un portafolio profesional?",
    a: ["coleccion de trabajos realizados"],
    points: 15
  },
  {
    q: "¿Qué es una carta de recomendación?",
    a: ["documento que avala habilidades"],
    points: 15
  },
  {
    q: "¿Qué es un perfil profesional?",
    a: ["descripcion de habilidades y experiencia"],
    points: 15
  },
  {
    q: "¿Qué es marca personal?",
    a: ["percepcion que otros tienen de ti"],
    points: 15
  },
  {
    q: "¿Qué es inteligencia emocional?",
    a: ["habilidad para gestionar emociones"],
    points: 15
  },
  { q: "¿Qué es liderazgo?", a: ["capacidad para guiar a otros"], points: 15 },
  {
    q: "¿Qué es trabajo remoto?",
    a: ["trabajar desde fuera de la oficina"],
    points: 15
  },
  {
    q: "¿Qué es teletrabajo?",
    a: ["trabajo a distancia usando tecnologia"],
    points: 15
  },
  {
    q: "¿Qué es un plan de carrera?",
    a: ["ruta de desarrollo profesional"],
    points: 15
  },
  {
    q: "¿Qué es formación continua?",
    a: ["aprendizaje constante a lo largo de la vida"],
    points: 15
  }
];

questions.empleabilidad2_dificil = [
  {
    q: "¿Qué es el método STAR en entrevistas?",
    a: ["situacion, tarea, accion, resultado"],
    points: 20
  },
  {
    q: "¿Qué es un elevator pitch?",
    a: ["presentacion breve y persuasiva"],
    points: 20
  },
  {
    q: "¿Qué es mentoring profesional?",
    a: ["guia de experto a aprendiz"],
    points: 20
  },
  {
    q: "¿Qué es coaching ejecutivo?",
    a: ["acompanamiento para desarrollo directivo"],
    points: 20
  },
  {
    q: "¿Qué es un assessment center?",
    a: ["evaluacion de competencias mediante pruebas"],
    points: 20
  },
  {
    q: "¿Qué es outplacement?",
    a: ["servicio de recolocacion laboral"],
    points: 20
  },
  {
    q: "¿Qué es un contrato de alta dirección?",
    a: ["acuerdo para puestos directivos"],
    points: 20
  },
  {
    q: "¿Qué es equity en compensación?",
    a: ["participacion en propiedad de la empresa"],
    points: 20
  },
  {
    q: "¿Qué es un convenio colectivo?",
    a: ["acuerdo laboral sectorial"],
    points: 20
  },
  {
    q: "¿Qué es un ERE?",
    a: ["expediente de regulacion de empleo"],
    points: 20
  }
];

// PROYECTO INTERMODULAR
questions.proyecto_facil = [
  {
    q: "¿Qué es un proyecto?",
    a: ["conjunto de actividades para un objetivo"],
    points: 10
  },
  {
    q: "¿Qué es la planificación de proyectos?",
    a: ["definir como se ejecutara el proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un cronograma?",
    a: ["calendario de actividades del proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un presupuesto de proyecto?",
    a: ["estimacion de costos del proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un equipo de proyecto?",
    a: ["grupo de personas que trabaja en el proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un entregable?",
    a: ["resultado tangible del proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un stakeholder?",
    a: ["interesado o afectado por el proyecto"],
    points: 10
  },
  {
    q: "¿Qué es un riesgo en proyectos?",
    a: ["evento que puede afectar al proyecto"],
    points: 10
  },
  {
    q: "¿Qué es seguimiento de proyectos?",
    a: ["control del progreso del proyecto"],
    points: 10
  },
  {
    q: "¿Qué es cierre de proyecto?",
    a: ["finalizacion formal del proyecto"],
    points: 10
  }
];

questions.proyecto_medio = [
  {
    q: "¿Qué es el ciclo de vida de un proyecto?",
    a: ["fases por las que pasa un proyecto"],
    points: 15
  },
  { q: "¿Qué es PMI?", a: ["project management institute"], points: 15 },
  {
    q: "¿Qué es PMBOK?",
    a: ["guia de los fundamentos de direccion de proyectos"],
    points: 15
  },
  {
    q: "¿Qué es gestión de alcance?",
    a: ["definir y controlar lo que incluye el proyecto"],
    points: 15
  },
  {
    q: "¿Qué es gestión del tiempo en proyectos?",
    a: ["planificar y controlar el cronograma"],
    points: 15
  },
  {
    q: "¿Qué es gestión de costos?",
    a: ["planificar y controlar el presupuesto"],
    points: 15
  },
  {
    q: "¿Qué es gestión de calidad?",
    a: ["asegurar que el proyecto cumple requisitos"],
    points: 15
  },
  {
    q: "¿Qué es un diagrama de Gantt?",
    a: ["representacion grafica del cronograma"],
    points: 15
  },
  {
    q: "¿Qué es un diagrama de red?",
    a: ["representacion de dependencias entre actividades"],
    points: 15
  },
  {
    q: "¿Qué es la ruta crítica?",
    a: ["secuencia de actividades que determina la duracion"],
    points: 15
  }
];

questions.proyecto_dificil = [
  {
    q: "¿Qué es un WBS?",
    a: ["estructura de desglose del trabajo"],
    points: 20
  },
  {
    q: "¿Qué es gestión ágil de proyectos?",
    a: ["metodologia flexible e iterativa"],
    points: 20
  },
  {
    q: "¿Qué es Scrum?",
    a: ["metodologia agil para gestion de proyectos"],
    points: 20
  },
  {
    q: "¿Qué es un sprint en Scrum?",
    a: ["iteracion de trabajo de tiempo fijo"],
    points: 20
  },
  {
    q: "¿Qué es Kanban?",
    a: ["metodologia visual para gestion de flujo de trabajo"],
    points: 20
  },
  {
    q: "¿Qué es un product backlog?",
    a: ["lista de funcionalidades del producto"],
    points: 20
  },
  {
    q: "¿Qué es un sprint backlog?",
    a: ["tareas a completar en un sprint"],
    points: 20
  },
  {
    q: "¿Qué es un tablero Kanban?",
    a: ["visualizacion del flujo de trabajo"],
    points: 20
  },
  {
    q: "¿Qué es gestión de valor ganado?",
    a: ["tecnica para medir progreso del proyecto"],
    points: 20
  },
  {
    q: "¿Qué es PRINCE2?",
    a: ["metodologia de gestion de proyectos"],
    points: 20
  }
];
// Corrección de declaración de variables
let gameState = null; // Añadido 'let' faltante

// Corrección de funciones
function toggleChatbot() {
  // Eliminada duplicación
  chatbot.toggle();
}

// Inicialización corregida
document.addEventListener("DOMContentLoaded", () => {
  init();
  startMatrixRain();
  chatbot.init(); // Añadida inicialización del chatbot
});
