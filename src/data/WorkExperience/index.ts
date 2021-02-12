import LogoTiendeo from "./Tiendeo/tiendeo_icon.png";
import TiendeoLeadDescription from "./Tiendeo/lead.html";
import TiendeoSeniorDescription from "./Tiendeo/senior.html";
import TiendeoJuniorDescription from "./Tiendeo/junior.html";
import AtrapaloDescription from "./atrapalo.html";
import EsdiDescription from "./esdi.html";
import EquilibriDescription from "./equilibri.html";

export interface IWorkExperienceItem {
    startDate: string;
    title: string;
    subtitle: string;
    marker: {
        color: "primary" | "danger" | "warning" | "success";
        image?: string;
    }
    details: string;
}

const workExperience: IWorkExperienceItem[] = [
    {
        "startDate": "October 2018",
        "title": "Lead Frontend Engineer",
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": TiendeoLeadDescription,
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "July 2018",
        "title": "Senior Frontend Developer",
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": TiendeoSeniorDescription,
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "January 2018",
        "title": "Frontend Developer",
        "subtitle": "Atrápalo S.L",
        "details": AtrapaloDescription,
        "marker": {
            "color": "warning"
        }
    },
    {
        "startDate": "September 2017 - December 2018",
        "title": "Frontend Teacher",
        "subtitle": "ESDi School of Design",
        "details": EsdiDescription,
        "marker": {
            "color": "success"
        }
    },
    {
        "startDate": "September 2014",
        "title": "Junior Software Developer",
        "subtitle": "Tiendeo Web Marketing S.L",
        "details": TiendeoJuniorDescription,
        "marker": {
            "image": LogoTiendeo,
            "color": "danger"
        }
    },
    {
        "startDate": "February 2013",
        "title": "Software Developer Intern",
        "subtitle": "Fundació Equilibi",
        "details": EquilibriDescription,
        "marker": {
            "color": "primary"
        }
    }
];

export default workExperience;