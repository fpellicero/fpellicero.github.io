import * as React from "react"
import clsx from "clsx"
import {
    Content,
    Modal,
    Button,
    Section,
    Heading,
} from "react-bulma-components"
import Collapse from "Transitions/Collapse/Collapse"
import { motion } from "framer-motion"
import { Trans } from "@lingui/macro"

interface ITimelineProps extends React.HTMLProps<HTMLDivElement> {}
const Timeline = ({ children, className, ...props }: ITimelineProps) => (
    <div className={`timeline ${className}`.trim()}>{children}</div>
)

interface ITimelineItemProps extends React.HTMLProps<HTMLDivElement> {
    color: "primary" | "danger" | "warning"
    marker?: React.ReactNode
}
const TimelineItem = ({
    children,
    color,
    marker,
    ...props
}: ITimelineItemProps) => {
    return (
        <div className={clsx("timeline-item", `is-${color}`)}>
            {marker}
            <div className="timeline-content">
                <Content>{children}</Content>
            </div>
        </div>
    )
}

const ModalContent = motion.custom(Modal.Content);
const TimelineItemDetails = ({ title, subtitle, children }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const renderDetail = () => {
        if (typeof window === "undefined") {
            return null
        }

        const media = window.matchMedia("(max-width: 768px)")

        if (media.matches) {
            return (
                <Modal
                    show={isOpen}
                    onClose={() => setIsOpen(false)}
                    closeOnBlur={true}
                    showClose={false}
                >
                    <motion.div
                        className="modal-content"
                        initial={{opacity: 0, translateY: 25}}
                        animate={{opacity: 1, translateY: 0}}
                        exit={{opacity: 0, translateY: 25}}
                        style={{ background: "white" }}
                    >
                        <Section>
                            <Content>
                                <Heading renderAs="h3">{title}</Heading>
                                <Heading subtitle renderAs="h3" size={6}>
                                    {subtitle}
                                </Heading>
                                <hr />
                                {children}
                            </Content>
                        </Section>
                        {/* </Modal.Content> */}
                    </motion.div>
                </Modal>
            )
        }

        return (
            <Collapse visible={isOpen} timeout={300}>
                <hr />
                {children}
            </Collapse>
        )
    }

    return (
        <>
            <Button
                paddingless
                size="small"
                text
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen && (
                    <Trans>
                        See less
                    </Trans>
                )}
                {!isOpen && (
                    <Trans>
                        See more
                    </Trans>
                )}
            </Button>
            {renderDetail()}
        </>
    )
}

TimelineItem.Details = TimelineItemDetails

interface ITimelineMarkerProps {
    color: "primary" | "danger" | "warning"
    className?: string
    isImage?: boolean
    children?: React.ReactNode
}
const TimelineMarker = ({
    children,
    color,
    className = "",
    isImage = false,
}: ITimelineMarkerProps) => {
    return (
        <div
            className={clsx(
                "timeline-marker",
                `is-${color}`,
                isImage && "is-image",
                className
            )}
        >
            {children}
        </div>
    )
}

interface ITimelineHeaderProps {
    color: "danger" | "warning" | "primary"
    children: React.ReactNode
}
const TimelineHeader = ({ children, color }: ITimelineHeaderProps) => {
    return (
        <header className="timeline-header">
            <span className={`tag is-medium is-${color}`}>{children}</span>
        </header>
    )
}

Timeline.Item = TimelineItem
Timeline.Header = TimelineHeader
Timeline.Marker = TimelineMarker

export default Timeline
