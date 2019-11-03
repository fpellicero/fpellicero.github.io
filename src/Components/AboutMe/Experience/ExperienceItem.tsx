import * as React from "react";
import { IWorkExperience } from "../../../hooks/useWorkExperienceItems";
import Timeline from "../../Timeline/Timeline";
import {Image} from "react-bulma-components";
import clsx from "clsx";

const ExperienceItem = ({
    startDate,
    title,
    subtitle,
    marker,
    details
}: IWorkExperience) => {
    const getMarker = () => (
        <Timeline.Marker 
            color={marker.color} 
            className={clsx(marker.image && "is-image is-32x32")}
        >
            {marker.image 
                ? <Image src={marker.image.publicURL}/> 
                :  null
            }
        </Timeline.Marker>
    )
    return (
        <Timeline.Item
          color={marker.color}
          marker={getMarker()}
        >
          <p className="heading">{startDate}</p>
          <div className="is-size-6">{title}</div>
          <div className="is-size-7">{subtitle}</div>
          <Timeline.Item.Details
            title={title}
            subtitle={subtitle}
          >
            <div dangerouslySetInnerHTML={{__html: details}}/>
          </Timeline.Item.Details>
        </Timeline.Item>
    )
}

export default ExperienceItem;
