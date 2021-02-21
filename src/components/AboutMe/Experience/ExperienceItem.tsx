import * as React from "react"
import Timeline from "../../Timeline/Timeline"
import { Image } from "react-bulma-components"
import clsx from "clsx"
import { IWorkExperienceItem } from "data/WorkExperience"
import { useLocale } from "i18n/LocaleProvider"

const ExperienceItem = ({
    startDate,
    title,
    subtitle,
    marker,
    details,
}: IWorkExperienceItem) => {
    const locale = useLocale();
    const getMarker = () => (
        <Timeline.Marker
            // @ts-ignore
            color={marker.color}
            className={clsx(marker.image && "is-image is-32x32")}
        >
            {marker.image ? <Image src={marker.image} /> : null}
        </Timeline.Marker>
    )
    return (
        <Timeline.Item
            // @ts-ignore
            color={marker.color}
            marker={getMarker()}
        >
            <p className="heading">{startDate}</p>
            <div className="is-size-6">{title[locale]}</div>
            <div className="is-size-7">{subtitle}</div>
            <Timeline.Item.Details title={title[locale]} subtitle={subtitle}>
                <div dangerouslySetInnerHTML={{ __html: details[locale] }} style={{ textAlign: "left" }} />
            </Timeline.Item.Details>
        </Timeline.Item>
    )
}

export default ExperienceItem
