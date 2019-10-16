import * as React from "react";
import clsx from "clsx";
import { Content, Modal, Button, Section } from "react-bulma-components";

interface ITimelineProps extends React.HTMLProps<HTMLDivElement> {}
const Timeline = ({ children, className, ...props }: ITimelineProps) => (
  <div className={`timeline ${className}`.trim()}>{children}</div>
)

interface ITimelineItemProps extends React.HTMLProps<HTMLDivElement> {
  color: "primary" | "danger" | "warning"
  marker?: React.ReactNode;
}
const TimelineItem = ({ children, color, marker, ...props }: ITimelineItemProps) => {
  return (
    <div className={clsx("timeline-item", `is-${color}`)}>
      {marker}
      <div className="timeline-content">
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}

const TimelineItemDetails = ({children}) => {
  const media = window.matchMedia("(max-width: 768px)");
  
  const [isMobile, setIsMobile] = React.useState(media.matches);
  const [isOpen, setIsOpen] = React.useState(false);
  
  media.addListener(() => {
    setIsMobile(media.matches);
    setIsOpen(false);
  });
  
  if (isMobile) {
    return (
      <>
        <Button paddingless size="small" text onClick={() => setIsOpen(true)}>
          See more
        </Button>
        <Modal 
          show={isOpen} 
          onClose={() => setIsOpen(false)}
          closeOnBlur={true}
        >
          <Modal.Content style={{background: "white"}}>
            <Section>
              <Content>
                {children}
              </Content>
            </Section>
          </Modal.Content>
        </Modal>
      </>
    )
  }

  return (
    <>
      <Button paddingless size="small " text onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "See less" : "See more"}
      </Button>
      {isOpen && <div style={{textAlign: "left"}} onClick={() => setIsOpen(false)}>
        <hr />
        {children}
      </div>}
    </>
  )
}

TimelineItem.Details = TimelineItemDetails;

interface ITimelineMarkerProps {
  color: "primary" | "danger" | "warning";
  className?: string;
  isImage?: boolean;
  children?: React.ReactNode;
}
const TimelineMarker = ({
  children,
  color,
  className = "",
  isImage = false
}: ITimelineMarkerProps) => {
  return (
    <div className={clsx("timeline-marker", `is-${color}`, isImage && "is-image", className)}>
      {children}
    </div>
  );
}

interface ITimelineHeaderProps {
  color: "danger" | "warning" | "primary";
  children: React.ReactNode;
}
const TimelineHeader = ({ children, color }: ITimelineHeaderProps) => {
  return (
    <header className="timeline-header">
      <span className={`tag is-medium is-${color}`}>{children}</span>
    </header>
  )
}

Timeline.Item = TimelineItem;
Timeline.Header = TimelineHeader;
Timeline.Marker = TimelineMarker;

export default Timeline;
