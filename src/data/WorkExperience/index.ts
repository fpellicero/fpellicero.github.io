import LogoTiendeo from "./Tiendeo/tiendeo_icon.png";

import TiendeoLeadDescriptionEN from "./Tiendeo/lead.en.html";
import TiendeoLeadDescriptionES from "./Tiendeo/lead.es.html";

import TiendeoSeniorDescriptionEN from "./Tiendeo/senior.en.html";
import TiendeoSeniorDescriptionES from "./Tiendeo/senior.es.html";

import TiendeoJuniorDescriptionEN from "./Tiendeo/junior.en.html";
import TiendeoJuniorDescriptionES from "./Tiendeo/junior.es.html";

import AtrapaloDescriptionEN from "./atrapalo.en.html";
import AtrapaloDescriptionES from "./atrapalo.es.html";

import EsdiDescriptionES from "./esdi.es.html";
import EsdiDescriptionEN from "./esdi.en.html";

import EquilibriDescriptionEN from "./equilibri.en.html";
import EquilibriDescriptionES from "./equilibri.es.html";

type LocalizedValue = {
    es: string;
    en: string;
}

export interface IWorkExperienceItem {
    startDate: string;
    title: LocalizedValue;
    subtitle: string;
    marker: {
        color: "primary" | "danger" | "warning" | "success";
        image?: string;
    }
    details: LocalizedValue;
}

const workExperience: IWorkExperienceItem[] = [
    {
        "startDate": "October 2018",
        "title": {
            "en": "Engineering Team Lead",
            "es": "Líder de equipo"
        },
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": {
            "en": TiendeoLeadDescriptionEN,
            "es": TiendeoLeadDescriptionES,
        },
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "July 2018",
        "title": {
            "en": "Senior Frontend Developer",
            "es": "Desarrollador Frontend Senior"
        },
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": {
            "en": TiendeoSeniorDescriptionEN,
            "es": TiendeoSeniorDescriptionES
        },
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "January 2018",
        "title": {
            "en": "Frontend Developer",
            "es": "Desarrollador Frontend"
        },
        "subtitle": "Atrápalo S.L",
        "details": {
            "en": AtrapaloDescriptionEN,
            "es": AtrapaloDescriptionES
        },
        "marker": {
            "color": "warning"
        }
    },
    {
        "startDate": "September 2017 - December 2018",
        "title": {
            "en": "Frontend Teacher",
            "es": "Profesor de Desarrollo Frontend"
        },
        "subtitle": "ESDi School of Design",
        "details": {
            "en": EsdiDescriptionEN,
            "es": EsdiDescriptionES
        },
        "marker": {
            "color": "success"
        }
    },
    {
        "startDate": "September 2014",
        "title": {
            "en": "Junior Software Developer",
            "es": "Desarrollador de Software Junior"
        },
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": {
            "en": TiendeoJuniorDescriptionEN,
            "es": TiendeoJuniorDescriptionES
        },
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "February 2013",
        "title": {
            en: "Software Developer Intern",
            es: "Becario"
        },
        "subtitle": "Fundació Equilibi",
        "details": {
            "en": EquilibriDescriptionEN,
            "es": EquilibriDescriptionES
        },
        "marker": {
            "color": "primary"
        }
    }
];

export default workExperience;