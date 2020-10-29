import React from "react";
import { ScrollView, View } from "react-native";
import Event from "../../components/events/event.component";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from "moment"

const Tab = createMaterialTopTabNavigator();

/* const actions = [
  {
    text: "Accessibility",
    // icon: require("./images/ic_accessibility_white.png"),
    name: "bt_accessibility",
    position: 2,
  },
  {
    text: "Language",
    // icon: require("./images/ic_language_white.png"),
    name: "bt_language",
    position: 1,
  },
  {
    text: "Location",
    // icon: require("./images/ic_room_white.png"),
    name: "bt_room",
    position: 3,
  },
  {
    text: "Video",
    // icon: require("./images/ic_videocam_white.png"),
    name: "bt_videocam",
    position: 4,
  },
]; */

const EventListScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming Events" component={ UpcomingEvents } style={ { fontSize: 30 } } />
      <Tab.Screen name="Previous Events" component={ PreviousEvents } style={ { fontSize: 20 } } />
    </Tab.Navigator>
  );
};

export default EventListScreen;


const UpcomingEvents = (props) => {
  const events = upcomingEventsData.map((event, index) => {
    return (
      <Event key={ event.id } event={ event } odd={ index % 2 } { ...props }></Event>
    );
  });

  return (
    <ScrollView>{ events }</ScrollView>
  )
}

const PreviousEvents = (props) => {
  const events = previousEventsData.map((event, index) => {
    return (
      <Event key={ event.id } event={ event } odd={ index % 2 } { ...props }></Event>
    );
  });

  return (
    <View>
      <ScrollView>{ events }</ScrollView>
      {/*       <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
        position="right"
        distanceToEdge={{ vertical: -60, horizontal: 10 }}
      /> */}
    </View>
  );
};

const reallySoon = () => {
  return moment().add(30, 'seconds').format();
};

const upcomingEventsData = [
  {
    id: 2,
    image: require("./../../../assets/event2.png"),
    date: `${reallySoon()}`,
    content: `Andrés Nieves, Technical Lead y Developer de #EndavaInMontevideo nos compartirá sus conocimientos sobre "Mutation Testing" el viernes 24/4 a las 15 h ARG/URU - 13 h COL - 14 h VZL.
        Hará una breve intro técnica sobre cómo utilizarlo para mejorar los Unit Tests y también explicará cómo puede Mutation Testing llevar a mejorar el diseño y la calidad de nuestro software.
        ¡No se lo pierdan!
        #EndavaTrainings #conocimientocompartido #Testing #WorkAtEndava #QuedateEnCasa`,
    enrolled: false,
    online: true,
    linkOnline: 'https://teams.microsoft.com/l/entity/',
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 3,
    image: require("./../../../assets/event3.png"),
    // date: "2020-10-20T03:00:00.000Z",
    date: `${reallySoon()}`,
    content: `#Webstories Seguimos con #Microservicios
        La semana pasada tuvimos una introducción al mundo de los microservicios de la mano de Radu Vunvulea. En la sesión de este jueves seguiremos profundizando el tema con los conceptos fundamentales del patrón de diseño CQRS. Veremos cómo aplicarlo en un microservicio utilizando #ASP .NET CORE.
        Y además les acercaremos la librería MediaTR de C#. "Les mostraré cómo usarla para implementar el patrón Mediator que es de mucha ayuda cuando implementamos CQRS", nos adelanta Yanara Valdés Gil, nuestra Senior Developer de #EndavaInMontevideo y speaker del encuentro.
        Como todas las propuestas de este ciclo, esta también es gratis. Reserven su lugar aquí: https://buff.ly/3hBVns0
        #EndavaTrainings #Webinar #Microservices #EndavaTalents`,
    enrolled: true,
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 4,
    image: require("./../../../assets/event4.png"),
    date: "2020-11-05T03:00:00.000Z",
    content: `👉 ¡Todos invitados a la séptima entrega de #WebStories!
        El futuro llegó hace rato y es por eso que Jeremias Giglio, Tester en #EndavaInRosario, nos contará todo acerca de los beneficios de aplicar Inteligencia Artificial en #Testing.
        📅¿Cuándo? Miércoles 20/5, 17 h ARG y URU, 16 h VZLA y 15 h COL.
        🔗 Inscripciones en este link: https://bit.ly/3fH3d3F
        ¡Sigamos compartiendo conocimientos juntos!
        #EndavaTrainings #IA #AI #WorkAtEndava #EndavansWorkFromHome #compartiendoconocimiento`,
    enrolled: true,
    online: true,
    linkOnline: 'https://teams.microsoft.com/l/entity/',
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 5,
    image: require("./../../../assets/event5.png"),
    date: "2020-11-11T03:00:00.000Z",
    content: `#Kubernetes se está convirtiendo en el motor de orquestación de contenedores por defecto. Ahora bien ¿qué es?, ¿cómo funciona? ¿qué deberíamos saber del mismo?
        Jairo Correa, Senior DevOps Consultant de EndavaInBogotá responderá estas y otras preguntas en el próximo #Webstories.
        También junto a él echaremos un vistazo a la definición de contenedores y su debida evolución a través del concepto de namespaces, ¡así podremos entender algo de las abstracciones en Kubernetes!
        Todo desde un entorno de Sandbox para que los contenidos puedan verse con ejemplos concretos. ¿Se anotan?
        Jueves 23 de julio
        18 h COL - 20 h ARG - 19 h VZL
        Link de inscripción: https://bit.ly/3iVCmCp
        #Webinar #EndavaTrainings #Kubernets #Contenedores #ConocimientoCompartido`,
    enrolled: false,
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 6,
    image: require("./../../../assets/event6.png"),
    date: "2020-11-23T03:00:00.000Z",
    content: `#Kubernetes se está convirtiendo en el motor de orquestación de contenedores por defecto. Ahora bien ¿qué es?, ¿cómo funciona? ¿qué deberíamos saber del mismo?
        Jairo Correa, Senior DevOps Consultant de EndavaInBogotá responderá estas y otras preguntas en el próximo #Webstories.
        También junto a él echaremos un vistazo a la definición de contenedores y su debida evolución a través del concepto de namespaces, ¡así podremos entender algo de las abstracciones en Kubernetes!
        Todo desde un entorno de Sandbox para que los contenidos puedan verse con ejemplos concretos. ¿Se anotan?
        Jueves 23 de julio
        18 h COL - 20 h ARG - 19 h VZL
        Link de inscripción: https://bit.ly/3iVCmCp
        #Webinar #EndavaTrainings #Kubernets #Contenedores #ConocimientoCompartido`,
    enrolled: false,
    titleImage: require("./../../../assets/webstories.png"),
  }
];


const previousEventsData = [
  {
    id: 1,
    image: require("./../../../assets/event1.png"),
    date: "2020-04-28T03:00:00.000Z",
    content: `Juan Andres Absi, Technical Lead and Developer from Rosario, will present "Leaflet, a "JavaScript library" on Tuesday April 28th at 5:00pm ARG/URU, 3:00pm COL – 4:00pm VZL. 
    In this practical introduction, we will learn how to create interactive maps using Leaflet that, as well as being Open Source, is simple, lightweight and mobile friendly. 
    A "JavaScript library" on Tuesday April 28th at 5:00pm ARG/URU, 3:00pm COL – 4:00pm VZL`,

    enrolled: true,
    finished: true,
    linkVideo: 'https://www.youtube.com/watch?v=Y1tPyEim63A&list=PLjbWsoo02kUEl4sG8NaKbwMkFHQ5f0EwD&index=13',
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 7,
    image: require("./../../../assets/event7.png"),
    date: "2020-03-08T03:00:00.000Z",
    content: `#Kubernetes se está convirtiendo en el motor de orquestación de contenedores por defecto. Ahora bien ¿qué es?, ¿cómo funciona? ¿qué deberíamos saber del mismo?
        Jairo Correa, Senior DevOps Consultant de EndavaInBogotá responderá estas y otras preguntas en el próximo #Webstories.
        También junto a él echaremos un vistazo a la definición de contenedores y su debida evolución a través del concepto de namespaces, ¡así podremos entender algo de las abstracciones en Kubernetes!
        Todo desde un entorno de Sandbox para que los contenidos puedan verse con ejemplos concretos. ¿Se anotan?
        Jueves 23 de julio
        18 h COL - 20 h ARG - 19 h VZL
        Link de inscripción: https://bit.ly/3iVCmCp
        #Webinar #EndavaTrainings #Kubernets #Contenedores #ConocimientoCompartido`,
    enrolled: false,
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 8,
    image: require("./../../../assets/event8.png"),
    date: "2020-02-23T03:00:00.000Z",
    content: `#Kubernetes se está convirtiendo en el motor de orquestación de contenedores por defecto. Ahora bien ¿qué es?, ¿cómo funciona? ¿qué deberíamos saber del mismo?
        Jairo Correa, Senior DevOps Consultant de EndavaInBogotá responderá estas y otras preguntas en el próximo #Webstories.
        También junto a él echaremos un vistazo a la definición de contenedores y su debida evolución a través del concepto de namespaces, ¡así podremos entender algo de las abstracciones en Kubernetes!
        Todo desde un entorno de Sandbox para que los contenidos puedan verse con ejemplos concretos. ¿Se anotan?
        Jueves 23 de julio
        18 h COL - 20 h ARG - 19 h VZL
        Link de inscripción: https://bit.ly/3iVCmCp
        #Webinar #EndavaTrainings #Kubernets #Contenedores #ConocimientoCompartido`,
    enrolled: false,
    titleImage: require("./../../../assets/webstories.png"),
  },
  {
    id: 9,
    image: require("./../../../assets/event9.png"),
    date: "2020-01-08T03:00:00.000Z",
    content: `#Kubernetes se está convirtiendo en el motor de orquestación de contenedores por defecto. Ahora bien ¿qué es?, ¿cómo funciona? ¿qué deberíamos saber del mismo?
        Jairo Correa, Senior DevOps Consultant de EndavaInBogotá responderá estas y otras preguntas en el próximo #Webstories.
        También junto a él echaremos un vistazo a la definición de contenedores y su debida evolución a través del concepto de namespaces, ¡así podremos entender algo de las abstracciones en Kubernetes!
        Todo desde un entorno de Sandbox para que los contenidos puedan verse con ejemplos concretos. ¿Se anotan?
        Jueves 23 de julio
        18 h COL - 20 h ARG - 19 h VZL
        Link de inscripción: https://bit.ly/3iVCmCp
        #Webinar #EndavaTrainings #Kubernets #Contenedores #ConocimientoCompartido`,
    enrolled: false,
    titleImage: require("./../../../assets/webstories.png"),
  }
];